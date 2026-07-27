import PageLayout from "@/components/PageLayout";

export default function AboutPage() {
  return (
    <PageLayout
      title="About Ashraya Organisations"
      subtitle="A network of service, devotion, and education that serves society through compassion and discipline."
    >
      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-3xl border border-amber-100 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-amber-900">Our mission</h2>
          <p className="mt-4 text-lg leading-8 text-gray-700">
            Ashraya Organisations was created to preserve dharma, support education, promote spiritual growth,
            and provide service to the community through consistent action and compassionate leadership.
          </p>
          <p className="mt-4 text-lg leading-8 text-gray-700">
            From annadana and temple service to media outreach and cultural programs, the work continues with a
            focus on human dignity and social upliftment.
          </p>
        </div>

        <div className="rounded-3xl bg-amber-900 p-8 text-white shadow-sm">
          <h2 className="text-2xl font-semibold">What we stand for</h2>
          <ul className="mt-6 space-y-3 text-lg text-amber-100">
            <li>• Dharma and spiritual guidance</li>
            <li>• Education and youth support</li>
            <li>• Community welfare and annadana</li>
            <li>• Cultural preservation and service</li>
          </ul>
        </div>
      </div>
    </PageLayout>
  );
}
