import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import AutoWrap from '../../components/AutoWrap';

const lessonsDirectory = path.join(process.cwd(), 'content/lessons');

export default function LessonPage({ source, frontMatter }) {
  return (
    <div className="prose">
      <h1>{frontMatter.title}</h1>
      <MDXRemote {...source} components={{ p: AutoWrap }} />
    </div>
  );
}

export async function getStaticPaths() {
  const filenames = fs. 
    readdirSync(lessonsDirectory)
    .filter((file) => file.endsWith('.mdx') && !file.startsWith('.')); //  
  
  const paths = filenames.map((name) => ({
    params: { slug: name.replace(/\.mdx?$/, '') },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const fullPath = path.join(lessonsDirectory, `${params.slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { content, data } = matter(fileContents);
  const mdxSource = await serialize(content);
  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
}
