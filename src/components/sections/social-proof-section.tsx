
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
    poster: 'https://i.imgur.com/JnYAzeu.png', // Optional: Poster image
  },
  {
    id: 'video-2',
    src: 'https://i.imgur.com/iixMVKv.mp4',
    poster: 'https://i.imgur.com/jeIcjcS.png', // Optional: Poster image
  },
  {
    id: 'video-3',
    src: 'https://i.imgur.com/z9LJNfz.mp4',
    poster: 'https://i.imgur.com/JnYAzeu.png', // Optional: Poster image
  },
  {
    id: 'video-4',
    src: 'https://i.imgur.com/FEEoaKu.mp4',
    poster: 'https://i.imgur.com/jeIcjcS.png', // Optional: Poster image
  },
];

export function SocialProofSection() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState<boolean[]>(
    Array(videoTestimonials.length).fill(false)
  );
  const [isMuted, setIsMuted] = useState<boolean[]>(
    Array(videoTestimonials.length).fill(true)
  );

  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));

  const handleVideoEnded = useCallback(() => {
    api?.scrollNext();
  }, [api]);

  const togglePlay = (index: number) => {
    const video = videoRefs.current[index];
    if (video) {
        if (video.paused) {
            video.play();
            const newIsPlaying = [...isPlaying];
            newIsPlaying[index] = true;
            setIsPlaying(newIsPlaying);
            
            const newIsMuted = [...isMuted];
            newIsMuted[index] = false;
            setIsMuted(newIsMuted);

        } else {
            video.pause();
            const newIsPlaying = [...isPlaying];
            newIsPlaying[index] = false;
            setIsPlaying(newIsPlaying);
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
      setCurrent(api.selectedScrollSnap());
      // Pause all videos
      videoRefs.current.forEach((video) => video?.pause());
      // Reset play states
      setIsPlaying(Array(videoTestimonials.length).fill(false));
      setIsMuted(Array(videoTestimonials.length).fill(true));
      
      // Autoplay the current video
      const currentVideo = videoRefs.current[api.selectedScrollSnap()];
      currentVideo?.play();
    };

    api.on('select', onSelect);

    // Initial play
    const initialVideo = videoRefs.current[0];
    initialVideo?.play();

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
          plugins={[plugin.current]}
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {videoTestimonials.map((testimonial, index) => (
              <CarouselItem
                key={testimonial.id}
                className="md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1 h-full">
                  <Card className="h-full flex flex-col overflow-hidden">
                    <CardContent className="p-0 relative aspect-video flex items-center justify-center bg-black">
                      <video
                        ref={(el) => (videoRefs.current[index] = el)}
                        src={testimonial.src}
                        poster={testimonial.poster}
                        muted={isMuted[index]}
                        playsInline
                        loop={false}
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
