import React from 'react';

export default function AutoWrap({ children }) {
  if (typeof children !== 'string') return <>{children}</>;

  const words = children.split(/(\s+|[.,!?;:()]+)/); // Split by space or punctuation

  const handleClick = async (word) => {
    const res = await fetch(`/api/lookup?word=${word}`);
    const data = await res.json();

    if (data.translation) {
      alert(`${word} = ${data.translation}\n(${data.type})\n"${data.example_de}" → "${data.example_en}"`);
    } else {
      alert(`No entry found for "${word}"`);
    }
  };

  return (
    <>
      {words.map((word, i) =>
        /\s+|[.,!?;:()]+/.test(word) ? (
          word
        ) : (
          <span
            key={i}
            onClick={() => handleClick(word)}
            style={{ cursor: 'pointer', color: '#0ea5e9' }}
          >
            {word}
          </span>
        )
      )}
    </>
  );
}
