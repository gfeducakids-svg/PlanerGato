import { Button } from "@/components/ui/button";
import Image from "next/image";
import { PawPrint, CheckCircle } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative bg-background overflow-hidden py-8 md:py-12">
        <div className="absolute -bottom-1/3 -right-1/4 w-1/2 h-1/2 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-primary/10 rounded-full blur-3xl" />

        <div className="container relative mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="text-center lg:text-left space-y-6">
                    <h1 className="text-4xl md:text-5xl font-headline leading-tight animate-fade-in-up">
                        <span className="text-foreground">De gato que só dorme o dia todo para</span> <span className="text-primary">gato que te espera <span className="inline-block animate-subtle-bounce">animado</span> na porta todo dia</span>
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0">
                        O Planner 30 Dias com <span className="font-bold" style={{color: '#FACC15'}}>Método Instinto Feliz 3D</span> que transforma 5 minutos em pura conexão.
                    </p>
                     <div className="flex justify-center lg:justify-start">
                        <Button asChild size="lg" className="w-full max-w-xs h-auto py-4 text-lg bg-coral hover:bg-coral/90 text-white font-bold animate-subtle-pulse shadow-lg text-wrap">
                            <a href="#offer">Quero meu gato mais feliz</a>
                        </Button>
                    </div>
                </div>

                <div className="relative h-[350px] sm:h-[400px] lg:h-[450px] flex items-center justify-center">
                    
                </div>
            </div>
        </div>
    </section>
  );
}
