const { spawnSync } = require('child_process');
const { eq, gt, gte, valid, diff } = require('semver');
const { getCurrentBranch, getCurrentHash, isTagExists } = require('../git');

const TAGS = {
  UNSTABLE: 'unstable',
  LATEST: 'latest',
  OLD: 'old-version',
  LTS: 'lts',
};

const getPackageInfo = config => {
  if (!config) {
    console.log('No package config has been provided.');
    process.exit(-1);
  }

  const { error, stdout } = spawnSync('npm', ['show', config.name, '--json'], { shell: true });

  if (error) {
    console.log(error);
    process.exit(-1);
  }

  const { versions: npmVersions, 'dist-tags': npmTags } = JSON.parse(stdout.toString());
  const gitTag = getGitTag(config.version);
  const distTag = getDistTag(config.version, npmTags, getCurrentBranch(), isTagExists(gitTag));

  if (!distTag) {
    console.log('Failed to determine dist-tag.');
    process.exit(-1);
  }

  const publishVersion = getPublishVersion(distTag, config.version, getCurrentHash());
  const homepage = getHomepage(distTag, publishVersion);

  return {
    publishVersion,
    npmVersions,
    distTag,
    homepage,
  };
};

const getDistTag = (version, npmTags, gitBranch, isGitTagExists) => {
  const { LATEST, UNSTABLE, OLD, LTS } = TAGS;

  if (!valid(version)) {
    console.log(`Invalid package version: ${version}`);
    return null;
  }

  if (gitBranch && isGitTagExists) {
    switch (gitBranch) {
      case 'master':
        if (valid(npmTags.latest)) {
          if (gte(version, npmTags.latest)) {
            return LATEST;
          }
          console.log(`Non-latest version in master branch. Current: ${version}, Latest: ${npmTags.latest}.`);
        } else {
          console.log(`The provided "latest" tag is invalid: ${npmTags.latest}.`);
        }
        return null;
      case 'lts':
        if (valid(npmTags.lts)) {
          if (eq(version, npmTags.lts) || (gt(version, npmTags.lts) && diff(version, npmTags.lts) === 'patch')) {
            return LTS;
          }
          console.log(`Version does not meet lts-requirements. Current: ${version}, LTS: ${npmTags.lts}.`);
        } else {
          console.log(`The provided "lts" tag is invalid: ${npmTags.lts}.`);
        }
        return null;
      default:
        return OLD;
    }
  } else {
    return UNSTABLE;
  }
};

const getPublishVersion = (distTag, version, hash) => {
  return distTag !== TAGS.UNSTABLE ? version : `0.0.0-${hash.slice(0, 10)}`;
};

const getHomepage = (distTag, publishVersion) => {
  const HOMEPAGE = 'https://tech.skbkontur.ru/react-ui/';
  switch (distTag) {
    case TAGS.UNSTABLE:
      return `${HOMEPAGE}unstable/${publishVersion}/`;
    default:
      return `${HOMEPAGE}${publishVersion}/`;
  }
};

const getGitTag = version => {
  return `retail-ui@${version}`;
};

module.exports = {
  getPackageInfo,
  getDistTag,
  TAGS,
};
