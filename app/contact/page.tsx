export default function ContactPage() {
  return (
    <main className="min-h-[calc(100vh-5rem)] bg-[#0f1519] px-6 pb-16 pt-28 text-neutral-100 sm:px-10 lg:px-16">
      <div className="mx-auto w-full max-w-5xl space-y-8">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#00ab55]">
          Contact
        </p>
        <h1 className="text-4xl font-black tracking-tight text-emerald-100 sm:text-5xl">
          Get in Touch
        </h1>
        <p className="max-w-3xl text-base leading-relaxed text-neutral-300">
          Use this page for your official contact details and social links.
        </p>

        <div className="grid gap-6 sm:grid-cols-2">
          <article className="rounded-2xl border border-[#00ab55]/22 bg-white/[0.04] p-6">
            <h2 className="text-lg font-bold text-emerald-100">General Inquiries</h2>
            <p className="mt-2 text-sm text-neutral-300">placeholder@university.edu</p>
          </article>
          <article className="rounded-2xl border border-[#00ab55]/22 bg-white/[0.04] p-6">
            <h2 className="text-lg font-bold text-emerald-100">Recruitment</h2>
            <p className="mt-2 text-sm text-neutral-300">join@university.edu</p>
          </article>
        </div>
      </div>
    </main>
  );
}
