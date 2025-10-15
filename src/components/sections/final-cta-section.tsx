import { Button } from "@/components/ui/button";
import { Lock, CreditCard, Sparkles } from "lucide-react";

export function FinalCtaSection() {
  return (
    <section className="py-16 md:py-28 bg-background">
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
        <div className="mt-10 flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-muted-foreground">
            <div className="flex items-center gap-2 text-sm">
                <Lock className="h-4 w-4 text-green-500" />
                <span>Compra Segura SSL</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
                <CreditCard className="h-4 w-4" />
                <span>Pix e Cartão</span>
            </div>
             <div className="flex items-center gap-2 text-sm">
                <Sparkles className="h-4 w-4 text-yellow-500" />
                <span>Acesso Imediato</span>
            </div>
        </div>
      </div>
    </section>
  );
}
