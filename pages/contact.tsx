import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <>
      <Head>
        <title>Contact - AIBusiness</title>
      </Head>

      {/* Navbar */}
      <nav className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">🤖 AIBusiness</Link>
          <div className="flex gap-6">
            <Link href="/" className="hover:text-blue-200 transition">Accueil</Link>
            <Link href="/products" className="hover:text-blue-200 transition">Produits</Link>
            <Link href="/cart" className="hover:text-blue-200 transition">Panier</Link>
            <Link href="/contact" className="hover:text-blue-200 transition">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Contact Section */}
      <div className="max-w-2xl mx-auto py-20 px-4">
        <h1 className="text-4xl font-bold mb-12 text-center">Nous Contacter</h1>
        
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">
          <div className="mb-6">
            <label className="block text-gray-700 font-bold mb-2">Nom</label>
            <input
              type="text"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-bold mb-2">Email</label>
            <input
              type="email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-bold mb-2">Message</label>
            <textarea
              required
              rows={5}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              onChange={(e) => setFormData({...formData, message: e.target.value})}
            />
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-bold">
            Envoyer
          </button>
          {submitted && <p className="mt-4 text-green-600 text-center font-bold">✅ Message envoyé avec succès!</p>}
        </form>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-20">
        <div className="max-w-6xl mx-auto text-center">
          <p>&copy; 2024 AIBusiness. Tous droits réservés.</p>
        </div>
      </footer>
    </>
  )
}