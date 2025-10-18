
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
import { PlayCircle, Volume2, VolumeX } from 'lucide-react';
import Autoplay from 'embla-carousel-autoplay';

const videoTestimonials = [
  {
    id: 'video-1',
    src: 'https://i.imgur.com/4d1OaKx.mp4',
    poster: 'https://i.imgur.com/f78eA9h.png',
  },
  {
    id: 'video-2',
    src: 'https://i.imgur.com/iixMVKv.mp4',
    poster: 'https://i.imgur.com/j4YyF6A.png',
  },
  {
    id: 'video-3',
    src: 'https://i.imgur.com/z9LJNfz.mp4',
    poster: 'https://i.imgur.com/OExi7O2.png',
  },
  {
    id: 'video-4',
    src: 'https://i.imgur.com/FEEoaKu.mp4',
    poster: 'https://i.imgur.com/iBwZzP0.png',
  },
];

export function SocialProofSection() {
  const [api, setApi] = useState<CarouselApi>();
  const [isPlaying, setIsPlaying] = useState<boolean[]>(
    Array(videoTestimonials.length).fill(false)
  );
  const [isMuted, setIsMuted] = useState<boolean[]>(
    Array(videoTestimonials.length).fill(true)
  );

  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const autoplayPlugin = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true, stopOnMouseEnter: true })
  );

  const handleVideoEnded = useCallback(() => {
    if (api) {
        api.scrollNext();
        // Reset autoplay when a video finishes and we manually go to the next slide
        autoplayPlugin.current.reset();
    }
  }, [api]);

  const togglePlay = (index: number) => {
    const video = videoRefs.current[index];
    if (video) {
        if (video.paused) {
            // Pause all other videos before playing the new one
            videoRefs.current.forEach((v, i) => {
                if (v && i !== index) {
                    v.pause();
                }
            });
            
            // Set playing state
            const newIsPlaying = Array(videoTestimonials.length).fill(false);
            newIsPlaying[index] = true;
            setIsPlaying(newIsPlaying);
            
            // Unmute and play
            const newIsMuted = [...isMuted];
            newIsMuted[index] = false;
            setIsMuted(newIsMuted);
            video.play();
            
            // Stop carousel autoplay when a video is manually played
            autoplayPlugin.current.stop();

        } else {
            video.pause();
        }
    }
  };

  const toggleMute = (index: number) => {
      const newIsMuted = [...isMuted];
      newIsMuted[index] = !newIsMuted[index];
      setIsMuted(newIsMuted);
  }

  useEffect(() => {
    if (!api) {
      return;
    }

    const onSelect = () => {
      // Pause all videos when carousel navigates
      videoRefs.current.forEach((video) => {
        if (video && !video.paused) {
          video.pause();
        }
      });
      // Reset play and mute states
      setIsPlaying(Array(videoTestimonials.length).fill(false));
      // Keep mute state as is, don't reset it
      // setIsMuted(Array(videoTestimonials.length).fill(true));
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
                        muted={isMuted[index]}
                        playsInline
                        loop={false}
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
                       {isPlaying[index] && (
                        <button 
                            onClick={() => toggleMute(index)} 
                            className="absolute bottom-2 right-2 bg-black/50 p-2 rounded-full text-white hover:bg-black/75 transition-colors z-10"
                        >
                            {isMuted[index] ? <VolumeX className="h-5 w-5"/> : <Volume2 className="h-5 w-5"/>}
                        </button>
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
