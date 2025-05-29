// /pages/api/lookup.js
import dictionary from '../../lib/dictionary.json';

export default function handler(req, res) {
  const { word } = req.query;

  if (!word || typeof word !== 'string') {
    return res.status(400).json({ error: 'Missing or invalid word parameter' });
  }

  const entry = dictionary[word.toLowerCase()];
  if (!entry) {
    return res.status(404).json({ error: 'Word not found' });
  }

  res.status(200).json(entry);
}
