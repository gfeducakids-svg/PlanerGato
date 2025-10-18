import { PawPrint } from 'lucide-react';

export function AuthoritySection() {
  return (
    <section className="py-8 md:py-12 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6 text-center">
            <p className="text-lg text-muted-foreground font-highlight max-w-3xl mx-auto">
              Depois de observar dezenas de tutoras frustradas, criamos o Método Instinto Feliz 3D — inspirado no comportamento natural dos felinos. Cada brincadeira segue o ritmo biológico da caça, garantindo equilíbrio físico e emocional.
            </p>
            <div className="bg-background rounded-xl p-8 shadow-lg space-y-6 !mt-10 inline-block">
                <h3 className="font-headline text-xl text-center">Nossas Credenciais</h3>
                <div className="flex flex-col sm:flex-row gap-8 justify-around items-center">
                    <div className="text-center">
                        <PawPrint className="mx-auto h-10 w-10 text-secondary mb-2"/>
                        <p className="font-bold text-lg">Comportamentalistas Felinos</p>
                        <p className="text-sm text-muted-foreground">Equipe dedicada ao bem-estar dos gatos.</p>
                    </div>
                    <div className="text-center max-w-xs">
                        <div className="text-4xl font-headline text-secondary mb-1">300+</div>
                        <p className="font-bold text-lg">Gatos Testados</p>
                        <p className="text-sm text-muted-foreground">Testado com 300+ gatos em 6 meses de estudos de comportamento.</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
