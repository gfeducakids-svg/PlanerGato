import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MessageSquare } from "lucide-react";

const faqs = [
  {
    question: "Não tenho tempo.",
    answer: "O método foi criado exatamente para quem tem rotina corrida. São apenas 5 minutos por dia — o suficiente para transformar tédio em alegria e criar um momento de conexão diária com seu gato.",
  },
  {
    question: "Meu gato é idoso. Ele vai gostar?",
    answer: "Sim! As brincadeiras são ajustáveis conforme o nível de energia. Muitos tutores relatam que gatos idosos voltaram a se mover, explorar e demonstrar curiosidade — tudo de forma leve e segura.",
  },
  {
    question: "E se meu gato não gostar das brincadeiras?",
    answer: "O Método Instinto Feliz 3D foi testado com mais de 300 gatos de diferentes idades, raças e personalidades. A sequência Descoberta → Desafio → Descanso respeita o instinto natural felino e desperta o interesse até dos mais preguiçosos.",
  },
  {
    question: "Preciso comprar brinquedos caros?",
    answer: "De forma alguma! O planner mostra como usar objetos que você já tem em casa — caixas, papéis, barbantes — de forma criativa e segura. O segredo não está no preço do brinquedo, mas no estímulo certo.",
  },
  {
    question: "O planner é digital ou físico?",
    answer: "É 100% digital. Assim que o pagamento é confirmado, você recebe o acesso direto no e-mail e pode começar a brincar ainda hoje.",
  },
  {
    question: "Terei suporte se tiver dúvidas?",
    answer: "Sim! Ao adquirir o planner, você entra para a Comunidade Instinto Feliz, onde tutoras trocam experiências, compartilham vídeos dos gatos e recebem dicas da equipe. É como ter um grupo de mães de gato sempre por perto.",
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="py-8 md:py-12 bg-card">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-headline text-primary">
            Dúvidas Frequentes
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            Respostas para as perguntas mais comuns.
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger className="font-highlight text-lg text-left">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center bg-background p-6 rounded-lg shadow-sm">
            <MessageSquare className="h-8 w-8 text-primary mx-auto mb-4" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Se ficou com alguma dúvida, quer contar como seu gato está reagindo ou só precisa de um empurrãozinho para começar, fala com a gente no chat! É só clicar nesse botãozinho laranja no canto da tela.
            </p>
        </div>
      </div>
    </section>
  );
}