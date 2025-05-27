// pages/lesson-1.js
import Head from "next/head";

export default function Lesson1() {
  return (
    <>
      <Head>
        <title>Lektion 1 – Der verlorene Schlüssel</title>
        <meta name="description" content="Eine kurze Geschichte mit Vokabelliste, Beispielen und Grammatik." />
      </Head>

      <main className="min-h-screen bg-gray-100 text-gray-900 p-6">
        <div className="max-w-3xl mx-auto space-y-8">

          {/* Lesson Title */}
          <h1 className="text-3xl font-bold text-teal-700">Lektion 1: Der verlorene Schlüssel</h1>
          <p className="text-md text-gray-600">
            Eine Kurzgeschichte mit Vokabelliste, Beispielen und Grammatikpunkten.
          </p>

          {/* Short Story Text */}
          <section>
            <h2 className="text-xl font-semibold mb-2">📖 Geschichte</h2>
            <p className="leading-relaxed">
              Anna steht vor ihrer Wohnungstür und merkt plötzlich – der Schlüssel ist weg! Panik breitet sich aus. Sie durchsucht ihre Tasche, ihre Jacke, sogar ihre Schuhe. Nichts. Hat sie ihn im Café liegen lassen?
            </p>
          </section>

          {/* Vocabulary List */}
          <section>
            <h2 className="text-xl font-semibold mt-8 mb-2">🧠 Vokabeln</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>merken</strong> – to notice</li>
              <li><strong>Panik</strong> – panic</li>
              <li><strong>durchsuchen</strong> – to search through</li>
              <li><strong>liegen lassen</strong> – to leave behind</li>
            </ul>
          </section>

          {/* Grammar Note */}
          <section>
            <h2 className="text-xl font-semibold mt-8 mb-2">📚 Grammatik-Tipp</h2>
            <p>
              Beachte die trennbaren Verben wie <strong>durchsuchen</strong> – im Perfekt: "Sie hat ihre Tasche <i>durchsucht</i>".
            </p>
          </section>

        </div>
      </main>
    </>
  );
}
