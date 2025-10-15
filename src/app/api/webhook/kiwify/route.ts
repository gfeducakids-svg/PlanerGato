
// src/app/api/webhook/kiwify/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { sendEmail } from '@/lib/emailService';
import { 
  paymentApprovedTemplate, 
  cartAbandonedTemplate 
} from '@/templates/emailTemplates';

// A diretiva 'force-dynamic' é importante para garantir que o endpoint seja executado no servidor a cada chamada.
export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    console.log('================================================');
    console.log(`[Kiwify] 📥 Webhook Recebido: ${new Date().toISOString()}`);
    console.log('Corpo:', JSON.stringify(body, null, 2));

    // Unifica a extração de dados para diferentes tipos de webhooks
    const customerEmail = body.Customer?.email || body.email;
    const customerName = body.Customer?.full_name || body.first_name || 'Cliente';
    const status = body.order_status || body.status; // 'paid' ou 'abandoned'

    // Cenário 1: COMPRA APROVADA
    if (status === 'paid' && customerEmail) {
      console.log('[Kiwify] 🟩 Detectado: Compra Aprovada');
      await sendEmail({
        to: customerEmail,
        subject: '🎉 Acesso Liberado - Seu Produto!',
        html: paymentApprovedTemplate({
          name: customerName,
          access_url: 'https://pay.kiwify.com.br/iFQO80k', // Substitua pelo link real
        })
      });
      console.log(`[Kiwify] ✅ E-mail de confirmação enviado para ${customerEmail}`);
    } 
    // Cenário 2: CARRINHO ABANDONADO
    else if (status === 'abandoned' && customerEmail) {
      console.log('[Kiwify] 🟨 Detectado: Carrinho Abandonado');
      const checkoutLink = body.cart?.checkout_link ? `https://pay.kiwify.com.br/checkout/${body.cart.checkout_link}` : 'https://pay.kiwify.com.br/iFQO80k';
      
      await sendEmail({
        to: customerEmail,
        subject: 'Você esqueceu algo no seu carrinho... 🛒',
        html: cartAbandonedTemplate({
          name: customerName,
          checkout_link: checkoutLink,
        })
      });
      console.log(`[Kiwify] ✅ E-mail de recuperação enviado para ${customerEmail}`);
    } else {
      console.log(`[Kiwify] ⚪️ Status '${status}' não processado ou e-mail ausente.`);
    }
    
    // Responda 200 para a Kiwify confirmar o recebimento.
    return NextResponse.json({ success: true, message: 'Webhook processado.' }, { status: 200 });
  } catch (error: any) {
    console.error('❌ Erro crítico no processamento do webhook:', error);
    // É crucial responder 200 mesmo em caso de erro, para evitar que a Kiwify reenvie o webhook indefinidamente.
    return NextResponse.json({ success: false, error: 'Erro interno, mas webhook recebido.' }, { status: 200 });
  }
}
