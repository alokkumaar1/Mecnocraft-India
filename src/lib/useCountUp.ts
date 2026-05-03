import { useEffect, useMemo, useState } from 'react'

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3)
}

export function useCountUp({
  to,
  durationMs = 1200,
  start = 0,
  active = true,
}: {
  to: number
  durationMs?: number
  start?: number
  active?: boolean
}) {
  const [value, setValue] = useState(start)
  const params = useMemo(() => ({ to, durationMs, start, active }), [to, durationMs, start, active])

  useEffect(() => {
    if (!params.active) return
    let raf = 0
    const t0 = performance.now()

    const tick = (now: number) => {
      const p = Math.min(1, (now - t0) / params.durationMs)
      const eased = easeOutCubic(p)
      setValue(Math.round(params.start + (params.to - params.start) * eased))
      if (p < 1) raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [params])

  return value
}

