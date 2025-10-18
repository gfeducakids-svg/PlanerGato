import { Button } from "@/components/ui/button";
import { BedDouble, AlertTriangle, Building2, Frown, ArrowRight } from "lucide-react";

const painPoints = [
    { icon: BedDouble, text: "Você volta do trabalho animada pra brincar, mas ele nem levanta da cama." },
    { icon: Frown, text: "Compra brinquedos novos e ele ignora em 2 dias." },
    { icon: AlertTriangle, text: "Quer dar atenção, mas não sabe como fazer ele se interessar." },
]

export function ProblemSection() {
  return (
    <section id="problem" className="py-8 md:py-12 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-headline">Você sabe que seu gato está entediado ele quer algo diferente.</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 text-left">
              {painPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-background rounded-lg shadow-sm">
                  <point.icon className="h-8 w-8 text-primary mt-1 shrink-0" />
                  <p className="font-highlight">{point.text}</p>
                </div>
              ))}
            </div>
             <div className="bg-background p-8 rounded-xl shadow-lg text-center space-y-4 !mt-10 max-w-3xl mx-auto">
                <p className="text-lg text-muted-foreground">
                    No fundo, você se pergunta: <span className="font-bold text-foreground">"Será que ele é infeliz comigo?"</span>
                </p>
                <p className="text-muted-foreground">
                    A verdade é que não é culpa sua. Gatos domésticos precisam de estímulos que reproduzam o instinto natural de caça — e 90% dos tutores não sabem como fazer isso.
                </p>
                 <p className="font-bold text-lg text-primary">
                    A boa notícia? Reverter esse ciclo leva menos de 5 minutos por dia.
                </p>
            </div>
        </div>
      </div>
    </section>
  );
}
