const lineageClasses = [
  { term: "Charters: 2009", members: 6, isCharter: true },
  { term: "Alpha Class: Spring 2010", members: 7 },
  { term: "Beta Class: Fall 2010", members: 7 },
  { term: "...", isBreak: true },
  { term: "Alpha Beta Class: Spring 2025", members: 10 },
  { term: "Active House", members: 12, isActive: true },
];

function PersonIcon({ isLarge = false }: { isLarge?: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={`${isLarge ? "h-8 w-8" : "h-6 w-6"} text-emerald-200`}
      aria-hidden="true"
    >
      <circle cx="12" cy="8" r="4" fill="currentColor" opacity="0.9" />
      <path
        d="M4 20c0-3.4 3.6-6 8-6s8 2.6 8 6"
        fill="currentColor"
        opacity="0.9"
      />
    </svg>
  );
}

export default function LineagePage() {
  return (
    <main className="min-h-[calc(100vh-5rem)] bg-[#0f1519] px-6 pb-16 pt-28 text-neutral-100 sm:px-10 lg:px-16">
      <div className="mx-auto w-full max-w-5xl space-y-12 text-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#00ab55]">
            Lineage
          </p>
        </div>

        <section className="mx-auto flex w-full max-w-2xl flex-col items-center">
          {lineageClasses.map((lineageClass) => {
            if (lineageClass.isBreak) {
              return (
                <div key="lineage-break" className="py-8">
                  <p className="text-3xl font-black tracking-[0.5em] text-[#00ab55]/80">
                    ...
                  </p>
                </div>
              );
            }

            return (
              <div key={lineageClass.term} className="flex w-full flex-col items-center">
                <div className="space-y-3 py-6">
                  <h2 className="text-2xl font-black tracking-tight text-emerald-100 sm:text-3xl">
                    {lineageClass.term}
                  </h2>

                  {lineageClass.isActive ? (
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#00ab55]">
                      Placeholder
                    </p>
                  ) : null}

                  {lineageClass.members ? (
                    <div className="mx-auto flex max-w-xl flex-wrap items-center justify-center gap-2">
                      {Array.from({ length: lineageClass.members }).map((_, i) => (
                        <div
                          key={`${lineageClass.term}-${i}`}
                          className="lineage-glow rounded-full border border-[#00ab55]/28 bg-slate-900/75 p-2"
                          aria-label="anonymous member"
                        >
                          <PersonIcon
                            isLarge={Boolean(
                              lineageClass.isCharter || lineageClass.isActive,
                            )}
                          />
                        </div>
                      ))}
                    </div>
                  ) : null}
                </div>

                {!lineageClass.isActive ? (
                  <div className="h-10 w-px bg-gradient-to-b from-[#00ab55]/55 to-transparent" />
                ) : null}
              </div>
            );
          })}
        </section>

        <section className="space-y-2 pt-2">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#00ab55]">
            Next Class
          </p>
          <h2 className="text-2xl font-black text-emerald-100 sm:text-3xl">
            ? ? ? Could This Be You?
          </h2>
        </section>
      </div>
    </main>
  );
}
