const upcoming = [
  {
    title: "Meet the Team",
    date: "September 4",
    details: "Intro night, org overview, and Q&A with current members.",
  },
  {
    title: "Leadership Workshop",
    date: "September 11",
    details: "Hands-on session focused on communication and confidence.",
  },
  {
    title: "Networking Night",
    date: "September 21",
    details: "Connect with alumni and student leaders across campus.",
  },
];

export default function EventsPage() {
  return (
    <main className="min-h-[calc(100vh-5rem)] bg-[#0f1519] px-6 pb-16 pt-28 text-neutral-100 sm:px-10 lg:px-16">
      <div className="mx-auto w-full max-w-5xl space-y-10">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#00ab55]">
            Events
          </p>
          <h1 className="text-4xl font-black tracking-tight text-emerald-100 sm:text-5xl">
            Upcoming Calendar
          </h1>
          <p className="max-w-3xl text-base leading-relaxed text-neutral-300">
            Placeholder schedule for recruitment and development events.
          </p>
        </div>

        <section className="space-y-4">
          {upcoming.map((event) => (
            <article
              key={event.title}
              className="rounded-2xl border border-[#00ab55]/22 bg-white/[0.04] p-6"
            >
              <div className="flex items-center justify-between gap-4">
                <h2 className="text-xl font-bold text-emerald-100">{event.title}</h2>
                <span className="rounded-full bg-[#00ab55]/20 px-3 py-1 text-xs font-semibold text-emerald-200">
                  {event.date}
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-neutral-300">
                {event.details}
              </p>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
