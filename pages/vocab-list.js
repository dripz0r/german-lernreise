import { useEffect, useState } from 'react';

export default function VocabListPage() {
  const [vocabList, setVocabList] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('vocabList')) || [];
    setVocabList(stored);
  }, []);

  return (
    <main className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">📘 My Vocab List</h1>
      {vocabList.length === 0 ? (
        <p className="text-gray-600">You haven’t saved any words yet.</p>
      ) : (
        <ul className="space-y-4">
          {vocabList.map((entry, i) => (
            <li key={i} className="border-b pb-2">
              <h2 className="text-teal-700 font-semibold">{entry.word}</h2>
              <p className="text-sm text-gray-600">{entry.translation}</p>
              <p className="text-sm italic text-gray-500">{entry.examples?.[0]}</p>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
