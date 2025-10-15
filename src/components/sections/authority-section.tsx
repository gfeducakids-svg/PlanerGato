import { PawPrint } from 'lucide-react';
import Image from 'next/image';

export function AuthoritySection() {
  return (
    <section className="py-12 md:py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-headline text-primary">
              Criado por especialistas, inspirado em gatos.
            </h2>
            <p className="text-lg text-muted-foreground font-highlight">
              “Depois de observar dezenas de tutoras frustradas, criamos o Método Instinto Feliz 3D — inspirado no comportamento natural dos felinos. Cada brincadeira segue o ritmo biológico da caça, garantindo equilíbrio físico e emocional.”
            </p>
            <div className="bg-background rounded-xl p-8 shadow-lg space-y-6">
                <h3 className="font-headline text-xl text-center">Nossas Credenciais</h3>
                <div className="flex flex-col sm:flex-row gap-6 justify-around">
                    <div className="text-center">
                        <PawPrint className="mx-auto h-10 w-10 text-secondary mb-2"/>
                        <p className="font-bold text-lg">Comportamentalistas Felinos</p>
                        <p className="text-sm text-muted-foreground">Equipe dedicada ao bem-estar dos gatos.</p>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-headline text-secondary mb-1">300+</div>
                        <p className="font-bold text-lg">Gatos Domésticos</p>
                        <p className="text-sm text-muted-foreground">Método testado e aprovado.</p>
                    </div>
                </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Image 
                src="https://i.imgur.com/Wx2sPfW.png"
                alt="Especialista em comportamento felino analisando um gato"
                width={500}
                height={600}
                className="rounded-xl shadow-2xl"
                data-ai-hint="cat expert"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
