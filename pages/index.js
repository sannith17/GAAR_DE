import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import ModelButton from '../components/ui/ModelButton'

const models = ['Swift', 'Baleno', 'Dzire', 'Vitara', 'Ertiga']

const brandLogos = [
  'Pirelli', 'Michelin', 'Continental', 'Dunlop', 'Goodyear', 'Bridgestone'
]

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
          <h1 className="text-7xl md:text-9xl font-black mb-6" style={{ color: '#004aad' }}>
            GAAR
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
            Offizielle Reifen & Räder für Ihr Auto – TÜV/ECE zertifiziert, 
            geprüft und bereit für deutsche Straßen.
          </p>
          <div className="flex gap-4 justify-center">
            <Link 
              href="/models/Swift" 
              className="px-8 py-3 rounded-lg font-semibold text-white transition-colors"
              style={{ backgroundColor: '#004aad' }}
            >
              Reifen finden
            </Link>
            <Link 
              href="/#models" 
              className="px-8 py-3 rounded-lg font-semibold bg-white transition-colors"
              style={{ color: '#004aad' }}
            >
              Modelle entdecken
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </div>
      </div>

      {/* Model Selection */}
      <div id="models" className="py-20" style={{ backgroundColor: '#f9fafb' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Wählen Sie Ihr Fahrzeugmodell
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Finden Sie die perfekten Reifen für Ihr Fahrzeug.
          </p>
          
          <div className="flex flex-wrap justify-center gap-8">
            {models.map(model => (
              <ModelButton key={model} model={model} />
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
            <div className="p-8 rounded-xl" style={{ backgroundColor: '#f9fafb' }}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: 'rgba(0, 74, 173, 0.1)' }}>
                <span className="text-2xl font-bold" style={{ color: '#004aad' }}>1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">TÜV/ECE Zertifiziert</h3>
              <p className="text-gray-600 leading-relaxed">
                Alle unsere Reifen sind TÜV/ECE geprüft und garantieren höchste Sicherheit.
              </p>
            </div>

            {/* Reason 2 */}
            <div className="p-8 rounded-xl" style={{ backgroundColor: '#f9fafb' }}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: 'rgba(0, 74, 173, 0.1)' }}>
                <span className="text-2xl font-bold" style={{ color: '#004aad' }}>2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Premium-Marken</h3>
              <p className="text-gray-600 leading-relaxed">
                Pirelli, Michelin, Continental, Dunlop, Goodyear und Bridgestone.
              </p>
            </div>

            {/* Reason 3 */}
            <div className="p-8 rounded-xl" style={{ backgroundColor: '#f9fafb' }}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: 'rgba(0, 74, 173, 0.1)' }}>
                <span className="text-2xl font-bold" style={{ color: '#004aad' }}>3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Optimale Performance</h3>
              <p className="text-gray-600 leading-relaxed">
                Perfekt abgestimmt auf Ihr Fahrzeug für maximale Fahrsicherheit.
              </p>
            </div>

            {/* Reason 4 */}
            <div className="p-8 rounded-xl" style={{ backgroundColor: '#f9fafb' }}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: 'rgba(0, 74, 173, 0.1)' }}>
                <span className="text-2xl font-bold" style={{ color: '#004aad' }}>4</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">100 Tage Rückgabe</h3>
              <p className="text-gray-600 leading-relaxed">
                Testen Sie Ihre neuen Reifen in Ruhe. 100 Tage Rückgaberecht.
              </p>
            </div>

            {/* Reason 5 */}
            <div className="p-8 rounded-xl" style={{ backgroundColor: '#f9fafb' }}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: 'rgba(0, 74, 173, 0.1)' }}>
                <span className="text-2xl font-bold" style={{ color: '#004aad' }}>5</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Schneller Versand</h3>
              <p className="text-gray-600 leading-relaxed">
                Versand innerhalb 24h mit DHL. Persönliche Beratung inklusive.
              </p>
            </div>

            {/* Trust Center */}
            <div className="p-8 rounded-xl text-white" style={{ backgroundColor: '#004aad' }}>
              <h3 className="text-xl font-semibold mb-4">Ihr Vertrauen ist uns wichtig</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <span style={{ color: '#86efac' }}>✓</span> 5 Jahre Garantie
                </li>
                <li className="flex items-center gap-2">
                  <span style={{ color: '#86efac' }}>✓</span> Persönliche Beratung
                </li>
                <li className="flex items-center gap-2">
                  <span style={{ color: '#86efac' }}>✓</span> Sichere Zahlung
                </li>
                <li className="flex items-center gap-2">
                  <span style={{ color: '#86efac' }}>✓</span> Kostenloser Rückversand
                </li>
              </ul>
            </div>
          </div>

          {/* Brand Showcase */}
          <div className="p-12 rounded-2xl" style={{ backgroundColor: '#f9fafb' }}>
            <h3 className="text-2xl font-bold text-center mb-8" style={{ color: '#004aad' }}>
              Unsere Premium-Marken
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {brandLogos.map(brand => (
                <div key={brand} className="text-center">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <span className="font-semibold text-gray-800">{brand}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
