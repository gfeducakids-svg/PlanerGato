import { Button } from "@/components/ui/button";
import { BedDouble, AlertTriangle, Building2, Frown, ArrowRight } from "lucide-react";

const painPoints = [
    { icon: BedDouble, text: "Você tenta anima-lo mas ele nem levanta da cama." },
    { icon: Frown, text: "Compra brinquedos novos e ele ignora em 2 dias." },
    { icon: AlertTriangle, text: "Quer dar atenção, mas não sabe como fazer ele se interessar." },
]

export function ProblemSection() {
  return (
    <section id="problem" className="pt-12 md:pt-16 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-headline">Você sabe que seu gato está entediado e que ele precisa de algo diferente.</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 text-left">
              {painPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-background rounded-lg shadow-sm">
                  <point.icon className="h-8 w-8 text-primary mt-1 shrink-0" />
                  <p className="font-highlight text-base md:text-lg">{point.text}</p>
                </div>
              ))}
            </div>
             <div className="bg-background p-6 md:p-8 rounded-xl shadow-lg text-center space-y-4 !mt-10 max-w-3xl mx-auto">
                <p className="text-muted-foreground text-base md:text-lg">
                    Não é falta de amor — só faltava o estímulo certo. Com pequenas brincadeiras que imitam o instinto natural, seu gato volta a explorar, caçar e se divertir.
                </p>
                 <p className="font-bold text-lg md:text-xl text-primary">
                    Em apenas 5 minutinhos por dia, você transforma culpa em conexão — e vê seu gato feliz de novo. 🐾
                </p>
            </div>
        </div>
      </div>
    </section>
  );
}
