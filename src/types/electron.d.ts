// src/types/electron.d.ts
export {}

declare global {
  interface Window {
    electron: {
      saveRequest: (request: SavedRequest) => Promise<boolean>
      loadRequests: () => Promise<SavedRequest[]>
    }
  }
}
