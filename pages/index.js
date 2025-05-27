// ✅ IMPORTS (These bring in the tools and components we need)
import Link from "next/link";            // For navigating between pages
import Head from "next/head";            // For setting title/metadata in the <head>
import { useState } from "react";        // For controlling the dropdown menu
import ArticleCard from "../components/ArticleCard"; // Reusable card component for lesson previews

// ✅ MAIN FUNCTION – This is your homepage component
export default function Home() {
  // 🔁 Dropdown menu toggle (open/close)
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // ✅ RENDERED UI
  return (
    <>
      {/* 🌐 HTML <head> section */}
      <Head>
        <title>Deutsch Lernreise</title>
        <meta name="description" content="Ein wachsendes Lernjournal mit KI-Unterstützung" />
      </Head>

      {/* 🧱 MAIN CONTENT SECTION */}
      <main className="min-h-screen bg-amber-50 text-gray-800 p-6">
        
        {/* 🔝 NAVIGATION BAR */}
        <nav className="mb-10 flex flex-wrap items-center justify-between">
          {/* 🏠 Site Title */}
          <div className="text-2xl font-semibold text-teal-700">
            🌍 Deutsch Lernreise
          </div>

          {/* 📂 DROPDOWN MENU */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="bg-teal-600 text-white px-4 py-2 rounded-md shadow hover:bg-teal-700"
            >
              📂 Inhalte
            </button>

            {/* 🧾 Dropdown links appear when dropdownOpen is true */}
            {dropdownOpen && (
              <div className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-lg z-10">
                <ul className="divide-y divide-gray-200">
                  <li><Link href="/lesson-1" className="block px-4 py-2 hover:bg-gray-100">📖 Lektion 1</Link></li>
                  <li><Link href="/lesson-2" className="block px-4 py-2 hover:bg-gray-100">📖 Lektion 2</Link></li>
                  <li><Link href="/flashcards" className="block px-4 py-2 hover:bg-gray-100">🧠 Flashcards</Link></li>
                  <li><Link href="/verbs" className="block px-4 py-2 hover:bg-gray-100">🚀 Verb Crashkurs</Link></li>
                  <li><Link href="/grammar" className="block px-4 py-2 hover:bg-gray-100">📘 Grammatik-Tipps</Link></li>
                  <li><Link href="/chatbot" className="block px-4 py-2 hover:bg-gray-100">🤖 KI-Chatbot</Link></li>
                </ul>
              </div>
            )}
          </div>
        </nav>

        {/* 👋 WELCOME SECTION */}
        <section className="mb-12">
          <h1 className="text-3xl font-bold text-teal-700 mb-2">
            Willkommen bei Deutsch Lernreise!
          </h1>
          <p className="text-md text-gray-600 max-w-xl">
            Tauche ein in kurze Geschichten, praktische Vokabeln, Grammatik-Tipps und KI-unterstütztes Lernen. 🌱
          </p>
        </section>

        {/* 📚 LESSON PREVIEW CARDS (Uses the ArticleCard component) */}
        <section className="grid gap-6 md:grid-cols-2">
          <ArticleCard
            title="Lektion 1: Der verlorene Schlüssel"
            description="Eine Kurzgeschichte mit Vokabelliste, Beispielen und Grammatiknoten."
            href="/lesson-1"
          />
          <ArticleCard
            title="Lektion 2: Der geheimnisvolle Apfel"
            description="Eine kurze Geschichte mit nützlichen Redewendungen und Alltagsvokabular."
            href="/lesson-2"
          />
        </section>
      </main>
    </>
  );
}
