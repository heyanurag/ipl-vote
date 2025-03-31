import { useEffect, useRef } from 'react'
import { toast } from 'sonner'

declare global {
  interface WindowEventMap {
    beforeinstallprompt: BeforeInstallPromptEvent
  }
}

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>
}

const PWA_PROMPT_TIMESTAMP_KEY = 'pwa-install-toast-timestamp'

const setLastShowTimeStamp = () =>
  localStorage.setItem(PWA_PROMPT_TIMESTAMP_KEY, Date.now().toString())

const shouldShowToastToday = () => {
  const lastToastTimestamp = localStorage.getItem(PWA_PROMPT_TIMESTAMP_KEY)
  if (!lastToastTimestamp) return true

  const lastTime = parseInt(lastToastTimestamp, 10)
  const today = new Date()
  const lastDate = new Date(lastTime)

  return today.toDateString() !== lastDate.toDateString()
}

const useInstallPwaPrompt = () => {
  const promptRef = useRef<BeforeInstallPromptEvent | null>(null)
  const promptToastIdRef = useRef<string | number>(-1)

  const handleInstall = () => {
    promptRef.current?.prompt()
    promptRef.current = null
  }

  const handleCancelInstall = () => {
    toast.dismiss(promptToastIdRef.current)
    setLastShowTimeStamp()
  }

  useEffect(() => {
    if (!shouldShowToastToday()) return

    const handleBeforeInstallPrompt = (e: BeforeInstallPromptEvent) => {
      e.preventDefault()

      promptRef.current = e

      promptToastIdRef.current = toast(
        'Install the app to your home screen for a better experience!',
        {
          duration: Infinity,
          cancel: {
            label: 'Cancel',
            onClick: handleCancelInstall,
          },
          action: {
            label: 'Install',
            onClick: handleInstall,
          },
          onDismiss: setLastShowTimeStamp,
        }
      )
    }

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt)

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
    }
  }, [])
}

export { useInstallPwaPrompt }
