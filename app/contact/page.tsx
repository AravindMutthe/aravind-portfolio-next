import PageHero from "@/components/PageHero";
import Poster from "@/components/Poster";
import Reveal from "@/components/Reveal";
import HireForm from "@/components/HireForm";
import { CONTACT } from "@/lib/site";

const METHODS = [
  {
    label: "Email",
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
    icon: "M2 4h20a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zM22 7l-10 6L2 7",
  },
  {
    label: "Phone",
    value: CONTACT.phoneDisplay,
    href: `tel:${CONTACT.phoneIntl}`,
    icon: "M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.13.96.36 1.9.7 2.8a2 2 0 0 1-.45 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.45c.9.34 1.84.57 2.8.7A2 2 0 0 1 22 16.9z",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/aravindmutte",
    href: CONTACT.linkedin,
    external: true,
    icon: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4V8h4v1.5A6 6 0 0 1 16 8zM2 9h4v12H2zM4 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z",
  },
  {
    label: "GitHub",
    value: "github.com/AravindMutthe",
    href: CONTACT.github,
    external: true,
    icon: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2.5 5 2.5 5 2.5c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9.5c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4M9 18c-4.51 2-5-2-7-2",
  },
];

export default function Contact() {
  return (
    <>
      <PageHero
        index="05"
        eyebrow="Contact"
        title={<>Let&apos;s build something <span className="grad-text">reliable.</span></>}
        lead={
          <>
            Have a cloud project, a pipeline that needs fixing, or a full-time role to fill? Fill
            this in — it lands straight in my <strong className="font-bold text-white">email, WhatsApp and SMS</strong>.
            I usually reply within a day.
          </>
        }
      />

      <div className="mx-auto max-w-[1120px] px-7">
        <Reveal dir="scale">
          <Poster
            src="/img/contact-neon.jpg"
            alt="Vibrant network of glowing connections forming a sphere"
            eager
            className="mb-16"
          />
        </Reveal>
      </div>

      <section className="px-7 pb-[88px]">
        <div className="mx-auto max-w-[1120px]">
          <Reveal>
            <div className="mb-4 grid gap-4 md:grid-cols-2">
              {METHODS.map((m) => (
                <a
                  key={m.label}
                  href={m.href}
                  {...(m.external ? { target: "_blank", rel: "noopener" } : {})}
                  className="glass group flex items-center gap-4 rounded-[20px] p-[26px_28px] transition-all duration-300 hover:-translate-y-1.5 hover:border-[rgba(139,92,246,0.4)] hover:shadow-[0_20px_44px_rgba(0,0,0,0.5)]"
                >
                  <svg viewBox="0 0 24 24" className="h-[22px] w-[22px] shrink-0 stroke-[#8b5cf6] transition-transform duration-300 group-hover:scale-[1.18]" fill="none" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
                    <path d={m.icon} />
                  </svg>
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#9b9bb5]">{m.label}</div>
                    <div className="text-[16.5px] font-bold text-white">{m.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <HireForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
