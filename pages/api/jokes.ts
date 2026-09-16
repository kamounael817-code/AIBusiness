import type { NextApiRequest, NextApiResponse } from 'next'

interface Joke {
  id: number
  type: string
  setup: string
  delivery: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const response = await fetch('https://official-joke-api.appspot.com/random_joke')
    
    if (!response.ok) {
      throw new Error('Failed to fetch joke')
    }

    const joke: Joke = await response.json()

    res.status(200).json({
      success: true,
      joke: {
        id: joke.id,
        setup: joke.setup,
        delivery: joke.delivery,
        type: joke.type,
      },
    })
  } catch (error) {
    console.error('Joke API error:', error)
    res.status(500).json({ 
      success: false,
      error: 'Failed to fetch joke' 
    })
  }
}