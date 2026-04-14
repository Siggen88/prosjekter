export default function Header({ projectCount, onNewProject }) {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <div>
            <div className="text-sm font-semibold tracking-[0.18em] leading-none">
              <span style={{ color: '#9B3520' }}>FERD</span>
              <span className="text-gray-900"> EIENDOM</span>
            </div>
            <div className="text-[9px] tracking-[0.2em] text-gray-400 mt-0.5 uppercase">
              Prosjektportal
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <span className="text-xs text-gray-400 hidden sm:block">
            {projectCount} prosjekter
          </span>
          <button
            onClick={onNewProject}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white rounded-lg transition-colors"
            style={{ background: '#9B3520' }}
            onMouseEnter={e => e.currentTarget.style.background = '#7a2918'}
            onMouseLeave={e => e.currentTarget.style.background = '#9B3520'}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
            Nytt prosjekt
          </button>
        </div>
      </div>
    </header>
  )
}
