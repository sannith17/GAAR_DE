import Head from 'next/head'
import Link from 'next/link'

export default function Impressum() {
  return (
    <>
      <Head>
        <title>Impressum - GAAR Reifen & Räder</title>
        <meta name="description" content="Offizielle Anbieterkennzeichnung der GAAR GmbH - Ihr Partner für TÜV/ECE zertifizierte Reifen und Räder in Deutschland." />
      </Head>

      <div className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-[#004aad] mb-4">Impressum</h1>
            <p className="text-gray-600">Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG)</p>
          </div>

          {/* Main Content */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-8">
            
            {/* Company Information */}
            <section className="border-b border-gray-200 pb-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Anbieterkennzeichnung</h2>
              <div className="space-y-2 text-gray-700">
                <p className="font-bold text-lg">GAAR GmbH</p>
                <p>Musterstraße 123<br />12345 Berlin</p>
                <p>Handelsregister: HRB 123456<br />Amtsgericht Berlin-Charlottenburg</p>
                <p>USt-IdNr.: DE123456789</p>
                <p className="text-sm text-gray-500 mt-2">(gemäß § 27a Umsatzsteuergesetz)</p>
              </div>
            </section>

            {/* Contact Information */}
            <section className="border-b border-gray-200 pb-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Kontakt</h2>
              <div className="space-y-2 text-gray-700">
                <p>Telefon: 0800 - GAAR TYRE (0800 - 4227 8973)</p>
                <p>Telefax: 030 - 12345678</p>
                <p>E-Mail: info@gaar.de</p>
                <p className="text-sm text-gray-500 mt-2">(Verfügbar Mo-Fr: 9:00 - 18:00 Uhr)</p>
              </div>
            </section>

            {/* Legal Representatives */}
            <section className="border-b border-gray-200 pb-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Vertretungsberechtigte Geschäftsführer</h2>
              <div className="space-y-1 text-gray-700">
                <p>Max Mustermann</p>
                <p>Maria Musterfrau</p>
              </div>
            </section>

            {/* Regulatory Information */}
            <section className="border-b border-gray-200 pb-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Aufsichtsbehörde</h2>
              <div className="space-y-2 text-gray-700">
                <p>Industrie- und Handelskammer Berlin</p>
                <p>Fasanenstraße 85<br />10623 Berlin</p>
                <p>www.ihk-berlin.de</p>
              </div>
            </section>

            {/* Berufsrechtliche Angaben */}
            <section className="border-b border-gray-200 pb-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Berufsrechtliche Angaben</h2>
              <div className="space-y-3 text-gray-700">
                <p>Zuständige Kammer: Industrie- und Handelskammer Berlin</p>
                <p>Verliehen in: Bundesrepublik Deutschland</p>
                <p>Berufsbezeichnung: Kaufmann im Einzelhandel (DE)</p>
              </div>
            </section>

            {/* Streitbeilegung */}
            <section className="border-b border-gray-200 pb-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Streitbeilegung</h2>
              <div className="space-y-4 text-gray-700">
                <div>
                  <h3 className="font-semibold mb-2">EU-Streitbeilegung</h3>
                  <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit, die Sie unter <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-[#004aad] hover:underline">https://ec.europa.eu/consumers/odr/</a> finden. Verbraucher haben die Möglichkeit, diese Plattform für die Beilegung ihrer Streitigkeiten zu nutzen.</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Verbraucherstreitbeilegung</h3>
                  <p>Wir sind grundsätzlich bereit, an außergerichtlichen Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen. Zuständig ist die Allgemeine Verbraucherschlichtungsstelle des Zentrums für Schlichtung e.V., Straßburger Straße 8, 77694 Kehl am Rhein, <a href="www.verbraucher-schlichter.de" target="_blank" rel="noopener noreferrer" className="text-[#004aad] hover:underline">www.verbraucher-schlichter.de</a>.</p>
                </div>
              </div>
            </section>

            {/* Haftungshinweise */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Haftungshinweise</h2>
              <div className="space-y-3 text-gray-700 text-sm">
                <p><span className="font-semibold">Haftung für Inhalte:</span> Als Diensteanbieter sind wir gemäß § 7 Abs.1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>
                
                <p><span className="font-semibold">Haftung für Links:</span> Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.</p>
                
                <p><span className="font-semibold">Urheberrecht:</span> Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.</p>
              </div>
            </section>

            {/* Update Information */}
            <div className="bg-gray-50 rounded-lg p-4 mt-6">
              <p className="text-sm text-gray-500">
                Stand: Februar 2026 | Alle Angaben ohne Gewähr. Bei rechtlichen Fragen konsultieren Sie bitte einen Rechtsanwalt.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
