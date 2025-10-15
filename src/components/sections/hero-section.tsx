import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import { PawPrint } from 'lucide-react';

export function HeroSection() {
  const plannerImage = PlaceHolderImages.find((img) => img.id === 'planner-image');
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-image');

  return (
    <section className="relative bg-background overflow-hidden">
        <div className="absolute -bottom-1/3 -right-1/4 w-1/2 h-1/2 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-primary/10 rounded-full blur-3xl" />

        <div className="container relative mx-auto px-4 md:px-6 py-16 md:py-24">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="text-center lg:text-left space-y-6">
                    <h1 className="text-4xl md:text-6xl font-headline leading-tight">
                        Transforme <span className="text-primary">5 min por dia</span> no momento favorito do seu gato.
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0">
                        Com o Planner 30 Dias de Brincadeiras e o Método Instinto Feliz 3D, seu gato desperta o instinto de caça, gasta energia e fica mais feliz — tudo dentro da sua rotina.
                    </p>
                    <div className="pt-4">
                        <Button asChild size="lg" className="h-14 text-lg bg-coral hover:bg-coral/90 text-white font-bold animate-subtle-pulse shadow-lg">
                            <a href="#offer">
                                Quero deixar meu gato mais feliz agora
                                <PawPrint className="ml-2 h-5 w-5" />
                            </a>
                        </Button>
                    </div>
                </div>

                <div className="relative h-[400px] lg:h-[500px] flex items-center justify-center">
                    {heroImage && (
                        <Image
                            src={heroImage.imageUrl}
                            alt="Tutora sorrindo com seu gato"
                            fill
                            className="object-cover rounded-full aspect-square shadow-2xl"
                            data-ai-hint={heroImage.imageHint}
                            priority
                        />
                    )}
                    {plannerImage && (
                        <div className="absolute -bottom-8 -right-8 md:bottom-0 md:-right-10 w-[180px] h-[240px] lg:w-[220px] lg:h-[293px] animate-subtle-bounce">
                        <Image
                            src={plannerImage.imageUrl}
                            alt="Planner 30 Dias de Brincadeiras"
                            width={220}
                            height={293}
                            className="rounded-lg shadow-2xl transform rotate-12 border-4 border-white"
                            data-ai-hint={plannerImage.imageHint}
                        />
                        </div>
                    )}
                </div>
            </div>
        </div>
    </section>
  );
}
