function KPI({ label, value, sub, color }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 px-5 py-4">
      <div className="text-[11px] font-medium tracking-wider text-gray-400 uppercase mb-1.5">{label}</div>
      <div className="text-2xl font-semibold" style={color ? { color } : { color: '#1a1a1a' }}>
        {value}
      </div>
      {sub && <div className="text-xs text-gray-400 mt-0.5">{sub}</div>}
    </div>
  )
}

export default function KPIBar({ projects }) {
  const total = projects.length
  const active = projects.filter(p => p.status !== 'Ferdigstilt').length
  const done = projects.filter(p => p.status === 'Ferdigstilt').length
  const totalBudget = projects.reduce((s, p) => s + (p.budsjett || 0), 0)
  const totalBoliger = projects.reduce((s, p) => s + (p.boliger || 0), 0)

  const budsjettLabel = totalBudget >= 1000
    ? `${(totalBudget / 1000).toLocaleString('nb-NO', { maximumFractionDigits: 1 })} mrd`
    : `${totalBudget} MNOK`

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
      <KPI label="Prosjekter" value={total} sub={`${active} aktive`} />
      <KPI label="Boliger planlagt" value={totalBoliger > 0 ? `${totalBoliger}+` : '—'} sub="under utvikling" />
      <KPI label="Totalbudsjett" value={budsjettLabel} sub="NOK estimert" />
      <KPI label="Ferdigstilt" value={done} sub="prosjekter" color="#3B6D11" />
    </div>
  )
}
