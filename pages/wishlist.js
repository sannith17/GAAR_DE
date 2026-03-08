import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Wishlist() {
  // Sample wishlist data (in real app, this would come from state/context)
  const wishlistItems = [
    {
      id: 1,
      name: 'BMW 5er G30 Original Felge',
      brand: 'BMW',
      size: '18 Zoll',
      price: 299.99,
      image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=400'
    },
    {
      id: 2,
      name: 'Mercedes AMG Felgensatz',
      brand: 'Mercedes',
      size: '19 Zoll',
      price: 459.99,
      image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=400'
    }
  ]

  return (
    <>
      <Head>
        <title>Merkliste - GAAR Original Räder</title>
        <meta name="description" content="Ihre gemerkten Original Felgen und Räder" />
      </Head>

      <Header />

      <main className="min-h-screen tyre-tread-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
            <Link href="/" className="hover:text-[#004aad] transition-colors">Startseite</Link>
            <span>/</span>
            <span className="text-[#004aad] font-semibold">Merkliste</span>
          </div>

          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
              Meine Merkliste
              <span className="text-lg font-normal text-gray-500 ml-3">
                ({wishlistItems.length} Artikel)
              </span>
            </h1>
            
            {/* Share Wishlist Button */}
            <button className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path>
              </svg>
              <span>Teilen</span>
            </button>
          </div>

          {/* Wishlist Items */}
          {wishlistItems.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Items List - Takes 2/3 width */}
              <div className="lg:col-span-2 space-y-4">
                {wishlistItems.map((item) => (
                  <div key={item.id} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6">
                    <div className="flex flex-col sm:flex-row gap-6">
                      {/* Product Image */}
                      <div className="relative w-full sm:w-32 h-32 bg-gray-100 rounded-lg overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>

                      {/* Product Details */}
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <div>
                            <h3 className="text-lg font-semibold text-gray-800 hover:text-[#004aad] transition-colors">
                              <Link href={`/product/${item.id}`}>{item.name}</Link>
                            </h3>
                            <p className="text-sm text-gray-600 mt-1">
                              {item.brand} • {item.size}
                            </p>
                          </div>
                          <button className="text-gray-400 hover:text-red-500 transition-colors">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                            </svg>
                          </button>
                        </div>

                        <div className="flex justify-between items-center mt-4">
                          <span className="text-2xl font-bold text-[#004aad]">
                            €{item.price.toFixed(2)}
                          </span>
                          <div className="flex space-x-2">
                            <button className="bg-[#004aad] text-white px-4 py-2 rounded-lg hover:bg-orange-500 transition-colors text-sm">
                              In den Warenkorb
                            </button>
                            <button className="border-2 border-gray-300 text-gray-600 px-4 py-2 rounded-lg hover:border-red-500 hover:text-red-500 transition-colors text-sm">
                              Entfernen
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Sidebar - Takes 1/3 width */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
                  <h2 className="text-xl font-semibold mb-4">Merkliste Zusammenfassung</h2>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-gray-600">
                      <span>Artikel ({wishlistItems.length})</span>
                      <span>€{wishlistItems.reduce((sum, item) => sum + item.price, 0).toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Versand</span>
                      <span className="text-green-600">Kostenlos</span>
                    </div>
                    <div className="border-t border-gray-200 pt-3">
                      <div className="flex justify-between font-semibold text-lg">
                        <span>Gesamt</span>
                        <span className="text-[#004aad]">
                          €{wishlistItems.reduce((sum, item) => sum + item.price, 0).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>

                  <button className="w-full bg-[#004aad] text-white py-3 rounded-lg hover:bg-orange-500 transition-colors font-semibold mb-3">
                    Alle in den Warenkorb
                  </button>
                  
                  <button className="w-full border-2 border-[#004aad] text-[#004aad] py-3 rounded-lg hover:bg-[#004aad] hover:text-white transition-colors font-semibold">
                    Merkliste per E-Mail senden
                  </button>

                  {/* Trust Badges */}
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div className="text-center">
                        <div className="text-[#004aad] font-bold">100 Tage</div>
                        <div className="text-gray-600">Rückgabe</div>
                      </div>
                      <div className="text-center">
                        <div className="text-[#004aad] font-bold">Original</div>
                        <div className="text-gray-600">Felgen</div>
                      </div>
                      <div className="text-center">
                        <div className="text-[#004aad] font-bold">Kostenloser</div>
                        <div className="text-gray-600">Versand</div>
                      </div>
                      <div className="text-center">
                        <div className="text-[#004aad] font-bold">5 Jahre</div>
                        <div className="text-gray-600">Garantie</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            // Empty Wishlist
            <div className="text-center py-16 bg-white rounded-xl shadow-md">
              <svg className="w-24 h-24 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
              <h2 className="text-2xl font-bold text-gray-700 mb-2">Ihre Merkliste ist leer</h2>
              <p className="text-gray-500 mb-6">Fügen Sie Artikel zu Ihrer Merkliste hinzu, um sie später zu kaufen.</p>
              <Link href="/" className="inline-block bg-[#004aad] text-white px-8 py-3 rounded-lg hover:bg-orange-500 transition-colors">
                Zur Startseite
              </Link>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  )
}
