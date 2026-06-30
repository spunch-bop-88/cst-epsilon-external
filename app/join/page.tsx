export default function JoinPage() {
  return (
    <main className="min-h-[calc(100vh-5rem)] bg-[#0f1519] px-6 pb-16 pt-28 text-neutral-100 sm:px-10 lg:px-16">
      <div className="mx-auto w-full max-w-5xl space-y-8">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#00ab55]">
          Join
        </p>
        <h1 className="text-4xl font-black tracking-tight text-emerald-100 sm:text-5xl">
          Start Your Application
        </h1>
        <p className="max-w-3xl text-base leading-relaxed text-neutral-300">
          This is a placeholder join page. Add your eligibility requirements,
          timeline, and application form link here.
        </p>

        <div className="rounded-2xl border border-[#00ab55]/22 bg-white/[0.04] p-6">
          <h2 className="text-xl font-bold text-emerald-100">Recruitment Steps</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-neutral-300">
            <li>Attend an intro or recruitment event.</li>
            <li>Submit interest form and resume.</li>
            <li>Complete interview and community round.</li>
            <li>Receive decision and onboarding details.</li>
          </ol>
        </div>
      </div>
    </main>
  );
}
