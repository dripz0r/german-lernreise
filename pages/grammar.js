// ✅ IMPORTS
import Head from "next/head";
import Link from "next/link";

// ✅ MAIN PAGE COMPONENT
export default function GrammarTips() {
  return (
    <>
      {/* 🌐 PAGE META INFO */}
      <Head>
        <title>Grammatik-Tipps – Deutsch Lernreise</title>
        <meta name="description" content="Declensions, pronouns, prepositions and more" />
      </Head>

      {/* 📚 MAIN CONTENT */}
      <main className="min-h-screen bg-gray-50 text-gray-800 p-6">
        <div className="max-w-4xl mx-auto space-y-10">
          {/* 📘 PAGE HEADER */}
          <section>
            <h1 className="text-3xl font-bold text-teal-700 mb-2">📘 Grammatik-Tipps</h1>
            <p className="text-gray-600">Hier findest du kompakte Erklärungen zu wichtigen Grammatikpunkten. Klar, farblich sortiert, mit Beispielen!</p>
          </section>

          {/* 📊 NOUN DECLENSION TABLE */}
          <section>
            <h2 className="text-xl font-semibold mt-6 text-blue-700">📊 Nomen & Artikel im Nominativ/Akkusativ/Dativ</h2>
            <p className="text-sm mb-2 text-gray-500 italic">(Beispiele mit "der Hund", "die Katze", "das Buch")</p>
            <table className="w-full border text-sm text-left">
              <thead className="bg-blue-100">
                <tr>
                  <th className="p-2">Fall</th>
                  <th className="p-2">Maskulin (der)</th>
                  <th className="p-2">Feminin (die)</th>
                  <th className="p-2">Neutrum (das)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-2 font-bold">Nominativ</td>
                  <td className="p-2">der Hund</td>
                  <td className="p-2">die Katze</td>
                  <td className="p-2">das Buch</td>
                </tr>
                <tr className="border-t">
                  <td className="p-2 font-bold">Akkusativ</td>
                  <td className="p-2">den Hund</td>
                  <td className="p-2">die Katze</td>
                  <td className="p-2">das Buch</td>
                </tr>
                <tr className="border-t">
                  <td className="p-2 font-bold">Dativ</td>
                  <td className="p-2">dem Hund</td>
                  <td className="p-2">der Katze</td>
                  <td className="p-2">dem Buch</td>
                </tr>
              </tbody>
            </table>
          </section>

          {/* 👥 PRONOUN CHART */}
          <section>
            <h2 className="text-xl font-semibold text-green-700 mt-10">👥 Personalpronomen (Nominativ)</h2>
            <ul className="list-disc pl-5 mt-2 text-sm">
              <li><strong>ich</strong> – I</li>
              <li><strong>du</strong> – you (informal)</li>
              <li><strong>er / sie / es</strong> – he / she / it</li>
              <li><strong>wir</strong> – we</li>
              <li><strong>ihr</strong> – you all (informal plural)</li>
              <li><strong>sie / Sie</strong> – they / you (formal)</li>
            </ul>
          </section>

          {/* 🚪 TWO-WAY & ONE-WAY PREPOSITIONS */}
          <section>
            <h2 className="text-xl font-semibold text-purple-700 mt-10">🚪 Präpositionen mit Fällen</h2>

            {/* ➕ Accusative Only */}
            <h3 className="text-lg font-semibold mt-4 text-red-600">🔴 Akkusativ (Wohin?)</h3>
            <p className="text-sm italic">Bewegung auf ein Ziel:</p>
            <ul className="list-disc pl-5 text-sm">
              <li><strong>durch</strong> – through</li>
              <li><strong>für</strong> – for</li>
              <li><strong>gegen</strong> – against</li>
              <li><strong>ohne</strong> – without</li>
              <li><strong>um</strong> – around</li>
            </ul>

            {/* ➕ Dative Only */}
            <h3 className="text-lg font-semibold mt-6 text-blue-600">🔵 Dativ (Wo?)</h3>
            <p className="text-sm italic">Keine Bewegung – Position:</p>
            <ul className="list-disc pl-5 text-sm">
              <li><strong>aus</strong> – from (origin)</li>
              <li><strong>bei</strong> – at / near</li>
              <li><strong>mit</strong> – with</li>
              <li><strong>nach</strong> – after / to</li>
              <li><strong>seit</strong> – since</li>
              <li><strong>von</strong> – from / of</li>
              <li><strong>zu</strong> – to</li>
            </ul>

            {/* 🔁 Two-Way Prepositions */}
            <h3 className="text-lg font-semibold mt-6 text-purple-600">🟣 Wechselpräpositionen (Akkusativ + Dativ)</h3>
            <p className="text-sm italic">Bewegung → Akkusativ | Lage → Dativ</p>
            <ul className="list-disc pl-5 text-sm">
              <li><strong>an</strong> – on (vertical) / at</li>
              <li><strong>auf</strong> – on (horizontal)</li>
              <li><strong>hinter</strong> – behind</li>
              <li><strong>in</strong> – in / into</li>
              <li><strong>neben</strong> – next to</li>
              <li><strong>über</strong> – over / above</li>
              <li><strong>unter</strong> – under / below</li>
              <li><strong>vor</strong> – in front of</li>
              <li><strong>zwischen</strong> – between</li>
            </ul>
          </section>

          {/* 🔙 BACK TO HOME LINK */}
          <p className="text-sm mt-10">
            <Link href="/" className="text-teal-600 hover:underline">
              ← Zurück zur Startseite
            </Link>
          </p>
        </div>
      </main>
    </>
  );
}
