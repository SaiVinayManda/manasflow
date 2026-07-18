"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

type PostMeta = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  author: string;
  readingTime: string;
};

export default function BlogGrid({ posts }: { posts: PostMeta[] }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const shouldReduceMotion = useReducedMotion();

  const categories = useMemo(() => {
    const cats = new Set(posts.map(p => p.category));
    return ["All", ...Array.from(cats)];
  }, [posts]);

  const filteredPosts = useMemo(() => {
    if (selectedCategory === "All") return posts;
    return posts.filter(p => p.category === selectedCategory);
  }, [posts, selectedCategory]);

  return (
    <div className="w-full">
      {/* Category Filter Pills */}
      <div className="flex flex-wrap gap-3 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full border text-sm font-sans font-medium transition-colors ${selectedCategory === category
                ? "bg-primary text-on-primary border-primary"
                : "bg-transparent text-secondary border-border hover:border-primary hover:text-primary"
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Masonry Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredPosts.map((post) => (
            <motion.div
              layout={!shouldReduceMotion}
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95 }}
              animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              key={post.slug}
            >
              <Link href={`/blog/${post.slug}`} className="h-full group flex flex-col bg-on-primary border border-border p-8 transition-transform duration-300 hover:scale-[1.02]">
                <div className="flex justify-between items-start mb-4">
                  <span className="inline-flex items-center rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-semibold text-accent border border-accent/20">
                    {post.category}
                  </span>
                  <p className="font-sans text-xs font-normal tracking-widest uppercase text-muted-foreground">
                    {post.date} • {post.readingTime}
                  </p>
                </div> 
                <h2 className="font-heading text-2xl font-bold text-primary mb-4 group-hover:text-accent transition-colors">
                  {post.title}
                </h2>
                <p className="font-sans text-secondary line-clamp-3 mb-6 flex-1">
                  {post.excerpt}
                </p>
                <div className="mt-auto flex justify-between items-center border-t border-border pt-4">
                  <p className="font-sans text-sm text-secondary font-medium">By {post.author}</p>
                  <div className="font-sans text-sm font-medium text-primary flex items-center">
                    Read <span className="text-accent ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true">&rarr;</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredPosts.length === 0 && (
        <div className="text-center py-20 text-secondary font-sans">
          No posts found for this category.
        </div>
      )}
    </div>
  );
}
