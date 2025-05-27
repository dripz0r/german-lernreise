// ✅ IMPORTS
import Head from "next/head";
import Link from "next/link";

// ✅ PAGE COMPONENT
export default function FlashcardsPage() {
  return (
    <>
      {/* 🌐 Page Metadata */}
      <Head>
        <title>Flashcards – Deutsch Lernreise</title>
        <meta name="description" content="Wortschatz mit digitalen Karteikarten üben" />
      </Head>

      {/* 🧠 Main Content */}
      <main className="min-h-screen bg-gray-50 text-gray-800 p-6">
        <div className="max-w-3xl mx-auto space-y-6">
          <h1 className="text-3xl font-bold text-teal-700">🧠 Flashcards</h1>
          <p>Hier kannst du deinen Wortschatz mit digitalen Karteikarten üben. 🚀</p>

          {/* 🔁 Later: Load cards from JSON */}
          <p className="text-gray-500 italic">🔧 Flashcard system coming soon...</p>

          <Link href="/" className="text-teal-600 hover:underline text-sm">
            ← Zurück zur Startseite
          </Link>
        </div>
      </main>
    </>
  );
}
