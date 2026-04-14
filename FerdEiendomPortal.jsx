import { useState } from "react";

const PROJECTS = [
  {
    name: "Humlehagen",
    sted: "Ensjø, Oslo",
    status: "Ferdigstilt",
    type: "Leiligheter og rekkehus",
    boliger: 142,
    bra: "36–135 m²",
    img: "https://ferdeiendom.no/wp-content/uploads/2024/07/fotograf-Knut-Neerland_B_11670-1024x768.jpg",
    url: "https://ferdeiendom.no/bolig/humlehagen/",
    fremdrift: 100,
    budsjett: 480,
    paalopte: 480,
  },
  {
    name: "Bråtejordet",
    sted: "Strømmen",
    status: "Ferdigstilt",
    type: "Rekkehus og leiligheter",
    boliger: null,
    bra: null,
    img: "https://ferdeiendom.no/wp-content/uploads/2022/09/Bratejordet-1024x579.jpg",
    url: "https://ferdeiendom.no/bolig/bratejordet/",
    fremdrift: 100,
    budsjett: 320,
    paalopte: 320,
  },
  {
    name: "Kleven Gård",
    sted: "Bekkestua, Bærum",
    status: "Under utvikling",
    type: "Leiligheter",
    boliger: null,
    bra: null,
    img: "https://ferdeiendom.no/wp-content/uploads/2022/09/Kleven-Gard_Eksterior_Vinkel-02_Hus_1-5_6-9_10-14_15-19_v6_3mb_3destate.no_-1024x512.jpg",
    url: "https://ferdeiendom.no/bolig/kleven-gard/",
    fremdrift: 35,
    budsjett: 290,
    paalopte: 102,
  },
  {
    name: "Kobberkvartalet",
    sted: "Vestre Billingstad",
    status: "Under utvikling",
    type: "Leiligheter",
    boliger: null,
    bra: null,
    img: "https://ferdeiendom.no/wp-content/uploads/2025/02/KOBBER3-1024x576.jpg",
    url: "https://ferdeiendom.no/bolig/vestre-billigstad/",
    fremdrift: 20,
    budsjett: 450,
    paalopte: 90,
  },
  {
    name: "Sander kvartal",
    sted: "Ski sentrum",
    status: "Til salgs",
    type: "Leiligheter og næring",
    boliger: 210,
    bra: "30–128 m²",
    img: "https://ferdeiendom.no/wp-content/uploads/2022/07/Sander-kvartal-nettside-1534-x-1022-px-1-e1772438107438-1024x570.jpg",
    url: "https://ferdeiendom.no/bolig/sander-kvartal/",
    fremdrift: 15,
    budsjett: 620,
    paalopte: 93,
    salgsstart: "15. apr 2026",
  },
  {
    name: "Skolekvartalet",
    sted: "Ski",
    status: "Under utvikling",
    type: "Leiligheter og rekkehus",
    boliger: 228,
    bra: "21 500 m²",
    img: "https://ferdeiendom.no/wp-content/uploads/2022/07/Skolekvartalet-nettside-1534-x-1022-px-2-1024x682.png",
    url: "https://ferdeiendom.no/bolig/skolekvartalet/",
    fremdrift: 25,
    budsjett: 520,
    paalopte: 130,
  },
  {
    name: "Høyda",
    sted: "Moss",
    status: "Under utvikling",
    type: "Rekkehus og leiligheter",
    boliger: 800,
    bra: "75 000 m²",
    img: "https://ferdeiendom.no/wp-content/uploads/2022/09/hoyda_4-1024x819.jpg",
    url: "https://ferdeiendom.no/bolig/hoyda-2/",
    fremdrift: 10,
    budsjett: 2800,
    paalopte: 280,
  },
  {
    name: "Marienlyst",
    sted: "Oslo",
    status: "Under utvikling",
    type: "Kultur og bolig",
    boliger: null,
    bra: null,
    img: "https://ferdeiendom.no/wp-content/uploads/2026/01/Marienlyst-nettside-1536x864.jpg-1024x576.webp",
    url: "https://ferdeiendom.no/bolig/marienlyst/",
    fremdrift: 5,
    budsjett: 3500,
    paalopte: 175,
  },
  {
    name: "Hamangskogen",
    sted: "Sandvika, Bærum",
    status: "Under utvikling",
    type: "Leiligheter og næring",
    boliger: null,
    bra: "12 000 m²",
    img: "https://ferdeiendom.no/wp-content/uploads/2022/10/Hamangskogen-1024x522.jpg",
    url: "https://ferdeiendom.no/bolig/hamangskogen-10/",
    fremdrift: 5,
    budsjett: 380,
    paalopte: 19,
    salgsstart: "2030",
  },
  {
    name: "Markalléen",
    sted: "Høvik, Bærum",
    status: "Under utvikling",
    type: "Leiligheter",
    boliger: null,
    bra: "17 000 m²",
    img: "https://ferdeiendom.no/wp-content/uploads/2022/09/Kleven-Gård-0059-skjerm-1024x682.jpg",
    url: "https://ferdeiendom.no/bolig/markalleen/",
    fremdrift: 3,
    budsjett: 540,
    paalopte: 16,
    salgsstart: "2030",
  },
];

const MAP_GROUPS = [
  { label: "Oslo", color: "#9B3520", projs: "Humlehagen, Marienlyst" },
  { label: "Bærum", color: "#3B6D11", projs: "Kleven Gård, Kobberkvartalet, Hamangskogen, Markalléen" },
  { label: "Ski", color: "#854F0B", projs: "Sander kvartal, Skolekvartalet" },
  { label: "Moss", color: "#185FA5", projs: "Høyda" },
  { label: "Strømmen", color: "#185FA5", projs: "Bråtejordet" },
];

const TABS = ["Oversikt", "Kart", "Dokumenter", "Fremdrift", "Økonomi"];

const DOCUMENTS = [
  { type: "PDF", name: "Reguleringsplan_SanderKvartal_v3.pdf", prosjekt: "Sander kvartal", dato: "10. apr 2026", str: "6.4 MB", bg: "#FAECE7" },
  { type: "XLS", name: "Budsjett_2026_Q2_oppdatert.xlsx", prosjekt: "Alle prosjekter", dato: "8. apr 2026", str: "1.8 MB", bg: "#EAF3DE" },
  { type: "PPT", name: "Styrepresentasjon_apr2026.pptx", prosjekt: "Portefølje", dato: "5. apr 2026", str: "9.2 MB", bg: "#FAEEDA" },
  { type: "DOC", name: "Fremdriftsrapport_Hoyda_Q1.docx", prosjekt: "Høyda", dato: "2. apr 2026", str: "0.7 MB", bg: "#E6F1FB" },
  { type: "PDF", name: "Baerekraftsrapport_2025_Ferd.pdf", prosjekt: "Ferd Eiendom", dato: "28. mar 2026", str: "12.1 MB", bg: "#FAECE7" },
  { type: "XLS", name: "KS_rapport_Kobberkvartalet.xlsx", prosjekt: "Kobberkvartalet", dato: "20. mar 2026", str: "2.3 MB", bg: "#EAF3DE" },
  { type: "DOC", name: "Kontrakt_Marienlyst_Sweco_2026.docx", prosjekt: "Marienlyst", dato: "15. mar 2026", str: "1.1 MB", bg: "#E6F1FB" },
];

function statusPill(s) {
  const base = "text-xs px-2 py-0.5 rounded-full inline-block";
  if (s === "Ferdigstilt") return `${base} bg-green-100 text-green-800`;
  if (s === "Til salgs") return `${base} bg-amber-100 text-amber-800`;
  return `${base} bg-blue-100 text-blue-800`;
}

function fremdriftColor(p) {
  if (p === 100) return "#639922";
  if (p >= 25) return "#378ADD";
  if (p >= 10) return "#BA7517";
  return "#888780";
}

function budsjettColor(pct) {
  if (pct === 100) return "#639922";
  if (pct > 80) return "#BA7517";
  return "#378ADD";
}

// ── Modules ──────────────────────────────────────────────────────────────────

function KPICard({ label, value, sub, valueColor }) {
  return (
    <div className="bg-gray-50 rounded-lg p-3">
      <div className="text-xs text-gray-400 mb-1">{label}</div>
      <div className="text-xl font-medium" style={valueColor ? { color: valueColor } : {}}>
        {value}
      </div>
      {sub && <div className="text-xs text-gray-400 mt-0.5">{sub}</div>}
    </div>
  );
}

function OversiktModule({ projects }) {
  return (
    <div>
      <div className="grid grid-cols-4 gap-2 mb-4">
        <KPICard label="Prosjekter totalt" value="10" sub="8 aktive" />
        <KPICard label="Boliger planlagt" value="1 380+" sub="under utvikling" />
        <KPICard label="Totalt BRA" value="132k+" sub="m²" />
        <KPICard label="Ferdigstilte" value="2" sub="prosjekter" />
      </div>
      <div className="grid grid-cols-2 gap-2">
        {projects.map((p) => (
          <a
            key={p.name}
            href={p.url}
            target="_blank"
            rel="noreferrer"
            className="block rounded-xl border border-gray-200 overflow-hidden hover:border-ferd transition-colors"
            style={{ textDecoration: "none" }}
          >
            <img
              src={p.img}
              alt={p.name}
              className="w-full object-cover"
              style={{ height: 110 }}
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
            <div className="p-3">
              <div className="text-sm font-medium text-gray-900">{p.name}</div>
              <div className="text-xs text-gray-400 mt-0.5">{p.sted}</div>
              <div className="flex items-center justify-between mt-2">
                <span className={statusPill(p.status)}>{p.status}</span>
                <span className="text-xs text-gray-400">
                  {p.boliger ? `${p.boliger} boliger` : p.type}
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

function KartModule() {
  return (
    <div
      className="flex gap-4 rounded-xl p-3"
      style={{ background: "#f7f5f0" }}
    >
      <svg viewBox="0 0 240 370" style={{ flex: 1, maxHeight: 460 }}>
        <path
          d="M115,18 L128,28 L142,23 L150,38 L155,52 L146,62 L150,76 L141,86 L144,100 L136,110 L140,124 L130,134 L133,148 L124,158 L126,173 L116,182 L112,197 L102,207 L97,222 L105,237 L98,247 L88,253 L83,268 L93,278 L88,288 L78,294 L74,308 L69,318 L64,313 L59,298 L54,283 L59,268 L54,253 L64,243 L68,228 L58,218 L63,203 L53,193 L58,178 L48,168 L53,153 L63,143 L58,128 L68,118 L63,103 L73,93 L68,78 L78,68 L73,53 L83,43 L96,33 Z"
          fill="#DFDDD5"
          stroke="white"
          strokeWidth="1.5"
        />
        <circle cx="108" cy="154" r="9" fill="#9B3520" opacity={0.9} />
        <circle cx="108" cy="154" r="4" fill="white" />
        <circle cx="97" cy="147" r="8" fill="#3B6D11" opacity={0.85} />
        <circle cx="97" cy="147" r="3.5" fill="white" />
        <circle cx="118" cy="166" r="7" fill="#854F0B" opacity={0.85} />
        <circle cx="118" cy="166" r="3" fill="white" />
        <circle cx="112" cy="178" r="7" fill="#185FA5" opacity={0.85} />
        <circle cx="112" cy="178" r="3" fill="white" />
        <circle cx="127" cy="147" r="5" fill="#185FA5" opacity={0.7} />
        <circle cx="127" cy="147" r="2" fill="white" />
        <text x="119" y="158" fontSize="8" fill="#1a1a1a" fontFamily="sans-serif" fontWeight="500">Oslo</text>
        <text x="100" y="143" fontSize="7" fill="#555" fontFamily="sans-serif">Bærum</text>
        <text x="122" y="170" fontSize="7" fill="#555" fontFamily="sans-serif">Ski</text>
        <text x="116" y="185" fontSize="7" fill="#555" fontFamily="sans-serif">Moss</text>
        <text x="128" y="144" fontSize="7" fill="#555" fontFamily="sans-serif">Strømmen</text>
      </svg>
      <div style={{ width: 180, flexShrink: 0 }}>
        <div className="text-xs font-medium tracking-widest text-gray-400 uppercase mb-2">
          Prosjekter per sted
        </div>
        {MAP_GROUPS.map((g) => (
          <div
            key={g.label}
            className="flex items-start gap-2 py-1.5 border-b border-gray-200 last:border-0"
          >
            <div
              className="rounded-full mt-1 flex-shrink-0"
              style={{ width: 8, height: 8, background: g.color }}
            />
            <div>
              <div className="text-xs font-medium text-gray-800">{g.label}</div>
              <div className="text-xs text-gray-400">{g.projs}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function DokumenterModule() {
  return (
    <div>
      <div className="grid grid-cols-3 gap-2 mb-4">
        <KPICard label="Totalt dokumenter" value="163" />
        <KPICard label="Opplastet denne mnd" value="31" />
        <KPICard label="Venter godkjenning" value="9" valueColor="#854F0B" />
      </div>
      <div className="rounded-xl border border-gray-200 bg-white divide-y divide-gray-100">
        {DOCUMENTS.map((d) => (
          <div key={d.name} className="flex items-center gap-3 px-4 py-2.5">
            <div
              className="rounded-lg flex items-center justify-center flex-shrink-0 text-xs font-medium"
              style={{ width: 32, height: 32, background: d.bg, color: "#555" }}
            >
              {d.type}
            </div>
            <div>
              <div className="text-xs font-medium text-gray-900">{d.name}</div>
              <div className="text-xs text-gray-400 mt-0.5">
                {d.prosjekt} · {d.dato} · {d.str}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function FremdriftModule({ projects }) {
  const sorted = [...projects].sort((a, b) => b.fremdrift - a.fremdrift);
  return (
    <div>
      <div className="grid grid-cols-4 gap-2 mb-4">
        <KPICard label="Ferdigstilt" value="2" valueColor="#3B6D11" />
        <KPICard label="Under bygging" value="4" valueColor="#185FA5" />
        <KPICard label="Regulering" value="3" />
        <KPICard label="Salgsstart snart" value="1" valueColor="#854F0B" />
      </div>
      <div className="rounded-xl border border-gray-200 bg-white p-4">
        {sorted.map((p) => (
          <div key={p.name} className="flex items-center gap-3 mb-2.5 last:mb-0">
            <div className="text-right text-xs text-gray-800 flex-shrink-0" style={{ width: 130 }}>
              {p.name}
            </div>
            <div
              className="flex-1 rounded-lg overflow-hidden relative"
              style={{ height: 20, background: "#f3f2ee" }}
            >
              <div
                className="absolute top-0 left-0 h-full rounded-lg flex items-center px-2 text-white overflow-hidden"
                style={{
                  width: `${p.fremdrift}%`,
                  background: fremdriftColor(p.fremdrift),
                  fontSize: 10,
                  whiteSpace: "nowrap",
                }}
              >
                {p.fremdrift > 18 ? p.sted : ""}
              </div>
            </div>
            <div className="text-xs text-gray-400 text-right flex-shrink-0" style={{ width: 30 }}>
              {p.fremdrift}%
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function OkonomiModule({ projects }) {
  const sorted = [...projects].sort((a, b) => b.budsjett - a.budsjett);
  return (
    <div>
      <div className="grid grid-cols-4 gap-2 mb-4">
        <KPICard label="Totalportefølje" value="9,4 mrd" sub="NOK estimert" />
        <KPICard label="Påløpt kostnad" value="1,7 mrd" sub="NOK" />
        <KPICard label="Gjenstående" value="7,7 mrd" sub="NOK" />
        <KPICard label="Budsjettavvik" value="+1,2%" sub="under budsjett" valueColor="#3B6D11" />
      </div>
      <div className="flex flex-col gap-1.5">
        {sorted.map((p) => {
          const pct = Math.round((p.paalopte / p.budsjett) * 100);
          return (
            <div key={p.name} className="bg-white border border-gray-200 rounded-lg px-3 py-2">
              <div className="flex justify-between items-center mb-1.5">
                <span className="text-xs font-medium text-gray-900">{p.name}</span>
                <span className="text-xs text-gray-500">
                  {p.paalopte} / {p.budsjett} MNOK
                </span>
              </div>
              <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "#f3f2ee" }}>
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${pct}%`,
                    background: budsjettColor(pct),
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ── Main component ────────────────────────────────────────────────────────────

export default function FerdEiendomPortal() {
  const [activeTab, setActiveTab] = useState("Oversikt");
  const [filter, setFilter] = useState("Alle");

  const filteredProjects =
    filter === "Alle"
      ? PROJECTS
      : PROJECTS.filter((p) =>
          filter === "Ferdigstilt"
            ? p.status === "Ferdigstilt"
            : p.status !== "Ferdigstilt"
        );

  return (
    <div
      className="rounded-xl overflow-hidden border border-gray-200"
      style={{ fontFamily: "system-ui, -apple-system, sans-serif", maxWidth: 900 }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-3 bg-white border-b border-gray-200">
        <div>
          <div className="text-xs font-medium tracking-widest" style={{ letterSpacing: "0.14em" }}>
            <span style={{ color: "#9B3520" }}>FERD</span>{" "}
            <span className="text-gray-900">EIENDOM</span>
          </div>
          <div className="text-xs text-gray-400 tracking-widest mt-0.5" style={{ fontSize: 9 }}>
            PROSJEKTPORTAL — INTERN
          </div>
        </div>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="text-xs px-2 py-1 border border-gray-200 rounded-lg bg-gray-50 text-gray-700"
        >
          <option value="Alle">Alle prosjekter ({PROJECTS.length})</option>
          <option value="Aktive">Under utvikling / Til salgs</option>
          <option value="Ferdigstilt">Ferdigstilt</option>
        </select>
      </div>

      {/* Tabs */}
      <div className="flex px-5 bg-white border-b border-gray-200">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className="px-3 py-2.5 text-xs border-b-2 transition-colors"
            style={{
              borderBottomColor: activeTab === tab ? "#9B3520" : "transparent",
              color: activeTab === tab ? "#9B3520" : "#6b7280",
              fontWeight: activeTab === tab ? 500 : 400,
              background: "none",
              cursor: "pointer",
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="p-5 bg-white overflow-y-auto" style={{ maxHeight: 580 }}>
        {activeTab === "Oversikt" && <OversiktModule projects={filteredProjects} />}
        {activeTab === "Kart" && <KartModule />}
        {activeTab === "Dokumenter" && <DokumenterModule />}
        {activeTab === "Fremdrift" && <FremdriftModule projects={filteredProjects} />}
        {activeTab === "Økonomi" && <OkonomiModule projects={filteredProjects} />}
      </div>
    </div>
  );
}
