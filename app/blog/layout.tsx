
import Footer from "@/components/Footer";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">

      
      {/* Blog Content */}
      <main className="flex-1">
        {children}
      </main>

      <Footer />
    </div>
  );
}
