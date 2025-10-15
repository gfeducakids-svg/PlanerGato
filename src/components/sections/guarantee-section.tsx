import { ShieldCheck } from 'lucide-react';

export function GuaranteeSection() {
  return (
    <section className="py-8 md:py-12 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-8 md:p-12 grid md:grid-cols-3 items-center gap-8">
          <div className="md:col-span-1 flex justify-center">
            <div className="relative text-center">
                <ShieldCheck className="h-32 w-32 text-secondary/20" />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <ShieldCheck className="h-20 w-20 text-secondary" />
                    <p className="mt-2 text-sm font-bold text-yellow-700">7 Dias</p>
                </div>
            </div>
          </div>
          <div className="md:col-span-2 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-headline text-yellow-800">
              Risco zero, só alegria — para você e seu gato.
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Acreditamos tanto no poder do Planner 30 Dias de Brincadeiras que oferecemos uma garantia total de satisfação. Se em até 7 dias você não perceber seu gato mais ativo, curioso ou feliz, basta solicitar seu reembolso que devolvemos 100% do seu investimento — sem perguntas, sem formulários, sem estresse.
            </p>
            <p className="mt-4 font-highlight text-muted-foreground">
              Seu único risco é… ver seu gato te esperando com o rabo em pé todos os dias.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
