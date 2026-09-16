import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'

interface Joke {
  id: number
  type: string
  setup: string
  delivery: string
}

export default function JokeGenerator() {
  const [joke, setJoke] = useState<Joke | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const fetchJoke = async () => {
    setLoading(true)
    setError('')
    try {
      const response = await fetch('https://official-joke-api.appspot.com/random_joke')
      const data = await response.json()
      setJoke(data)
    } catch (err) {
      setError('❌ Erreur lors du chargement de la blague')
      console.error(err)
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchJoke()
  }, [])

  return (
    <>
      <Head>
        <title>Générateur de Blagues - AIBusiness</title>
      </Head>

      {/* Navbar */}
      <nav className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">🤖 AIBusiness</Link>
          <div className="flex gap-6">
            <Link href="/" className="hover:text-blue-200 transition">Accueil</Link>
            <Link href="/products" className="hover:text-blue-200 transition">Produits</Link>
            <Link href="/jokes" className="hover:text-blue-200 transition">Blagues</Link>
            <Link href="/contact" className="hover:text-blue-200 transition">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Joke Generator */}
      <div className="min-h-screen bg-gradient-to-b from-purple-100 to-blue-100 py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-5xl font-bold text-center mb-4 text-purple-900">😂 Générateur de Blagues</h1>
          <p className="text-center text-gray-700 mb-12 text-lg">Cliquez pour une nouvelle blague chaque fois!</p>

          {/* Joke Card */}
          <div className="bg-white rounded-lg shadow-2xl p-12 mb-8 border-4 border-purple-300 min-h-64 flex flex-col justify-center">
            {loading ? (
              <div className="text-center">
                <div className="animate-spin text-6xl mb-4">⏳</div>
                <p className="text-xl text-gray-600">Chargement d'une blague amusante...</p>
              </div>
            ) : error ? (
              <div className="text-center">
                <p className="text-2xl text-red-600">{error}</p>
                <button
                  onClick={fetchJoke}
                  className="mt-6 bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition font-bold"
                >
                  Réessayer
                </button>
              </div>
            ) : joke ? (
              <div>
                <h2 className="text-3xl font-bold text-purple-900 mb-8 text-center">{joke.setup}</h2>
                <p className="text-2xl text-blue-600 text-center font-bold italic">
                  {joke.delivery}
                </p>
              </div>
            ) : null}
          </div>

          {/* Button */}
          <div className="text-center">
            <button
              onClick={fetchJoke}
              disabled={loading}
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-12 py-4 rounded-lg text-xl font-bold hover:from-purple-700 hover:to-blue-700 transition disabled:opacity-50"
            >
              {loading ? '⏳ Chargement...' : '😆 Nouvelle Blague'}
            </button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 text-center">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-4xl mb-2">😄</div>
              <p className="text-gray-600">Blagues gratuites</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-4xl mb-2">⚡</div>
              <p className="text-gray-600">Chargement instant</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-4xl mb-2">🌍</div>
              <p className="text-gray-600">Anglais & Français</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto text-center">
          <p>&copy; 2024 AIBusiness - Blagues gratuites avec IA</p>
        </div>
      </footer>
    </>
  )
}