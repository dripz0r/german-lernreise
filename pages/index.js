import ArticleCard from '../components/ArticleCard';
import Link from 'next/link';
import Head from 'next/head';
import { useState } from 'react'; // for dropdown toggle

export default function Home() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Deutsch Lernreise</title>
        <meta name="description" content="Ein wachsendes Lernjournal mit KI-Unterstützung" />
      </Head>

      <main className="min-h-screen bg-amber-50 text-gray-800 p-8">
        {/* Navigation Bar */}
        <nav className="mb-10 flex flex-wrap items-center justify-between">
          <div className="text-2xl font-semibold text-teal-700">🌍 Deutsch Lernreise</div>

          {/* Dropdown Menu */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="px-4 py-2 bg-teal-100 hover:bg-teal-200 rounded-lg text-teal-800 font-medium transition"
            >
              Bereiche ▼
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-56 rounded-lg bg-white shadow-lg border border-gray-200 z-50">
                <Link href="/lesson-1" passHref legacyBehavior>
                  <a className="block px-4 py-2 hover:bg-gray-100">📖 Lektionen</a>
                </Link>
                <Link href="/lessons/lesson-2" passHref legacyBehavior>
                  <a className="block px-4 py-2 hover:bg-gray-100">🧾 Lektion 2 (Markdown)</a>
                </Link>
                <Link href="/flashcards" passHref legacyBehavior>
                  <a className="block px-4 py-2 hover:bg-gray-100">🃏 Flashcards</a>
                </Link>
                <Link href="/verb-crash-course" passHref legacyBehavior>
                  <a className="block px-4 py-2 hover:bg-gray-100">⚡ Verb Crashkurs</a>
                </Link>
                <Link href="/chatbot" passHref legacyBehavior>
                  <a className="block px-4 py-2 hover:bg-gray-100">🤖 Chatbot</a>
                </Link>
                <Link href="/vocab-cloud" className="text-sm hover:underline text-teal-600">
                  🌩 View Vocab Cloud
                </Link>
              </div>
            )}
          </div>
        </nav>

        {/* Welcome Section */}
        <section className="bg-white rounded-2xl shadow-md p-8 mb-12 text-center">
          <h1 className="text-3xl font-bold text-teal-800 mb-2">
            Willkommen auf deiner Deutschreise 🇩🇪
          </h1>
          <p className="text-gray-600 mb-4">
            Hier findest du Geschichten, Grammatik, Vokabeln und KI-Hilfen, um dein Deutsch zu
            verbessern – egal, ob Anfänger oder Fortgeschritten.
          </p>
          <div className="bg-amber-100 text-amber-800 px-4 py-3 rounded-lg text-sm inline-block">
            💡 Fun Fact des Tages: Das längste deutsche Wort im Duden ist
            &quot;Aufmerksamkeitsdefizit-Hyperaktivitätsstörung&quot;.
          </div>
        </section>

        {/* Article Grid Section (reuse existing cards) */}
        <section className="grid gap-6 md:grid-cols-2">
          <ArticleCard
            title="Lektion 1: Der verlorene Schlüssel"
            description="Eine Kurzgeschichte mit Vokabelliste, Beispielen und Grammatiknoten."
            href="/lesson-1"
          />
          <ArticleCard
            title="📊 Visuelle Hilfen"
            description="Diagramme, Tabellen und Merksätze für Kasus, Verben und mehr."
            href="/visuals"
          />
          <ArticleCard
            title="🧠 KI-Werkzeuge"
            description="Chat mit GPT, Vokabelhilfe, Grammatikprüfung (coming soon)"
            href="/ai-tools"
          />
        </section>

        <footer className="mt-16 text-center text-sm text-gray-500">
          © 2025 Kieran Reilly – Deutsch Lernen mit ❤️
        </footer>
      </main>
    </>
  );
}
