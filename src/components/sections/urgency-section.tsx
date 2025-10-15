import { CountdownTimer } from "@/components/countdown-timer";
import { AlertCircle } from "lucide-react";

export function UrgencySection() {
  return (
    <section className="bg-gradient-to-br from-primary via-coral to-secondary py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6 text-center text-white">
        <h2 className="text-2xl md:text-4xl font-headline">
          Última chance de pegar por R$ 27,90
        </h2>
        <p className="mt-3 max-w-2xl mx-auto text-lg text-white/90">
          Cada dia que você adia é mais um dia de tédio para o seu gato (e mais culpa pra você carregar).
        </p>
        <p className="mt-4 text-lg text-white/90">O preço volta para R$ 79,00 em:</p>
        <div className="my-8 flex justify-center">
            <CountdownTimer />
        </div>
        <p className="font-highlight text-lg">Não deixe para depois. Ele merece. Você merece.</p>
      </div>
    </section>
  );
}
