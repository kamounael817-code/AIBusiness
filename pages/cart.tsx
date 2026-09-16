import Head from 'next/head'
import Link from 'next/link'

export default function Cart() {
  return (
    <>
      <Head>
        <title>Panier - AIBusiness</title>
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

      {/* Cart Section */}
      <div className="max-w-6xl mx-auto py-20 px-4">
        <h1 className="text-4xl font-bold mb-12">Votre Panier</h1>
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <p className="text-xl text-gray-600 mb-6">Votre panier est actuellement vide.</p>
          <Link href="/products" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition inline-block">
            Continuer vos achats
          </Link>
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