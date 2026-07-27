import PageLayout from "@/components/PageLayout";

const newsItems = [
  {
    title: "Community food service continues with growing support",
    description: "The annadana initiative continues to expand through volunteer support and community generosity.",
  },
  {
    title: "Educational outreach program launched for youth",
    description: "Workshops and value-based learning sessions are being prepared for students and families.",
  },
  {
    title: "Temple and spiritual programs scheduled for the month",
    description: "Regular rituals, devotional sessions, and cultural activities are organised across centres.",
  },
];

export default function NewsPage() {
  return (
    <PageLayout
      title="Latest News"
      subtitle="Updates from the organisations, service initiatives, and upcoming programs."
    >
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {newsItems.map((item) => (
          <article key={item.title} className="rounded-3xl border border-amber-100 bg-white p-8 shadow-sm">
            <h2 className="text-xl font-semibold text-amber-900">{item.title}</h2>
            <p className="mt-4 text-gray-700">{item.description}</p>
          </article>
        ))}
      </div>
    </PageLayout>
  );
}
