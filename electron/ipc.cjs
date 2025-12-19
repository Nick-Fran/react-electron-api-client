const fs = require('fs');
const { ipcMain } = require('electron');
const { getRequestsPath } = require('./paths.cjs');

function registerIpcHandlers() {
  ipcMain.handle("load-requests", async () => {
    const file = getRequestsPath();
    console.log('Loading', file);
    const data = fs.existsSync(file)
      ? JSON.parse(fs.readFileSync(file, 'utf-8'))
      : [];
    return data;
  });

  ipcMain.handle('save-request', async (_, request) => {
    const file = getRequestsPath();
    console.log('Saving request to', file);
    const data = fs.existsSync(file)
      ? JSON.parse(fs.readFileSync(file, 'utf-8'))
      : [];

    data.push(request);
    fs.writeFileSync(file, JSON.stringify(data, null, 2));
  });
}

module.exports = {
  registerIpcHandlers
};