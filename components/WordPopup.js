import { useState, useEffect } from 'react';

export default function WordPopup({ word }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  // Dummy word data (could be replaced with API/DB later)
  const wordData = {
    translation: 'to lose',
    synonyms: ['versäumen', 'einbüßen'],
    examples: [
      'Ich habe meinen Schlüssel verloren.',
      'Manchmal verliert man, manchmal gewinnt man.',
    ],
  };

  // ✅ Check if word is already in vocab list
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('vocabList')) || [];
    const alreadySaved = stored.some((entry) => entry.word === word);
    setIsSaved(alreadySaved);
  }, [word]);

  // ✅ Add word to vocab list
  const saveToVocabList = () => {
    const stored = JSON.parse(localStorage.getItem('vocabList')) || [];
    const newEntry = {
      word,
      ...wordData,
    };

    if (!stored.some((entry) => entry.word === word)) {
      stored.push(newEntry);
      localStorage.setItem('vocabList', JSON.stringify(stored));
      setIsSaved(true);
    }
  };

  return (
    <>
      {/* 🔵 Clickable word */}
      <span
        onClick={() => setIsOpen(true)}
        className="text-blue-600 underline cursor-pointer hover:text-blue-800"
      >
        {word}
      </span>

      {/* 📦 Modal Popup */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center">
          <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md relative space-y-4">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-3 text-gray-400 hover:text-gray-600 text-xl"
            >
              ×
            </button>

            <h2 className="text-2xl font-bold text-teal-700 capitalize">{word}</h2>
            <p>
              <span className="font-semibold text-gray-700">Translation:</span>{' '}
              {wordData.translation}
            </p>
            <p>
              <span className="font-semibold text-gray-700">Synonyms:</span>{' '}
              {wordData.synonyms.join(', ')}
            </p>

            <div>
              <p className="font-semibold text-gray-700 mb-1">Examples:</p>
              <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                {wordData.examples.map((ex, i) => (
                  <li key={i}>{ex}</li>
                ))}
              </ul>
            </div>

            {/* ✅ Save to Vocab List */}
            <button
              onClick={saveToVocabList}
              disabled={isSaved}
              className={`mt-4 px-4 py-2 rounded text-white ${
                isSaved ? 'bg-gray-400 cursor-not-allowed' : 'bg-teal-600 hover:bg-teal-700'
              }`}
            >
              {isSaved ? '✔️ Already Added' : '+ Add to My Vocab List'}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
