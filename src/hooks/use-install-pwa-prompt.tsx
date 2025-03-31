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

const useInstallPwaPrompt = () => {
  const promptRef = useRef<BeforeInstallPromptEvent | null>(null)
  const promptToastIdRef = useRef<string | number>(-1)

  const handleInstall = () => promptRef.current?.prompt()

  const handleCancelInstall = () => toast.dismiss(promptToastIdRef.current)

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: BeforeInstallPromptEvent) => {
      e.preventDefault()
      promptRef.current = e

      const tId = toast('Install the app to your home screen for a better experience!', {
        duration: Infinity,
        cancel: {
          label: 'Cancel',
          onClick: handleCancelInstall,
        },
        action: {
          label: 'Install',
          onClick: handleInstall,
        },
      })
      promptToastIdRef.current = tId
    }

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt)

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
    }
  }, [])
}

export { useInstallPwaPrompt }
