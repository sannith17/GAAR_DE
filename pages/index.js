import Head from 'next/head'
import Image from 'next/image'
import ModelButton from '@/components/ui/ModelButton'

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
      <section className="relative h-screen flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=1920"
            alt="Premium Tyre"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white">
          <h1 className="text-8xl font-black text-primary mb-4">GAAR</h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200 px-4">
            Offizielle Reifen & Räder für Ihr Auto – TÜV/ECE zertifiziert, 
            geprüft und bereit für deutsche Straßen. Qualität, Sicherheit und 
            Leidenschaft für jedes Kilometer-Erlebnis.
          </p>
        </div>
      </section>

      {/* Model Selection */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">
            Wählen Sie Ihr Fahrzeugmodell
          </h2>
          
          <div className="flex flex-wrap justify-center gap-8">
            {models.map(model => (
              <ModelButton key={model} model={model} />
            ))}
          </div>
        </div>
      </section>

      {/* Sales Description Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-16">
            5 Gründe, warum Sie Originalräder kaufen sollten
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Reason 1 */}
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">TÜV/ECE Zertifiziert</h3>
              <p className="text-gray-600">
                Alle unsere Reifen sind TÜV/ECE geprüft und garantieren höchste Sicherheit auf deutschen Straßen.
              </p>
            </div>

            {/* Reason 2 */}
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Premium-Marken</h3>
              <p className="text-gray-600">
                Pirelli, Michelin, Continental, Dunlop, Goodyear und Bridgestone – nur die besten Marken für Ihr Fahrzeug.
              </p>
            </div>

            {/* Reason 3 */}
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Optimale Performance</h3>
              <p className="text-gray-600">
                Perfekt abgestimmt auf Ihr Fahrzeug für maximale Fahrsicherheit und Komfort.
              </p>
            </div>

            {/* Reason 4 */}
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-primary">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">100 Tage Rückgabe</h3>
              <p className="text-gray-600">
                Testen Sie Ihre neuen Reifen in Ruhe. Bei Nichtgefallen volle Rückgabe innerhalb von 100 Tagen.
              </p>
            </div>

            {/* Reason 5 */}
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-primary">5</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Schneller Versand</h3>
              <p className="text-gray-600">
                Versand innerhalb 24h mit DHL. Persönliche Beratung und sichere Zahlung inklusive.
              </p>
            </div>
          </div>

          {/* Trust Signals */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-bold text-center mb-8">Unsere Premium-Marken</h3>
            <div className="flex flex-wrap justify-center gap-8">
              {brandLogos.map(brand => (
                <div key={brand} className="text-gray-700 font-semibold text-lg">
                  {brand}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
