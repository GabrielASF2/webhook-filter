export default async function handler(req, res) {
    const body = req.body;
  
    const groupName = body?.body?.chatName;
  
    if (groupName === 'Novas Tarefas') {
      // Repassa para seu webhook do n8n
      await fetch('https://gabrielfrancodev.app.n8n.cloud/webhook/whatsapp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(req.body)
      });
    }
  
    res.status(200).json({ received: true });
  }
  