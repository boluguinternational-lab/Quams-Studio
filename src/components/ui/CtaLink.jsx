import Asterisk from './Asterisk.jsx'

export default function CtaLink({ href = '#', children, className = '' }) {
  return (
    <a
      href={href}
      className={`inline-flex items-center gap-2 font-display italic border-b border-current pb-0.5 hover:opacity-60 transition-opacity ${className}`}
    >
      <Asterisk className="w-3.5 h-3.5" />
      {children}
    </a>
  )
}
