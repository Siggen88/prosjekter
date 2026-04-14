import { useState, useMemo } from 'react'
import Header from './components/Header.jsx'
import KPIBar from './components/KPIBar.jsx'
import FilterBar from './components/FilterBar.jsx'
import ProjectCard from './components/ProjectCard.jsx'
import NewProjectModal from './components/NewProjectModal.jsx'
import { INITIAL_PROJECTS } from './data/projects.js'

function EmptyState({ onNew }) {
  return (
    <div className="col-span-full flex flex-col items-center justify-center py-20 text-center">
      <div className="w-16 h-16 rounded-2xl bg-[#FAECE7] flex items-center justify-center mb-4">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <rect x="2" y="12" width="24" height="14" rx="1.5" stroke="#9B3520" strokeWidth="1.5"/>
          <path d="M2 12L14 2l12 10" stroke="#9B3520" strokeWidth="1.5" strokeLinejoin="round"/>
          <rect x="10" y="18" width="8" height="8" rx="0.5" stroke="#9B3520" strokeWidth="1.2"/>
        </svg>
      </div>
      <p className="text-sm font-medium text-gray-700">Ingen prosjekter funnet</p>
      <p className="text-xs text-gray-400 mt-1 mb-5">Juster filteret eller opprett et nytt prosjekt</p>
      <button
        onClick={onNew}
        className="px-4 py-2 text-sm font-medium text-white rounded-lg transition-colors"
        style={{ background: '#9B3520' }}
        onMouseEnter={e => e.currentTarget.style.background = '#7a2918'}
        onMouseLeave={e => e.currentTarget.style.background = '#9B3520'}
      >
        Nytt prosjekt
      </button>
    </div>
  )
}

export default function App() {
  const [projects, setProjects] = useState(INITIAL_PROJECTS)
  const [modalOpen, setModalOpen] = useState(false)
  const [filter, setFilter] = useState('Alle')
  const [sort, setSort] = useState('name')
  const [search, setSearch] = useState('')

  const filtered = useMemo(() => {
    let list = [...projects]

    // Search
    if (search.trim()) {
      const q = search.trim().toLowerCase()
      list = list.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.sted.toLowerCase().includes(q) ||
        p.type.toLowerCase().includes(q)
      )
    }

    // Status filter
    if (filter !== 'Alle') {
      list = list.filter(p => p.status === filter)
    }

    // Sort
    list.sort((a, b) => {
      if (sort === 'fremdrift') return b.fremdrift - a.fremdrift
      if (sort === 'budsjett') return b.budsjett - a.budsjett
      return a.name.localeCompare(b.name, 'nb')
    })

    return list
  }, [projects, filter, sort, search])

  function handleSave(newProject) {
    setProjects(prev => [
      ...prev,
      { ...newProject, id: Date.now() }
    ])
  }

  function handleCardClick(project) {
    if (project.url) {
      window.open(project.url, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <div className="min-h-screen" style={{ background: '#f7f5f0' }}>
      <Header projectCount={projects.length} onNewProject={() => setModalOpen(true)} />

      <main className="max-w-7xl mx-auto px-6 py-8 space-y-6">
        {/* KPI overview */}
        <KPIBar projects={projects} />

        {/* Filters */}
        <FilterBar
          filter={filter}
          setFilter={setFilter}
          sort={sort}
          setSort={setSort}
          search={search}
          setSearch={setSearch}
          count={filtered.length}
          total={projects.length}
        />

        {/* Project grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.length === 0 ? (
            <EmptyState onNew={() => setModalOpen(true)} />
          ) : (
            filtered.map(p => (
              <ProjectCard key={p.id} project={p} onClick={handleCardClick} />
            ))
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-6 py-8 mt-4 border-t border-gray-200">
        <div className="flex items-center justify-between">
          <div className="text-[11px] tracking-wider text-gray-400">
            <span style={{ color: '#9B3520' }}>FERD</span> EIENDOM — PROSJEKTPORTAL
          </div>
          <div className="text-[11px] text-gray-300">Intern bruk</div>
        </div>
      </footer>

      <NewProjectModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSave={handleSave}
      />
    </div>
  )
}
