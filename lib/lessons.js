import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const lessonsDir = path.join(process.cwd(), "content/lessons");

export async function getLessonData(slug) {
  const filePath = path.join(lessonsDir, `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, "utf-8");

  const { data, content } = matter(fileContents);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    contentHtml,
    ...data,
  };
}

export function getAllLessonSlugs() {
  const filenames = fs.readdirSync(lessonsDir).filter((file) => { 
    const fullPath = path.join(lessonsDir, file);
    return fs.statSync(fullPath).isFile() && file.endsWith(".md");
  });

  console.log("📁 Found valid lessons:", filenames);

  return filenames.map((filename) => ({
    params: { slug: filename.replace(/\.md$/, "") },
  }));
}

export function getAllLessonsMeta() {
  const filenames = fs.readdirSync(lessonsDir).filter((file) => {
    const fullPath = path.join(lessonsDir, file);
    return fs.statSync(fullPath).isFile() && file.endsWith(".md");
    });

  return filenames.map((filename) => {
    const filePath = path.join(lessonsDir, filename);
    const fileContents = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(fileContents);

    return {
      slug: filename.replace(/\.md$/, ""),
      title: data.title || "Untitled Lesson",
      description: data.description || "",
    };
  });
}
