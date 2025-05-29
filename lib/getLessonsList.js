import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const lessonsDir = path.join(process.cwd(), 'content/lessons');

export function getLessonsList() {
  const files = fs.readdirSync(lessonsDir)
    .filter(file => file.endsWith('.mdx') && !file.startsWith('.'));

  return files.map((filename) => {
    const filePath = path.join(lessonsDir, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);

    return {
      slug: filename.replace(/\.mdx$/, ''),
      title: data.title || filename,
    };
  });
}
