/// <reference types="vite/client" />
/// <reference types="vite/types/importMeta.d.ts" />
/// <reference types="vite-plugin-pwa/client" />

// Use a module declaration instead of global
declare module 'global-pwa-types' {
  interface BeforeInstallPromptEvent extends Event {
    prompt: () => Promise<void>
  }
}

// Then extend the global interfaces
interface Navigator {
  standalone?: boolean
}

interface WindowEventMap {
  beforeinstallprompt: BeforeInstallPromptEvent
}

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>
}
