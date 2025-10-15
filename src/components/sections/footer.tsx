import { CheckCircle } from "lucide-react";

const postscripts = [
  "Lembre-se: esta oferta especial expira em 24 horas. Depois, o preço voltará ao normal.",
  "Seu risco é zero. Você tem 7 dias de garantia incondicional para testar e amar o planner.",
  "O Método 3D é o único que repete o ciclo natural de caça, garantindo um gato verdadeiramente satisfeito.",
  "Cada dia que você adia é um dia a menos de diversão e conexão que seu gato poderia ter.",
];

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="max-w-3xl mx-auto space-y-6">
          {postscripts.map((ps, index) => (
            <div key={index} className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 mt-1 text-secondary shrink-0" />
              <p className="text-base text-gray-300">
                <span className="font-bold text-gray-100">P.S. #{index + 1}</span> – {ps}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-gray-700 py-4">
          <p className="text-center text-sm text-gray-400">© {new Date().getFullYear()} Purrfect Play Planner. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
