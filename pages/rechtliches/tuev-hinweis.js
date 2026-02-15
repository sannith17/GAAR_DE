import Head from 'next/head'

export default function TuevHinweis() {
  return (
    <>
      <Head>
        <title>TÜV/ECE Hinweis - GAAR Reifen & Räder</title>
      </Head>

      <div className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            
            <h1 className="text-3xl font-bold text-[#004aad] mb-6">TÜV/ECE Zertifizierung und Hinweise</h1>
            
            <div className="space-y-6 text-gray-700">
              <section>
                <h2 className="text-xl font-semibold mb-3">Allgemeine Informationen zur Typgenehmigung</h2>
                <p>Alle von GAAR angebotenen Reifen und Räder entsprechen den Anforderungen der ECE-Regelung Nr. 30 (Einheitliche Bedingungen für die Genehmigung der Luftreifen für Kraftfahrzeuge und ihre Anhänger) und ECE-Regelung Nr. 54 (Reifen für Nutzfahrzeuge) sowie der Richtlinie 92/23/EWG.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">ECE-Prüfzeichen</h2>
                <p>Jeder unserer Reifen ist mit dem ECE-Prüfzeichen (kleines "e" in einem Kreis, gefolgt von einer Kennnummer des Genehmigungsstaates) auf der Reifenflanke gekennzeichnet. Dies bestätigt, dass der Reifen nach international harmonisierten technischen Vorschriften geprüft und genehmigt wurde [citation:5].</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">TÜV/ECE Zertifizierte Qualität</h2>
                <p>Unsere Produkte erfüllen die strengen Sicherheitsanforderungen des deutschen Straßenverkehrs. Die TÜV/ECE-Zertifizierung garantiert:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Höchste Sicherheitsstandards für den Betrieb auf öffentlichen Straßen</li>
                  <li>Regelmäßige Qualitätskontrollen während der Produktion</li>
                  <li>Einhaltung der EU-weiten Umwelt- und Sicherheitsrichtlinien</li>
                  <li>Rückverfolgbarkeit der Produktionschargen</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">Produktsicherheit gemäß GPSR</h2>
                <p>Als verantwortungsvoller Händler erfüllen wir die Anforderungen der EU-Produktsicherheitsverordnung (GPSR). Für jedes Produkt stellen wir folgende Informationen bereit [citation:7]:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Name und Kontaktdaten des Herstellers</li>
                  <li>Bei Importen aus Drittländern: Name und Adresse des EU-Verantwortlichen</li>
                  <li>Alle erforderlichen Warn- und Sicherheitshinweise</li>
                  <li>Produktidentifikationsmerkmale (Charge, Seriennummer)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">Wichtige Sicherheitshinweise</h2>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Die Montage von Reifen und Rädern darf nur durch geschultes Fachpersonal erfolgen.</li>
                  <li>Beachten Sie die vorgeschriebenen Anzugsmomente für Radschrauben.</li>
                  <li>Der Reifenfülldruck muss regelmäßig gemäß Herstellervorgaben überprüft werden.</li>
                  <li>Bei Geschwindigkeiten über 210 km/h sind besondere Eignungsnachweise erforderlich.</li>
                  <li>Achten Sie auf das DOT-Herstellungsdatum - Reifen sollten nicht älter als 6 Jahre sein.</li>
                </ul>
              </section>

              <section className="bg-blue-50 p-6 rounded-lg">
                <h2 className="text-xl font-semibold mb-3">Haftungsausschluss</h2>
                <p className="text-sm">Die GAAR GmbH übernimmt keine Haftung für unsachgemäße Montage, falschen Reifendruck, Überladung oder nicht bestimmungsgemäße Verwendung der Produkte. Die technischen Daten und Freigaben entsprechen dem Stand bei Drucklegung. Für Aktualität und Vollständigkeit wird keine Gewähr übernommen. Bei Zweifeln konsultieren Sie bitte einen Fachbetrieb oder den Fahrzeughersteller.</p>
              </section>

              <p className="text-xs text-gray-500 mt-6">Stand: Februar 2026 | Alle Angaben ohne Gewähr, Irrtümer vorbehalten.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
