const { readJsonSync, writeJsonSync } = require('fs-extra');

const loadConfig = path => {
  return readJsonSync(path);
};

const saveConfig = (config, path) => {
  if (config) {
    writeJsonSync(path, config, { spaces: 2 });
  }
};

// TODO: add merge function

module.exports = {
  loadConfig,
  saveConfig,
};
