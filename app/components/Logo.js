export default function Logo({ className = '', size = 'default' }) {
  const sizes = {
    small: { svg: 32, text: 'text-lg' },
    default: { svg: 40, text: 'text-xl' },
    large: { svg: 48, text: 'text-2xl' },
  }
  const s = sizes[size] || sizes.default

  return (
    <a href="/" className={`flex items-center gap-3 ${className}`}>
      <svg
        width={s.svg}
        height={s.svg}
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="30" cy="18" r="13" fill="#7C5CBF" opacity="0.85" />
        <circle cx="19" cy="38" r="13" fill="#4ECDC4" opacity="0.85" />
        <circle cx="41" cy="38" r="13" fill="#F7C948" opacity="0.85" />
        <circle cx="30" cy="28" r="5" fill="white" opacity="0.6" />
      </svg>
      <div className="flex flex-col">
        <span className={`font-bold ${s.text} tracking-tight text-brand-navy`}>
          CollWi
        </span>
        <span className="text-[9px] font-semibold tracking-[0.2em] uppercase text-brand-navy/50 -mt-0.5">
          Collective Wisdom
        </span>
      </div>
    </a>
  )
}
