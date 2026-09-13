"use client";

import Link from "next/link";
import { asset } from "@/lib/site";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import Ticker from "@/components/Ticker";
import Poster from "@/components/Poster";

const STATS = [
  { to: 4, decimals: 1, suffix: "+", label: "Years experience" },
  { to: 99.95, decimals: 2, suffix: "%", label: "Availability delivered" },
  { to: 40, prefix: "−", suffix: "%", label: "Mean time to recovery" },
  { to: 30, prefix: "−", suffix: "%", label: "Infra cost reduction" },
];

export default function Home() {
  return (
    <>
      <div className="relative overflow-hidden">
        <video
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-55"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={asset("/img/hero-poster.jpg")}
        >
          <source src={asset("/img/hero-loop.mp4")} type="video/mp4" />
        </video>
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 90% 65% at 50% 38%, transparent 30%, rgba(5,5,9,0.55) 68%, #050509 100%), linear-gradient(180deg, rgba(5,5,9,0.35), transparent 30%, transparent 62%, #050509 98%)",
          }}
        />
        <div className="orb left-[-120px] top-[-120px] h-[420px] w-[420px] bg-[#4d7cfe]" />
        <div className="orb right-[-140px] top-[10%] h-[380px] w-[380px] bg-[#ec4899] [animation-delay:-6s]" />

        <header className="relative px-7 pb-[90px] pt-[190px] text-center">
          <div className="mx-auto max-w-[1120px]">
            <Reveal>
              <div className="mb-[30px] inline-flex items-center gap-[10px] rounded-full border border-white/10 bg-white/[0.07] px-5 py-[9px] text-[13px] font-semibold text-white backdrop-blur-[10px]">
                <span className="h-2 w-2 animate-pulse rounded-full bg-[#34f5a5] shadow-[0_0_12px_#34f5a5]" />
                Available for immediate joining — freelance &amp; full-time
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mb-6 text-[clamp(50px,7.6vw,92px)] font-extrabold leading-[1.03] tracking-[-0.045em] text-white [text-shadow:0_4px_40px_rgba(0,0,0,0.5)]">
                Infrastructure that <span className="grad-text">ships fast</span> and{" "}
                <span className="grad-text">never sleeps.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mx-auto mb-10 max-w-[660px] text-[clamp(16px,2vw,19px)] text-[#c6c6da]">
                I&apos;m <strong className="font-bold text-white">Aravind Mutte</strong>, a Cloud
                DevOps &amp; Site Reliability Engineer with <strong className="font-bold text-white">4 years</strong> across
                enterprise environments in the US and India. I build automated, observable cloud
                platforms on <strong className="font-bold text-white">AWS and Azure</strong>.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="flex flex-wrap justify-center gap-[14px]">
                <Link href="/contact" className="btn-grad inline-flex items-center rounded-full px-[34px] py-[15px] text-[15px] font-bold">
                  Start a Project
                </Link>
                <Link href="/services" className="btn-ghost-neon inline-flex items-center rounded-full px-[34px] py-[15px] text-[15px] font-bold">
                  Explore Services
                </Link>
              </div>
            </Reveal>
          </div>

          <Ticker />

          <div className="mx-auto mt-[70px] max-w-[1120px]">
            <div className="grid grid-cols-2 gap-4 text-center md:grid-cols-4">
              {STATS.map((s, i) => (
                <Reveal key={s.label} delay={i * 0.08}>
                  <div className="glass group relative overflow-hidden rounded-[20px] px-4 py-9 transition-all duration-300 hover:-translate-y-1.5 hover:border-[rgba(139,92,246,0.4)] hover:shadow-[0_24px_54px_rgba(0,0,0,0.5)]">
                    <div
                      className="absolute inset-x-0 top-0 h-[2px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      style={{ background: "linear-gradient(135deg,#4d7cfe,#8b5cf6 48%,#ec4899)" }}
                    />
                    <div className="text-[clamp(34px,4vw,48px)] font-extrabold tracking-[-0.04em] text-white">
                      <Counter to={s.to} decimals={s.decimals ?? 0} prefix={s.prefix ?? ""} suffix={s.suffix} />
                    </div>
                    <div className="mt-[10px] text-[11.5px] font-semibold uppercase tracking-[0.1em] text-[#9b9bb5]">
                      {s.label}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </header>
      </div>

      <section className="relative px-7 py-[88px]">
        <div className="mx-auto max-w-[1120px]">
          <Reveal>
            <div className="grad-text mb-4 text-center text-[12px] font-bold uppercase tracking-[0.24em]">
              What I do
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mb-4 text-center text-[clamp(32px,4.2vw,52px)] font-extrabold leading-[1.1] tracking-[-0.035em] text-white">
              Two ways to <span className="grad-text">work together</span>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mx-auto mb-14 max-w-[640px] text-center text-[17px] text-[#9b9bb5]">
              Whether you need a platform built from scratch or an existing one made boring — in
              the best way.
            </p>
          </Reveal>

          <Reveal dir="left">
            <div className="glass mb-[26px] grid overflow-hidden rounded-[28px] transition-all duration-500 hover:-translate-y-1.5 hover:border-[rgba(139,92,246,0.3)] hover:shadow-[0_34px_80px_rgba(0,0,0,0.6)] md:grid-cols-2">
              <div className="p-[clamp(38px,5vw,66px)]">
                <h3 className="mb-[14px] text-[clamp(25px,3vw,36px)] font-extrabold tracking-[-0.03em] text-white">
                  For businesses — freelance DevOps
                </h3>
                <p className="mb-[26px] max-w-[420px] text-[16px] text-[#9b9bb5]">
                  Cloud infrastructure, CI/CD pipelines, Kubernetes platforms, and cost
                  optimization — delivered as fixed-scope engagements. You get senior-level DevOps
                  without the hiring cycle.
                </p>
                <Link href="/services" className="inline-flex items-center gap-[9px] text-[16px] font-semibold text-white transition-all hover:gap-[14px]">
                  See all services <span className="grad-text">→</span>
                </Link>
              </div>
              <div className="relative flex min-h-[320px] items-center justify-center overflow-hidden bg-[#07070f] md:min-h-0">
                <img src={asset("/img/services-neon.jpg")} alt="Vibrant 3D illustration of a DevOps pipeline" loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1600ms] hover:scale-[1.07]" />
                <span className="relative text-[clamp(76px,9vw,134px)] font-black tracking-[-0.05em] text-white [text-shadow:0_6px_44px_rgba(0,0,0,0.7)]">01</span>
              </div>
            </div>
          </Reveal>

          <Reveal dir="right">
            <div className="glass grid overflow-hidden rounded-[28px] transition-all duration-500 hover:-translate-y-1.5 hover:border-[rgba(139,92,246,0.3)] hover:shadow-[0_34px_80px_rgba(0,0,0,0.6)] md:grid-cols-2">
              <div className="p-[clamp(38px,5vw,66px)]">
                <h3 className="mb-[14px] text-[clamp(25px,3vw,36px)] font-extrabold tracking-[-0.03em] text-white">
                  For employers — full-time roles
                </h3>
                <p className="mb-[26px] max-w-[420px] text-[16px] text-[#9b9bb5]">
                  Four years across Bank of America, Infosys, and PragmaEdge. High-scale financial
                  platforms, multi-cloud systems, and production Linux at enterprise standards.
                </p>
                <Link href="/experience" className="inline-flex items-center gap-[9px] text-[16px] font-semibold text-white transition-all hover:gap-[14px]">
                  See experience <span className="grad-text">→</span>
                </Link>
              </div>
              <div className="relative flex min-h-[320px] items-center justify-center overflow-hidden bg-[#07070f] md:min-h-0">
                <img src={asset("/img/about-neon.jpg")} alt="Neon-lit futuristic data center corridor" loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1600ms] hover:scale-[1.07]" />
                <span className="relative text-[clamp(76px,9vw,134px)] font-black tracking-[-0.05em] text-white [text-shadow:0_6px_44px_rgba(0,0,0,0.7)]">02</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-7 pb-[88px]">
        <div className="mx-auto max-w-[1120px]">
          <Reveal dir="scale">
            <Poster src="/img/contact-neon.jpg" alt="Vibrant network of glowing connections forming a sphere" />
          </Reveal>
        </div>
      </section>

      <section className="px-7 pb-[88px]">
        <div className="mx-auto max-w-[1120px]">
          <Reveal dir="scale">
            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#0a0a16] px-[clamp(28px,6vw,72px)] py-[clamp(60px,8vw,104px)] text-center">
              <div className="mesh-bg" />
              <h2 className="relative mb-4 text-[clamp(34px,5vw,58px)] font-extrabold tracking-[-0.035em] text-white">
                Have a system that needs to <span className="grad-text">just work?</span>
              </h2>
              <p className="relative mx-auto mb-10 max-w-[560px] text-[17px] text-[#9b9bb5]">
                Tell me about your project or role — I usually reply within a day.
              </p>
              <div className="relative flex flex-wrap justify-center gap-[14px]">
                <Link href="/contact" className="btn-grad inline-flex items-center rounded-full px-[34px] py-[15px] text-[15px] font-bold">
                  Get in Touch
                </Link>
                <Link href="/about" className="btn-ghost-neon inline-flex items-center rounded-full px-[34px] py-[15px] text-[15px] font-bold">
                  More About Me
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
