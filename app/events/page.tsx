import PageLayout from "@/components/PageLayout";

const events = [
  {
    title: "Spiritual discourse and satsang",
    time: "Every Sunday · 8:00 AM",
    description: "A guided gathering focused on prayer, reflection, and community connection.",
  },
  {
    title: "Annadana service day",
    time: "First Saturday of each month",
    description: "Meals and support are distributed to families and visitors in need.",
  },
  {
    title: "Cultural and youth program",
    time: "Monthly · 4:00 PM",
    description: "A platform for education, music, and community engagement.",
  },
];

export default function EventsPage() {
  return (
    <PageLayout
      title="Events"
      subtitle="Upcoming gatherings and regular programs that bring the community together."
    >
      <div className="space-y-6">
        {events.map((event) => (
          <div key={event.title} className="rounded-3xl border border-amber-100 bg-white p-8 shadow-sm">
            <h2 className="text-xl font-semibold text-amber-900">{event.title}</h2>
            <p className="mt-2 font-medium text-amber-700">{event.time}</p>
            <p className="mt-4 text-gray-700">{event.description}</p>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}
