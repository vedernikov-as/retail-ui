require('ts-node').register({ files: true, transpileOnly: true });

const config = {
  gridUrl: 'http://screen-dbg:shot@grid.testkontur.ru/wd/hub',
  address: {
    host: 'localhost',
    port: 6060,
    path: '/iframe.html',
  },
  testRegex: /\.ts$/,
  browsers: {
    chrome: { browserName: 'chrome', limit: 2 },
    firefox: { browserName: 'firefox' },
    ie11: { browserName: 'internet explorer', limit: 5 },
  },
};

module.exports = config;
