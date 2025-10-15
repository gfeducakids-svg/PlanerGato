import { Button } from "@/components/ui/button";

export function FinalCtaSection() {
  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-headline text-primary">
          Pronta para a transformação?
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Em 3 cliques e menos de 2 minutos você ativa a felicidade do seu gato. A diversão começa agora.
        </p>
        <div className="mt-10">
          <Button
            asChild
            size="lg"
            className="h-14 text-xl bg-coral hover:bg-coral/90 text-white font-bold animate-subtle-pulse shadow-lg"
          >
            <a href="#">Garantir o Planner por R$ 27,90 agora</a>
          </Button>
          <p className="mt-3 text-sm text-muted-foreground">
            Garantia de 7 dias sem risco.
          </p>
        </div>
      </div>
    </section>
  );
}
