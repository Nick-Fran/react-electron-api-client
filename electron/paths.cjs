const { app } = require('electron');
const path = require('path');

function getRequestsPath() {
  return path.join(app.getPath('userData'), 'requests.json');
}

module.exports = { getRequestsPath };