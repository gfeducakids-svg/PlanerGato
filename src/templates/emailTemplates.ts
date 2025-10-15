
// src/templates/emailTemplates.ts

// Interface para os dados do e-mail de compra aprovada
interface ConfirmationEmailProps {
  name: string;
  access_url: string; // Link para o produto digital
}

// Interface para os dados do e-mail de carrinho abandonado
interface AbandonedCartEmailProps {
  name: string;
  checkout_link: string; // Link para finalizar a compra
}

/**
 * Template HTML para e-mails de pagamento aprovado.
 */
export function paymentApprovedTemplate({ name, access_url }: ConfirmationEmailProps): string {
  // Use interpolação de string para substituir os dados
  return `
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-M">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Bem-vinda ao Instinto Feliz! 🎉</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background: linear-gradient(135deg, #FFF5F0 0%, #FFE8E0 100%);">
        
        <!-- Container Principal -->
        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background: linear-gradient(135deg, #FFF5F0 0%, #FFE8E0 100%); padding: 40px 0;">
            <tr>
                <td align="center">
                    
                    <!-- Conteúdo do E-mail -->
                    <table width="600" cellpadding="0" cellspacing="0" border="0" style="background-color: #ffffff; border-radius: 20px; overflow: hidden; box-shadow: 0 8px 30px rgba(255, 107, 107, 0.2);">
                        
                        <!-- Header Celebratório -->
                        <tr>
                            <td align="center" style="background: linear-gradient(135deg, #FF8A65 0%, #FF6B6B 100%); padding: 50px 40px; text-align: center; position: relative;">
                                <!-- Confetti decorativo -->
                                <div style="font-size: 50px; margin-bottom: 15px; animation: bounce 1s infinite;">🎉</div>
                                <h1 style="margin: 0 0 10px 0; color: #ffffff; font-size: 36px; font-weight: 800; line-height: 1.2;">
                                    Parabéns!
                                </h1>
                                <p style="margin: 0; color: #ffffff; font-size: 18px; font-weight: 500; opacity: 0.95;">
                                    Você acaba de dar o melhor presente<br>para o seu gato (e pra você!) 💛
                                </p>
                            </td>
                        </tr>
                        
                        <!-- Corpo Principal -->
                        <tr>
                            <td style="padding: 45px 40px; color: #333333; font-size: 16px; line-height: 1.7;">
                                
                                <!-- Badge de Sucesso -->
                                <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin: 0 0 30px 0;">
                                    <tr>
                                        <td align="center">
                                            <div style="background: linear-gradient(135deg, #4CAF50 0%, #45A049 100%); display: inline-block; padding: 12px 32px; border-radius: 50px; box-shadow: 0 4px 15px rgba(76, 175, 80, 0.3);">
                                                <span style="color: #ffffff; font-size: 15px; font-weight: 700; letter-spacing: 0.5px;">✓ COMPRA CONFIRMADA COM SUCESSO</span>
                                            </div>
                                        </td>
                                    </tr>
                                </table>
                                
                                <p style="margin: 0 0 20px 0; font-size: 18px; text-align: center; color: #FF6B6B; font-weight: 600;">
                                    Olá, ${name}! 🐱
                                </p>
                                
                                <p style="margin: 0 0 20px 0; text-align: center; font-size: 16px; line-height: 1.8;">
                                    Você acaba de tomar a <strong style="color: #FF6B6B;">decisão mais importante</strong> para a felicidade do seu gato.<br>
                                    Daqui pra frente, tudo muda.
                                </p>
                                
                                <!-- Box de Transformação -->
                                <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin: 30px 0;">
                                    <tr>
                                        <td style="background: linear-gradient(135deg, #FFF8F5 0%, #FFE8E0 100%); padding: 30px; border-radius: 16px; border: 3px solid #FFD4C4; text-align: center;">
                                            <p style="margin: 0 0 15px 0; font-size: 15px; color: #999999; text-transform: uppercase; letter-spacing: 1px; font-weight: 600;">Nos próximos 30 dias você vai ver:</p>
                                            
                                            <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                                <tr>
                                                    <td style="padding: 12px 0; text-align: center;">
                                                        <span style="font-size: 28px;">✨</span>
                                                        <p style="margin: 5px 0 0 0; color: #555555; font-size: 15px; font-weight: 500;">Seu gato mais ativo e curioso</p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style="padding: 12px 0; text-align: center;">
                                                        <span style="font-size: 28px;">❤️</span>
                                                        <p style="margin: 5px 0 0 0; color: #555555; font-size: 15px; font-weight: 500;">Conexão verdadeira entre vocês</p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style="padding: 12px 0; text-align: center;">
                                                        <span style="font-size: 28px;">🏆</span>
                                                        <p style="margin: 5px 0 0 0; color: #555555; font-size: 15px; font-weight: 500;">Você se sentindo a melhor tutora do mundo</p>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                                
                                <p style="margin: 30px 0 25px 0; text-align: center; font-size: 17px; color: #333333; line-height: 1.8;">
                                    <strong>Seu planner completo está esperando por você.</strong><br>
                                    É só clicar no botão abaixo e começar agora mesmo! 👇
                                </p>
                                
                                <!-- CTA Principal Gigante -->
                                <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin: 30px 0;">
                                    <tr>
                                        <td align="center">
                                            <!-- Pulse effect simulado com múltiplas bordas -->
                                            <div style="background: linear-gradient(135deg, rgba(255, 107, 107, 0.1) 0%, rgba(255, 61, 61, 0.1) 100%); padding: 8px; border-radius: 60px; display: inline-block;">
                                                <a href="${access_url}" style="display: inline-block; background: linear-gradient(135deg, #FF6B6B 0%, #FF3D3D 100%); color: #ffffff; text-decoration: none; padding: 22px 55px; border-radius: 50px; font-weight: 800; font-size: 20px; box-shadow: 0 8px 25px rgba(255, 61, 61, 0.4); text-transform: uppercase; letter-spacing: 1px;">
                                                    🎯 ACESSAR MEU PLANNER AGORA
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                </table>
                                
                                <!-- Informação Adicional -->
                                <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin: 30px 0;">
                                    <tr>
                          
                                            <p style="margin: 0 0 10px 0; color: #1976D2; font-size: 16px; font-weight: 700;">💡 Dica Importante:</p>
                                            <p style="margin: 0; color: #555555; font-size: 15px; line-height: 1.7;">
                                                Salve este e-mail nos favoritos!<br>
                                                Você pode acessar o planner quantas vezes quiser pelo link acima.<br>
                                
                                            </p>
                                        </td>
                                    </tr>
                                </table>
                                
                
                                
                  
                                
                             
                                
                                <!-- Mensagem de Suporte -->
                                <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin: 30px 0;">
                                    <tr>
                                            <p style="margin: 0 0 2px 0; color: #FF6B6B; font-size: 18px; font-weight: 700;">💬 Precisa de Ajuda?</p>
                                            <p style="margin: 0; color: #555555; font-size: 15px; line-height: 1.7;">
                                                Estamos aqui para você!<br>
                                                Se tiver qualquer dúvida, é só responder este e-mail.<br>
                                               
                                            </p>
                                        </td>
                                    </tr>
                                </table>
                                
                                <!-- Fechamento Emocional -->
                                <p style="margin: 35px 0 15px 0; text-align: center; font-size: 18px; color: #333333; font-weight: 600;">
                                    Bem-vinda à família Instinto Feliz! 🧡
                                </p>
                                
                                <p style="margin: 0 0 8px 0; text-align: center; font-size: 16px; color: #666666;">
                                    Estou ansiosa para ver a transformação<br>do seu gato nos próximos dias!
                                </p>
                                
                                
                            
                                
                            </td>
                        </tr>
                        
                        <!-- Footer Simplificado -->
                        <tr>
                            <td style="background: linear-gradient(135deg, #FFF8F5 0%, #FFE8E0 100%); padding: 30px 40px; text-align: center; border-top: 3px solid #FFD4C4;">
                                <p style="margin: 0 0 10px 0; color: #666666; font-size: 14px; line-height: 1.6;">
                             
                                </p>
                                <p style="margin: 15px 0 0 0; color: #999999; font-size: 12px;">
                                    © 2025 Todos os direitos reservados.
                                </p>
                            </td>
                        </tr>
                        
                    </table>
                    <!-- Fim do Conteúdo -->
                    
                </td>
            </tr>
        </table>
        <!-- Fim do Container Principal -->
        
    </body>
    </html>
  `;
}

/**
 * Template HTML para e-mails de carrinho abandonado.
 */
export function cartAbandonedTemplate({ name, checkout_link }: AbandonedCartEmailProps): string {
  return `
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Seu gato ainda está esperando 🐱</title>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    </head>
    <body style="margin: 0; padding: 0; font-family: 'Poppins', sans-serif; background-color: #F1F5F9; color: #1F2937;">

      <!-- Container Principal -->
      <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #F1F5F9; padding: 30px 0;">
        <tr>
          <td align="center">

            <!-- Conteúdo do E-mail -->
            <table width="600" cellpadding="0" cellspacing="0" border="0" style="background-color: #FFFFFF; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(249,115,22,0.15);">

              <!-- Header com Gradiente -->
              <tr>
                <td style="background: linear-gradient(135deg, #F97316 0%, #FACC15 100%); padding: 40px; text-align: center;">
                  <h1 style="margin: 0; color: #FFFFFF; font-size: 32px; font-weight: 700; line-height: 1.2;">
                    Seu gato ainda está<br>esperando 🐱
                  </h1>
                </td>
              </tr>

              <!-- Corpo Principal -->
              <tr>
                <td style="padding: 45px 40px; font-size: 16px; line-height: 1.7; color: #1F2937;">
                  
                  <p style="margin: 0 0 18px 0;">Oi ${name}!</p>
                  
                  <p style="margin: 0 0 18px 0;">Vi que você estava quase garantindo o 
                    <strong style="color: #F97316;">Planner 30 Dias de Brincadeiras</strong>, 
                    mas algo aconteceu no meio do caminho.</p>
                  
                  <p style="margin: 0 0 35px 0;">Ficou com alguma dúvida? É só responder este e-mail que te ajudo! 💛</p>

                  <p style="margin: 0 0 18px 0;">Se você quer ver seu gato 
                    <strong style="color: #F97316;">mais ativo, curioso e feliz</strong>, esse é o momento.</p>
                  
                  <p style="margin: 0 0 30px 0;">O Planner vai te dar muito mais que ideias de brincadeiras — ele vai 
                    <strong style="color: #F97316;">te fazer sentir aquela tutora incrível</strong> 
                    que transforma 5 minutos por dia no momento mais especial de vocês.</p>

                  <!-- Badge -->
                  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin: 0 0 25px 0;">
                    <tr>
                      <td align="center">
                        <div style="background: #FFF7ED; border: 2px solid #FACC15; border-radius: 30px; padding: 12px 24px; display: inline-block;">
                          <span style="color: #F97316; font-size: 14px; font-weight: 600;">⭐ MAIS DE 500 TUTORAS JÁ TRANSFORMARAM SEUS GATOS</span>
                        </div>
                      </td>
                    </tr>
                  </table>

                

                  <!-- Box de Preço -->
                  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin: 35px 0;">
                    <tr>
                      <td align="center" style="background: #FFF7ED; padding: 35px 30px; border-radius: 16px; border: 3px solid #FACC15; box-shadow: 0 8px 25px rgba(249,115,22,0.2);">
                        <p style="margin: 0 0 12px 0; color: #F97316; font-size: 14px; font-weight: 700; text-transform: uppercase;">💰 Valor Total do Pacote Completo</p>
                        <p style="margin: 0 0 8px 0; color: #94A3B8; font-size: 20px; text-decoration: line-through;">De R$ 240,00</p>
                        <p style="margin: 0 0 8px 0; font-size: 16px;">por apenas</p>
                        <p style="margin: 0 0 15px 0; color: #FB4C29; font-size: 52px; font-weight: 800;">R$ 27,90</p>
                        <div style="background: #FACC15; color: #1F2937; padding: 8px 20px; border-radius: 30px; font-size: 15px; font-weight: 700;">
                          🔥 ECONOMIA DE 88%
                        </div>
                        <p style="margin: 18px 0 0 0; color: #64748B; font-size: 13px; font-style: italic;">⏰ Oferta limitada - Preço volta para R$ 240,00 em breve</p>
                      </td>
                    </tr>
                  </table>
                  
                   <!-- CTA -->
                  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin: 35px 0;">
                    <tr>
                      <td align="center">
                        <a href="${checkout_link}" 
                          style="display: inline-block; background: linear-gradient(135deg, #FB4C29 0%, #F97316 100%); color: #FFFFFF; text-decoration: none; padding: 20px 50px; border-radius: 50px; font-weight: 700; font-size: 18px; text-transform: uppercase; box-shadow: 0 6px 20px rgba(251,76,41,0.4);">
                          ✨ Finalizar Minha Inscrição Agora
                        </a>
                      </td>
                    </tr>
                  </table>

                  <!-- Ícones -->
                  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin: 25px 0 35px 0;">
                    <tr>
                      <td align="center">
                        <table cellpadding="0" cellspacing="0" border="0" style="display: inline-block;">
                          <tr>
                            <td style="padding: 0 15px; text-align: center;">
                              <div style="font-size: 24px; color: #F97316;">🔒</div>
                              <div style="font-size: 12px; font-weight: 600;">Compra Segura<br>SSL</div>
                            </td>
                            <td style="padding: 0 15px; text-align: center;">
                              <div style="font-size: 24px; color: #F97316;">💳</div>
                              <div style="font-size: 12px; font-weight: 600;">Pix e Cartão<br>Aceitos</div>
                            </td>
                            <td style="padding: 0 15px; text-align: center;">
                              <div style="font-size: 24px; color: #F97316;">⚡</div>
                              <div style="font-size: 12px; font-weight: 600;">Acesso<br>Imediato</div>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>

                </td>
              </tr>

              <!-- Footer -->
              <tr>
                <td style="background: #FACC15; padding: 30px 40px; text-align: center;">
                  <p style="margin: 0; color: #1F2937; font-size: 13px;">© 2025. Todos os direitos reservados.</p>
                </td>
              </tr>

            </table>
            <!-- Fim Conteúdo -->

          </td>
        </tr>
      </table>

    </body>
    </html>
  `;
}

    