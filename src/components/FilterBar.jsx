const STATUS_FILTERS = ['Alle', 'Under utvikling', 'Til salgs', 'Ferdigstilt']
const SORT_OPTIONS = [
  { value: 'name', label: 'Navn' },
  { value: 'fremdrift', label: 'Fremdrift' },
  { value: 'budsjett', label: 'Budsjett' },
]

const inputCls = "text-xs px-3 py-1.5 border border-gray-200 rounded-lg bg-white text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#9B3520] focus:ring-opacity-20 focus:border-[#9B3520] transition-colors"

export default function FilterBar({ filter, setFilter, sort, setSort, search, setSearch, count, total }) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {/* Search */}
      <div className="relative flex-1 min-w-[180px] max-w-xs">
        <svg
          width="14" height="14" viewBox="0 0 14 14" fill="none"
          className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
        >
          <circle cx="5.5" cy="5.5" r="4.5" stroke="currentColor" strokeWidth="1.4"/>
          <path d="M9 9l3.5 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
        </svg>
        <input
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Søk prosjekter..."
          className={`${inputCls} pl-8 w-full`}
        />
      </div>

      {/* Status filter pills */}
      <div className="flex items-center gap-1.5">
        {STATUS_FILTERS.map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className="text-xs px-3 py-1.5 rounded-lg border transition-colors"
            style={{
              background: filter === f ? '#9B3520' : 'white',
              color: filter === f ? 'white' : '#6b7280',
              borderColor: filter === f ? '#9B3520' : '#e5e7eb',
              fontWeight: filter === f ? 500 : 400,
            }}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Sort */}
      <div className="flex items-center gap-1.5 ml-auto">
        <span className="text-xs text-gray-400">Sorter:</span>
        <select
          value={sort}
          onChange={e => setSort(e.target.value)}
          className={inputCls}
        >
          {SORT_OPTIONS.map(o => (
            <option key={o.value} value={o.value}>{o.label}</option>
          ))}
        </select>
        <span className="text-xs text-gray-400 whitespace-nowrap">
          {count === total ? `${total} prosjekter` : `${count} av ${total}`}
        </span>
      </div>
    </div>
  )
}
