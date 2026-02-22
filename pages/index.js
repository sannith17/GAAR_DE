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
              className="px-8 py-3 rounded-lg font-semibold text-white transition-colors relative overflow-hidden group"
              style={{ backgroundColor: '#004aad' }}
            >
              <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] 
                            bg-gradient-to-r from-transparent via-white/30 to-transparent 
                            transition-transform duration-1000"></div>
              <span className="relative z-10">Reifen finden</span>
            </Link>
            <Link 
              href="/#models" 
              className="px-8 py-3 rounded-lg font-semibold bg-white transition-colors relative overflow-hidden group"
              style={{ color: '#004aad' }}
            >
              <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] 
                            bg-gradient-to-r from-transparent via-[#004aad]/10 to-transparent 
                            transition-transform duration-1000"></div>
              <span className="relative z-10">Modelle entdecken</span>
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
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
            {/* Reason Cards with Glassy Effect */}
            {[1,2,3,4,5].map((num) => (
              <div key={num} className="relative overflow-hidden bg-gradient-to-br from-white/80 to-white/40 
                                      backdrop-blur-xl p-8 rounded-xl border border-white/50 shadow-xl
                                      hover:shadow-2xl transition-all duration-500 group">
                {/* Glass reflection */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/40 via-transparent to-transparent 
                              pointer-events-none"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                       style={{ backgroundColor: 'rgba(0, 74, 173, 0.1)' }}>
                    <span className="text-2xl font-bold" style={{ color: '#004aad' }}>{num}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    {num === 1 && "TÜV/ECE Zertifiziert"}
                    {num === 2 && "Premium-Marken"}
                    {num === 3 && "Optimale Performance"}
                    {num === 4 && "100 Tage Rückgabe"}
                    {num === 5 && "Schneller Versand"}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {num === 1 && "Alle unsere Reifen sind TÜV/ECE geprüft und garantieren höchste Sicherheit."}
                    {num === 2 && "Pirelli, Michelin, Continental, Dunlop, Goodyear und Bridgestone."}
                    {num === 3 && "Perfekt abgestimmt auf Ihr Fahrzeug für maximale Fahrsicherheit."}
                    {num === 4 && "Testen Sie Ihre neuen Reifen in Ruhe. 100 Tage Rückgaberecht."}
                    {num === 5 && "Versand innerhalb 24h mit DHL. Persönliche Beratung inklusive."}
                  </p>
                </div>
              </div>
            ))}

            {/* Trust Center */}
            <div className="relative overflow-hidden p-8 rounded-xl text-white group"
                 style={{ backgroundColor: '#004aad' }}>
              <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-transparent 
                            pointer-events-none"></div>
              <div className="relative z-10">
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
          </div>

          {/* Brand Showcase - Glassy Effect & Larger Icons */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/80 to-white/40 
                        backdrop-blur-xl p-12 shadow-2xl border border-white/50">
            {/* Glass reflection */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/40 via-transparent to-transparent 
                          pointer-events-none"></div>
            
            <h3 className="text-3xl font-bold text-center mb-10 relative z-10" style={{ color: '#004aad' }}>
              Unsere Premium-Marken
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 relative z-10">
              {brandLogos.map((brand, index) => (
                <div 
                  key={brand} 
                  className="group relative transform hover:scale-110 transition-all duration-500
                           hover:-translate-y-2"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Glass card background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/5 
                                backdrop-blur-md rounded-2xl shadow-2xl border border-white/50
                                group-hover:border-white/70 transition-all"></div>
                  
                  {/* Inner glow effect */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100
                                transition-opacity duration-500 bg-gradient-to-r 
                                from-[#004aad]/20 via-transparent to-[#004aad]/20"></div>
                  
                  {/* Content - Larger Text */}
                  <div className="relative p-8 text-center">
                    <span className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 
                                   bg-clip-text text-transparent group-hover:from-[#004aad] 
                                   group-hover:to-gray-600 transition-all duration-300">
                      {brand}
                    </span>
                    
                    {/* Bottom shine line */}
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 
                                  w-0 group-hover:w-12 h-0.5 bg-gradient-to-r from-transparent 
                                  via-[#004aad] to-transparent transition-all duration-500"></div>
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
