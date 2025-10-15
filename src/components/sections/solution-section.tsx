import { Target, Puzzle, Moon } from "lucide-react";

const method3d = [
    {
        icon: Target,
        title: "Descoberta",
        description: "Ativa a curiosidade com novidades e exploração, despertando o interesse natural do seu gato.",
        color: "text-primary",
        bgColor: "bg-primary/10",
    },
    {
        icon: Puzzle,
        title: "Desafio",
        description: "Estimula o instinto de caça com brincadeiras que envolvem movimento, estratégia e captura.",
        color: "text-secondary",
        bgColor: "bg-secondary/10",
    },
    {
        icon: Moon,
        title: "Descanso",
        description: "Reforça a calma e a satisfação com rituais pós-brincadeira, fechando o ciclo da caça.",
        color: "text-coral",
        bgColor: "bg-coral/10",
    }
]

export function SolutionSection() {
  return (
    <section id="solution" className="py-12 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="font-highlight text-primary">A SOLUÇÃO DEFINITIVA</span>
          <h2 className="text-3xl md:text-4xl font-headline">O Planner 30 Dias com o Método Instinto Feliz 3D</h2>
          <p className="text-lg text-muted-foreground">
            Uma rotina de 5 minutos diários que reproduz o ciclo natural de caça (Descoberta, Desafio e Descanso), garantindo um gato mais ativo, saudável e feliz em até 7 dias.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {method3d.map((step) => (
                <div key={step.title} className="text-center p-6 bg-card rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-transform duration-300">
                    <div className={`mx-auto w-16 h-16 rounded-full flex items-center justify-center ${step.bgColor}`}>
                        <step.icon className={`w-8 h-8 ${step.color}`} />
                    </div>
                    <h3 className="mt-4 text-2xl font-headline">{step.title}</h3>
                    <p className="mt-2 text-muted-foreground">{step.description}</p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
