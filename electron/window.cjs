const { BrowserWindow } = require('electron')
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 1000,
    height: 700,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'), // optional
    },
  });

  // In dev mode, load from Vite's dev server
  if (process.env.NODE_ENV === 'development') {
    console.log('Loading from Vite dev server');
    win.loadURL(process.env.VITE_DEV_SERVER_URL || 'http://localhost:5173');
  } else {
    // In production, load the built files
    win.loadFile(path.join(__dirname, '../dist/index.html'));
  }
}

module.exports = createWindow;