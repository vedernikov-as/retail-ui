const { spawnSync } = require('child_process');
const { moveSync, copySync, removeSync, emptyDirSync } = require('fs-extra');
const { getPackageInfo, TAGS } = require('../scripts/package/package-info');
const { loadConfig } = require('../scripts/package/package-config');
const path = require('path');
const config = require('./config.js');
const packageJson = path.join(__dirname, '../package.json');

const { npmVersions, distTag, publishVersion } = getPackageInfo(loadConfig(packageJson));

const DIR = {
  CURRENT: config.styleguideDir, // the files from the prior build with the config.js
  LATEST: path.join(config.styleguideDir, '..'),
  UNSTABLE: path.join(config.styleguideDir, '..', `unstable/${publishVersion}`),
  LTS: path.join(config.styleguideDir, '..', 'lts'),
};

switch (distTag) {
  case TAGS.LATEST:
    break;
  case TAGS.LTS:
    emptyDirSync(DIR.LTS);
    copySync(DIR.CURRENT, DIR.LTS);
    break;
  case TAGS.UNSTABLE:
    moveSync(DIR.CURRENT, DIR.UNSTABLE, { overwrite: true });
    process.exit(0);
  case TAGS.OLD:
    process.exit(0);
  default:
    removeSync(DIR.CURRENT);
    console.log('Unknown package tag: ', tag);
    process.exit(0);
}

const excludeVersions = ['0.8.8'];
const stableVersions = npmVersions
  .reverse()
  .filter(version => !version.includes('-'))
  .filter(version => !excludeVersions.includes(version));

// NOTE For some reason styleguidist need content field with valid file
config.sections = [
  { name: 'Readme', content: '../README.md', exampleMode: 'expand' },
  { name: 'Changelog', content: '../CHANGELOG.md' },
  { name: 'Roadmap', content: '../ROADMAP.md' },
  { name: 'Icons', content: '../components/Icon/README.md' },
  { name: 'LocaleProvider', content: '../LOCALEPROVIDER.md' },
  { name: 'Components', components: config.components, sectionDepth: 1 },
  {
    name: 'Versions',
    sections: [
      {
        name: 'lts',
        content: '../README.md',
        href: 'http://tech.skbkontur.ru/react-ui/lts',
      },
      ...stableVersions.map(version => {
        return {
          name: version,
          content: '../README.md',
          href: `http://tech.skbkontur.ru/react-ui/${version}`,
        };
      }),
    ],
  },
];

config.styleguideDir = DIR.LATEST;
config.styleguideComponents = {
  PathlineRenderer: require.resolve('./components/Pathline/PathlineRenderer.tsx'),
};

Reflect.deleteProperty(config, 'components');

module.exports = config;
