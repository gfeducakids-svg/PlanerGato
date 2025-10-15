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
  { icon: Sparkles, text: "Tutora confiante e sem culpa" },
];

export function BenefitsSection() {
  return (
    <section id="benefits" className="py-12 md:py-16 bg-background">
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
          </div>

          <div className="flex justify-center items-center">
            <Image
              src="https://i.imgur.com/xhCuIcr.png"
              alt="Comparação antes e depois do planner"
              width={500}
              height={333}
              data-ai-hint="cat comparison"
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
