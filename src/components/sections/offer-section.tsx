import { Button } from "@/components/ui/button";
import { Check, Gift, Lock, CreditCard, Sparkles } from "lucide-react";

const offerComponents = [
  "30 ideias de brincadeiras estruturadas (Descoberta, Desafio e Descanso)",
  "Tabela de progresso semanal para acompanhar a evolução",
  "Guia de objetos caseiros seguros para transformar sua casa em um parque",
  "Acesso à comunidade exclusiva para tutores",
];

export function OfferSection() {
  return (
    <section id="offer" className="py-12 md:py-16 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline text-primary">
              Seu passaporte para um gato mais feliz.
            </h2>
            <p className="mt-3 text-lg text-muted-foreground">
              Receba acesso imediato a tudo que você precisa para começar.
            </p>
          </div>

          <div className="bg-background rounded-2xl shadow-xl p-8 grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="font-headline text-2xl">O que você vai receber:</h3>
              <ul className="space-y-3">
                {offerComponents.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-500 mt-1 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-primary/10 border-l-4 border-primary p-4 rounded-r-lg">
                <div className="flex items-start gap-3">
                    <Gift className="h-5 w-5 text-primary mt-1 shrink-0" />
                    <div>
                        <h4 className="font-bold text-primary">BÔNUS ESPECIAL</h4>
                        <p className="text-sm text-muted-foreground">Guia "Rituais Noturnos para Relaxar seu Gato".</p>
                    </div>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-xl flex flex-col items-center justify-center p-8 text-center">
                <p className="text-muted-foreground">De <span className="line-through">R$ 79,00</span> por apenas:</p>
                <p className="text-6xl font-headline text-primary my-2">R$ 27,90</p>
                <div className="bg-secondary text-secondary-foreground font-bold text-sm px-3 py-1 rounded-full">
                    ECONOMIA DE 65%
                </div>
                <Button asChild size="lg" className="w-full mt-8 h-12 text-lg bg-coral hover:bg-coral/90 text-white font-bold animate-subtle-pulse shadow-lg">
                    <a href="#">Garantir meu Planner por R$ 27,90</a>
                </Button>
                <div className="mt-6 flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-muted-foreground">
                    <div className="flex items-center gap-2 text-xs">
                        <Lock className="h-4 w-4 text-green-500" />
                        <span>Compra Segura SSL</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                        <CreditCard className="h-4 w-4" />
                        <span>Pix e Cartão</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                        <Sparkles className="h-4 w-4 text-yellow-500" />
                        <span>Acesso Imediato</span>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
