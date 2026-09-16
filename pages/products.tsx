import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

const products = [
  { id: 1, name: 'Chatbot IA Premium', price: 29.99, description: 'Assistant conversationnel avancé', image: '🤖' },
  { id: 2, name: 'Générateur de Contenu', price: 49.99, description: 'Création de contenu automatisé', image: '📝' },
  { id: 3, name: 'Analyse de Données IA', price: 79.99, description: 'Analyse prédictive avec IA', image: '📊' },
  { id: 4, name: 'Image Generator Pro', price: 39.99, description: 'Génération d\'images avec IA', image: '🎨' },
  { id: 5, name: 'Assistant Code IA', price: 59.99, description: 'Aide à la programmation', image: '💻' },
  { id: 6, name: 'Traduction IA', price: 19.99, description: 'Traduction multilingue', image: '🌍' },
]

export default function Products() {
  const [cart, setCart] = useState<number[]>([])

  const addToCart = (productId: number) => {
    setCart([...cart, productId])
    alert('Produit ajouté au panier!')
  }

  return (
    <>
      <Head>
        <title>Nos Produits - AIBusiness</title>
      </Head>

      {/* Navbar */}
      <nav className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">🤖 AIBusiness</Link>
          <div className="flex gap-6">
            <Link href="/" className="hover:text-blue-200 transition">Accueil</Link>
            <Link href="/products" className="hover:text-blue-200 transition">Produits</Link>
            <Link href="/cart" className="hover:text-blue-200 transition">Panier ({cart.length})</Link>
            <Link href="/contact" className="hover:text-blue-200 transition">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Products Section */}
      <div className="max-w-6xl mx-auto py-20 px-4">
        <h1 className="text-4xl font-bold mb-12 text-center">Nos Produits IA</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition transform hover:scale-105">
              <div className="text-6xl text-center py-8 bg-gradient-to-r from-blue-100 to-purple-100">
                {product.image}
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-3xl font-bold text-blue-600">${product.price}</span>
                  <button
                    onClick={() => addToCart(product.id)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                  >
                    Ajouter
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
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