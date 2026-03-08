import Head from 'next/head'
import Image from 'next/image'
import tyresData from '../data/tyres.json'

// Extract unique car brands for model buttons
const uniqueCarBrands = [...new Set(tyresData.map(item => item.brand))].sort()

// Extract unique tyre brands for showcase
const uniqueTyreBrands = [...new Set(tyresData.map(item => item.tyreBrand))].sort()

export default function Home() {
  // Brand logo mapping with most reliable working URLs (Wikimedia Commons)
  const brandLogos = {
  'Audi': 'https://1000logos.net/wp-content/uploads/2018/05/Audi-logo.png',
  'BMW': 'https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg',
  'Mercedes': 'https://upload.wikimedia.org/wikipedia/commons/3/32/Mercedes-Benz_Star_2022.svg',
  'Volvo': 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Volvo_iron_mark.svg',
  'Porsche': 'https://1000logos.net/wp-content/uploads/2018/02/Porsche-Logo.png'
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

      {/* Car Brand Selection with Logos - German Flag Colors for First Three, Green/Orange for Last Two */}
      <div id="models" className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Choose your car brand
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Find the perfect tires for your vehicle. All brands TÜV/ECE tested.
          </p>
          
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {uniqueCarBrands.map((brand, index) => {
              // Brand-specific hover colors
              // First three: German flag colors (Black, Red, Gold)
              // Last two: Green (Volvo) and Orange (Porsche)
              const hoverColor = {
                'Audi': 'group-hover:border-black group-hover:shadow-black/50',
                'BMW': 'group-hover:border-red-600 group-hover:shadow-red-600/50',
                'Mercedes': 'group-hover:border-yellow-500 group-hover:shadow-yellow-500/50',
                'Porsche': 'group-hover:border-orange-500 group-hover:shadow-orange-500/50',
                'Volvo': 'group-hover:border-green-600 group-hover:shadow-green-600/50'
              }[brand]

              // Background glow color on hover
              const bgGlow = {
                'Audi': 'group-hover:bg-black/5',
                'BMW': 'group-hover:bg-red-600/5',
                'Mercedes': 'group-hover:bg-yellow-500/5',
                'Porsche': 'group-hover:bg-orange-500/5',
                'Volvo': 'group-hover:bg-green-600/5'
              }[brand]
              
              return (
                <div key={brand} className="animate-fadeInUp" style={{ animationDelay: `${index * 0.1}s` }}>
                  <button
                    onClick={() => window.location.href = `/models/${encodeURIComponent(brand)}`}
                    className="group outline-none"
                  >
                    {/* Large circle with brand logo */}
                    <div className={`relative w-40 h-40 md:w-48 md:h-48 rounded-full 
                                  bg-white shadow-xl 
                                  transition-all duration-500 
                                  group-hover:-translate-y-3 group-hover:shadow-2xl
                                  ${hoverColor}
                                  ${bgGlow}
                                  flex items-center justify-center
                                  overflow-hidden border-8 border-[#004aad] p-6`}>
                      
                      {/* Hover shine effect */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 
                                    bg-gradient-to-tr from-white/60 via-transparent to-transparent 
                                    transition-opacity duration-500"></div>
                      
                      {/* Brand Logo */}
                      <img 
                        src={brandLogos[brand]} 
                        alt={`${brand} logo`}
                        className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          // Show fallback text if logo fails to load
                          const parent = e.target.parentElement;
                          const fallback = document.createElement('span');
                          fallback.className = 'text-4xl md:text-5xl font-bold text-[#004aad]';
                          fallback.textContent = brand.charAt(0);
                          parent.appendChild(fallback);
                        }}
                      />
                    </div>
                    
                    {/* Brand name below button */}
                    <p className={`text-center mt-3 text-base font-medium text-gray-700 
                                ${brand === 'Audi' ? 'group-hover:text-black' : 
                                  brand === 'BMW' ? 'group-hover:text-red-600' :
                                  brand === 'Mercedes' ? 'group-hover:text-yellow-500' :
                                  brand === 'Porsche' ? 'group-hover:text-orange-500' :
                                  'group-hover:text-green-600'} 
                                transition-colors duration-500`}>
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


{/* Warum neue Reifen? - Psychologisch optimierter Verkaufstext */}
<div className="py-16 bg-gradient-to-br from-blue-50 to-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
    {/* Haupüberschrift - Emotional und direkt */}
    <div className="text-center mb-12">
      <h2 className="text-4xl md:text-5xl font-bold text-[#004aad] mb-4">
        Ihre Sicherheit beginnt auf 4 Handflächen
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Die einzige Verbindung zwischen Ihrem Fahrzeug und der Straße. 
        Hier entscheiden sich Meter, die über alles entscheiden können.
      </p>
    </div>

    {/* Statistik Banner - Schockierend aber glaubwürdig */}
    <div className="bg-red-600 text-white rounded-2xl p-8 mb-12 text-center shadow-xl">
      <p className="text-3xl md:text-4xl font-bold mb-2">
        🇩🇪 Reifenversagen ist 4x gefährlicher als Trunkenheit am Steuer
      </p>
      <p className="text-xl opacity-90">
        Quelle: Auto Express UK – Allein in Großbritannien: 7.500 Tote oder Schwerverletzte jährlich durch defekte Reifen [citation:1]
      </p>
    </div>

    {/* 3-Säulen der Sicherheit */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
      
      {/* Säule 1: Bremsweg */}
      <div className="bg-white rounded-2xl shadow-xl p-8 transform hover:scale-105 transition-all duration-300">
        <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-6 mx-auto">
          <span className="text-4xl">🛑</span>
        </div>
        <h3 className="text-2xl font-bold text-center mb-4">Lebensentscheidende Meter</h3>
        <p className="text-gray-600 text-center">
          Bei 100 km/h verlängert sich Ihr Bremsweg mit abgefahrenen Reifen (unter 3 mm Profil) 
          um <span className="font-bold text-red-600">über 18 Meter</span> – mehr als 4 PKW-Längen. [citation:3]
        </p>
        <div className="mt-6 h-4 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-red-600 rounded-full" style={{ width: '60%' }}></div>
        </div>
        <p className="text-sm text-gray-500 mt-2 text-center">60% längerer Bremsweg bei Nässe</p>
      </div>

      {/* Säule 2: Aquaplaning */}
      <div className="bg-white rounded-2xl shadow-xl p-8 transform hover:scale-105 transition-all duration-300 border-2 border-blue-200">
        <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
          <span className="text-4xl">🌊</span>
        </div>
        <h3 className="text-2xl font-bold text-center mb-4">Aquaplaning-Risiko explodiert</h3>
        <p className="text-gray-600 text-center">
          Bereits bei 3 mm Profiltiefe verdoppelt sich Ihre Aquaplaning-Gefahr. 
          <span className="font-bold text-blue-600"> Neue Reifen</span> mit 8 mm Profil leiten 
          Wasser doppelt so effektiv ab. [citation:3]
        </p>
        <div className="mt-6 flex justify-center space-x-1">
          {[...Array(8)].map((_, i) => (
            <div key={i} className={`w-3 h-8 ${i < 3 ? 'bg-red-400' : 'bg-green-500'} rounded-full`}></div>
          ))}
        </div>
        <p className="text-sm text-gray-500 mt-2 text-center">8 mm vs. 3 mm – der Unterschied zwischen Sicherheit und Risiko</p>
      </div>

      {/* Säule 3: Materialermüdung */}
      <div className="bg-white rounded-2xl shadow-xl p-8 transform hover:scale-105 transition-all duration-300">
        <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mb-6 mx-auto">
          <span className="text-4xl">⏳</span>
        </div>
        <h3 className="text-2xl font-bold text-center mb-4">Zeitbombe Alterung</h3>
        <p className="text-gray-600 text-center">
          Auch bei ausreichendem Profil: Nach <span className="font-bold text-yellow-600">6-8 Jahren</span> 
          wird das Gummi spröde. Mikrorisse entstehen – unsichtbar, aber tödlich bei hoher Belastung. [citation:3]
        </p>
        <div className="mt-6 flex justify-center">
          <div className="w-32 h-32 rounded-full border-8 border-yellow-400 border-t-transparent animate-spin"></div>
        </div>
        <p className="text-sm text-gray-500 mt-2 text-center">DOT-Nummer prüfen: Die letzten beiden Ziffern = Baujahr</p>
      </div>
    </div>

    {/* Wirtschaftliche Vorteile - Rationale Argumente für den Kopf */}
    <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-3xl p-10 mb-16">
      <h3 className="text-3xl font-bold text-center mb-10 text-gray-800">
        Warum neue Reifen sich für Sie auszahlen
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Linke Spalte - Spritersparnis */}
        <div className="flex items-start gap-6">
          <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center flex-shrink-0 text-white text-2xl font-bold">
            ⛽
          </div>
          <div>
            <h4 className="text-xl font-bold mb-2">Bis zu 15% Spritersparnis</h4>
            <p className="text-gray-600">
              Moderne Reifen mit optimiertem Rollwiderstand können Ihren Kraftstoffverbrauch 
              um <span className="font-bold">1-2% pro 10% weniger Rollwiderstand</span> senken. [citation:1]
            </p>
          </div>
        </div>

        {/* Rechte Spalte - Langlebigkeit */}
        <div className="flex items-start gap-6">
          <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center flex-shrink-0 text-white text-2xl font-bold">
            🔄
          </div>
          <div>
            <h4 className="text-xl font-bold mb-2">Doppelte Lebensdauer durch Rotation</h4>
            <p className="text-gray-600">
              Regelmäßiges Rotieren (vorne/hinten) kann die Lebensdauer Ihrer Reifen 
              <span className="font-bold"> verdoppeln</span>. Trotzdem machen es nur 28% der Fahrer. [citation:4]
            </p>
          </div>
        </div>

        {/* Linke Spalte - EU-Label */}
        <div className="flex items-start gap-6">
          <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center flex-shrink-0 text-white text-2xl font-bold">
            🏷️
          </div>
          <div>
            <h4 className="text-xl font-bold mb-2">A-A-A Label spart bares Geld</h4>
            <p className="text-gray-600">
              Top-bewertete Reifen (A für Nasshaftung, A für Rollwiderstand) reduzieren 
              Spritkosten und Bremswege gleichzeitig. [citation:2]
            </p>
          </div>
        </div>

        {/* Rechte Spalte - Premium vs. Budget */}
        <div className="flex items-start gap-6">
          <div className="w-16 h-16 bg-amber-500 rounded-2xl flex items-center justify-center flex-shrink-0 text-white text-2xl font-bold">
            💎
          </div>
          <div>
            <h4 className="text-xl font-bold mb-2">Premium lohnt sich</h4>
            <p className="text-gray-600">
              Hochwertige Reifen enthalten Aramid-Fasern (wie in kugelsicherer Weste) für 
              höhere Stabilität und längere Lebensdauer. [citation:4]
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Gesetzliche Pflichten & Empfehlungen */}
    <div className="bg-gray-800 text-white rounded-3xl p-10 mb-16">
      <h3 className="text-3xl font-bold text-center mb-8">Was Sie in Deutschland wissen müssen</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <div className="border border-gray-600 rounded-xl p-6">
          <div className="text-3xl mb-3">⚖️</div>
          <h4 className="text-xl font-bold mb-3">Mindestprofiltiefe</h4>
          <p className="text-gray-300 mb-2">Gesetzlich: 1,6 mm</p>
          <p className="text-green-400 font-bold">Sicherheitsexperten: 4 mm für Winter, 3 mm für Sommer</p>
        </div>

        <div className="border border-gray-600 rounded-xl p-6">
          <div className="text-3xl mb-3">❄️</div>
          <h4 className="text-xl font-bold mb-3">Alpine-Symbol (3PMSF)</h4>
          <p className="text-gray-300 mb-2">Seit Oktober 2024 Pflicht für Winterreifen</p>
          <p className="text-yellow-400">M+S Reifen verlieren ihre Zulassung bei winterlichen Bedingungen</p>
        </div>

        <div className="border border-gray-600 rounded-xl p-6">
          <div className="text-3xl mb-3">🔧</div>
          <h4 className="text-xl font-bold mb-3">Neue Reifen immer hinten</h4>
          <p className="text-gray-300 mb-2">Beim paarweisen Wechsel:</p>
          <p className="text-blue-400 font-bold">Neue Reifen gehören auf die Hinterachse</p>
          <p className="text-sm text-gray-400">Verhindert Übersteuern bei Aquaplaning [citation:6]</p>
        </div>
      </div>
    </div>

    {/* Call-to-Action - Jetzt handeln */}
    <div className="text-center">
      <div className="bg-gradient-to-r from-[#004aad] to-blue-600 text-white rounded-3xl p-12 shadow-2xl">
        <h3 className="text-3xl md:text-4xl font-bold mb-4">
          Ihre Reifen sind durchschnittlich 3,2 Jahre alt
        </h3>
        <p className="text-xl mb-8 opacity-90">
          Ab 6 Jahren steigt das Risiko für Materialversagen exponentiell. 
          Handeln Sie jetzt – für Ihre Familie, für Ihre Sicherheit.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => window.location.href = '/models'}
            className="bg-white text-[#004aad] px-8 py-4 rounded-xl font-bold text-lg
                     hover:bg-gray-100 transition-all transform hover:scale-105 
                     shadow-xl hover:shadow-2xl"
          >
            Jetzt Reifen prüfen & wechseln →
          </button>
          
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg
                     hover:bg-white/10 transition-all transform hover:scale-105"
          >
            Beratung anfordern
          </button>
        </div>
        
        <p className="text-sm mt-8 opacity-75">
          * Kostenloser Reifen-Check in Ihrer Nähe. Persönliche Beratung durch Experten.
        </p>
      </div>
    </div>

    {/* Vertrauenssiegel */}
    <div className="flex flex-wrap justify-center gap-8 mt-12">
      <div className="flex items-center gap-2">
        <span className="text-green-500 text-2xl">✓</span>
        <span className="text-gray-600">TÜV/ECE geprüft</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-green-500 text-2xl">✓</span>
        <span className="text-gray-600">100 Tage Rückgaberecht</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-green-500 text-2xl">✓</span>
        <span className="text-gray-600">5 Jahre Garantie</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-green-500 text-2xl">✓</span>
        <span className="text-gray-600">Montage deutschlandweit</span>
      </div>
    </div>
  </div>
</div>
