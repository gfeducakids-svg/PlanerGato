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
    text: "Gnt meu gato n parava de dormir kkk agora corre q nem doido pela casa 😍 melhor 27,90 q gastei 🔥🔥",
  },
  {
    id: "testimonial-2",
    name: "Marcos V.",
    text: "Sério mano em 1 semana meu gato ta outro bixo 😂 nunca vi ele brincar tanto ❤️❤️",
  },
  {
    id: "testimonial-3",
    name: "Beatriz L.",
    text: "Antes ele so dormia, agora me espera na porta pra brincar ❤️ coisa mais linda 😭😭",
  },
  {
    id: "testimonial-4",
    name: "Fernanda C.",
    text: "To passadaaa em 10 dias ja vi diferença 😍 nem precisa brinquedo caro véi 👏👏",
  },
  {
    id: "testimonial-5",
    name: "Clara M.",
    text: "Me senti a melhor dona do mundo 😍 todo dia a gnt tem nosso momentinho",
  },
  {
    id: "testimonial-6",
    name: "Rodrigo A.",
    text: "Achei incrível como pequenas brincadeiras diárias fizeram tanta diferença. Ele até me espera pra brincar agora ❤️",
  },
  {
    id: "testimonial-7",
    name: "Sonia R.",
    text: "Meu gato é idosinho e mesmo assim ficou animado de novo. Fiquei emocionada 😭",
  },
  {
    id: "testimonial-8",
    name: "Lucas G.",
    text: "Comprem sem pensar! Sério, 27 reais que mudam o humor do seu gato pra sempre 🐾🔥",
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
        <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-coral hover:bg-coral/90 text-white font-bold">
              <a href="#offer">
                Quero fazer parte do #DesafioInstintoFeliz30Dias
                <ArrowRight className="ml-2 h-5 w-5"/>
              </a>
            </Button>
        </div>
      </div>
    </section>
  );
}
