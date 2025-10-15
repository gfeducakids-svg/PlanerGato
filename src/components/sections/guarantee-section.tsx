import { ShieldCheck } from 'lucide-react';

export function GuaranteeSection() {
  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-secondary/10 border border-secondary/20 rounded-2xl p-8 md:p-12 grid md:grid-cols-3 items-center gap-8">
          <div className="md:col-span-1 flex justify-center">
            <div className="relative text-center">
                <ShieldCheck className="h-32 w-32 text-secondary opacity-20" />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <ShieldCheck className="h-20 w-20 text-secondary" />
                    <p className="mt-2 text-sm font-bold text-yellow-700">7 Dias</p>
                </div>
            </div>
          </div>
          <div className="md:col-span-2 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-headline text-yellow-800">
              Sua Satisfação ou seu Dinheiro de Volta!
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Temos tanta confiança no poder do Planner que oferecemos uma garantia de risco zero. Se em até 7 dias você não sentir uma diferença real no comportamento e na felicidade do seu gato, basta nos enviar um e-mail e devolveremos 100% do seu investimento. Sem perguntas, sem burocracia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
