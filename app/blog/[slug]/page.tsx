import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/markdown";
import Link from "next/link";

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = await getPostBySlug(resolvedParams.slug).catch(() => null);
  if (!post) {
    return { title: "Post Not Found" };
  }
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.targetKeywords,
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = await getPostBySlug(resolvedParams.slug).catch(() => null);
  const allPosts = await getAllPosts();

  if (!post) {
    notFound();
  }

  const relatedPosts = allPosts
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  // Minimal extraction of headings for the TOC sidebar
  const headings = Array.from(post.contentHtml.matchAll(/<h([23])[^>]*>(.*?)<\/h\1>/g)).map(
    (match) => {
      const text = match[2].replace(/<[^>]+>/g, ""); // Strip nested tags
      const id = text.toLowerCase().replace(/[^\w]+/g, "-");
      return { level: Number(match[1]), text, id };
    }
  );

  // Inject IDs into the contentHtml so TOC links anchor properly
  let processedHtml = post.contentHtml;
  headings.forEach(heading => {
    // This is naive string replacement for the demo.
    // For robust use, rehype-slug plugin is recommended.
    const regex = new RegExp(`(<h[23][^>]*)>(.*?${heading.text}.*?<\/h[23]>)`, "i");
    processedHtml = processedHtml.replace(regex, `$1 id="${heading.id}">$2`);
  });

  return (
    <>
    <div className="py-24 px-6 sm:px-10 lg:px-20 max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 relative">
      
      {/* Article Content */}
      <div className="flex-1 lg:max-w-3xl xl:max-w-4xl mx-auto lg:mx-0">
        <header className="mb-12">
          <Link href="/blog" className="font-sans text-sm font-medium text-secondary hover:text-primary transition-colors inline-flex items-center gap-2 mb-8">
            <span aria-hidden="true">&larr;</span> Back to Blog
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex items-center rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-semibold text-accent border border-accent/20">
              {post.category}
            </span>
            <p className="font-sans text-sm font-semibold tracking-widest uppercase text-muted-foreground">
              {post.date} • {post.readingTime}
            </p>
          </div>
          <h1 className="font-heading font-bold text-4xl lg:text-5xl text-primary leading-[1.1] mb-6">
            {post.title}
          </h1>
          <p className="font-sans text-xl text-secondary font-light mb-8">
            {post.excerpt}
          </p>
          <div className="flex items-center gap-3">
            {post.author === "Manasflow" ? (
              <div className="w-10 h-10 rounded bg-primary flex items-center justify-center text-on-primary">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 17V7L12 12L17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            ) : (
              <div className="w-10 h-10 rounded-full bg-muted border border-border flex items-center justify-center font-sans font-bold text-primary">
                {post.author.charAt(0)}
              </div>
            )}
            <div>
              <p className="font-sans text-sm font-medium text-primary">{post.author}</p>
              <p className="font-sans text-xs text-secondary">{post.author === "Manasflow" ? "AI Automation Agency" : "Contributor"}</p>
            </div>
          </div>
        </header>

        <article 
          className="prose prose-invert max-w-2xl mx-auto"
          dangerouslySetInnerHTML={{ __html: processedHtml }} 
        />
      </div>

      {/* Sticky Table of Contents */}
      {headings.length > 0 && (
        <aside className="hidden lg:block w-64 shrink-0 relative">
          <div className="sticky top-32 border-l border-border pl-6">
            <h3 className="font-sans text-sm font-bold uppercase tracking-widest text-primary mb-6">
              In this article
            </h3>
            <ul className="flex flex-col gap-3 font-sans text-sm">
              {headings.map((heading, i) => (
                <li key={i} className={heading.level === 3 ? "ml-4" : ""}>
                  <a href={`#${heading.id}`} className="text-secondary hover:text-accent transition-colors block line-clamp-2">
                    {heading.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      )}

      </div>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <div className="mt-32 pt-16 border-t border-border max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-20 w-full">
          <h3 className="font-heading text-3xl font-bold text-primary mb-8">
            More in {post.category}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedPosts.map((related) => (
              <Link href={`/blog/${related.slug}`} key={related.slug} className="group flex flex-col bg-on-primary border border-border p-8 transition-transform duration-300 hover:scale-[1.02]">
                <div className="flex justify-between items-start mb-4">
                  <span className="inline-flex items-center rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-semibold text-accent border border-accent/20">
                    {related.category}
                  </span>
                  <p className="font-sans text-xs font-semibold tracking-widest uppercase text-muted-foreground">
                    {related.date}
                  </p>
                </div>
                <h4 className="font-heading text-xl font-bold text-primary mb-4 group-hover:text-accent transition-colors">
                  {related.title}
                </h4>
                <div className="mt-auto font-sans text-sm font-medium text-primary flex items-center pt-4 border-t border-border">
                  Read article <span className="text-accent ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true">&rarr;</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
