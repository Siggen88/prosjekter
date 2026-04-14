import StatusBadge from './StatusBadge.jsx'

function ProgressBar({ value }) {
  const color = value === 100 ? '#3B6D11' : value >= 25 ? '#185FA5' : value >= 10 ? '#854F0B' : '#aaa'
  return (
    <div className="h-1 rounded-full overflow-hidden bg-gray-100 mt-2">
      <div
        className="h-full rounded-full transition-all"
        style={{ width: `${value}%`, background: color }}
      />
    </div>
  )
}

export default function ProjectCard({ project, onClick }) {
  const { name, sted, status, type, boliger, bra, img, fremdrift, budsjett, paalopte } = project

  return (
    <button
      onClick={() => onClick(project)}
      className="text-left bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-[#9B3520] hover:shadow-md transition-all duration-200 group w-full"
    >
      {/* Image */}
      <div className="relative overflow-hidden" style={{ height: 160 }}>
        {img ? (
          <img
            src={img}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            onError={e => { e.target.parentElement.style.background = '#f7f5f0'; e.target.style.display = 'none' }}
          />
        ) : (
          <div className="w-full h-full bg-[#f7f5f0] flex items-center justify-center">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="text-gray-300">
              <rect x="4" y="18" width="32" height="18" rx="1" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M4 18L20 6l16 12" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
              <rect x="15" y="26" width="10" height="10" rx="0.5" stroke="currentColor" strokeWidth="1.2"/>
            </svg>
          </div>
        )}
        {/* Status overlay */}
        <div className="absolute top-2.5 left-2.5">
          <StatusBadge status={status} />
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="font-semibold text-gray-900 text-sm leading-snug">{name}</div>
        <div className="text-xs text-gray-400 mt-0.5 flex items-center gap-1">
          <svg width="10" height="12" viewBox="0 0 10 12" fill="none">
            <path d="M5 0C2.24 0 0 2.24 0 5c0 3.75 5 7 5 7s5-3.25 5-7c0-2.76-2.24-5-5-5zm0 6.5A1.5 1.5 0 1 1 5 3.5a1.5 1.5 0 0 1 0 3z" fill="currentColor"/>
          </svg>
          {sted}
        </div>
        <div className="text-xs text-gray-500 mt-2">{type}</div>

        {/* Meta row */}
        <div className="flex items-center gap-3 mt-2.5 text-xs text-gray-400">
          {boliger && <span>{boliger} boliger</span>}
          {bra && <span>{bra}</span>}
          {!boliger && !bra && <span className="text-gray-300">—</span>}
        </div>

        {/* Budget mini */}
        <div className="mt-3 pt-3 border-t border-gray-100">
          <div className="flex justify-between text-[11px] text-gray-400 mb-1">
            <span>Fremdrift</span>
            <span className="font-medium text-gray-600">{fremdrift}%</span>
          </div>
          <ProgressBar value={fremdrift} />
          <div className="flex justify-between text-[11px] text-gray-400 mt-2">
            <span>{paalopte} MNOK påløpt</span>
            <span>{budsjett} MNOK totalt</span>
          </div>
        </div>
      </div>
    </button>
  )
}
