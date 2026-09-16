import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { message } = req.body

    // Chatbot responses (can be connected to OpenAI)
    const responses: { [key: string]: string } = {
      'bonjour': 'Bonjour! Comment puis-je vous aider avec nos produits IA?',
      'prix': 'Nos produits varient de 19,99$ à 79,99$. Consultez notre page produits!',
      'paiement': 'Nous acceptons Stripe et PayPal pour les paiements sécurisés.',
      'contact': 'Vous pouvez nous contacter via le formulaire sur notre page contact.',
    }

    const answer =
      Object.entries(responses).find(([key]) => message.toLowerCase().includes(key))?.[1] ||
      'Je suis un assistant IA. Posez-moi une question sur nos produits!'

    res.status(200).json({ message: answer })
  } catch (error) {
    console.error('Chatbot error:', error)
    res.status(500).json({ error: 'Chatbot error' })
  }
}