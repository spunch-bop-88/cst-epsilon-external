export default function Home() {
  const tapeLine = "Fall recruitment opening soon";

  return (
    <main className="relative overflow-x-clip bg-[#0f1519] text-neutral-100">
      <section className="relative isolate flex min-h-screen items-center px-6 pb-40 pt-12 sm:px-10 sm:pt-16 lg:px-16">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.28),transparent_40%),radial-gradient(circle_at_88%_18%,rgba(148,163,184,0.2),transparent_38%),linear-gradient(165deg,#0f1519_0%,#131d21_52%,#182127_100%)]" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(120deg,rgba(4,120,87,0.3)_0%,transparent_42%),linear-gradient(300deg,rgba(71,85,105,0.22)_0%,transparent_50%)]" />

        <div className="mx-auto w-full max-w-7xl">
          <div className="max-w-3xl space-y-8">
            <p className="hero-load-up hero-delay-1 inline-flex items-center rounded-full border border-[#00ab55]/30 bg-[#00ab55]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] text-[#34d388] backdrop-blur">
              University Leadership Community
            </p>

            <h1 className="hero-load-up hero-delay-2 text-5xl font-black leading-[0.95] tracking-tight text-emerald-100 sm:text-6xl lg:text-7xl">
              Club Name
              <span className="mt-2 block bg-[linear-gradient(95deg,#6ee7b7_0%,#00ab55_50%,#94a3b8_100%)] bg-clip-text text-transparent [text-shadow:0_24px_60px_rgba(0,171,85,0.35)]">
                Built for Impact
              </span>
            </h1>

            <p className="hero-load-up hero-delay-3 max-w-2xl text-base leading-relaxed text-emerald-100/75 sm:text-lg">
              A home for students committed to placeholder, placeholder, and
              placeholder. Grow your confidence, build meaningful bonds, and
              step into a lifelong network.
            </p>

            <div className="hero-load-up hero-delay-4 flex flex-col gap-4 pt-2 sm:flex-row">
              <a
                href="#join"
                className="inline-flex h-13 items-center justify-center rounded-full bg-[#00ab55] px-8 text-sm font-semibold tracking-wide text-emerald-950 shadow-[0_18px_36px_-18px_rgba(0,171,85,0.95)] transition hover:-translate-y-0.5 hover:bg-[#00c462] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00ab55]"
              >
                Join Now
              </a>
              <a
                href="#events"
                className="inline-flex h-13 items-center justify-center rounded-full border border-[#00ab55]/35 bg-[#00ab55]/12 px-8 text-sm font-semibold tracking-wide text-emerald-200 backdrop-blur transition hover:-translate-y-0.5 hover:border-[#00ab55]/75 hover:bg-[#00ab55]/18"
              >
                View Events
              </a>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-6 left-0 right-0 overflow-hidden border-y border-[#00ab55]/30 bg-slate-900/55 py-3 backdrop-blur-md">
          <div className="hero-tape-track whitespace-nowrap text-sm font-bold uppercase tracking-[0.26em] text-[#34d388]">
            <span>
              {tapeLine} • {tapeLine} • {tapeLine} • {tapeLine} • {tapeLine} •
            </span>
            <span aria-hidden="true">
              {tapeLine} • {tapeLine} • {tapeLine} • {tapeLine} • {tapeLine} •
            </span>
          </div>
        </div>
      </section>

      <div
        className="hero-load-up hero-delay-4 pointer-events-none absolute right-[-6vw] top-[calc(100vh-11rem)] z-0 h-[30rem] w-[30rem] animate-hero-float rounded-[46%_54%_58%_42%/42%_38%_62%_58%] border border-emerald-200/25 bg-[radial-gradient(circle_at_34%_30%,rgba(167,243,208,0.95),rgba(16,185,129,0.62)_44%,rgba(148,163,184,0.34)_78%,rgba(15,23,42,0.28)_100%)] shadow-[0_40px_120px_-30px_rgba(16,185,129,0.7)] backdrop-blur-xl sm:right-[-3vw]"
        aria-hidden="true"
      >
        <div className="absolute inset-[18%] rounded-full border border-white/35 bg-white/18 blur-[1px]" />
      </div>

      <section className="relative z-10 border-t border-[#00ab55]/20 bg-[linear-gradient(180deg,#111c21_0%,#131a1f_100%)] px-6 pb-24 pt-20 sm:px-10 sm:pt-24 lg:px-16 lg:pb-28 lg:pt-28">
        <div className="mx-auto w-full max-w-7xl">
          <div className="mb-12 max-w-2xl space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#00ab55]">
              Why Join
            </p>
            <h2 className="text-4xl font-black tracking-tight text-emerald-100 sm:text-5xl">
              Brotherhood with Real Momentum
            </h2>
            <p className="text-base leading-relaxed text-neutral-300">
              Built for ambitious students who want stronger character,
              meaningful relationships, and long-term professional leverage.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            <article className="rounded-3xl border border-[#00ab55]/22 bg-white/[0.04] p-8 shadow-[0_22px_70px_-44px_rgba(0,171,85,0.65)] backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#00ab55]">
              Brotherhood
            </p>
              <h3 className="mt-4 text-2xl font-bold text-emerald-100">
              Build Lifelong Trust
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-300">
              Join a culture rooted in accountability, support, and real
              connection through every season of campus life.
            </p>
            </article>

            <article className="rounded-3xl border border-[#00ab55]/22 bg-white/[0.04] p-8 shadow-[0_22px_70px_-44px_rgba(0,171,85,0.65)] backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#00ab55]">
              Professionalism
            </p>
              <h3 className="mt-4 text-2xl font-bold text-emerald-100">
              Lead with Presence
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-300">
              Develop your communication, discipline, and leadership through
              mentorship, workshops, and service.
            </p>
            </article>

            <article className="rounded-3xl border border-[#00ab55]/22 bg-white/[0.04] p-8 shadow-[0_22px_70px_-44px_rgba(0,171,85,0.65)] backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#00ab55]">
              Network
            </p>
              <h3 className="mt-4 text-2xl font-bold text-emerald-100">
              Expand Your Circle
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-300">
              Connect with driven members, alumni, and partners who open doors
              long after graduation.
            </p>
            </article>
          </div>
        </div>
      </section>

      <section id="events" className="px-6 pb-24 pt-8 sm:px-10 lg:px-16">
        <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[1.1fr_1fr]">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#00ab55]">
              Events
            </p>
            <h2 className="text-4xl font-black tracking-tight text-emerald-100 sm:text-5xl">
              Stay in the Room Where Growth Happens
            </h2>
            <p className="max-w-xl text-base leading-relaxed text-neutral-300">
              Experience a balanced calendar of socials, leadership sessions,
              networking nights, and campus-wide initiatives.
            </p>
          </div>

          <div className="rounded-3xl border border-[#00ab55]/20 bg-white/[0.04] p-6 shadow-[0_30px_80px_-46px_rgba(0,171,85,0.45)] backdrop-blur">
            <div className="space-y-5 text-sm">
              <div className="flex items-start justify-between border-b border-neutral-700/60 pb-4">
                <div>
                  <p className="font-semibold text-emerald-200">Meet the Team</p>
                  <p className="text-neutral-400">September 4</p>
                </div>
                <span className="rounded-full bg-[#00ab55]/25 px-3 py-1 text-xs font-semibold text-emerald-200">
                  Open
                </span>
              </div>
              <div className="flex items-start justify-between border-b border-neutral-700/60 pb-4">
                <div>
                  <p className="font-semibold text-emerald-200">
                    Leadership Workshop
                  </p>
                  <p className="text-neutral-400">September 11</p>
                </div>
                <span className="rounded-full bg-[#00ab55]/25 px-3 py-1 text-xs font-semibold text-emerald-200">
                  RSVP
                </span>
              </div>
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-semibold text-emerald-200">Networking Night</p>
                  <p className="text-neutral-400">September 21</p>
                </div>
                <span className="rounded-full bg-neutral-200/20 px-3 py-1 text-xs font-semibold text-neutral-200">
                  Limited
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="join" className="px-6 pb-24 sm:px-10 lg:px-16">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-start gap-6 rounded-4xl border border-emerald-100/15 bg-[linear-gradient(130deg,#064e3b_0%,#0f766e_40%,#334155_100%)] p-10 text-white shadow-[0_28px_90px_-40px_rgba(16,185,129,0.75)] lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-100/80">
              Recruitment
            </p>
            <h3 className="text-3xl font-black tracking-tight sm:text-4xl">
              Ready to Build Something Bigger Than Yourself?
            </h3>
            <p className="max-w-2xl text-sm text-emerald-50/85 sm:text-base">
              Applications for the next class open soon. Bring your ambition,
              curiosity, and commitment to excellence.
            </p>
          </div>
          <a
            href="#"
            className="inline-flex h-12 shrink-0 items-center justify-center rounded-full bg-emerald-50 px-7 text-sm font-semibold text-emerald-900 transition hover:bg-white"
          >
            Start Application
          </a>
        </div>
      </section>
    </main>
  );
}
