import { PROFILE, TECHS, EXPERIENCES, PROJECTS } from "./data";

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden>
      <path d="M12 .5C5.73.5.5 5.74.5 12.04c0 5.1 3.29 9.42 7.86 10.95.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.79 2.73 1.27 3.4.97.1-.76.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.41-5.25 5.69.42.36.79 1.08.79 2.18v3.24c0 .31.21.67.8.56A11.55 11.55 0 0 0 23.5 12.04C23.5 5.74 18.27.5 12 .5Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.8 0 0 .78 0 1.74v20.52C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.74V1.74C24 .78 23.2 0 22.22 0Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden>
      <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z" />
    </svg>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* Nav */}
      <header className="sticky top-0 z-30 border-b border-neutral-200 bg-white/80 backdrop-blur">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a href="#top" className="text-lg font-bold tracking-tight">
            Wilson<span className="text-indigo-600">.</span>
          </a>
          <div className="flex items-center gap-6 text-sm font-medium text-neutral-600">
            <a href="#experiencia" className="hover:text-neutral-900">
              Experiência
            </a>
            <a href="#projetos" className="hover:text-neutral-900">
              Projetos
            </a>
          </div>
        </nav>
      </header>

      <main id="top" className="mx-auto max-w-5xl px-6">
        {/* Hero */}
        <section className="flex flex-col items-center pt-20 pb-16 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-neutral-400">
            Sejam bem-vindos, sou
          </p>
          <h1 className="mt-4 text-5xl font-extrabold tracking-tight sm:text-6xl">
            {PROFILE.name}.
          </h1>
          <p className="mt-3 text-lg font-medium text-indigo-600">
            {PROFILE.role}
          </p>
          <p className="mt-6 max-w-2xl text-balance text-neutral-600 leading-relaxed">
            {PROFILE.bio}
          </p>

          {/* Tech grid */}
          <p className="mt-12 text-sm font-semibold text-neutral-500">
            Tecnologias que trabalho:
          </p>
          <div className="mt-6 w-full rounded-3xl border border-neutral-200 bg-neutral-50/60 p-8 shadow-sm">
            <div className="grid grid-cols-3 gap-y-8 sm:grid-cols-6">
              {TECHS.map((t) => (
                <div key={t.name} className="flex flex-col items-center gap-2">
                  <img
                    src={t.icon}
                    alt={t.name}
                    loading="lazy"
                    className="h-9 w-9 object-contain"
                  />
                  <span className="text-xs font-medium text-neutral-500">
                    {t.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#projetos"
              className="rounded-full border border-neutral-300 px-6 py-2.5 text-sm font-semibold text-neutral-800 transition hover:border-neutral-900 hover:bg-neutral-50"
            >
              Ver meu trabalho
            </a>
            <a
              href={PROFILE.cv}
              download
              className="rounded-full bg-neutral-900 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-600"
            >
              Baixar CV
            </a>
          </div>

          {/* Socials */}
          <div className="mt-10 flex items-center gap-3 text-neutral-500">
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="rounded-full border border-neutral-200 p-2.5 transition hover:border-neutral-900 hover:text-neutral-900"
            >
              <LinkedInIcon />
            </a>
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="rounded-full border border-neutral-200 p-2.5 transition hover:border-neutral-900 hover:text-neutral-900"
            >
              <GitHubIcon />
            </a>
            <a
              href={`mailto:${PROFILE.email}`}
              aria-label="E-mail"
              className="rounded-full border border-neutral-200 p-2.5 transition hover:border-neutral-900 hover:text-neutral-900"
            >
              <MailIcon />
            </a>
          </div>
        </section>

        {/* Experiência */}
        <section id="experiencia" className="scroll-mt-20 py-16">
          <h2 className="text-2xl font-bold tracking-tight">Experiência</h2>
          <div className="mt-8 space-y-6">
            {EXPERIENCES.map((exp) => (
              <article
                key={exp.role + exp.period}
                className="rounded-2xl border border-neutral-200 p-6 transition hover:shadow-md"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-semibold">
                    {exp.role} ·{" "}
                    <span className="text-indigo-600">{exp.company}</span>
                  </h3>
                  <span className="text-sm text-neutral-400">
                    {exp.period} · {exp.location}
                  </span>
                </div>
                <ul className="mt-4 list-disc space-y-1.5 pl-5 text-sm text-neutral-600">
                  {exp.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* Projetos */}
        <section id="projetos" className="scroll-mt-20 py-16">
          <h2 className="text-2xl font-bold tracking-tight">Projetos</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((p) => (
              <a
                key={p.title}
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col rounded-2xl border border-neutral-200 p-6 transition hover:-translate-y-1 hover:border-indigo-300 hover:shadow-lg"
              >
                <div className="text-3xl">{p.emoji}</div>
                <h3 className="mt-3 text-lg font-semibold group-hover:text-indigo-600">
                  {p.title}
                </h3>
                <p className="mt-2 flex-1 text-sm text-neutral-600">
                  {p.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-neutral-100 px-2.5 py-1 text-xs font-medium text-neutral-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-200 py-10">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-3 px-6 text-center">
          <div className="flex items-center gap-3 text-neutral-500">
            <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-neutral-900">
              <LinkedInIcon />
            </a>
            <a href={PROFILE.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-neutral-900">
              <GitHubIcon />
            </a>
            <a href={`mailto:${PROFILE.email}`} aria-label="E-mail" className="hover:text-neutral-900">
              <MailIcon />
            </a>
          </div>
          <p className="text-sm text-neutral-400">
            © {new Date().getFullYear()} {PROFILE.name}. Feito com React, Vite e Tailwind.
          </p>
        </div>
      </footer>
    </div>
  );
}
