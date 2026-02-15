import Head from 'next/head'
import Link from 'next/link'

export default function Widerruf() {
  return (
    <>
      <Head>
        <title>Widerrufsrecht - GAAR Reifen & Räder</title>
      </Head>

      <div className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-[#004aad] mb-4">Widerrufsrecht</h1>
            <p className="text-gray-600">für Verbraucher gemäß § 312g BGB</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-8">
            
            {/* Widerrufsbelehrung */}
            <section className="border-b border-gray-200 pb-6">
              <h2 className="text-2xl font-bold text-[#004aad] mb-4">Widerrufsbelehrung</h2>
              
              <div className="space-y-4 text-gray-700">
                <h3 className="text-lg font-semibold">Widerrufsrecht</h3>
                <p>Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen.</p>
                
                <p>Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag, an dem Sie oder ein von Ihnen benannter Dritter, der nicht der Beförderer ist, die Waren in Besitz genommen haben bzw. hat.</p>
                
                <p>Um Ihr Widerrufsrecht auszuüben, müssen Sie uns</p>
                
                <div className="bg-gray-50 p-4 rounded-lg my-3">
                  <p className="font-semibold">GAAR GmbH</p>
                  <p>Musterstraße 123<br />12345 Berlin</p>
                  <p>E-Mail: widerruf@gaar.de</p>
                  <p>Telefon: 0800 - GAAR TYRE</p>
                  <p>Fax: 030 - 12345678</p>
                </div>
                
                <p>mittels einer eindeutigen Erklärung (z.B. ein mit der Post versandter Brief, Telefax oder E-Mail) über Ihren Entschluss, diesen Vertrag zu widerrufen, informieren. Sie können dafür das beigefügte Muster-Widerrufsformular verwenden, das jedoch nicht vorgeschrieben ist.</p>
                
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                  <p className="text-sm">Zur Wahrung der Widerrufsfrist reicht es aus, dass Sie die Mitteilung über die Ausübung des Widerrufsrechts vor Ablauf der Widerrufsfrist absenden.</p>
                </div>
              </div>
            </section>

            {/* Folgen des Widerrufs */}
            <section className="border-b border-gray-200 pb-6">
              <h2 className="text-2xl font-bold text-[#004aad] mb-4">Folgen des Widerrufs</h2>
              
              <div className="space-y-4 text-gray-700">
                <p>Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen, die wir von Ihnen erhalten haben, einschließlich der Lieferkosten (mit Ausnahme der zusätzlichen Kosten, die sich daraus ergeben, dass Sie eine andere Art der Lieferung als die von uns angebotene, günstigste Standardlieferung gewählt haben), unverzüglich und spätestens binnen vierzehn Tagen ab dem Tag zurückzuzahlen, an dem die Mitteilung über Ihren Widerruf dieses Vertrags bei uns eingegangen ist. Für diese Rückzahlung verwenden wir dasselbe Zahlungsmittel, das Sie bei der ursprünglichen Transaktion eingesetzt haben, es sei denn, mit Ihnen wurde ausdrücklich etwas anderes vereinbart; in keinem Fall werden Ihnen wegen dieser Rückzahlung Entgelte berechnet.</p>
                
                <p>Wir können die Rückzahlung verweigern, bis wir die Waren wieder zurückerhalten haben oder bis Sie den Nachweis erbracht haben, dass Sie die Waren zurückgesandt haben, je nachdem, welches der frühere Zeitpunkt ist.</p>
                
                <p>Sie haben die Waren unverzüglich und in jedem Fall spätestens binnen vierzehn Tagen ab dem Tag, an dem Sie uns über den Widerruf dieses Vertrags unterrichten, an uns zurückzusenden oder zu übergeben. Die Frist ist gewahrt, wenn Sie die Waren vor Ablauf der Frist von vierzehn Tagen absenden.</p>
                
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="font-semibold">Sie tragen die unmittelbaren Kosten der Rücksendung der Waren.</p>
                </div>
                
                <p>Sie müssen für einen etwaigen Wertverlust der Waren nur aufkommen, wenn dieser Wertverlust auf einen zur Prüfung der Beschaffenheit, Eigenschaften und Funktionsweise der Waren nicht notwendigen Umgang mit ihnen zurückzuführen ist.</p>
              </div>
            </section>

            {/* Muster-Widerrufsformular */}
            <section className="border-b border-gray-200 pb-6">
              <h2 className="text-2xl font-bold text-[#004aad] mb-4">Muster-Widerrufsformular</h2>
              
              <p className="text-gray-700 mb-4">(Wenn Sie den Vertrag widerrufen wollen, können Sie dieses Formular ausfüllen und zurücksenden.)</p>
              
              <div className="border-2 border-gray-200 rounded-lg p-6 bg-gray-50">
                <p className="font-bold mb-4">An:</p>
                <p className="mb-6">GAAR GmbH<br />Musterstraße 123<br />12345 Berlin<br />E-Mail: widerruf@gaar.de</p>
                
                <p className="mb-4">Hiermit widerrufe(n) ich/wir (*) den von mir/uns (*) abgeschlossenen Vertrag über den Kauf der folgenden Waren (*)/die Erbringung der folgenden Dienstleistung (*)</p>
                
                <p className="mb-4">_________________________________________________</p>
                
                <p className="mb-4">Bestellt am (*)/erhalten am (*): ___________________________</p>
                
                <p className="mb-4">Name des/der Verbraucher(s): ___________________________</p>
                
                <p className="mb-4">Anschrift des/der Verbraucher(s): ___________________________</p>
                
                <p className="mb-4">Unterschrift des/der Verbraucher(s) (nur bei Mitteilung auf Papier): ___________________________</p>
                
                <p>Datum: ___________________________</p>
                
                <p className="text-xs text-gray-500 mt-4">(*) Unzutreffendes streichen.</p>
              </div>
            </section>

            {/* Besondere Hinweise */}
            <section>
              <h2 className="text-xl font-bold text-[#004aad] mb-3">Wichtige Hinweise zum Widerrufsrecht</h2>
              
              <div className="space-y-3 text-gray-700">
                <p><span className="font-semibold">Ausschluss des Widerrufsrechts:</span> Das Widerrufsrecht besteht nicht bei Verträgen zur Lieferung von Waren, die nicht vorgefertigt sind und für deren Herstellung eine individuelle Auswahl oder Bestimmung durch den Verbraucher maßgeblich ist oder die eindeutig auf die persönlichen Bedürfnisse des Verbrauchers zugeschnitten sind (Sonderanfertigungen).</p>
                
                <p><span className="font-semibold">Erlöschen des Widerrufsrechts:</span> Das Widerrufsrecht erlischt vorzeitig bei Verträgen zur Lieferung versiegelter Waren, die aus Gründen des Gesundheitsschutzes oder der Hygiene nicht zur Rückgabe geeignet sind, wenn ihre Versiegelung nach der Lieferung entfernt wurde.</p>
                
                <p><span className="font-semibold">Rücksendekosten:</span> Bei einem Widerruf tragen Sie die unmittelbaren Kosten der Rücksendung. Die Rücksendekosten betragen in der Regel zwischen 15 und 30 Euro, abhängig von Größe und Gewicht der Ware.</p>
              </div>
            </section>

            {/* §312g BGB Hinweis */}
            <div className="bg-gray-100 rounded-lg p-4 mt-4">
              <p className="text-sm text-gray-600">
                <span className="font-semibold">§ 312g BGB Widerrufsrecht:</span> Gemäß § 312g Absatz 1 BGB steht Verbrauchern bei außerhalb von Geschäftsräumen geschlossenen Verträgen und Fernabsatzverträgen ein Widerrufsrecht nach § 355 BGB zu, sofern nicht die Ausnahmen des § 312g Absatz 2 BGB vorliegen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
