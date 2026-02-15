import Head from 'next/head'

export default function AGB() {
  return (
    <>
      <Head>
        <title>Allgemeine Geschäftsbedingungen - GAAR Reifen & Räder</title>
      </Head>

      <div className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-[#004aad] mb-4">Allgemeine Geschäftsbedingungen (AGB)</h1>
            <p className="text-gray-600">der GAAR GmbH</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-8">
            
            {/* §1 Geltungsbereich */}
            <section>
              <h2 className="text-xl font-bold text-[#004aad] mb-3">§1 Geltungsbereich</h2>
              <p className="text-gray-700 mb-2">(1) Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge, die zwischen der GAAR GmbH (nachfolgend "Verkäufer") und dem Kunden (nachfolgend "Käufer") über die Lieferung von Waren über den Online-Shop www.gaar.de geschlossen werden. Die AGB gelten unabhängig davon, ob der Käufer Verbraucher, Unternehmer oder Kaufmann ist.</p>
              <p className="text-gray-700 mb-2">(2) Verbraucher im Sinne dieser AGB ist jede natürliche Person, die ein Rechtsgeschäft zu Zwecken abschließt, die überwiegend weder ihrer gewerblichen noch ihrer selbständigen beruflichen Tätigkeit zugerechnet werden können (§ 13 BGB). Unternehmer ist eine natürliche oder juristische Person oder eine rechtsfähige Personengesellschaft, die bei Abschluss eines Rechtsgeschäfts in Ausübung ihrer gewerblichen oder selbständigen beruflichen Tätigkeit handelt (§ 14 BGB).</p>
              <p className="text-gray-700">(3) Abweichende, entgegenstehende oder ergänzende Allgemeine Geschäftsbedingungen des Käufers werden, selbst bei Kenntnis, nicht Vertragsbestandteil, es sei denn, ihrer Geltung wird ausdrücklich schriftlich zugestimmt.</p>
            </section>

            {/* §2 Vertragsschluss */}
            <section className="pt-4 border-t border-gray-200">
              <h2 className="text-xl font-bold text-[#004aad] mb-3">§2 Vertragsschluss</h2>
              <p className="text-gray-700 mb-2">(1) Die Darstellung der Produkte im Online-Shop stellt kein rechtlich bindendes Angebot, sondern eine unverbindliche Aufforderung zur Bestellung (invitatio ad offerendum) dar.</p>
              <p className="text-gray-700 mb-2">(2) Durch Anklicken des Buttons "Zahlungspflichtig bestellen" gibt der Kunde eine verbindliche Bestellung der im Warenkorb enthaltenen Waren ab. Vor dem Absenden der Bestellung kann der Kunde die Bestellung jederzeit über das "Zurück"-Menü seines Browsers korrigieren.</p>
              <p className="text-gray-700 mb-2">(3) Der Verkäufer bestätigt den Eingang der Bestellung unmittelbar durch eine automatisch generierte E-Mail ("Auftragsbestätigung"). Diese stellt noch keine Annahme des Vertragsangebots dar, es sei denn, in der E-Mail wird ausdrücklich die Annahme erklärt.</p>
              <p className="text-gray-700 mb-2">(4) Der Kaufvertrag kommt erst zustande, wenn der Verkäufer die Bestellung durch eine separate Annahmeerklärung (z.B. Versandbestätigung) oder durch Ausführung der Bestellung (Versand der Ware) ausdrücklich annimmt.</p>
              <p className="text-gray-700">(5) Bei Zahlungsarten wie Vorkasse (z.B. Überweisung) bleibt der Vertragsschluss der Zahlungseingang vorbehalten. Der Käufer wird über die Verfügbarkeit informiert.</p>
            </section>

            {/* §3 Preise und Zahlungsbedingungen */}
            <section className="pt-4 border-t border-gray-200">
              <h2 className="text-xl font-bold text-[#004aad] mb-3">§3 Preise und Zahlungsbedingungen</h2>
              <p className="text-gray-700 mb-2">(1) Alle Preise auf der Website verstehen sich in Euro und enthalten die gesetzliche Umsatzsteuer (Mehrwertsteuer). Zusätzlich fallen gegebenenfalls Versandkosten an, die vor Abschluss der Bestellung gesondert ausgewiesen werden.</p>
              <p className="text-gray-700 mb-2">(2) Der Verkäufer behält sich vor, bei Bestellungen aus gewerblichen Gründen oder bei Großbestellungen abweichende Zahlungsbedingungen zu vereinbaren.</p>
              <p className="text-gray-700 mb-2">(3) Der Kaufpreis ist sofort nach Vertragsschluss fällig, sofern keine abweichenden Zahlungsmodalitäten (z.B. Rechnungskauf) vereinbart wurden. Bei Zahlung per Vorkasse ist der Rechnungsbetrag innerhalb von 7 Tagen nach Vertragsschluss auf das unten genannte Konto zu überweisen. Der Verkäufer behält sich vor, Bestellungen bei Nichtzahlung innerhalb dieser Frist zu stornieren.</p>
              <p className="text-gray-700 mb-2">(4) Bei Zahlungsverzug ist der Verkäufer berechtigt, Verzugszinsen in gesetzlicher Höhe zu verlangen. Die Geltendmachung eines weiteren Schadens bleibt vorbehalten.</p>
              <p className="text-gray-700">(5) Folgende Zahlungsarten werden angeboten: Vorkasse per Überweisung, PayPal, Kreditkarte (VISA, Mastercard), Sofortüberweisung. Die Aktivierung der Zahlungsart "Rechnung" bleibt Bestandskunden vorbehalten und erfolgt nach Prüfung der Bonität.</p>
            </section>

            {/* §4 Lieferung und Versand */}
            <section className="pt-4 border-t border-gray-200">
              <h2 className="text-xl font-bold text-[#004aad] mb-3">§4 Lieferung und Versand</h2>
              <p className="text-gray-700 mb-2">(1) Die Lieferung erfolgt ausschließlich innerhalb Deutschlands und nach Österreich (sofern nicht anders angegeben). Die Lieferadresse ist die vom Kunden bei der Bestellung angegebene Adresse.</p>
              <p className="text-gray-700 mb-2">(2) Die Versandkosten werden dem Kunden im Bestellprozess klar und eindeutig mitgeteilt und sind vom Kunden zu tragen, soweit der Kunde kein Recht auf kostenlose Lieferung (z.B. ab einem bestimmten Bestellwert) hat.</p>
              <p className="text-gray-700 mb-2">(3) Die Lieferzeit beträgt, sofern nicht beim Angebot anders angegeben, 2-4 Werktage innerhalb Deutschlands. Bei Zahlung per Vorkasse beginnt die Lieferfrist erst mit Eingang des vollständigen Rechnungsbetrags auf dem Konto des Verkäufers.</p>
              <p className="text-gray-700">(4) Sollte die Lieferung an den Kunden nicht möglich sein, weil die angegebene Adresse nicht korrekt ist oder der Kunde trotz Ankündigung nicht angetroffen wird, trägt der Kunde die Kosten für die erfolglose Zustellung sowie die Kosten für eine erneute Zustellung.</p>
            </section>

            {/* §5 Eigentumsvorbehalt */}
            <section className="pt-4 border-t border-gray-200">
              <h2 className="text-xl font-bold text-[#004aad] mb-3">§5 Eigentumsvorbehalt</h2>
              <p className="text-gray-700">Bis zur vollständigen Zahlung des Kaufpreises verbleiben die gelieferten Waren im Eigentum der GAAR GmbH. Bei Zahlungsverzug ist der Verkäufer berechtigt, die Ware zurückzufordern. In der Zurückforderung liegt kein Rücktritt vom Vertrag, es sei denn, der Verkäufer erklärt dies ausdrücklich.</p>
            </section>

            {/* §6 Gewährleistung und Mängelhaftung */}
            <section className="pt-4 border-t border-gray-200">
              <h2 className="text-xl font-bold text-[#004aad] mb-3">§6 Gewährleistung und Mängelhaftung</h2>
              <p className="text-gray-700 mb-2">(1) Es gelten die gesetzlichen Gewährleistungsrechte, sofern nichts Abweichendes vereinbart wurde.</p>
              <p className="text-gray-700 mb-2">(2) Für Verbraucher beträgt die Verjährungsfrist für Mängelansprüche bei neu hergestellten Sachen zwei Jahre ab Ablieferung der Ware. Bei gebrauchten Sachen kann die Verjährungsfrist auf ein Jahr verkürzt werden, wenn dies gesondert vereinbart wurde.</p>
              <p className="text-gray-700 mb-2">(3) Für Unternehmer beträgt die Verjährungsfrist für Mängelansprüche ein Jahr ab Ablieferung der Ware. Die Haftung für Schäden, die auf einer Verletzung des Lebens, des Körpers oder der Gesundheit beruhen oder die von der Produkthaftung erfasst werden, bleibt von dieser Verkürzung unberührt.</p>
              <p className="text-gray-700 mb-2">(4) Der Verkäufer haftet unbeschränkt für Schäden, die durch Vorsatz oder grobe Fahrlässigkeit verursacht wurden, sowie für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit. Im Übrigen ist die Haftung ausgeschlossen.</p>
              <p className="text-gray-700">(5) Die Haftung nach dem Produkthaftungsgesetz bleibt unberührt.</p>
            </section>

            {/* §7 Widerrufsrecht */}
            <section className="pt-4 border-t border-gray-200">
              <h2 className="text-xl font-bold text-[#004aad] mb-3">§7 Widerrufsrecht</h2>
              <p className="text-gray-700 mb-2">(1) Verbrauchern steht ein gesetzliches Widerrufsrecht zu, über das sie gesondert in der Widerrufsbelehrung informiert werden.</p>
              <p className="text-gray-700 mb-2">(2) Das Widerrufsrecht besteht nicht bei Verträgen zur Lieferung von Waren, die nicht vorgefertigt sind und für deren Herstellung eine individuelle Auswahl oder Bestimmung durch den Verbraucher maßgeblich ist oder die eindeutig auf die persönlichen Bedürfnisse des Verbrauchers zugeschnitten sind (z.B. Sonderanfertigungen).</p>
              <p className="text-gray-700">(3) Das Widerrufsrecht erlischt vorzeitig bei Verträgen zur Lieferung versiegelter Waren, die aus Gründen des Gesundheitsschutzes oder der Hygiene nicht zur Rückgabe geeignet sind, wenn ihre Versiegelung nach der Lieferung entfernt wurde.</p>
            </section>

            {/* §8 Datenschutz */}
            <section className="pt-4 border-t border-gray-200">
              <h2 className="text-xl font-bold text-[#004aad] mb-3">§8 Datenschutz</h2>
              <p className="text-gray-700 mb-2">(1) Der Verkäufer erhebt, verarbeitet und nutzt personenbezogene Daten des Kunden nur im Rahmen der gesetzlichen Bestimmungen, insbesondere der Datenschutz-Grundverordnung (DSGVO) und des Bundesdatenschutzgesetzes (BDSG).</p>
              <p className="text-gray-700">(2) Der Kunde willigt ein, dass seine Daten zum Zwecke der Vertragsabwicklung und für eventuelle Rückfragen gespeichert und genutzt werden. Details ergeben sich aus der gesonderten Datenschutzerklärung.</p>
            </section>

            {/* §9 Schlussbestimmungen */}
            <section className="pt-4 border-t border-gray-200">
              <h2 className="text-xl font-bold text-[#004aad] mb-3">§9 Schlussbestimmungen</h2>
              <p className="text-gray-700 mb-2">(1) Auf Verträge zwischen dem Verkäufer und dem Kunden findet das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts (CISG) Anwendung. Dies gilt auch für das anwendbare Recht außervertraglicher Schuldverhältnisse im Zusammenhang mit dem Vertrag.</p>
              <p className="text-gray-700 mb-2">(2) Ist der Kunde Kaufmann, juristische Person des öffentlichen Rechts oder öffentlich-rechtliches Sondervermögen, ist ausschließlicher Gerichtsstand für alle sich aus dem Vertragsverhältnis ergebenden Streitigkeiten der Sitz des Verkäufers in Berlin.</p>
              <p className="text-gray-700 mb-2">(3) Sollte eine Bestimmung dieser AGB unwirksam sein oder werden, so bleibt die Wirksamkeit der übrigen Bestimmungen unberührt. Anstelle der unwirksamen Bestimmung tritt die gesetzliche Regelung.</p>
              <p className="text-gray-700">(4) Der Verkäufer behält sich das Recht vor, diese AGB jederzeit mit Wirkung für die Zukunft zu ändern. Die jeweils aktuelle Version ist auf der Website abrufbar.</p>
            </section>

            {/* Stand */}
            <div className="bg-gray-50 rounded-lg p-4 mt-6">
              <p className="text-sm text-gray-500">Stand: Februar 2026</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
