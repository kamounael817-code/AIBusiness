import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
  const [chatOpen, setChatOpen] = useState(false)

  return (
    <>
      <Head>
        <title>AIBusiness - Produits & Services IA</title>
        <meta name="description" content="Plateforme de vente de produits et services IA" />
      </Head>

      {/* Navbar */}
      <nav className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">🤖 AIBusiness</div>
          <div className="flex gap-6">
            <Link href="/" className="hover:text-blue-200 transition">Accueil</Link>
            <Link href="/products" className="hover:text-blue-200 transition">Produits</Link>
            <Link href="/jokes" className="hover:text-blue-200 transition">Blagues 😆</Link>
            <Link href="/contact" className="hover:text-blue-200 transition">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Bienvenue sur AIBusiness</h1>
          <p className="text-xl text-gray-600 mb-8">Découvrez nos produits et services IA révolutionnaires</p>
          <div className="flex gap-4 justify-center">
            <Link href="/products" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition">
              Voir les produits
            </Link>
            <button onClick={() => setChatOpen(true)} className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition">
              Parler avec IA
            </button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto py-20 px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Nos Avantages</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-blue-600">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-2xl font-bold mb-2">Rapide</h3>
            <p className="text-gray-600">Accès instantané à nos services IA premium</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-purple-600">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="text-2xl font-bold mb-2">Sécurisé</h3>
            <p className="text-gray-600">Paiements cryptés avec Stripe et PayPal</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-pink-600">
            <div className="text-4xl mb-4">🧠</div>
            <h3 className="text-2xl font-bold mb-2">Intelligent</h3>
            <p className="text-gray-600">Technologie IA la plus avancée</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-20">
        <div className="max-w-6xl mx-auto text-center">
          <p>&copy; 2024 AIBusiness. Tous droits réservés.</p>
          <p className="text-gray-400 mt-2">Business en ligne avec Intelligence Artificielle</p>
        </div>
      </footer>

      {/* Chatbot Floating Button */}
      {chatOpen && (
        <div className="fixed bottom-4 right-4 bg-white rounded-lg shadow-2xl w-96 h-96 border border-gray-200 flex flex-col z-50">
          <div className="bg-blue-600 text-white p-4 rounded-t-lg flex justify-between items-center">
            <h3 className="font-bold">Assistant IA</h3>
            <button onClick={() => setChatOpen(false)} className="text-xl">×</button>
          </div>
          <div className="flex-1 overflow-auto p-4 bg-gray-50">
            <p className="text-gray-600 text-sm">Bonjour! Comment puis-je vous aider?</p>
          </div>
          <div className="p-4 border-t">
            <input type="text" placeholder="Tapez votre message..." className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
          </div>
        </div>
      )}
    </>
  )
}