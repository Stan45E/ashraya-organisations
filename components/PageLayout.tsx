import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type PageLayoutProps = {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
};

export default function PageLayout({ title, subtitle, children }: PageLayoutProps) {
  return (
    <>
      <Navbar />

      <main className="flex-1 bg-gradient-to-b from-amber-50 via-white to-orange-50">
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6">
            <h1 className="text-4xl font-bold text-amber-900 md:text-5xl">{title}</h1>
            {subtitle ? (
              <p className="mt-4 max-w-3xl text-lg text-gray-600">{subtitle}</p>
            ) : null}
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-6 pb-16">{children}</div>
      </main>

      <Footer />
    </>
  );
}
