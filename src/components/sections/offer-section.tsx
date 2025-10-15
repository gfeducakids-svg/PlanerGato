import { Button } from "@/components/ui/button";
import { Check, Gift, Lock, CreditCard, Sparkles, Star } from "lucide-react";

export function OfferSection() {
  return (
    <section id="offer" className="py-8 md:py-12 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-headline text-secondary">
              Seu passaporte para um gato mais feliz.
            </h2>
          </div>

          <div className="bg-background rounded-2xl shadow-xl p-8">
            <div className="grid grid-cols-1 gap-y-8">
              {/* Conteúdo Principal - Pacote e Bônus */}
              <div className="space-y-4">
                <h3 className="font-headline text-xl text-primary">PACOTE COMPLETO</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex justify-between items-start gap-2">
                    <Check className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                    <span className="flex-grow">Planner 30 Dias com Método Instinto Feliz 3D</span>
                    <span className="text-xs">(R$ 49,00)</span>
                  </li>
                  <li className="flex justify-between items-start gap-2">
                    <Check className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                    <span className="flex-grow">Tabela de Progresso Semanal</span>
                    <span className="text-xs">(R$ 9,90)</span>
                  </li>
                  <li className="flex justify-between items-start gap-2">
                    <Check className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                    <span className="flex-grow">Guia de Enriquecimento Ambiental</span>
                    <span className="text-xs">(R$ 19,90)</span>
                  </li>
                   <li className="flex justify-between items-start gap-2">
                    <Check className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                    <span className="flex-grow">Guia de Correção Rápida de Comportamentos</span>
                    <span className="text-xs">(R$ 19,90)</span>
                  </li>
                </ul>
                <div className="space-y-4 pt-4">
                    <h3 className="font-headline text-xl text-primary flex items-center gap-2">
                        <Gift className="h-5 w-5" />
                        BÔNUS EXCLUSIVOS
                    </h3>
                    <div className="pl-4 space-y-3">
                        <div className="p-3 bg-card rounded-md">
                            <p className="font-bold flex items-center gap-1.5"><Star className="h-4 w-4 text-secondary fill-secondary" /> BÔNUS: Guia "Rituais Noturnos para Gatos Agitados"</p>
                            <p className="text-sm text-muted-foreground ml-5">Passo a passo para acalmar seu gato antes de dormir. <span className="font-bold">(Valor: R$ 19,00)</span></p>
                        </div>
                        <div className="p-3 bg-card rounded-md">
                            <p className="font-bold flex items-center gap-1.5"><Star className="h-4 w-4 text-secondary fill-secondary" /> BÔNUS: E-book "Decodificando seu Gato"</p>
                            <p className="text-sm text-muted-foreground ml-5">Aprenda a identificar os sinais de tédio, estresse e felicidade. <span className="font-bold">(Valor: R$ 19,90)</span></p>
                        </div>
                        <div className="p-3 bg-card rounded-md">
                            <p className="font-bold flex items-center gap-1.5"><Star className="h-4 w-4 text-secondary fill-secondary" /> BÔNUS: Receitas de Petiscos Caseiros Saudáveis</p>
                            <p className="text-sm text-muted-foreground ml-5">10 receitas aprovadas por veterinários para recompensar seu gato. <span className="font-bold">(Valor: R$ 17,90)</span></p>
                        </div>
                    </div>
                </div>
              </div>

              {/* Seção de Preço e CTA */}
              <div className="bg-card rounded-xl flex flex-col items-center justify-center p-8 text-center mt-8">
                  <div className="w-full space-y-2">
                    <h4 className="font-headline text-lg">Resumo do seu Investimento</h4>
                    <div className="flex justify-between items-center text-muted-foreground">
                        <span>Total dos itens</span>
                        <span className="line-through">R$ 155,50</span>
                    </div>
                    <div className="flex justify-between items-center font-bold text-primary text-lg">
                        <span>Você paga hoje:</span>
                        <span>R$ 27,90</span>
                    </div>
                  </div>
                <div className="bg-destructive text-destructive-foreground font-bold text-sm px-3 py-1 rounded-full my-4">
                    ECONOMIA DE 82%
                </div>
                <Button asChild size="lg" className="w-full h-auto py-4 text-lg bg-coral hover:bg-coral/90 text-white font-bold animate-subtle-pulse shadow-lg text-wrap">
                    <a href="#">Comprar agora</a>
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
      </div>
    </section>
  );
}
