
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
    <html>
    <head><title>Compra Aprovada!</title></head>
    <body style="font-family: sans-serif; background-color: #f0fdf4; padding: 20px;">
      <div style="max-width: 600px; margin: auto; background-color: #ffffff; border-radius: 12px; padding: 30px; text-align: center;">
        <h1 style="color: #059669; font-size: 28px;">🎉 Pagamento Aprovado, ${name}!</h1>
        <p style="font-size: 16px; color: #333;">Obrigado pela sua confiança! Seu acesso ao conteúdo está liberado.</p>
        <a href="${access_url}" style="display: inline-block; margin-top: 20px; padding: 15px 30px; background-color: #10b981; color: white; text-decoration: none; border-radius: 8px; font-weight: bold;">
          ACESSAR MEU CONTEÚDO AGORA
        </a>
        <p style="font-size: 12px; color: #666; margin-top: 20px;">Se o botão não funcionar, copie e cole este link no seu navegador: ${access_url}</p>
      </div>
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
    <html>
    <head><title>Você esqueceu algo...</title></head>
    <body style="font-family: sans-serif; background-color: #fff7ed; padding: 20px;">
      <div style="max-width: 600px; margin: auto; background-color: #ffffff; border-radius: 12px; padding: 30px; text-align: center;">
        <h1 style="color: #d97706; font-size: 28px;">🤔 Olá, ${name}! Você está quase lá...</h1>
        <p style="font-size: 16px; color: #333;">Vimos que você deixou alguns itens no seu carrinho. Não perca a chance de transformar sua jornada!</p>
        <a href="${checkout_link}" style="display: inline-block; margin-top: 20px; padding: 15px 30px; background-color: #f59e0b; color: white; text-decoration: none; border-radius: 8px; font-weight: bold;">
          FINALIZAR MINHA COMPRA
        </a>
        <p style="font-size: 12px; color: #666; margin-top: 20px;">Seu carrinho está esperando por você. Clique no botão para continuar de onde parou.</p>
      </div>
    </body>
    </html>
  `;
}
