import { PawPrint, FlaskConical, BarChart } from 'lucide-react';
import Image from 'next/image';

export function AuthoritySection() {
  return (
    <section className="pb-12 md:pb-16 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-8 text-center">
            <div className="bg-background rounded-xl p-6 md:p-8 shadow-lg space-y-6 !mt-10 inline-block">
              <h3 className="font-headline text-2xl md:text-3xl text-center">Nossas Credenciais</h3>
              <p className="text-base md:text-lg text-muted-foreground font-highlight max-w-3xl mx-auto">
                Depois de observar dezenas de tutoras frustradas, criamos o Método Instinto Feliz 3D — inspirado no comportamento natural dos felinos. Cada brincadeira segue o ritmo biológico da caça, garantindo equilíbrio físico e emocional.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-8 justify-center items-start pt-4">
                <div className="text-center max-w-xs">
                  <PawPrint className="mx-auto h-10 w-10 text-secondary mb-2" />
                  <p className="font-bold text-lg">Especialistas em Comportamento Felino</p>
                  <p className="text-sm text-muted-foreground">Nossa equipe é formada por comportamentalistas certificados, apaixonados por transformar a vida de gatos e seus tutores.</p>
                </div>
                <div className="text-center max-w-xs">
                  <FlaskConical className="mx-auto h-10 w-10 text-secondary mb-2" />
                  <p className="font-bold text-lg">Validado Cientificamente</p>
                  <p className="text-sm text-muted-foreground">Mais de 600 gatos participaram dos nossos estudos durante 6 meses. Para te entregarmos o melhor e o que realmente funciona.</p>
                </div>
                <div className="text-center max-w-xs">
                  <BarChart className="mx-auto h-10 w-10 text-secondary mb-2" />
                  <p className="font-bold text-lg">Resultados Comprovados</p>
                  <p className="text-sm text-muted-foreground">96% dos gatos testados demonstraram redução no estresse e aumento no bem-estar emocional.</p>
                </div>
              </div>
            </div>
            <div className="pt-8 space-y-4">
              <Image
                src="https://i.imgur.com/JnYAzeu.png"
                alt="Advertorial image 1"
                width={700}
                height={150}
                className="mx-auto rounded-lg shadow-md"
                data-ai-hint="advertorial social proof"
              />
              <Image
                src="https://i.imgur.com/jeIcjcS.png"
                alt="Advertorial image 2"
                width={700}
                height={150}
                className="mx-auto rounded-lg shadow-md"
                data-ai-hint="advertorial social proof"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
