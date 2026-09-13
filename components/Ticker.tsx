"use client";

const ITEMS = [
  "AWS",
  "Kubernetes",
  "Terraform",
  "Azure",
  "Docker",
  "Jenkins",
  "GitHub Actions",
  "Prometheus",
  "Grafana",
  "Linux",
  "Python",
  "CI/CD",
];

export default function Ticker() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <div
      className="ticker-mask overflow-hidden border-y border-white/10 bg-white/[0.02] py-[18px] mt-[84px]"
      aria-hidden="true"
    >
      <div className="ticker-track">
        {row.map((t, i) => (
          <span
            key={i}
            className="whitespace-nowrap rounded-full border border-white/10 bg-white/5 px-[22px] py-[10px] text-[13.5px] font-semibold text-[#d9d9ee] transition-all duration-300 hover:-translate-y-0.5 hover:text-white"
            style={{ transitionProperty: "transform, background, color" }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.background =
                "linear-gradient(135deg,#4d7cfe,#8b5cf6 48%,#ec4899)";
              (e.target as HTMLElement).style.borderColor = "transparent";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.background = "";
              (e.target as HTMLElement).style.borderColor = "";
            }}
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
