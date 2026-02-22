import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import ModelButton from '../components/ui/ModelButton'
import tyresData from '../data/tyres.json'

// Extract unique car brands for model buttons
const uniqueCarBrands = [...new Set(tyresData.map(item => item.brand))].sort()

// Extract unique tyre brands for showcase
const uniqueTyreBrands = [...new Set(tyresData.map(item => item.tyreBrand))].sort()

export default function Home() {
  return (
    <>
      <Head>
        <title>GAAR - Offizielle Reifen & Räder für Ihr Auto</title>
        <meta name="description" content="TÜV/ECE zertifizierte Reifen und Räder für deutsche Straßen." />
      </Head>

      {/* Hero Section */}
      <div className="relative h-[600px] md:h-screen flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=1920"
            alt="Premium Tyre"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
        </div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="flex flex-col items-center">
            <span className="text-7xl md:text-9xl font-black mb-2 font-['Racing_Sans_One'] text-[#004aad] drop-shadow-lg">
              GAAR
            </span>
            <span className="text-xl md:text-2xl tracking-widest font-['Racing_Sans_One'] text-white/90">
              RÄDER UND REIFEN
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed mt-6">
            Offizielle Reifen & Räder für Ihr Auto – TÜV/ECE zertifiziert, 
            geprüft und bereit für deutsche Straßen. Qualität, Sicherheit und 
            Leidenschaft für jedes Kilometer-Erlebnis.
          </p>
          <div className="flex gap-4 justify-center">
            <Link 
              href={`/models/${uniqueCarBrands[0]}`} 
              className="px-8 py-3 rounded-lg font-semibold text-white transition-all hover:scale-105 hover:shadow-xl"
              style={{ backgroundColor: '#004aad' }}
            >
              Reifen finden
            </Link>
            <Link 
              href="/#models" 
              className="px-8 py-3 rounded-lg font-semibold bg-white transition-all hover:scale-105 hover:shadow-xl"
              style={{ color: '#004aad' }}
            >
              Modelle entdecken
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Car Brand Selection */}
      <div id="models" className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Wählen Sie Ihre Automarke
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Finden Sie die perfekten Reifen für Ihr Fahrzeug. Alle Marken TÜV/ECE geprüft.
          </p>
          
          <div className="flex flex-wrap justify-center gap-8">
            {uniqueCarBrands.map((brand, index) => (
              <div key={brand} className="animate-fadeInUp" style={{ animationDelay: `${index * 0.1}s` }}>
                <ModelButton model={brand} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sales Description Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" style={{ color: '#004aad' }}>
            5 Gründe, warum Sie Originalräder kaufen sollten
          </h2>
          <p className="text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Ihre Sicherheit und Zufriedenheit stehen bei uns an erster Stelle
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Reason 1 */}
            <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: 'rgba(0, 74, 173, 0.1)' }}>
                <span className="text-2xl font-bold" style={{ color: '#004aad' }}>1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">TÜV/ECE Zertifiziert</h3>
              <p className="text-gray-600 leading-relaxed">
                Alle unsere Reifen sind TÜV/ECE geprüft und garantieren höchste Sicherheit auf deutschen Straßen.
              </p>
            </div>

            {/* Reason 2 */}
            <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: 'rgba(0, 74, 173, 0.1)' }}>
                <span className="text-2xl font-bold" style={{ color: '#004aad' }}>2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Premium-Marken</h3>
              <p className="text-gray-600 leading-relaxed">
                {uniqueTyreBrands.join(', ')} – nur die besten Marken für Ihr Fahrzeug.
              </p>
            </div>

            {/* Reason 3 */}
            <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: 'rgba(0, 74, 173, 0.1)' }}>
                <span className="text-2xl font-bold" style={{ color: '#004aad' }}>3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Optimale Performance</h3>
              <p className="text-gray-600 leading-relaxed">
                Perfekt abgestimmt auf Ihr Fahrzeug für maximale Fahrsicherheit und Komfort.
              </p>
            </div>

            {/* Reason 4 */}
            <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: 'rgba(0, 74, 173, 0.1)' }}>
                <span className="text-2xl font-bold" style={{ color: '#004aad' }}>4</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">100 Tage Rückgabe</h3>
              <p className="text-gray-600 leading-relaxed">
                Testen Sie Ihre neuen Reifen in Ruhe. Bei Nichtgefallen volle Rückgabe.
              </p>
            </div>

            {/* Reason 5 */}
            <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: 'rgba(0, 74, 173, 0.1)' }}>
                <span className="text-2xl font-bold" style={{ color: '#004aad' }}>5</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Schneller Versand</h3>
              <p className="text-gray-600 leading-relaxed">
                Versand innerhalb 24h mit DHL. Persönliche Beratung von Experten.
              </p>
            </div>

            {/* Trust Center */}
            <div className="p-8 rounded-xl text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1" style={{ backgroundColor: '#004aad' }}>
              <h3 className="text-xl font-semibold mb-4">Ihr Vertrauen ist uns wichtig</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <span className="text-green-300">✓</span> 5 Jahre Garantie
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-300">✓</span> Persönliche Beratung
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-300">✓</span> Sichere Zahlung
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-300">✓</span> Kostenloser Rückversand
                </li>
              </ul>
            </div>
          </div>

          {/* Tyre Brand Showcase - Updated from Dataset */}
          <div className="bg-gradient-to-br from-gray-50 to-white p-12 rounded-2xl shadow-lg">
            <h3 className="text-3xl font-bold text-center mb-10" style={{ color: '#004aad' }}>
              Unsere Premium-Marken
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {uniqueTyreBrands.map((brand, index) => (
                <div 
                  key={brand} 
                  className="group relative transform hover:scale-105 transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Brand Card */}
                  <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all p-6 text-center border-2 border-transparent hover:border-[#004aad]/20">
                    {/* Brand Icon/Initial */}
                    <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-br from-[#004aad]/10 to-gray-100 flex items-center justify-center">
                      <span className="text-2xl font-bold text-[#004aad]">
                        {brand.charAt(0)}
                      </span>
                    </div>
                    
                    {/* Brand Name */}
                    <span className="text-lg font-semibold text-gray-800 group-hover:text-[#004aad] transition-colors">
                      {brand}
                    </span>
                    
                    {/* Product Count */}
                    <p className="text-xs text-gray-500 mt-1">
                      {tyresData.filter(t => t.tyreBrand === brand).length} Produkte
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Trust Badges */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-12">
            <div className="text-center p-4">
              <div className="text-[#004aad] font-bold text-sm">100 Tage Rückgabe</div>
            </div>
            <div className="text-center p-4">
              <div className="text-[#004aad] font-bold text-sm">Schneller Versand</div>
            </div>
            <div className="text-center p-4">
              <div className="text-[#004aad] font-bold text-sm">Persönliche Beratung</div>
            </div>
            <div className="text-center p-4">
              <div className="text-[#004aad] font-bold text-sm">Sichere Zahlung</div>
            </div>
            <div className="text-center p-4">
              <div className="text-[#004aad] font-bold text-sm">5 Jahre Garantie</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
