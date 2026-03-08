import Head from 'next/head'
import Image from 'next/image'
import tyresData from '../data/tyres.json'

// Extract unique car brands for model buttons
const uniqueCarBrands = [...new Set(tyresData.map(item => item.brand))].sort()

// Extract unique tyre brands for showcase
const uniqueTyreBrands = [...new Set(tyresData.map(item => item.tyreBrand))].sort()

export default function Home() {
  // Brand logo mapping with reliable working URLs
  const brandLogos = {
    'Audi': 'https://cdn.freebiesupply.com/logos/large/2x/audi-11-logo-black-and-white.png',
    'BMW': 'https://cdn.freebiesupply.com/logos/large/2x/bmw-11-logo-black-and-white.png',
    'Mercedes': 'https://cdn.freebiesupply.com/logos/large/2x/mercedes-benz-6-logo-black-and-white.png',
    'Porsche': 'https://cdn.freebiesupply.com/logos/large/2x/porsche-9-logo-black-and-white.png',
    'Volvo': 'https://cdn.freebiesupply.com/logos/large/2x/volvo-8-logo-black-and-white.png'
  }

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
            <button 
              onClick={() => window.location.href = `/models/${uniqueCarBrands[0]}`}
              className="px-8 py-3 rounded-lg font-semibold text-white transition-all hover:scale-105 hover:shadow-xl"
              style={{ backgroundColor: '#004aad' }}
            >
              Reifen finden
            </button>
            <button 
              onClick={() => {
                const element = document.getElementById('models')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className="px-8 py-3 rounded-lg font-semibold bg-white transition-all hover:scale-105 hover:shadow-xl"
              style={{ color: '#004aad' }}
            >
              Modelle entdecken
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Car Brand Selection with Logos - Bigger Buttons & Brand Colors */}
      <div id="models" className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Choose your car brand
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Find the perfect tires for your vehicle. All brands TÜV/ECE tested.
          </p>
          
          <div className="flex flex-wrap justify-center gap-10">
            {uniqueCarBrands.map((brand, index) => {
              // Brand-specific hover colors
              const getHoverColor = () => {
                switch(brand) {
                  case 'Audi': return 'group-hover:border-[#C0C0C0] group-hover:shadow-[#C0C0C0]/50'
                  case 'BMW': return 'group-hover:border-blue-600 group-hover:shadow-blue-600/50'
                  case 'Mercedes': return 'group-hover:border-gray-900 group-hover:shadow-gray-900/50'
                  case 'Porsche': return 'group-hover:border-red-600 group-hover:shadow-red-600/50'
                  case 'Volvo': return 'group-hover:border-green-600 group-hover:shadow-green-600/50'
                  default: return 'group-hover:border-orange-500 group-hover:shadow-orange-500/50'
                }
              }

              const getTextColor = () => {
                switch(brand) {
                  case 'Audi': return 'group-hover:text-[#C0C0C0]'
                  case 'BMW': return 'group-hover:text-blue-600'
                  case 'Mercedes': return 'group-hover:text-gray-900'
                  case 'Porsche': return 'group-hover:text-red-600'
                  case 'Volvo': return 'group-hover:text-green-600'
                  default: return 'group-hover:text-orange-500'
                }
              }
              
              return (
                <div key={brand} className="animate-fadeInUp" style={{ animationDelay: `${index * 0.1}s` }}>
                  <button
                    onClick={() => window.location.href = `/models/${encodeURIComponent(brand)}`}
                    className="group outline-none"
                  >
                    <div className={`relative w-36 h-36 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-white to-gray-50 
                                  border-4 border-[#004aad] shadow-lg 
                                  transition-all duration-300 
                                  group-hover:-translate-y-2 group-hover:shadow-2xl
                                  ${getHoverColor()}
                                  flex items-center justify-center
                                  overflow-hidden p-4`}>
                      
                      {/* Hover shine effect */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 
                                    bg-gradient-to-tr from-white/60 via-transparent to-transparent 
                                    transition-opacity duration-500"></div>
                      
                      {/* Brand Logo */}
                      <img 
                        src={brandLogos[brand]} 
                        alt={brand}
                        className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          // Show fallback text
                          const parent = e.target.parentElement;
                          const fallback = document.createElement('span');
                          fallback.className = `text-xl font-bold text-[#004aad] ${getTextColor()} transition-colors duration-300`;
                          fallback.textContent = brand;
                          parent.appendChild(fallback);
                        }}
                      />
                    </div>
                    
                    {/* Brand name below button */}
                    <p className={`text-center mt-3 font-semibold text-gray-700 ${getTextColor()} transition-colors duration-300`}>
                      {brand}
                    </p>
                  </button>
                </div>
              )
            })}
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

          {/* Psychological Sales Section */}
          <div className="mb-20 bg-gradient-to-r from-[#004aad]/5 via-white to-[#004aad]/5 rounded-3xl p-10">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-6" style={{ color: '#004aad' }}>
                Ihre Sicherheit beginnt mit dem richtigen Reifen
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {/* Left Column - Emotional Triggers */}
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">⚠️</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">Bei Nässe doppelt so langer Bremsweg</h3>
                      <p className="text-gray-600 text-sm">Abgefahrene Reifen verlieren bis zu 80% ihrer Haftung. Bei 100 km/h bedeutet das lebensentscheidende Meter.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">🛑</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">Aquaplaning-Risiko steigt dramatisch</h3>
                      <p className="text-gray-600 text-sm">Bereits ab 3 mm Profiltiefe verdoppelt sich die Aquaplaning-Gefahr. Neue Reifen retten Sie in kritischen Situationen.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">💰</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">Bis zu 15% Spritersparnis</h3>
                      <p className="text-gray-600 text-sm">Moderne Reifen reduzieren den Rollwiderstand. Sie sparen nicht nur Geld, sondern schonen auch die Umwelt.</p>
                    </div>
                  </div>
                </div>

                {/* Right Column - Trust Building */}
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">🇩🇪</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">Made für deutsche Straßen</h3>
                      <p className="text-gray-600 text-sm">TÜV/ECE geprüft. Entwickelt für Autobahnen, Landstraßen und das wechselhafte deutsche Wetter.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">🔇</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">Bis zu 30% leiser</h3>
                      <p className="text-gray-600 text-sm">Genießen Sie die Ruhe im Innenraum. Neue Reifen reduzieren das Abrollgeräusch deutlich.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">🛡️</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">Ihre Familie verdient das Beste</h3>
                      <p className="text-gray-600 text-sm">Investieren Sie in Sicherheit. 80% aller Pannen durch Reifenschäden wären mit neuen Reifen vermeidbar gewesen.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="text-center bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                <p className="text-lg text-gray-700 mb-3">
                  <span className="font-bold">Handeln Sie jetzt:</span> Ihre aktuellen Reifen sind im Durchschnitt <span className="text-[#004aad] font-bold">3,2 Jahre</span> alt.
                </p>
                <p className="text-md text-gray-600 mb-4">
                  Ab 6 Jahren steigt das Risiko für Risse und Materialermüdung exponentiell. 
                  <span className="font-semibold"> Schützen Sie sich und Ihre Familie.</span>
                </p>
                <button 
                  onClick={() => window.location.href = '/models'}
                  className="inline-block bg-gradient-to-r from-[#004aad] to-orange-500 
                           text-white px-8 py-3 rounded-lg font-semibold
                           hover:from-[#003a8a] hover:to-orange-600 
                           transition-all transform hover:scale-105 
                           shadow-lg hover:shadow-xl"
                >
                  Jetzt Sicherheit sichern →
                </button>
              </div>
            </div>
          </div>

          {/* Tyre Brand Showcase */}
          <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-center mb-8" style={{ color: '#004aad' }}>
              Unsere Premium-Marken
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {uniqueTyreBrands.map((brand, index) => {
                const productCount = tyresData.filter(t => t.tyreBrand === brand).length
                return (
                  <button
                    key={brand}
                    onClick={() => window.location.href = `/models?tyreBrand=${encodeURIComponent(brand)}`}
                    className="group relative transform hover:scale-105 transition-all duration-300 hover:-translate-y-1 cursor-pointer w-full"
                  >
                    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all p-4 text-center border-2 border-transparent hover:border-[#004aad]/20">
                      {/* Brand Icon/Initial */}
                      <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-gradient-to-br from-[#004aad]/10 to-gray-100 flex items-center justify-center">
                        <span className="text-lg font-bold text-[#004aad] group-hover:text-orange-500 transition-colors duration-300">
                          {brand.charAt(0)}
                        </span>
                      </div>
                      
                      {/* Brand Name */}
                      <span className="text-sm font-semibold text-gray-800 group-hover:text-[#004aad] transition-colors">
                        {brand}
                      </span>
                      
                      {/* Product Count */}
                      <p className="text-xs text-gray-500 mt-1">
                        {productCount} Produkte
                      </p>
                    </div>
                  </button>
                )
              })}
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
