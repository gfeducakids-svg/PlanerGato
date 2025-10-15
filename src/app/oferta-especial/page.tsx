
import { Button } from '@/components/ui/button';
import { Check, Gift, Lock, ShieldCheck, Heart, Sparkles } from 'lucide-react';
import { CountdownTimerOffer } from '@/components/countdown-timer-offer';

export default function BackRedirectPage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white rounded-2xl border-4 border-primary shadow-2xl p-6 md:p-10">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-headline font-bold text-coral mb-3">
            🐾 Espera... você vai mesmo deixar seu gato sem isso?
          </h1>
          <h2 className="text-2xl md:text-3xl font-headline text-gray-800 font-semibold mb-6">
            Sua última chance de garantir essa SUPER OFERTA!
          </h2>

          <div className="text-left text-muted-foreground space-y-4 my-8 text-base md:text-lg">
            <p>
              Ele te olha todo dia com aquele olhar curioso, esperando um
              empurrãozinho para voltar a brincar, explorar e{' '}
              <span className="font-semibold text-primary">
                ronronar de alegria.
              </span>
            </p>
            <p>
              E agora você tem a chance de transformar isso por apenas{' '}
              <strong className="text-gray-800">R$ 19,90</strong>.
            </p>
            <p>
              <span className="font-semibold text-primary">
                Menos do que um sachê premium.
              </span>{' '}
              É o seu passaporte para um gato mais feliz.
            </p>
          </div>

          <div className="bg-amber-50 border-l-4 border-secondary text-left p-6 rounded-lg my-8">
            <h3 className="font-headline text-xl md:text-2xl font-bold text-gray-800 mb-4">
              🎁 PACOTE COMPLETO — SÓ HOJE POR R$ 19,90
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 mt-1 shrink-0" />
                <span>
                  Planner 30 Dias com Método Instinto Feliz 3D{' '}
                  <span className="text-xs line-through">(R$ 49,00)</span>
                </span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 mt-1 shrink-0" />
                <span>
                  Tabela de Progresso Semanal{' '}
                  <span className="text-xs line-through">(R$ 9,90)</span>
                </span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 mt-1 shrink-0" />
                <span>
                  Guia de Enriquecimento Ambiental{' '}
                  <span className="text-xs line-through">(R$ 19,90)</span>
                </span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 mt-1 shrink-0" />
                <span>
                  Guia de Correção Rápida de Comportamentos{' '}
                  <span className="text-xs line-through">(R$ 19,90)</span>
                </span>
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="font-headline text-lg font-bold text-gray-800 mb-3 flex items-center">
                <Sparkles className="h-5 w-5 text-secondary mr-2" />
                BÔNUS EXCLUSIVOS
              </h4>
              <ul className="space-y-2 text-muted-foreground pl-2">
                 <li className="flex items-start">
                  <Gift className="h-5 w-5 text-coral mr-2 mt-1 shrink-0" />
                  <span>
                    Rituais Noturnos para Gatos Agitados{' '}
                    <span className="text-xs line-through">(R$ 19,00)</span>
                  </span>
                </li>
                <li className="flex items-start">
                  <Gift className="h-5 w-5 text-coral mr-2 mt-1 shrink-0" />
                  <span>
                    E-book “Decodificando seu Gato”{' '}
                    <span className="text-xs line-through">(R$ 19,90)</span>
                  </span>
                </li>
                <li className="flex items-start">
                  <Gift className="h-5 w-5 text-coral mr-2 mt-1 shrink-0" />
                  <span>
                    Receitas de Petiscos Caseiros Saudáveis{' '}
                    <span className="text-xs line-through">(R$ 17,90)</span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="text-center my-8">
            <p className="text-muted-foreground">
              <span className="line-through">Valor total: R$ 155,50</span>
            </p>
            <p className="text-2xl font-bold">
              👉 Hoje por apenas:{' '}
              <span className="text-5xl font-headline text-coral">
                R$ 19,90
              </span>
            </p>
          </div>

           <p className="text-center italic text-lg text-gray-700 font-semibold my-8 px-4">
             ❤️ Não deixe seu gato te esperar na porta e você dizer não.
           </p>
           
           <p className="text-center text-muted-foreground mb-6">
            Clique abaixo e garanta o pacote completo com todos os bônus, antes que o desconto desapareça.
           </p>

          <Button
            asChild
            size="lg"
            className="h-auto w-full max-w-md text-lg md:text-xl py-4 bg-mint hover:bg-mint-dark text-white font-bold animate-subtle-pulse shadow-lg"
          >
            <a href="https://pay.kiwify.com.br/vn3NlpN">
              Garantir agora
            </a>
          </Button>

          <div className="mt-4">
            <CountdownTimerOffer />
          </div>

          <div className="mt-6 flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Lock className="h-3 w-3" /> Compra 100% segura
            </span>
            <span className="flex items-center gap-1">
              <Sparkles className="h-3 w-3" /> Acesso imediato
            </span>
            <span className="flex items-center gap-1">
              <ShieldCheck className="h-3 w-3" /> Garantia total de 7 dias
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
