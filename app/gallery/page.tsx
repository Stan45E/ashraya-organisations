import PageLayout from "@/components/PageLayout";

const galleryImages = [
  { src: "/images/annadana.svg", alt: "Community annadana service" },
  { src: "/images/temple.svg", alt: "Temple service and rituals" },
  { src: "/images/tv.svg", alt: "Media and broadcast activities" },
  { src: "/images/hero.svg", alt: "Ashraya Organisations event" },
];

export default function GalleryPage() {
  return (
    <PageLayout
      title="Gallery"
      subtitle="A glimpse of the service, devotional, and cultural activities carried out by the organisations."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {galleryImages.map((image) => (
          <div key={image.src} className="overflow-hidden rounded-3xl border border-amber-100 bg-white shadow-sm">
            <img src={image.src} alt={image.alt} className="h-72 w-full object-cover" />
          </div>
        ))}
      </div>
    </PageLayout>
  );
}
