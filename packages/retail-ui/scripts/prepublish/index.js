const path = require('path');
const { getPackageInfo } = require('../package/package-info');
const { loadConfig, saveConfig } = require('../package/package-config');
const configPath = path.join(__dirname, '../../package.json');

const config = loadConfig(configPath);
const { publishVersion, distTag, homepage } = getPackageInfo(config);

config.version = publishVersion;
config.homepage = homepage;
config.publishConfig = Object.assign({}, config.publishConfig, { tag: distTag });

saveConfig(config, configPath);

console.log(`About to publish: ${config.name}@${publishVersion} with the "${distTag}" tag.`);
