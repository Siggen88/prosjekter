import { useState, useEffect, useRef } from 'react'
import { STATUS_OPTIONS, TYPE_OPTIONS } from '../data/projects.js'

const EMPTY_FORM = {
  name: '',
  sted: '',
  status: 'Under utvikling',
  type: 'Leiligheter',
  boliger: '',
  bra: '',
  budsjett: '',
  paalopte: '',
  fremdrift: '0',
  salgsstart: '',
  beskrivelse: '',
  url: '',
}

function Field({ label, required, children }) {
  return (
    <div>
      <label className="block text-xs font-medium text-gray-600 mb-1.5">
        {label}{required && <span className="text-[#9B3520] ml-0.5">*</span>}
      </label>
      {children}
    </div>
  )
}

const inputCls = "w-full px-3 py-2 text-sm border border-gray-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#9B3520] focus:ring-opacity-20 focus:border-[#9B3520] transition-colors placeholder:text-gray-300"

export default function NewProjectModal({ isOpen, onClose, onSave }) {
  const [form, setForm] = useState(EMPTY_FORM)
  const [errors, setErrors] = useState({})
  const firstInputRef = useRef(null)

  useEffect(() => {
    if (isOpen) {
      setForm(EMPTY_FORM)
      setErrors({})
      setTimeout(() => firstInputRef.current?.focus(), 50)
    }
  }, [isOpen])

  // Close on Escape
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  function set(key, value) {
    setForm(f => ({ ...f, [key]: value }))
    if (errors[key]) setErrors(e => ({ ...e, [key]: null }))
  }

  function validate() {
    const e = {}
    if (!form.name.trim()) e.name = 'Prosjektnavn er påkrevd'
    if (!form.sted.trim()) e.sted = 'Sted er påkrevd'
    if (!form.budsjett || isNaN(Number(form.budsjett))) e.budsjett = 'Oppgi et gyldig budsjett'
    return e
  }

  function handleSubmit(e) {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }

    onSave({
      name: form.name.trim(),
      sted: form.sted.trim(),
      status: form.status,
      type: form.type,
      boliger: form.boliger ? Number(form.boliger) : null,
      bra: form.bra.trim() || null,
      budsjett: Number(form.budsjett),
      paalopte: form.paalopte ? Number(form.paalopte) : 0,
      fremdrift: form.fremdrift ? Number(form.fremdrift) : 0,
      salgsstart: form.salgsstart.trim() || null,
      beskrivelse: form.beskrivelse.trim() || null,
      url: form.url.trim() || null,
      img: null,
    })
    onClose()
  }

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-40 z-40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
        <div
          className="bg-white rounded-2xl shadow-2xl w-full max-w-xl max-h-[90vh] flex flex-col pointer-events-auto"
          onClick={e => e.stopPropagation()}
        >
          {/* Modal header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
            <div>
              <h2 className="text-base font-semibold text-gray-900">Nytt prosjekt</h2>
              <p className="text-xs text-gray-400 mt-0.5">Fyll inn informasjon om prosjektet</p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-700 transition-colors p-1 rounded-lg hover:bg-gray-100"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M1 1l16 16M17 1L1 17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto px-6 py-5 space-y-4">

            {/* Name + Sted */}
            <div className="grid grid-cols-2 gap-3">
              <Field label="Prosjektnavn" required>
                <input
                  ref={firstInputRef}
                  value={form.name}
                  onChange={e => set('name', e.target.value)}
                  placeholder="f.eks. Strandparken"
                  className={`${inputCls} ${errors.name ? 'border-red-300' : ''}`}
                />
                {errors.name && <p className="text-[11px] text-red-500 mt-1">{errors.name}</p>}
              </Field>

              <Field label="Sted" required>
                <input
                  value={form.sted}
                  onChange={e => set('sted', e.target.value)}
                  placeholder="f.eks. Lysaker, Bærum"
                  className={`${inputCls} ${errors.sted ? 'border-red-300' : ''}`}
                />
                {errors.sted && <p className="text-[11px] text-red-500 mt-1">{errors.sted}</p>}
              </Field>
            </div>

            {/* Status + Type */}
            <div className="grid grid-cols-2 gap-3">
              <Field label="Status">
                <select
                  value={form.status}
                  onChange={e => set('status', e.target.value)}
                  className={inputCls}
                >
                  {STATUS_OPTIONS.map(s => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </Field>

              <Field label="Boligtype">
                <select
                  value={form.type}
                  onChange={e => set('type', e.target.value)}
                  className={inputCls}
                >
                  {TYPE_OPTIONS.map(t => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </Field>
            </div>

            {/* Boliger + BRA */}
            <div className="grid grid-cols-2 gap-3">
              <Field label="Antall boliger">
                <input
                  type="number"
                  min="0"
                  value={form.boliger}
                  onChange={e => set('boliger', e.target.value)}
                  placeholder="f.eks. 150"
                  className={inputCls}
                />
              </Field>

              <Field label="BRA">
                <input
                  value={form.bra}
                  onChange={e => set('bra', e.target.value)}
                  placeholder="f.eks. 12 500 m²"
                  className={inputCls}
                />
              </Field>
            </div>

            {/* Budsjett + Påløpt */}
            <div className="grid grid-cols-2 gap-3">
              <Field label="Budsjett (MNOK)" required>
                <input
                  type="number"
                  min="0"
                  value={form.budsjett}
                  onChange={e => set('budsjett', e.target.value)}
                  placeholder="f.eks. 500"
                  className={`${inputCls} ${errors.budsjett ? 'border-red-300' : ''}`}
                />
                {errors.budsjett && <p className="text-[11px] text-red-500 mt-1">{errors.budsjett}</p>}
              </Field>

              <Field label="Påløpt kostnad (MNOK)">
                <input
                  type="number"
                  min="0"
                  value={form.paalopte}
                  onChange={e => set('paalopte', e.target.value)}
                  placeholder="f.eks. 50"
                  className={inputCls}
                />
              </Field>
            </div>

            {/* Fremdrift */}
            <Field label={`Fremdrift — ${form.fremdrift}%`}>
              <div className="flex items-center gap-3">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={form.fremdrift}
                  onChange={e => set('fremdrift', e.target.value)}
                  className="flex-1 accent-[#9B3520]"
                />
                <span className="text-sm font-medium text-gray-700 w-10 text-right">{form.fremdrift}%</span>
              </div>
            </Field>

            {/* Salgsstart */}
            <Field label="Salgsstart">
              <input
                value={form.salgsstart}
                onChange={e => set('salgsstart', e.target.value)}
                placeholder="f.eks. Q3 2027 eller 15. mai 2027"
                className={inputCls}
              />
            </Field>

            {/* Beskrivelse */}
            <Field label="Beskrivelse">
              <textarea
                value={form.beskrivelse}
                onChange={e => set('beskrivelse', e.target.value)}
                placeholder="Kort beskrivelse av prosjektet..."
                rows={2}
                className={`${inputCls} resize-none`}
              />
            </Field>

            {/* URL */}
            <Field label="Nettside (URL)">
              <input
                type="url"
                value={form.url}
                onChange={e => set('url', e.target.value)}
                placeholder="https://ferdeiendom.no/bolig/..."
                className={inputCls}
              />
            </Field>
          </form>

          {/* Footer */}
          <div className="px-6 py-4 border-t border-gray-100 flex justify-end gap-2.5">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Avbryt
            </button>
            <button
              onClick={handleSubmit}
              className="px-5 py-2 text-sm font-medium text-white rounded-lg transition-colors"
              style={{ background: '#9B3520' }}
              onMouseEnter={e => e.currentTarget.style.background = '#7a2918'}
              onMouseLeave={e => e.currentTarget.style.background = '#9B3520'}
            >
              Opprett prosjekt
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
