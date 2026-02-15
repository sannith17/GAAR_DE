import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
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
        <meta name="description" content="TÜV/ECE zertifizierte Reifen und Räder für deutsche Straßen. Qualität, Sicherheit und Leidenschaft für jedes Kilometer-Erlebnis." />
      </Head>

      {/* Hero Section */}
      <section className="relative h-[600px] md:h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=1920"
            alt="Premium Tyre"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-7xl md:text-9xl font-black text-[#004aad] mb-6 drop-shadow-lg animate-fadeIn">
            GAAR
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed animate-fadeIn" style={{animationDelay: '0.2s'}}>
            Offizielle Reifen & Räder für Ihr Auto – TÜV/ECE zertifiziert, 
            geprüft und bereit für deutsche Straßen. Qualität, Sicherheit und 
            Leidenschaft für jedes Kilometer-Erlebnis.
          </p>
          <div className="flex gap-4 justify-center animate-fadeIn" style={{animationDelay: '0.4s'}}>
            <Link href="/models/Swift" className="bg-[#004aad] text-white px-8 py-3 rounded-lg hover:bg-[#003a8a] transition-colors font-semibold">
              Reifen finden
            </Link>
            <Link href="/#models" className="bg-white text-[#004aad] px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
              Modelle entdecken
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Model Selection */}
      <section id="models" className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Wählen Sie Ihr Fahrzeugmodell
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Finden Sie die perfekten Reifen für Ihr Fahrzeug. Alle Modelle TÜV/ECE geprüft.
          </p>
          
          <div className="flex flex-wrap justify-center gap-8">
            {models.map((model, index) => (
              <div key={model} className="animate-fadeIn" style={{animationDelay: `${index * 0.1}s`}}>
                <ModelButton model={model} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sales Description Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-[#004aad]">
            5 Gründe, warum Sie Originalräder kaufen sollten
          </h2>
          <p className="text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Ihre Sicherheit und Zufriedenheit stehen bei uns an erster Stelle
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Reason 1 */}
            <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#004aad]/10 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-[#004aad]">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">TÜV/ECE Zertifiziert</h3>
              <p className="text-gray-600 leading-relaxed">
                Alle unsere Reifen sind TÜV/ECE geprüft und garantieren höchste Sicherheit auf deutschen Straßen. Regelmäßige Qualitätskontrollen inklusive.
              </p>
            </div>

            {/* Reason 2 */}
            <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#004aad]/10 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-[#004aad]">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Premium-Marken</h3>
              <p className="text-gray-600 leading-relaxed">
                Pirelli, Michelin, Continental, Dunlop, Goodyear und Bridgestone – wir führen nur die besten Marken für Ihr Fahrzeug.
              </p>
            </div>

            {/* Reason 3 */}
            <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#004aad]/10 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-[#004aad]">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Optimale Performance</h3>
              <p className="text-gray-600 leading-relaxed">
                Perfekt abgestimmt auf Ihr Fahrzeug für maximale Fahrsicherheit, kürzere Bremswege und besten Komfort bei jedem Wetter.
              </p>
            </div>

            {/* Reason 4 */}
            <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#004aad]/10 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-[#004aad]">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">100 Tage Rückgabe</h3>
              <p className="text-gray-600 leading-relaxed">
                Testen Sie Ihre neuen Reifen in Ruhe. Bei Nichtgefallen volle Rückgabe innerhalb von 100 Tagen – ohne Wenn und Aber.
              </p>
            </div>

            {/* Reason 5 */}
            <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#004aad]/10 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-[#004aad]">5</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Schneller Versand</h3>
              <p className="text-gray-600 leading-relaxed">
                Versand innerhalb 24h mit DHL. Persönliche Beratung von Experten und sichere Zahlung mit allen gängigen Methoden.
              </p>
            </div>

            {/* Trust Center */}
            <div className="bg-[#004aad] p-8 rounded-xl text-white">
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

          {/* Brand Showcase */}
          <div className="bg-gradient-to-r from-gray-50 to-white p-12 rounded-2xl shadow-sm">
            <h3 className="text-2xl font-bold text-center mb-8 text-[#004aad]">Unsere Premium-Marken</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {brandLogos.map(brand => (
                <div key={brand} className="text-center">
                  <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <span className="font-semibold text-gray-800">{brand}</span>
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
      </section>
    </>
  )
}
