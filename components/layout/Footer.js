import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-2xl font-bold mb-4">GAAR</h3>
            <p className="text-sm text-gray-400">
              Ihr zuverlässiger Partner für hochwertige Reifen und Räder in Deutschland.
              TÜV/ECE zertifiziert für Ihre Sicherheit.
            </p>
            <div className="mt-4">
              <p className="text-sm text-gray-400">0800 - GAAR TYRE</p>
              <p className="text-sm text-gray-400">info@gaar.de</p>
            </div>
          </div>

          {/* Rechtliches */}
          <div>
            <h4 className="text-white font-semibold mb-4">Rechtliches</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Impressum</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Datenschutz</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">AGB</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Widerrufsrecht</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">TÜV/ECE Hinweis</Link></li>
            </ul>
          </div>

          {/* Service */}
          <div>
            <h4 className="text-white font-semibold mb-4">Service</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Versandbedingungen</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Zahlungsarten</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">100 Tage Rückgabe</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Persönliche Beratung</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Garantie</Link></li>
            </ul>
          </div>

          {/* Öffnungszeiten */}
          <div>
            <h4 className="text-white font-semibold mb-4">Kontakt</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Mo-Fr: 9:00 - 18:00</li>
              <li>Sa: 10:00 - 14:00</li>
              <li className="pt-2">Sichere Zahlung mit:</li>
              <li>VISA, Mastercard, PayPal</li>
            </ul>
          </div>
        </div>

        {/* Legal Notes */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-xs text-gray-500">
          <p className="mb-2">
            * Alle Preise verstehen sich inkl. gesetzlicher Mehrwertsteuer und zzgl. Versandkosten.
            TÜV/ECE-geprüfte Qualität für deutsche Straßen.
          </p>
          <p>
            § 312g BGB Widerrufsrecht: Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen.
            Haftungsausschluss: Für die Richtigkeit der technischen Daten übernehmen wir keine Haftung.
          </p>
        </div>
      </div>
    </footer>
  )
}
