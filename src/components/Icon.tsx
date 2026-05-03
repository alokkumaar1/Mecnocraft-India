export function Icon({
  name,
  className = 'h-5 w-5',
}: {
  name:
    | 'arrow'
    | 'spark'
    | 'shield'
    | 'bolt'
    | 'chip'
    | 'cloud'
    | 'box'
    | 'chart'
    | 'phone'
    | 'mail'
    | 'pin'
  className?: string
}) {
  switch (name) {
    case 'arrow':
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className={className}
          aria-hidden
        >
          <path
            d="M13.5 6.75 19.5 12l-6 5.25M19.5 12H4.5"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    case 'spark':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
          <path
            d="M12 2l1.2 5.1L18 9l-4.8 1.9L12 16l-1.2-5.1L6 9l4.8-1.9L12 2Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M19 13l.7 2.8L22 17l-2.3.2L19 20l-.7-2.8L16 17l2.3-.2L19 13Z"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinejoin="round"
          />
        </svg>
      )
    case 'shield':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
          <path
            d="M12 3 20 7v6c0 5-3.5 8.6-8 10-4.5-1.4-8-5-8-10V7l8-4Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M9 12l2 2 4-5"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    case 'bolt':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
          <path
            d="M13 2 4 14h7l-1 8 10-14h-7l0-6Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
      )
    case 'chip':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
          <path
            d="M9 3v2M15 3v2M9 19v2M15 19v2M3 9h2M3 15h2M19 9h2M19 15h2"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            d="M8 7h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M10 10h4v4h-4v-4Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
      )
    case 'cloud':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
          <path
            d="M7 18a4 4 0 0 1 .8-7.9A5.5 5.5 0 0 1 18.5 9a3.8 3.8 0 0 1 0 7.5H7Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
      )
    case 'box':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
          <path
            d="M12 2 3.5 6.5 12 11l8.5-4.5L12 2Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M3.5 6.5V17.5L12 22V11"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M20.5 6.5V17.5L12 22"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
      )
    case 'chart':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
          <path
            d="M4 19V5M4 19h16"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            d="M7 16v-5M12 16V7M17 16v-8"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      )
    case 'phone':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
          <path
            d="M7 4h3l1 4-2 1c1 3 3 5 6 6l1-2 4 1v3c0 1-1 2-2 2-8 0-14-6-14-14 0-1 1-2 2-2Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
      )
    case 'mail':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
          <path
            d="M4 6h16v12H4V6Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="m4 7 8 6 8-6"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
      )
    case 'pin':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
          <path
            d="M12 22s7-5.2 7-12a7 7 0 1 0-14 0c0 6.8 7 12 7 12Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M12 10.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
      )
  }
}

