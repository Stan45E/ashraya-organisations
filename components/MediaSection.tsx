import GallerySection from "@/components/GallerySection";
import VideoSection from "@/components/VideoSection";

export default function MediaSection() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-3xl border border-amber-100 bg-white p-6 shadow-sm">
            <GallerySection />
          </div>
          <div className="rounded-3xl border border-amber-100 bg-white p-6 shadow-sm">
            <VideoSection />
          </div>
        </div>
      </div>
    </section>
  );
}
