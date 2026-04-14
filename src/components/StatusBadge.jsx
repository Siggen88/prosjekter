const STATUS_STYLES = {
  'Ferdigstilt':    { bg: '#EAF3DE', color: '#3B6D11' },
  'Til salgs':      { bg: '#FAEEDA', color: '#854F0B' },
  'Under utvikling':{ bg: '#E6F1FB', color: '#185FA5' },
  'Regulering':     { bg: '#f3f2ee', color: '#555' },
  'Konsept':        { bg: '#f3f2ee', color: '#555' },
}

export default function StatusBadge({ status }) {
  const style = STATUS_STYLES[status] || STATUS_STYLES['Regulering']
  return (
    <span
      className="text-[11px] font-medium px-2.5 py-1 rounded-full inline-block leading-none"
      style={{ background: style.bg, color: style.color }}
    >
      {status}
    </span>
  )
}
