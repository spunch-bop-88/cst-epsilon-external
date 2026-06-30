export default function AboutPage() {
  return (
    <main className="min-h-[calc(100vh-5rem)] bg-[#0f1519] px-6 pb-16 pt-28 text-neutral-100 sm:px-10 lg:px-16">
      <div className="mx-auto w-full max-w-5xl space-y-8">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#00ab55]">
          About
        </p>
        <h1 className="text-4xl font-black tracking-tight text-emerald-100 sm:text-5xl">
          Built for Growth, Brotherhood, and Service
        </h1>
        <p className="max-w-3xl text-base leading-relaxed text-neutral-300 sm:text-lg">
          This organization brings together students who want to lead with
          integrity, support one another, and build momentum far beyond campus.
          Replace this with your official mission and values when ready.
        </p>

        <section className="grid gap-6 sm:grid-cols-2">
          <article className="rounded-2xl border border-[#00ab55]/22 bg-white/[0.04] p-6">
            <h2 className="text-lg font-bold text-emerald-100">What We Value</h2>
            <p className="mt-2 text-sm leading-relaxed text-neutral-300">
              Leadership, discipline, professionalism, and accountability to the
              people around us.
            </p>
          </article>
          <article className="rounded-2xl border border-[#00ab55]/22 bg-white/[0.04] p-6">
            <h2 className="text-lg font-bold text-emerald-100">What We Build</h2>
            <p className="mt-2 text-sm leading-relaxed text-neutral-300">
              Lifelong friendships, stronger character, and a powerful alumni
              network.
            </p>
          </article>
        </section>
      </div>
    </main>
  );
}
