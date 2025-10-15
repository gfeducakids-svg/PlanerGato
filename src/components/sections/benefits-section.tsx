import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, PawPrint, Lightbulb, Clock, Heart, Home, Sparkles } from "lucide-react";

const benefits = [
  { icon: PawPrint, text: "Gato mais ativo e curioso" },
  { icon: Lightbulb, text: "Redução do tédio e comportamentos destrutivos" },
  { icon: Clock, text: "Rotina divertida em 5 min por dia" },
  { icon: Heart, text: "Mais vínculo e carinho com o pet" },
  { icon: Home, text: "Ambiente enriquecido sem brinquedos caros" },
  { icon: Sparkles, text: "Tutora confiante и sem culpa" },
];

export function BenefitsSection() {
  const catBoredImg = PlaceHolderImages.find(img => img.id === "cat-bored");
  const catPlayingImg = PlaceHolderImages.find(img => img.id === "cat-playing");

  return (
    <section id="benefits" className="py-12 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="text-center lg:text-left">
                <span className="text-sm font-highlight text-primary">Resultados Visíveis</span>
                <h2 className="text-3xl md:text-4xl font-headline">Uma transformação que você vê e sente.</h2>
                <p className="mt-4 max-w-2xl mx-auto lg:mx-0 text-lg text-muted-foreground">Veja a diferença que 5 minutos de brincadeira intencional podem fazer.</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
                    <div className="bg-secondary/20 text-secondary p-2 rounded-full">
                        <benefit.icon className="w-6 h-6" />
                    </div>
                    <p className="font-highlight text-base">{benefit.text}</p>
                </div>
                ))}
            </div>
             <div className="text-center lg:text-left pt-4">
                <Button asChild size="lg" className="bg-coral hover:bg-coral/90 text-white font-bold animate-subtle-pulse shadow-lg">
                    <a href="#offer">
                        Quero ver meu gato feliz!
                        <ArrowRight className="ml-2 h-5 w-5"/>
                    </a>
                </Button>
            </div>
          </div>

          <div className="flex justify-center items-center gap-4">
            <div className="flex flex-col items-center space-y-2 transform -rotate-3">
              <span className="font-headline text-2xl text-muted-foreground">Antes</span>
              {catBoredImg && (
                <Image
                  src={catBoredImg.imageUrl}
                  alt="Gato entediado"
                  width={250}
                  height={167}
                  data-ai-hint={catBoredImg.imageHint}
                  className="rounded-xl shadow-lg border-4 border-white"
                />
              )}
            </div>
            <ArrowRight className="h-12 w-12 text-primary shrink-0"/>
            <div className="flex flex-col items-center space-y-2 transform rotate-3">
              <span className="font-headline text-2xl text-primary">Depois</span>
              {catPlayingImg && (
                <Image
                  src={catPlayingImg.imageUrl}
                  alt="Gato brincando feliz"
                  width={250}
                  height={167}
                  data-ai-hint={catPlayingImg.imageHint}
                  className="rounded-xl shadow-lg border-4 border-white"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
