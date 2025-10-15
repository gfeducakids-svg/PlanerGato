
import { Button } from '@/components/ui/button';
import { Download, Heart, Mail, ShieldCheck } from 'lucide-react';

const CatIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 5c.67 0 1.35.09 2 .26 1.78.47 3.34 1.45 4.54 2.84.99 1.14 1.46 2.54 1.46 3.9 0 3.31-2.69 6-6 6s-6-2.69-6-6c0-1.36.47-2.76 1.46-3.9 1.2-1.39 2.76-2.37 4.54-2.84A6.025 6.025 0 0 1 12 5Z" />
    <path d="M8 14v-2" />
    <path d="M16 14v-2" />
    <path d="M12 18c-1.66 0-3-1.34-3-3 0-1.05.54-2.02 1.5-2.5" />
    <path d="M13.5 12.5c.96.48 1.5 1.45 1.5 2.5 0 1.66-1.34 3-3 3" />
  </svg>
);

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white rounded-2xl border-4 border-primary shadow-2xl p-6 md:p-10 text-center">
        <div className="flex justify-center mb-4">
          <CatIcon className="h-20 w-20 text-primary animate-subtle-bounce" />
        </div>

        <h1 className="text-3xl md:text-4xl font-headline text-coral-dark mb-3 font-bold">
          Seu gato vai te agradecer!
        </h1>
        <p className="text-lg text-muted-foreground mb-6">
          Parabéns! Você acabou de dar o primeiro passo para uma vida mais divertida e equilibrada com seu gato.
        </p>

        <div className="bg-card p-6 rounded-lg my-8 text-base text-left">
          <p className="flex items-start">
            <Heart className="h-5 w-5 text-primary mr-3 mt-1 shrink-0" />
            <span>
              A partir de agora, vocês fazem parte do movimento{' '}
              <strong className="text-primary">Instinto Feliz</strong> — um grupo de tutoras que escolheram transformar 5 minutinhos por dia em momentos de pura conexão.
            </span>
          </p>
        </div>

        <p className="text-lg font-semibold text-gray-800">
          👉 Seu acesso já está liberado!
        </p>
        <p className="text-muted-foreground mt-2 mb-8">
          Clique no botão abaixo para baixar o Planner 30 Dias com o Método Instinto Feliz 3D e começar hoje mesmo:
        </p>

        <Button
          asChild
          size="lg"
          className="h-auto w-full max-w-md text-lg md:text-xl py-4 bg-mint hover:bg-mint-dark text-white font-bold animate-subtle-pulse shadow-lg"
        >
          {/* Substitua '#' pelo seu link do Google Drive ou área de membros */}
          <a href="#" target="_blank" rel="noopener noreferrer">
            <Download className="mr-2 h-5 w-5" />
            ACESSAR MEU PLANNER AGORA
          </a>
        </Button>

        <div className="bg-amber-50 border-t-2 border-b-2 border-secondary text-left p-6 rounded-lg my-10 italic">
          <p className="text-center text-yellow-800 font-highlight text-lg">
            🧡 E lembre-se:
          </p>
          <p className="text-center text-muted-foreground mt-2">
            A cada brincadeira, você não está apenas entretendo — está fortalecendo o vínculo com quem confia totalmente em você.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <ShieldCheck className="h-3 w-3 text-green-500" /> Garantia de 7 dias
          </span>
          <span className="flex items-center gap-1">
            <Mail className="h-3 w-3" /> Suporte por e-mail
          </span>
          <span className="flex items-center gap-1">
            <ShieldCheck className="h-3 w-3 text-green-500" /> 100% seguro
          </span>
        </div>
      </div>
    </div>
  );
}
