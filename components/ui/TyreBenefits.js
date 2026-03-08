import Image from 'next/image'
import { useState } from 'react'

export default function TyreBenefits() {
  const [activeTab, setActiveTab] = useState('safety')

  return (
    <div className="py-16 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Headline */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#004aad] mb-4">
            Ihre Sicherheit beginnt auf 4 Handflächen
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Die einzige Verbindung zwischen Ihrem Fahrzeug und der Straße. 
            Hier entscheiden sich Meter, die über alles entscheiden können.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex rounded-lg bg-gray-100 p-1">
            <button
              onClick={() => setActiveTab('safety')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'safety' 
                  ? 'bg-[#004aad] text-white shadow-lg' 
                  : 'text-gray-600 hover:text-[#004aad]'
              }`}
            >
              🛡️ Sicherheit
            </button>
            <button
              onClick={() => setActiveTab('economy')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'economy' 
                  ? 'bg-[#004aad] text-white shadow-lg' 
                  : 'text-gray-600 hover:text-[#004aad]'
              }`}
            >
              ⚡ Effizienz
            </button>
            <button
              onClick={() => setActiveTab('legal')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'legal' 
                  ? 'bg-[#004aad] text-white shadow-lg' 
                  : 'text-gray-600 hover:text-[#004aad]'
              }`}
            >
              ⚖️ Rechtliches
            </button>
          </div>
        </div>

        {/* Safety Tab Content - with your 3 Pexels images */}
        {activeTab === 'safety' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Images */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                {/* First image - New tyre */}
                <div className="relative h-48 rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-all">
                  <Image
                    src="https://images.pexels.com/photos/9846091/pexels-photo-9846091.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="New tyre with deep tread"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                    <span className="text-white font-bold">8 mm Profil</span>
                  </div>
                </div>
                
                {/* Second image - Worn tyre */}
                <div className="relative h-48 rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-all mt-8">
                  <Image
                    src="https://images.pexels.com/photos/1824270/pexels-photo-1824270.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Worn tyre with low tread"
                    fill
                    className="object-cover grayscale"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                    <span className="text-white font-bold">1.6 mm Profil</span>
                  </div>
                </div>
                
                {/* Third image - Braking distance */}
                <div className="col-span-2 relative h-64 rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-all">
                  <Image
                    src="https://images.pexels.com/photos/770536/pexels-photo-770536.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Car on road demonstrating braking distance"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-red-600/80 to-transparent flex items-center p-8">
                    <div>
                      <span className="text-white text-3xl font-bold block">18m</span>
                      <span className="text-white">längerer Bremsweg bei 100 km/h</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Text */}
            <div className="space-y-6">
              <div className="bg-red-600 text-white rounded-2xl p-6 shadow-xl">
                <p className="text-2xl font-bold mb-2">
                  🇩🇪 Reifenversagen ist 4x gefährlicher als Trunkenheit am Steuer
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <span className="text-2xl">🛑</span> Lebensentscheidende Meter
                </h3>
                <p className="text-gray-600 mb-4">
                  Bei 100 km/h verlängert sich Ihr Bremsweg mit abgefahrenen Reifen (unter 3 mm Profil) 
                  um <span className="font-bold text-red-600">über 18 Meter</span> – mehr als 4 PKW-Längen.
                </p>
                <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-red-600 rounded-full" style={{ width: '60%' }}></div>
                </div>
                <p className="text-sm text-gray-500 mt-2">60% längerer Bremsweg bei Nässe</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <span className="text-2xl">🌊</span> Aquaplaning-Risiko explodiert
                </h3>
                <p className="text-gray-600 mb-4">
                  Bereits bei 3 mm Profiltiefe verdoppelt sich Ihre Aquaplaning-Gefahr.
                </p>
                <div className="flex justify-center space-x-1">
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className={`w-4 h-12 ${i < 3 ? 'bg-red-400' : 'bg-green-500'} rounded-full`}></div>
                  ))}
                </div>
                <p className="text-sm text-gray-500 mt-2">8 mm vs. 3 mm – der Unterschied zwischen Sicherheit und Risiko</p>
              </div>
            </div>
          </div>
        )}

        {/* Economy Tab Content - with your Pexels image */}
        {activeTab === 'economy' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-green-600 text-white rounded-2xl p-6 shadow-xl">
                <p className="text-3xl font-bold mb-2">Bis zu 15%</p>
                <p className="text-xl">Spritersparnis mit modernen Reifen</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <span className="text-2xl">⛽</span> Rollwiderstand optimieren
                </h3>
                <p className="text-gray-600">
                  Moderne Reifen mit optimiertem Rollwiderstand können Ihren Kraftstoffverbrauch 
                  um <span className="font-bold">1-2% pro 10% weniger Rollwiderstand</span> senken.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <span className="text-2xl">🔄</span> Doppelte Lebensdauer
                </h3>
                <p className="text-gray-600">
                  Regelmäßiges Rotieren (vorne/hinten) kann die Lebensdauer Ihrer Reifen 
                  <span className="font-bold"> verdoppeln</span>. Trotzdem machen es nur 28% der Fahrer.
                </p>
              </div>
            </div>

            {/* Image for Economy */}
            <div className="relative">
              <Image
                src="https://images.pexels.com/photos/5975534/pexels-photo-5975534.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Fuel efficiency concept with modern car"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-yellow-400 rounded-xl p-4 shadow-xl">
                <p className="text-2xl font-bold">€400</p>
                <p className="text-sm">Ersparnis pro Jahr</p>
              </div>
            </div>
          </div>
        )}

        {/* Legal Tab Content - with your 3 Pexels images */}
        {activeTab === 'legal' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* First card - Mindestprofiltiefe */}
            <div className="bg-gray-800 text-white rounded-2xl p-8 shadow-xl relative overflow-hidden group hover:scale-105 transition-all">
              <div className="absolute top-0 right-0 w-32 h-32 opacity-20 group-hover:opacity-40 transition-opacity">
                <Image
                  src="https://images.pexels.com/photos/2922140/pexels-photo-2922140.jpeg?auto=compress&cs=tinysrgb&w=200"
                  alt="Tyre tread closeup"
                  width={128}
                  height={128}
                  className="object-cover rounded-full"
                />
              </div>
              <div className="text-4xl mb-4">⚖️</div>
              <h3 className="text-xl font-bold mb-3">Mindestprofiltiefe</h3>
              <p className="text-gray-300 mb-2">Gesetzlich: <span className="text-white font-bold">1,6 mm</span></p>
              <p className="text-green-400 font-bold">Sicherheitsexperten: 4 mm für Winter</p>
            </div>

            {/* Second card - Alpine-Symbol */}
            <div className="bg-gray-800 text-white rounded-2xl p-8 shadow-xl relative overflow-hidden group hover:scale-105 transition-all">
              <div className="absolute top-0 right-0 w-32 h-32 opacity-20 group-hover:opacity-40 transition-opacity">
                <Image
                  src="https://images.pexels.com/photos/4435225/pexels-photo-4435225.jpeg?auto=compress&cs=tinysrgb&w=200"
                  alt="AMG wheels"
                  width={128}
                  height={128}
                  className="object-cover rounded-full"
                />
              </div>
              <div className="text-4xl mb-4">❄️</div>
              <h3 className="text-xl font-bold mb-3">Alpine-Symbol (3PMSF)</h3>
              <p className="text-gray-300 mb-2">Seit Oktober 2024 Pflicht</p>
              <p className="text-yellow-400 font-bold">M+S verliert Zulassung</p>
            </div>

            {/* Third card - Neue Reifen hinten */}
            <div className="bg-gray-800 text-white rounded-2xl p-8 shadow-xl relative overflow-hidden group hover:scale-105 transition-all">
              <div className="absolute top-0 right-0 w-32 h-32 opacity-20 group-hover:opacity-40 transition-opacity">
                <Image
                  src="https://images.pexels.com/photos/30479131/pexels-photo-30479131.jpeg?auto=compress&cs=tinysrgb&w=200"
                  alt="McLaren brake disc"
                  width={128}
                  height={128}
                  className="object-cover rounded-full"
                />
              </div>
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-bold mb-3">Neue Reifen hinten</h3>
              <p className="text-gray-300">Beim paarweisen Wechsel:</p>
              <p className="text-blue-400 font-bold">Neue Reifen gehören auf die Hinterachse</p>
              <p className="text-sm text-gray-400 mt-2">Verhindert Übersteuern bei Aquaplaning</p>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button 
            onClick={() => window.location.href = '/models'}
            className="bg-gradient-to-r from-[#004aad] to-blue-600 text-white px-10 py-5 rounded-xl 
                     font-bold text-xl hover:scale-105 transition-all shadow-2xl hover:shadow-3xl
                     relative overflow-hidden group"
          >
            <span className="relative z-10">Jetzt Sicherheit sichern →</span>
            <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </button>
        </div>

        {/* Trust Badges */}
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
  )
}
