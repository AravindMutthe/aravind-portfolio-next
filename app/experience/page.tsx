import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

const ROLES = [
  {
    title: "DevOps / Site Reliability Engineer",
    org: "Bank of America",
    proj: "High-scale financial services platform",
    date: "Jan 2025 – Jun 2026",
    points: [
      "Maintained <strong>99.95% availability</strong> across production workloads on AWS and Azure.",
      "Cut <strong>mean time to recovery by 40%</strong> with SLO-driven alerting and incident runbooks.",
      "Automated deployments with Jenkins and GitHub Actions — <strong>multiple safe releases per day</strong>.",
      "Reduced cloud spend by <strong>~30%</strong> through rightsizing and autoscaling policies.",
    ],
  },
  {
    title: "Senior System Engineer — Cloud DevOps",
    org: "Infosys Ltd",
    proj: "Enterprise cloud programs",
    date: "Apr 2022 – Feb 2023",
    points: [
      "Built <strong>Terraform modules</strong> standardizing infrastructure across client engagements.",
      "Ran <strong>Kubernetes (EKS/AKS)</strong> clusters with Helm-based GitOps delivery.",
      "Implemented <strong>Prometheus + Grafana</strong> observability stacks with actionable dashboards.",
    ],
  },
  {
    title: "Infrastructure Engineer — Linux / System Admin",
    org: "PragmaEdge Inc",
    proj: "Product infrastructure, Hyderabad",
    date: "Apr 2020 – Mar 2022",
    points: [
      "Administered <strong>production Linux fleets</strong> — hardening, patching, and automation with Bash/Python.",
      "Built <strong>CI pipelines</strong> that took the team from manual deploys to one-click releases.",
      "Set up <strong>monitoring and log aggregation</strong> that caught incidents before customers did.",
    ],
  },
];

export default function Experience() {
  return (
    <>
      <PageHero
        index="02"
        eyebrow="Experience"
        title={<>A track record in <span className="grad-text">demanding environments.</span></>}
        lead="Four years of production DevOps and SRE — from startup infrastructure to high-scale financial platforms."
      />

      <section className="px-7 pb-[88px]">
        <div className="relative mx-auto max-w-[820px]">
          <div
            className="absolute bottom-[10px] left-[8px] top-[10px] w-[2px] rounded opacity-50"
            style={{ background: "linear-gradient(#4d7cfe,#8b5cf6,#ec4899)" }}
          />
          {ROLES.map((r, i) => (
            <Reveal key={r.org} delay={i * 0.08}>
              <div className="group relative pb-[38px] pl-[50px] last:pb-0">
                <span className="absolute left-[1px] top-[8px] h-4 w-4 rounded-full border-[2.5px] border-[#8b5cf6] bg-[#050509] shadow-[0_0_14px_rgba(139,92,246,0.7)] transition-transform duration-300 group-hover:scale-[1.3]" />
                <div className="glass rounded-[20px] p-9 transition-all duration-300 hover:translate-x-2 hover:border-[rgba(139,92,246,0.35)] hover:shadow-[0_26px_60px_rgba(0,0,0,0.55)]">
                  <div className="mb-[6px] flex flex-wrap items-start justify-between gap-3">
                    <h3 className="text-[20px] font-bold tracking-[-0.01em] text-white">{r.title}</h3>
                    <span
                      className="whitespace-nowrap rounded-full px-4 py-[7px] text-[12px] font-bold tracking-[0.05em] text-white shadow-[0_4px_16px_rgba(139,92,246,0.4)]"
                      style={{ background: "linear-gradient(135deg,#4d7cfe,#8b5cf6 48%,#ec4899)" }}
                    >
                      {r.date}
                    </span>
                  </div>
                  <div className="text-[15px] font-semibold text-[#c9c9dd]">{r.org}</div>
                  <div className="mb-4 mt-[2px] text-[13.5px] italic text-[#9b9bb5]">{r.proj}</div>
                  <ul>
                    {r.points.map((p) => (
                      <li
                        key={p}
                        className="relative mb-[11px] pl-7 text-[15px] text-[#b9b9cf] [&>strong]:font-bold [&>strong]:text-white"
                      >
                        <span className="grad-text absolute left-0 font-extrabold">—</span>
                        <span dangerouslySetInnerHTML={{ __html: p }} />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
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
                Want this experience <span className="grad-text">on your team?</span>
              </h2>
              <p className="relative mx-auto mb-10 max-w-[560px] text-[17px] text-[#9b9bb5]">
                Available for immediate joining — freelance, contract, or full-time.
              </p>
              <div className="relative flex flex-wrap justify-center gap-[14px]">
                <Link href="/contact" className="btn-grad inline-flex items-center rounded-full px-[34px] py-[15px] text-[15px] font-bold">
                  Hire Me
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
