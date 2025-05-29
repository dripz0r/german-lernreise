import { getAllLessonSlugs, getLessonData } from "@/lib/lessons";

export async function getStaticPaths() {
  const paths = getAllLessonSlugs();
  console.log("✅ Generating lesson paths:", paths);
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const lesson = await getLessonData(params.slug);
  return { props: { lesson } };
}

export default function LessonPage({ lesson }) {
  return (
    <main className="max-w-3xl mx-auto p-6 text-gray-800">
      <h1 className="text-3xl font-bold text-teal-700 mb-2">{lesson.title}</h1>
      <p className="text-gray-500 italic mb-6">{lesson.description}</p>
      <div dangerouslySetInnerHTML={{ __html: lesson.contentHtml }} />
    </main>
  );
}
