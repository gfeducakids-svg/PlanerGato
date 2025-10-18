
'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { PlayCircle } from 'lucide-react';
import Autoplay from 'embla-carousel-autoplay';

const videoTestimonials = [
  {
    id: 'video-1',
    src: 'https://i.imgur.com/4d1OaKx.mp4',
    poster: 'https://i.imgur.com/zB6nu2h.png',
  },
  {
    id: 'video-2',
    src: 'https://i.imgur.com/iixMVKv.mp4',
    poster: 'https://i.imgur.com/D6QBwR8.png',
  },
  {
    id: 'video-3',
    src: 'https://i.imgur.com/z9LJNfz.mp4',
    poster: 'https://i.imgur.com/wEMRe1d.png',
  },
  {
    id: 'video-4',
    src: 'https://i.imgur.com/FEEoaKu.mp4',
    poster: 'https://i.imgur.com/iysGgAt.png',
  },
  {
    id: 'video-5',
    src: 'https://i.imgur.com/FEEoaKu.mp4', // Placeholder, assuming it's the same video for the 5th thumbnail
    poster: 'https://i.imgur.com/D6UwpFg.png',
  },
];

export function SocialProofSection() {
  const [api, setApi] = useState<CarouselApi>();
  const [isPlaying, setIsPlaying] = useState<boolean[]>(
    Array(videoTestimonials.length).fill(false)
  );

  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const autoplayPlugin = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true, stopOnMouseEnter: true })
  );

  const handleVideoEnded = useCallback(() => {
    if (api) {
        api.scrollNext();
        autoplayPlugin.current.reset();
    }
  }, [api]);

  const togglePlay = (index: number) => {
    const video = videoRefs.current[index];
    if (video) {
      if (video.paused) {
        videoRefs.current.forEach((v, i) => {
          if (v && i !== index) {
            v.pause();
            v.controls = false; 
            const newIsPlayingState = Array(videoTestimonials.length).fill(false);
            newIsPlayingState[i] = false;
            setIsPlaying(newIsPlayingState);
          }
        });

        const newIsPlaying = Array(videoTestimonials.length).fill(false);
        newIsPlaying[index] = true;
        setIsPlaying(newIsPlaying);

        video.muted = false;
        video.play();
        video.controls = true;
        autoplayPlugin.current.stop();
      } else {
        video.pause();
        video.controls = false;
      }
    }
  };

  useEffect(() => {
    if (!api) {
      return;
    }

    const onSelect = () => {
      videoRefs.current.forEach((video, index) => {
        if (video && !video.paused) {
          video.pause();
          video.controls = false;
        }
      });
      setIsPlaying(Array(videoTestimonials.length).fill(false));
      autoplayPlugin.current.reset();
    };

    api.on('select', onSelect);

    return () => {
      api.off('select', onSelect);
    };
  }, [api]);

  return (
    <section className="py-8 md:py-12 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-headline text-primary">
            A transformação na prática: Gatos reais, resultados reais.
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            Veja como o dia a dia de outros gatos mudou completamente.
          </p>
        </div>
        <Carousel
          setApi={setApi}
          plugins={[autoplayPlugin.current]}
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {videoTestimonials.map((testimonial, index) => (
              <CarouselItem
                key={testimonial.id}
                className="md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1 h-full">
                  <Card className="h-full flex flex-col overflow-hidden">
                    <CardContent className="p-0 relative aspect-[9/16] flex items-center justify-center bg-black">
                      <video
                        ref={(el) => (videoRefs.current[index] = el)}
                        src={testimonial.src}
                        poster={testimonial.poster}
                        playsInline
                        loop={false}
                        muted
                        onPlay={() => {
                          const newIsPlaying = Array(videoTestimonials.length).fill(false);
                          newIsPlaying[index] = true;
                          setIsPlaying(newIsPlaying);
                          autoplayPlugin.current.stop();
                        }}
                        onPause={() => {
                          const newIsPlaying = [...isPlaying];
                          newIsPlaying[index] = false;
                          setIsPlaying(newIsPlaying);
                          if(videoRefs.current[index]) {
                            videoRefs.current[index]!.controls = false;
                          }
                          autoplayPlugin.current.play();
                        }}
                        onEnded={handleVideoEnded}
                        className="w-full h-full object-cover"
                      />
                      {!isPlaying[index] && (
                        <div
                          className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 cursor-pointer group"
                          onClick={() => togglePlay(index)}
                        >
                          <PlayCircle className="h-16 w-16 text-white/80 group-hover:text-white transition-colors" />
                          <p className="text-white font-bold mt-2">Clique para assistir</p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}
