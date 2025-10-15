import { Button } from "@/components/ui/button";

export function FinalCtaSection() {
  return (
    <section className="py-8 md:py-12 bg-background">
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
            className="h-auto py-4 text-xl bg-coral hover:bg-coral/90 text-white font-bold animate-subtle-pulse shadow-lg text-wrap"
          >
            <a href="https://pay.kiwify.com.br/iFQO80k">Quero parar de me sentir culpada e ver meu gato feliz em 7 dias</a>
          </Button>
          <p className="mt-4 text-sm text-muted-foreground flex flex-wrap justify-center items-center gap-x-4 gap-y-1">
            <span>✓ Acesso imediato</span>
            <span>✓ Sem brinquedos caros</span>
          </p>
        </div>
      </div>
    </section>
  );
}
