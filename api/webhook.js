export default async function handler(req, res) {
  // Captura o corpo da requisição recebido da Z-API
  const body = req.body;

  // Acessa o nome do grupo diretamente (sem body.body)
  const groupName = body?.chatName;

  // Log para debug (pode remover depois de testar)
  console.log('Mensagem recebida da Z-API:', body);

  // Verifica se é o grupo desejado
  if (groupName === 'Novas Tarefas') {
    // Encaminha a requisição para o webhook do n8n
    await fetch('https://gabrielfrancodev.app.n8n.cloud/webhook/whatsapp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });
  }

  // Responde com sucesso para evitar timeout no Vercel
  res.status(200).json({ received: true });
}
