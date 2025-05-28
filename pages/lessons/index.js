import Link from "next/link";
import { getAllLessonsMeta } from "@/lib/lessons";

export async function getStaticProps() {
  const lessons = getAllLessonsMeta();
  return {
    props: {
      lessons,
    },
  };
}

export default function LessonsPage({ lessons }) {
  return (
    <main className="max-w-3xl mx-auto p-6 text-gray-800">
      <h1 className="text-3xl font-bold text-teal-700 mb-6">📚 Alle Lektionen</h1>

      <ul className="space-y-4">
        {lessons.map(({ slug, title, description }) => (
          <li key={slug} className="border-b pb-4">
            <Link href={`/lesson/${slug}`} className="text-teal-600 hover:underline text-xl font-semibold">
              {title}
            </Link>
            <p className="text-sm text-gray-600">{description}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
