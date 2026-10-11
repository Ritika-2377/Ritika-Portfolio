import { useEffect } from 'react'

const BASE = 'Ritika Garg | Student Developer Portfolio'

export function usePageTitle(pageTitle) {
  useEffect(() => {
    document.title = pageTitle ? `${pageTitle} · Ritika Garg` : BASE
    return () => {
      document.title = BASE
    }
  }, [pageTitle])
}
