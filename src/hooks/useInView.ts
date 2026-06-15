import { useEffect, useRef, useState } from 'react'

/**
 * Dispara `true` una sola vez cuando el elemento entra al viewport.
 * Útil para animaciones de scroll-reveal.
 */
export function useInView(ref: React.RefObject<Element | null>, options?: IntersectionObserverInit) {
  const [inView, setInView] = useState(false)
  const triggered = useRef(false)

  useEffect(() => {
    if (!ref.current || triggered.current) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !triggered.current) {
        triggered.current = true
        setInView(true)
        observer.disconnect()
      }
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px', ...options })

    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [ref, options])

  return inView
}
