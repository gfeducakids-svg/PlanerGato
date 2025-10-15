
'use client';

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import React from "react";
import Autoplay from "embla-carousel-autoplay";


// SVG Icons for Social Media
const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
    </svg>
);

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 12c0 1.78.46 3.45 1.28 4.95L2 22l5.25-1.38c1.45.77 3.06 1.23 4.79 1.23h.01c5.46 0 9.91-4.45 9.91-9.91s-4.45-9.9-9.91-9.9zM17.2 14.2c-.22-.11-.76-.38-1.04-.51s-.41-.11-.58.11-.39.51-.48.62-.18.12-.33.04-.66-.24-1.26-.78-1.04-1.01-1.16-1.18-.05-.18.06-.29-.11-.14-.24-.24-.18-.11-.25-.11-.17 0-.25 0-.41-.01-.58-.01s-.41-.06-.58-.33c-.17-.28-.76-.76-1.04-1.04s-.56-.22-.76-.22-.36 0-.5.01-.28.04-.41.04-.28.18-.41.39-.41.87-.41 1.04 0 .17.06.28.28.28.41.39.53.53.66.69.13.17.22.28.3.41.08.14.03.25-.03.36s-.22.2-.3.28-.17.14-.25.22c-.08.08-.17.17-.25.25s-.14.14-.22.22c-.08.08-.17.17-.25.25s-.14.14-.22.22c-.5.5-.89.81-1.17 1.09s-.5.5-.69.78c-.18.28-.36.56-.53.83s-.33.56-.47.83c-.14.28-.28.56-.41.83s-.22.56-.3.83c-.08.28-.17.56-.25.83s-.14.56-.22.83c-.08.28-.17.56-.25.83s-.14.56-.22.83c-1.11 3.11.44 6.13 1.22 7 .78.87 1.83 1.36 2.89 1.36h.01c1.73 0 3.36-.61 4.69-1.66l.14-.11c.19-.16.36-.33.5-.5.14-.17.28-.33.39-.5.11-.17.22-.33.3-.5.08-.17.17-.33.22-.5.05-.17.11-.33.14-.5.03-.17.06-.33.08-.5.02-.17.03-.33.03-.5s0-.28-.01-.41c0-.14 0-.28-.01-.41s0-.25-.01-.39c0-.14 0-.28-.01-.41s0-.25-.01-.39c0-.14 0-.28-.01-.41z"></path>
    </svg>
);


const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-1.5c-1.38 0-1.5 0.62-1.5 1.5V12h3l-.5 3h-2.5v6.8c4.56-.93 8-4.96 8-9.8z"></path>
    </svg>
);


const SocialIcon = ({ network, className }: { network: string; className?: string }) => {
  switch (network) {
    case "instagram":
      return <InstagramIcon className={className} />;
    case "whatsapp":
      return <WhatsAppIcon className={className} />;
    case "facebook":
      return <FacebookIcon className={className} />;
    default:
      return null;
  }
};

const testimonials = [
  // Instagram
  {
    id: "testimonial-insta-1",
    name: "@julianamcervantes",
    text: "Gentem mudou tudo meu gato só dormia e agora corre pela casa igual foguete 😂🔥 melhores 27,90 que já gastei!",
    network: "instagram",
    avatarUrl: "https://i.imgur.com/csTU30S.png",
  },
  {
    id: "testimonial-insta-2",
    name: "@marcosvbusiness",
    text: "Sério, em uma semana o Thor virou OUTRO gato nunca vi ele brincar com tanta alegria recomendo demais !",
    network: "instagram",
    avatarUrl: "https://i.imgur.com/ykX7yRT.png",
  },
  {
    id: "testimonial-insta-3",
    name: "@beatrizluna",
    text: "Antes ele só dormia agora me espera na porta pra brincar comigo 😍 coisa mais linda do mundo. 🐾❤️",
    network: "instagram",
    avatarUrl: "https://i.imgur.com/eaV3Rz0.png",
  },
   {
    id: "testimonial-insta-4",
    name: "@fernanda_ama_gatos",
    text: "To impressionada! Em 10 dias já vi muita diferença 😍 e sem brinquedo caro, só usando o planner 😍😍😍",
    network: "instagram",
    avatarUrl: "https://i.imgur.com/ZgQd7bj.png",
  },
   {
    id: "testimonial-insta-5",
    name: "@claramendes.g",
    text: "Me sinto a melhor dona do mundo  todo dia a gente tem nosso momentinho especial 💕 obrigadaa planerrrrr 💖",
    network: "instagram",
    avatarUrl: "https://i.imgur.com/049TDDK.png",
  },
   {
    id: "testimonial-insta-6",
    name: "@lucas_gpet",
    text: "Comprem sem pensar! 😂 sério, 27 reais que mudam o humor do gato pra sempre!!!!",
    network: "instagram",
    avatarUrl: "https://i.imgur.com/EwpHLBf.png",
  },
  // WhatsApp
  {
    id: "testimonial-wpp-1",
    name: "Fernanda C.",
    text: "amg vc n acredita kkkk em 10 dias meu gato virou outro 😍 e o melhor, nem precisei comprar brinquedo caro rsrs ❤️",
    network: "whatsapp",
    avatarUrl: "https://i.imgur.com/3iBL5cd.png",
  },
  {
    id: "testimonial-wpp-2",
    name: "Clara M.",
    text: "aqui em casa ta demais kkk todo dia ele vem me chamar pra brincar 🤣 to mt feliz, virou rotina ja ❤️",
    network: "whatsapp",
    avatarUrl: "https://i.imgur.com/jEitktN.png",
  },
  {
    id: "testimonial-wpp-3",
    name: "Sonia R.",
    text: "meu gato ja ta velhinho e msm assim ficou todo animado 😭 fiquei emocionada, valeu cada centavo 🥹❤️",
    network: "whatsapp",
    avatarUrl: "https://i.imgur.com/nmFpQ8x.png",
  },
   {
    id: "testimonial-wpp-4",
    name: "Marcos V.",
    text: "usei achando q n ia mudar nada mas cara... em uma semana ele ta correndo e brincando igual filhote",
    network: "whatsapp",
    avatarUrl: "https://i.imgur.com/XRUtzqz.png",
  },
  // Facebook
  {
    id: "testimonial-fb-1",
    name: "Juliana P.",
    text: "Meu gato não parava de dormir, agora corre pela casa como um foguete! O melhor investimento que já fiz pra ele ❤️ vale cada minuto e cada centavo!",
    network: "facebook",
    avatarUrl: "https://i.imgur.com/xlpLSBc.png",
  },
  {
    id: "testimonial-fb-2",
    name: "Rodrigo A.",
    text: "Fantástico como pequenas brincadeiras diárias fazem tanta diferença. Ele até me espera pra brincar agora! A energia dele mudou completamente 👏",
    network: "facebook",
    avatarUrl: "https://i.imgur.com/M3rwlhl.jpeg",
  },
  {
    id: "testimonial-fb-3",
    name: "Beatriz L.",
    text: "Antes ele só dormia, agora me espera na porta pra brincar. É lindo ver ele feliz de novo 🥰 recomendo demais pra quem tem gato preguiçoso!",
    network: "facebook",
    avatarUrl: "https://i.imgur.com/Dxpt2qx.png",
  },
];


export function SocialProofSection() {
    const plugin = React.useRef(
        Autoplay({ delay: 1500, stopOnInteraction: true })
    );

  return (
    <section className="py-8 md:py-12 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-headline text-primary">
            Veja o que outros pais e mães de pet estão dizendo.
          </h2>
        </div>
        <Carousel
          plugins={[plugin.current]}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full">
                    <Card className="h-full flex flex-col">
                      <CardContent className="flex flex-col flex-grow justify-between p-6">
                        <div>
                          <div className="flex items-center mb-4">
                            <Image
                                src={testimonial.avatarUrl}
                                alt={`Avatar de ${testimonial.name}`}
                                width={48}
                                height={48}
                                data-ai-hint="person avatar"
                                className="rounded-full"
                              />
                            <div className="ml-4">
                              <p className="font-bold text-sm">{testimonial.name}</p>
                              <div className="flex text-secondary mt-1">
                                {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                              </div>
                            </div>
                            <SocialIcon network={testimonial.network} className="ml-auto h-5 w-5 text-muted-foreground" />
                          </div>
                          <p className={`text-muted-foreground font-highlight italic ${testimonial.network === 'whatsapp' ? 'text-base' : 'text-sm'}`}>
                            "{testimonial.text}"
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}
