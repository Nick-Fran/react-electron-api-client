// electron/preload.js
const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  saveRequest: (data) => ipcRenderer.invoke('save-request', data),
  loadRequests: () => ipcRenderer.invoke('load-requests'),
});
