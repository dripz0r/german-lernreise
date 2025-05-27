import Head from "next/head";
import Link from "next/link";

export default function VerbCrashkurs() {
  return (
    <>
      <Head>
        <title>Verb Crashkurs – Deutsch Lernreise</title>
        <meta name="description" content="Regelmäßige und unregelmäßige Verben lernen" />
      </Head>

      <main className="min-h-screen bg-gray-50 text-gray-800 p-6">
        <div className="max-w-3xl mx-auto space-y-6">
          <h1 className="text-3xl font-bold text-teal-700">🚀 Verb Crashkurs</h1>
          <p>Verben im Präsens, Perfekt und Präteritum – erklärt mit Beispielen.</p>

          <p className="text-gray-500 italic">🛠 Verb trainer kommt bald...</p>

          <Link href="/" className="text-teal-600 hover:underline text-sm">
            ← Zurück zur Startseite
          </Link>
        </div>
      </main>
    </>
  );
}
