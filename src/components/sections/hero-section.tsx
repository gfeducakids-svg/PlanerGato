import { Button } from "@/components/ui/button";
import Image from "next/image";
import { PawPrint } from 'lucide-react';

export function HeroSection() {
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
                    <Image
                        src="https://i.imgur.com/W239yce.png"
                        alt="Tutora sorrindo com seu gato e o planner de brincadeiras"
                        width={500}
                        height={500}
                        className="rounded-lg shadow-2xl animate-subtle-bounce"
                        data-ai-hint="woman cat planner"
                        priority
                    />
                </div>
            </div>
        </div>
    </section>
  );
}
