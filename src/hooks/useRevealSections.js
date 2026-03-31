import { useEffect } from 'react'

/**
 * Añade la clase `is-visible` a elementos `[data-reveal]` al entrar en viewport.
 * Manipulación directa del DOM para evitar re-renders y reglas estrictas de hooks.
 */
function useRevealSections() {
  useEffect(() => {
    const elements = document.querySelectorAll('[data-reveal]')
    if (!elements.length) return undefined

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      elements.forEach((el) => el.classList.add('is-visible'))
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

export default useRevealSections
