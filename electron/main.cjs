// electron/main.js
const { app, BrowserWindow } = require('electron');
const { registerIpcHandlers } = require("./ipc.cjs");
const createWindow = require('./window.cjs');


app.whenReady().then(() => {
  registerIpcHandlers();
  createWindow();

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});
