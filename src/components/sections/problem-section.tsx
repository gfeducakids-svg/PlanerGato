import { Button } from "@/components/ui/button";
import { BedDouble, AlertTriangle, Building2, Frown, ArrowRight } from "lucide-react";

const painPoints = [
    { icon: BedDouble, text: "Seu gato dorme o dia inteiro e parece entediado." },
    { icon: AlertTriangle, text: "Você sente culpa por não brincar o bastante com ele." },
    { icon: Frown, text: "Ele ignora brinquedos novos em poucos dias." },
    { icon: Building2, text: "Mora em apartamento e acha que não há espaço para estímulo." },
]

export function ProblemSection() {
  return (
    <section id="problem" className="py-12 md:py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-headline">Seu gato parece desmotivado, apático e distante?</h2>
            <p className="text-lg text-muted-foreground">Se você se identifica com algum destes pontos, você não está sozinho. A falta de estímulo correto é a principal causa da apatia felina.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {painPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-background rounded-lg shadow-sm">
                  <point.icon className="h-8 w-8 text-primary mt-1 shrink-0" />
                  <p className="font-highlight">{point.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-background p-8 rounded-xl shadow-lg text-center space-y-6">
            <Frown className="h-16 w-16 mx-auto text-coral"/>
            <h3 className="text-2xl font-headline">A Consequência Silenciosa</h3>
            <p className="text-lg text-muted-foreground">
                Um gato entediado não é só um gato triste. É um animal que pode desenvolver estresse, ansiedade e até problemas de saúde. A boa notícia é que reverter isso é mais simples do que parece.
            </p>
            <Button asChild size="lg" className="bg-coral hover:bg-coral/90 text-white font-bold">
              <a href="#solution">
                Quero acabar com o tédio do meu gato
                <ArrowRight className="ml-2 h-5 w-5"/>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
