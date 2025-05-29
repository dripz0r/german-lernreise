import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function VocabCloud() {
  const [vocabList, setVocabList] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('vocabList')) || [];
    setVocabList(stored);
  }, []);

  const removeWord = (wordToRemove) => {
    const updated = vocabList.filter(w => w.word !== wordToRemove);
    setVocabList(updated);
    localStorage.setItem('vocabList', JSON.stringify(updated));
  };

  return (
    <main className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-teal-700 mb-4">📘 Vocab Cloud</h1>
      
      {vocabList.length === 0 ? (
        <p className="text-gray-500">No saved words yet. Try clicking some <Link href="/lessons/lesson-2" className="underline text-blue-600">in a lesson</Link>.</p>
      ) : (
        <div className="flex flex-wrap gap-3">
          {vocabList.map((word, i) => (
            <div key={i} className="bg-white border rounded-lg p-3 shadow hover:shadow-md transition text-center">
              <h2 className="text-lg font-semibold text-teal-800">{word.word}</h2>
              <p className="text-sm text-gray-600 italic">{word.translation}</p>
              <button
                className="text-red-600 text-xs mt-2 hover:underline"
                onClick={() => removeWord(word.word)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
