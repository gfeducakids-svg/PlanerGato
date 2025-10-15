import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import { Star, ArrowRight } from "lucide-react";

const testimonials = [
  {
    id: "testimonial-1",
    name: "Juliana P.",
    text: "Meu gato não parava de dormir, agora corre pela casa como um foguete! O melhor investimento que fiz.",
  },
  {
    id: "testimonial-2",
    name: "Marcos V.",
    text: "Sério, em uma semana meu gato virou outro bicho! Nunca vi ele brincar com tanta alegria. Recomendo demais!",
  },
  {
    id: "testimonial-3",
    name: "Beatriz L.",
    text: "Antes ele só dormia, agora me espera na porta pra gente brincar. É a coisa mais linda do mundo!",
  },
  {
    id: "testimonial-4",
    name: "Fernanda C.",
    text: "Estou impressionada! Em 10 dias já vi uma diferença enorme. E o melhor, sem precisar de brinquedos caros.",
  },
  {
    id: "testimonial-5",
    name: "Clara M.",
    text: "Me sinto a melhor dona do mundo! Todo dia a gente tem nosso momentinho especial de conexão. É incrível.",
  },
  {
    id: "testimonial-6",
    name: "Rodrigo A.",
    text: "Achei fantástico como pequenas brincadeiras diárias fizeram tanta diferença. Ele até me espera pra brincar agora!",
  },
  {
    id: "testimonial-7",
    name: "Sonia R.",
    text: "Meu gato já é idoso e mesmo assim ficou super animado de novo. Fiquei até emocionada.",
  },
  {
    id: "testimonial-8",
    name: "Lucas G.",
    text: "Comprem sem pensar! Sério, 27 reais que mudam o humor do seu gato para sempre. Vale cada centavo.",
  },
];

export function SocialProofSection() {
  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline text-primary">
            Amado por tutores (e seus gatos)
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-lg text-muted-foreground">
            Veja o que outros pais e mães de pet estão dizendo sobre o #DesafioInstintoFeliz30Dias.
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => {
              const avatar = PlaceHolderImages.find(img => img.id === testimonial.id);
              return (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="h-full">
                      <CardContent className="flex flex-col justify-between h-full p-6">
                        <div>
                          <div className="flex items-center mb-4">
                            {avatar && (
                              <Image
                                src={avatar.imageUrl}
                                alt={`Avatar de ${testimonial.name}`}
                                width={48}
                                height={48}
                                data-ai-hint={avatar.imageHint}
                                className="rounded-full"
                              />
                            )}
                            <div className="ml-4">
                              <p className="font-bold">{testimonial.name}</p>
                              <div className="flex text-secondary">
                                {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                              </div>
                            </div>
                          </div>
                          <p className="text-muted-foreground font-highlight italic">"{testimonial.text}"</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}
