import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const contentDirectory = path.join(process.cwd(), "content/blogs");

export type PostMeta = {
  slug: string;
  title: string;
  metaTitle?: string;
  metaDescription?: string;
  targetKeywords?: string;
  category: string;
  excerpt: string;
  date: string;
  author: string;
  readingTime: string;
};

export type Post = PostMeta & {
  contentHtml: string;
};

export function getPostSlugs() {
  if (!fs.existsSync(contentDirectory)) {
    fs.mkdirSync(contentDirectory, { recursive: true });
    return [];
  }
  return fs.readdirSync(contentDirectory).filter((file) => file.endsWith(".md"));
}

export function calculateReadingTime(text: string): string {
  const wordsPerMinute = 200;
  const noOfWords = text.split(/\s/g).length;
  const minutes = noOfWords / wordsPerMinute;
  const readTime = Math.ceil(minutes);
  return `${readTime} min read`;
}

export async function getPostBySlug(slug: string): Promise<Post> {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = path.join(contentDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { data, content } = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(content);
  const contentHtml = processedContent.toString();

  const readingTime = calculateReadingTime(content);

  return {
    slug: data.slug || realSlug,
    title: data.title || "Untitled",
    metaTitle: data.metaTitle || data.title || "Untitled",
    metaDescription: data.metaDescription || data.excerpt || "",
    targetKeywords: data.targetKeywords || "",
    category: data.category || "Uncategorized",
    excerpt: data.excerpt || "",
    date: data.date || "",
    author: data.author || "",
    readingTime,
    contentHtml,
  };
}

export async function getAllPosts(): Promise<PostMeta[]> {
  const slugs = getPostSlugs();
  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const post = await getPostBySlug(slug);
      return {
        slug: post.slug,
        title: post.title,
        metaTitle: post.metaTitle,
        metaDescription: post.metaDescription,
        targetKeywords: post.targetKeywords,
        category: post.category,
        excerpt: post.excerpt,
        date: post.date,
        author: post.author,
        readingTime: post.readingTime,
      };
    })
  );

  return posts.sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
}
