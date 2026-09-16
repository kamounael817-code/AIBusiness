import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { amount, description } = req.body

    // PayPal integration example
    const paypalRequest = {
      intent: 'CAPTURE',
      purchase_units: [
        {
          amount: {
            currency_code: 'USD',
            value: amount.toString(),
          },
          description,
        },
      ],
      return_url: `${process.env.NEXT_PUBLIC_URL}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_URL}/cancel`,
    }

    res.status(200).json({ success: true, request: paypalRequest })
  } catch (error) {
    console.error('PayPal error:', error)
    res.status(500).json({ error: 'Payment error' })
  }
}