import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import OrganisationCards from "@/components/OrganisationCards";
import NewsSection from "@/components/NewsSection";
import MediaSection from "@/components/MediaSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <OrganisationCards />

      <NewsSection />

      <MediaSection />

      <Footer />
    </>
  );
}