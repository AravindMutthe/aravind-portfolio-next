import Link from "next/link";
import PageHero from "@/components/PageHero";
import Poster from "@/components/Poster";
import Reveal from "@/components/Reveal";

const CREDS = [
  {
    title: "MS, Computer Science",
    desc: "Rivier University, Nashua, NH, USA · 2023–2024 · GPA 3.8/4.0",
    icon: "M22 10 12 5 2 10l10 5 10-5zM6 12v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5",
  },
  {
    title: "B.Tech, Computer Science",
    desc: "JNTU Hyderabad · 2017–2020 · Lateral Entry",
    icon: "M22 10 12 5 2 10l10 5 10-5zM6 12v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5",
  },
  {
    title: "Google Cloud Certified",
    desc: "Professional Cloud Architect",
    icon: "M12 9a6 6 0 1 0 0 12 6 6 0 0 0 0-12zM8.5 14 7 22l5-3 5 3-1.5-8",
  },
  {
    title: "Microsoft Azure",
    desc: "AZ-900: Azure Fundamentals",
    icon: "M12 9a6 6 0 1 0 0 12 6 6 0 0 0 0-12zM8.5 14 7 22l5-3 5 3-1.5-8",
  },
];

export default function About() {
  return (
    <>
      <PageHero
        index="04"
        eyebrow="About"
        title={<>Engineer with a <span className="grad-text">global perspective.</span></>}
      />

      <div className="mx-auto max-w-[1120px] px-7">
        <Reveal dir="scale">
          <Poster
            src="/img/about-neon.jpg"
            alt="Neon-lit futuristic data center corridor in blue, magenta and cyan"
            tall
            eager
            className="mb-16"
          />
        </Reveal>
      </div>

      <section className="px-7 pb-[88px]">
        <div className="mx-auto grid max-w-[1120px] items-start gap-16 md:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <div className="space-y-5 text-[17px] text-[#b9b9cf]">
              <p>
                I&apos;m a <strong className="font-bold text-white">Cloud DevOps &amp; Site Reliability Engineer</strong> based in{" "}
                <strong className="font-bold text-white">Hyderabad, India</strong>, with a Master&apos;s in Computer Science from{" "}
                <strong className="font-bold text-white">Rivier University (USA)</strong> and 4 years of experience across the US and India.
              </p>
              <p>
                My sweet spot is the intersection of <strong className="font-bold text-white">development velocity and operational calm</strong>:
                pipelines that deploy in minutes, infrastructure defined entirely as code, and monitoring that pages you before customers notice.
              </p>
              <p>
                I&apos;m currently <strong className="font-bold text-white">available for immediate joining</strong> — open to freelance and contract
                engagements as well as full-time DevOps / SRE / Platform Engineering roles.
              </p>
            </div>
          </Reveal>
          <div>
            {CREDS.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.08}>
                <div className="glass mb-[14px] flex items-start gap-[18px] rounded-[20px] p-[26px_28px] transition-all duration-300 hover:translate-x-2 hover:border-[rgba(139,92,246,0.35)] hover:shadow-[0_18px_40px_rgba(0,0,0,0.5)]">
                  <div
                    className="grid h-[50px] w-[50px] shrink-0 place-items-center rounded-[15px] text-white shadow-[0_8px_22px_rgba(139,92,246,0.45)]"
                    style={{ background: "linear-gradient(135deg,#4d7cfe,#8b5cf6 48%,#ec4899)" }}
                  >
                    <svg viewBox="0 0 24 24" className="h-[22px] w-[22px]" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
                      <path d={c.icon} />
                    </svg>
                  </div>
                  <div>
                    <h4 className="mb-[3px] text-[16px] font-bold text-white">{c.title}</h4>
                    <p className="text-[14px] text-[#9b9bb5]">{c.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-7 pb-[88px]">
        <div className="mx-auto max-w-[1120px]">
          <Reveal dir="scale">
            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#0a0a16] px-[clamp(28px,6vw,72px)] py-[clamp(60px,8vw,104px)] text-center">
              <div className="mesh-bg" />
              <h2 className="relative mb-4 text-[clamp(34px,5vw,58px)] font-extrabold tracking-[-0.035em] text-white">
                Let&apos;s build something <span className="grad-text">reliable.</span>
              </h2>
              <p className="relative mx-auto mb-10 max-w-[560px] text-[17px] text-[#9b9bb5]">
                Currently accepting freelance projects and full-time opportunities.
              </p>
              <div className="relative flex flex-wrap justify-center gap-[14px]">
                <Link href="/contact" className="btn-grad inline-flex items-center rounded-full px-[34px] py-[15px] text-[15px] font-bold">
                  Get in Touch
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
