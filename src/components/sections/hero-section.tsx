import { Button } from "@/components/ui/button";
import Image from "next/image";
import { PawPrint, CheckCircle } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative bg-background overflow-hidden py-8 md:py-10">
        <div className="absolute -bottom-1/3 -right-1/4 w-1/2 h-1/2 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute -top-1/f-1/4 w-1/2 h-1/2 bg-primary/10 rounded-full blur-3xl" />

        <div className="container relative mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="text-center lg:text-left space-y-4">
                    <h1 className="text-4xl md:text-5xl font-headline leading-tight">
                        De gato que só dorme o dia todo para gato que te espera animado na porta todo dia
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0">
                        O Planner 30 Dias com Método Instinto Feliz 3D que transforma 5 minutos em pura conexão.
                    </p>
                    <div className="pt-4">
                        <Button asChild size="lg" className="h-auto py-4 text-lg bg-coral hover:bg-coral/90 text-white font-bold animate-subtle-pulse shadow-lg text-wrap">
                            <a href="#offer">
                                Quero experimentar
                            </a>
                        </Button>
                         <p className="mt-4 text-sm text-muted-foreground flex flex-wrap justify-center lg:justify-start gap-x-4 gap-y-1">
                            <span>✓ Acesso imediato</span>
                             <span className="hidden sm:inline">|</span>
                            <span>✓ Sem brinquedos caros</span>
                        </p>
                    </div>
                </div>

                <div className="relative h-[400px] lg:h-[500px] flex items-center justify-center">
                    <div className="absolute bottom-0 -right-8">
                        <Image
                            src="https://i.imgur.com/Wx2sPfW.png"
                            alt="Especialista em comportamento felino"
                            width={450}
                            height={450}
                            className="rounded-full shadow-2xl z-0"
                            data-ai-hint="cat expert"
                        />
                    </div>
                    <div className="absolute bottom-10 -left-8">
                         <Image
                            src="https://i.imgur.com/W239yce.png"
                            alt="Tutora sorrindo com seu gato e o planner de brincadeiras"
                            width={180}
                            height={180}
                            className="rounded-full shadow-2xl z-10 animate-subtle-bounce"
                            data-ai-hint="woman cat planner"
                            priority
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}
