"use client";

import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

const GROUPS = [
  { title: "Cloud", items: ["AWS", "Azure", "EKS", "AKS", "ECS", "Lambda", "CloudWatch", "VPC/VNet"] },
  { title: "IaC & Config", items: ["Terraform", "CloudFormation", "ARM Templates", "Ansible", "Helm"] },
  { title: "CI/CD", items: ["Jenkins", "GitHub Actions", "GitLab CI", "Azure DevOps", "ArgoCD"] },
  { title: "Containers", items: ["Docker", "Kubernetes", "Container Registries", "Service Mesh basics"] },
  { title: "Observability", items: ["Prometheus", "Grafana", "ELK", "CloudWatch", "SLOs & Alerting"] },
  { title: "Languages & OS", items: ["Python", "Bash", "Linux", "Git", "YAML"] },
];

export default function Skills() {
  return (
    <>
      <PageHero
        index="03"
        eyebrow="Skills"
        title={<>Technologies I work <span className="grad-text">with daily.</span></>}
        lead="The toolkit behind 99.95% availability and 40% faster recovery — production-proven, not tutorial-level."
      />

      <section className="px-7 pb-[88px]">
        <div className="mx-auto grid max-w-[1120px] gap-5 md:grid-cols-2 lg:grid-cols-3">
          {GROUPS.map((g, i) => (
            <Reveal key={g.title} delay={(i % 3) * 0.08}>
              <div className="glass h-full rounded-[20px] p-9 transition-all duration-300 hover:-translate-y-1.5 hover:border-[rgba(139,92,246,0.35)] hover:shadow-[0_24px_54px_rgba(0,0,0,0.55)]">
                <h4 className="grad-text mb-[22px] border-b border-white/10 pb-[15px] text-[12px] font-extrabold uppercase tracking-[0.2em]">
                  {g.title}
                </h4>
                <div className="flex flex-wrap gap-[9px]">
                  {g.items.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-white/10 bg-white/5 px-[17px] py-[9px] text-[13.5px] font-semibold text-[#d5d5e8] transition-all duration-300 hover:-translate-y-[3px] hover:scale-[1.04] hover:border-transparent hover:text-white hover:shadow-[0_8px_20px_rgba(139,92,246,0.4)]"
                      onMouseEnter={(e) => {
                        (e.target as HTMLElement).style.background =
                          "linear-gradient(135deg,#4d7cfe,#8b5cf6 48%,#ec4899)";
                      }}
                      onMouseLeave={(e) => {
                        (e.target as HTMLElement).style.background = "";
                      }}
                    >
                      {s}
                    </span>
                  ))}
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
                Need any of this <span className="grad-text">done right?</span>
              </h2>
              <p className="relative mx-auto mb-10 max-w-[560px] text-[17px] text-[#9b9bb5]">
                Tell me what you&apos;re running — I&apos;ll tell you what I&apos;d change first.
              </p>
              <div className="relative flex flex-wrap justify-center gap-[14px]">
                <Link href="/contact" className="btn-grad inline-flex items-center rounded-full px-[34px] py-[15px] text-[15px] font-bold">
                  Start a Conversation
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
