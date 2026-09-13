import Link from "next/link";
import PageHero from "@/components/PageHero";
import Poster from "@/components/Poster";
import Reveal from "@/components/Reveal";
import TiltCard from "@/components/TiltCard";

const SERVICES = [
  {
    n: "01",
    title: "Cloud Architecture & Migration",
    desc: "Production-grade AWS and Azure environments designed as code from day one — secure, scalable, and ready to grow with your business.",
    points: [
      "Landing zones, VPC/VNet design, IAM hardening",
      "Zero-downtime workload migrations",
      "Everything in Terraform / CloudFormation",
    ],
    icon: "M17.5 19a4.5 4.5 0 0 0 .42-8.98 6.5 6.5 0 0 0-12.7 1.61A4 4 0 0 0 6 19h11.5z",
  },
  {
    n: "02",
    title: "CI/CD Pipeline Engineering",
    desc: "Automated build, test, and deployment pipelines that let your team ship safely and often — with release governance baked in.",
    points: [
      "Jenkins, GitHub Actions, GitLab CI, Azure DevOps",
      "Blue-green & canary deployment strategies",
      "Standardized, auditable release workflows",
    ],
    icon: "M21 12a9 9 0 1 1-2.64-6.36M21 3v6h-6",
  },
  {
    n: "03",
    title: "Kubernetes & Containers",
    desc: "Containerized workloads on EKS and AKS — from first Dockerfile to autoscaling, self-healing production clusters.",
    points: [
      "EKS / AKS cluster design and operations",
      "Helm charts, GitOps-ready manifests",
      "Day-2 ops: upgrades, scaling, disaster recovery",
    ],
    icon: "M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16zM3.3 7 12 12l8.7-5M12 22V12",
  },
  {
    n: "04",
    title: "Reliability & Cost Optimization",
    desc: "SRE practices and observability that cut incident recovery time by 40% — plus rightsizing that typically saves 20–30% on cloud spend.",
    points: [
      "SLOs, alerting, and incident runbooks",
      "Prometheus, Grafana, CloudWatch dashboards",
      "Cloud cost audit with actionable savings plan",
    ],
    icon: "M3 3v18h18M7 15l4-6 4 3 5-8",
  },
];

export default function Services() {
  return (
    <>
      <PageHero
        index="01"
        eyebrow="Services"
        title={<>What I can do for <span className="grad-text">your business.</span></>}
        lead="Freelance and contract engagements for startups and enterprises — from landing zones to fully automated delivery pipelines."
      />

      <div className="mx-auto max-w-[1120px] px-7">
        <Reveal dir="scale">
          <Poster
            src="/img/services-neon.jpg"
            alt="Vibrant 3D DevOps pipeline — glowing gears, containers and cloud nodes"
            eager
            className="mb-16 mt-0"
          />
        </Reveal>
      </div>

      <section className="px-7 pb-[88px]">
        <div className="mx-auto grid max-w-[1120px] gap-5 md:grid-cols-2">
          {SERVICES.map((s, i) => (
            <Reveal key={s.n} delay={(i % 2) * 0.1}>
              <TiltCard className="glass relative h-full overflow-hidden rounded-[20px] p-[42px]">
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 hover:opacity-100"
                  style={{ background: "radial-gradient(600px 200px at 50% 0%, rgba(139,92,246,0.14), transparent 60%)" }}
                />
                <span className="mb-[22px] block text-[13px] font-bold tracking-[0.2em] text-[#5c5c78]">/ {s.n}</span>
                <div
                  className="mb-[26px] grid h-14 w-14 place-items-center rounded-[17px] text-white shadow-[0_10px_28px_rgba(139,92,246,0.45)]"
                  style={{ background: "linear-gradient(135deg,#4d7cfe,#8b5cf6 48%,#ec4899)" }}
                >
                  <svg viewBox="0 0 24 24" className="h-[26px] w-[26px]" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
                    <path d={s.icon} />
                  </svg>
                </div>
                <h3 className="mb-[10px] text-[22px] font-bold tracking-[-0.02em] text-white">{s.title}</h3>
                <p className="mb-[22px] text-[15.5px] text-[#9b9bb5]">{s.desc}</p>
                {s.points.map((p) => (
                  <div key={p} className="mb-[11px] flex items-start gap-[11px] text-[14.5px] text-[#c9c9dd]">
                    <svg viewBox="0 0 24 24" className="mt-[5px] h-4 w-4 shrink-0 stroke-[#34f5a5] [filter:drop-shadow(0_0_6px_rgba(52,245,165,0.6))]" fill="none" strokeWidth={2.6} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    {p}
                  </div>
                ))}
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-7 pb-[88px]">
        <div className="mx-auto max-w-[1120px]">
          <Reveal dir="scale">
            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#0a0a16] px-[clamp(28px,6vw,72px)] py-[clamp(60px,8vw,104px)] text-center">
              <div className="mesh-bg" />
              <h2 className="relative mb-4 text-[clamp(34px,5vw,58px)] font-extrabold tracking-[-0.035em] text-white">
                Have a project <span className="grad-text">in mind?</span>
              </h2>
              <p className="relative mx-auto mb-10 max-w-[560px] text-[17px] text-[#9b9bb5]">
                Describe it in a few lines — I&apos;ll tell you honestly whether I&apos;m the right fit and what it would take.
              </p>
              <div className="relative flex flex-wrap justify-center gap-[14px]">
                <Link href="/contact" className="btn-grad inline-flex items-center rounded-full px-[34px] py-[15px] text-[15px] font-bold">
                  Request a Quote
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
