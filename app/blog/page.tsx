import Link from "next/link";
import { getAllPosts } from "@/lib/markdown";
import BlogGrid from "@/components/BlogGrid";

export const metadata = {
  title: "Insights & Research | Manasflow",
  description: "Thoughts on AI automation, digital employees, and enterprise operations.",
};

export default async function BlogIndex() {
  const posts = await getAllPosts();

  return (
    <div className="py-24 px-6 sm:px-10 lg:px-20 max-w-[1440px] mx-auto">
      <div className="mb-16">
        <h1 className="font-heading font-bold text-4xl lg:text-5xl text-primary mb-4">
          Insights & Research
        </h1>
        <p className="font-sans text-lg text-secondary max-w-2xl">
          Thoughts on how autonomous agents are replacing brittle workflows in the modern enterprise.
        </p>
      </div>

      <BlogGrid posts={posts} />

      <div className="mt-32 pt-16 border-t border-border flex flex-col items-center text-center">
        <h3 className="font-heading text-3xl font-bold text-primary mb-4">
          Join our Newsletter
        </h3>
        <p className="font-sans text-secondary max-w-lg mb-8">
          Get weekly insights on enterprise AI and workflow automation delivered directly to your inbox.
        </p>
        <form className="flex w-full max-w-md gap-2" action={async () => { "use server"; }}>
          <label htmlFor="newsletter-email" className="sr-only">Email address</label>
          <input
            type="email"
            id="newsletter-email"
            name="email"
            required
            placeholder="Enter your work email"
            className="flex-1 px-4 py-3 bg-on-primary border border-border font-sans text-primary placeholder:text-muted-foreground outline-none focus:border-primary transition-colors"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-primary text-on-primary font-sans font-medium hover:bg-primary/90 transition-colors uppercase tracking-widest text-xs"
          >
            Subscribe
          </button>
        </form>
        <p className="font-sans text-xs text-secondary/60 mt-4">
          Zero spam. Unsubscribe at any time.
        </p>
      </div>
    </div>
  );
}
