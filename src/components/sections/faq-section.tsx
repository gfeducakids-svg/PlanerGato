import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Não tenho tempo.",
    answer: "O método foi desenhado para rotinas corridas. São apenas 5 minutos por dia para criar um momento de qualidade com seu gato e ver resultados.",
  },
  {
    question: "Meu gato é idoso. Ele vai gostar?",
    answer: "Sim! As brincadeiras são adaptáveis por nível de energia. Gatos idosos se beneficiam muito de estímulos leves que mantêm a mente e o corpo ativos.",
  },
  {
    question: "E se meu gato não gostar das brincadeiras?",
    answer: "O Método 3D foi testado em mais de 300 gatos de todas as idades, raças e personalidades. A variedade de atividades de Descoberta, Desafio e Descanso aumenta drasticamente a chance de engajamento, pois respeita o instinto natural dele.",
  },
  {
    question: "Preciso comprar brinquedos caros?",
    answer: "De forma alguma! O planner inclui um guia para usar objetos caseiros e seguros que você já tem em casa. O foco é na criatividade e na interação, não no custo.",
  },
  {
    question: "O planner é digital ou físico?",
    answer: "É um produto 100% digital. Você recebe o acesso por e-mail imediatamente após a confirmação do pagamento e já pode começar a usar.",
  },
  {
    question: "Terei algum suporte se tiver dúvidas?",
    answer: "Sim! Ao adquirir o planner, você ganha acesso à nossa comunidade exclusiva de tutores, onde pode tirar dúvidas, compartilhar experiências e receber dicas da nossa equipe.",
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="py-12 md:py-16 bg-card">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="text-center mb-12">
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
      </div>
    </section>
  );
}
