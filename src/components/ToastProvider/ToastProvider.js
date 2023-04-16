import React from 'react'

import useKeydown from '../../hooks/use-keydown'

export const ToastContext = React.createContext()

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([
    {
      id: crypto.randomUUID(),
      comment: 'ya',
      hasAgreed: 'error',
    },
    {
      id: crypto.randomUUID(),
      comment: 'ya2',
      hasAgreed: 'notice',
    },
  ])

  const handleEscape = React.useCallback(() => {
    setToasts([])
  }, [])

  useKeydown('Escape', handleEscape)

  function createToast(comment, hasAgreed) {
    const nextToasts = [
      ...toasts,
      {
        id: crypto.randomUUID(),
        comment,
        hasAgreed,
      },
    ]
    setToasts(nextToasts)
  }

  function close(id) {
    const nextToasts = toasts.filter((toast) => {
      return toast.id !== id
    })
    setToasts(nextToasts)
  }

  return (
    <ToastContext.Provider value={{ toasts, createToast, close }}>
      {children}
    </ToastContext.Provider>
  )
}

export default ToastProvider
