import { CountdownTimer } from "@/components/countdown-timer";
import { AlertCircle } from "lucide-react";

export function UrgencySection() {
  return (
    <section className="bg-gradient-to-br from-primary via-coral to-secondary py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6 text-center text-white">
        <h2 className="text-2xl md:text-4xl font-headline">
          Oferta disponível por tempo <span className="underline decoration-wavy">limitado</span>!
        </h2>
        <p className="mt-3 max-w-2xl mx-auto text-lg text-white/90">
          O preço promocional de R$ 27,90 volta para R$ 79,00 em:
        </p>
        <div className="my-8 flex justify-center">
            <CountdownTimer />
        </div>
        <div className="flex items-center justify-center gap-2 text-sm bg-black/20 max-w-md mx-auto p-2 rounded-lg">
            <AlertCircle className="h-4 w-4 shrink-0" />
            <p>Este é um contador real. Após o prazo, o desconto expira automaticamente.</p>
        </div>
      </div>
    </section>
  );
}
