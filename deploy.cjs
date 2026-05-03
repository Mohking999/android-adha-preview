const { execSync } = require('child_process');
const { existsSync, rmSync, writeFileSync } = require('fs');
const { join } = require('path');

const distDir = join(__dirname, 'dist');
const token = process.env.GITHUB_TOKEN || process.env.GH_TOKEN || '';

function getRemoteUrl() {
  try {
    return execSync('git remote get-url kotlin', { encoding: 'utf-8' }).trim();
  } catch {
    return execSync('git remote get-url origin', { encoding: 'utf-8' }).trim();
  }
}

function tokenizeRemoteUrl(remoteUrl) {
  if (!token) {
    return remoteUrl;
  }

  if (remoteUrl.startsWith('https://')) {
    return `https://x-access-token:${token}@${remoteUrl.slice('https://'.length)}`;
  }

  if (remoteUrl.startsWith('git@github.com:')) {
    return `https://x-access-token:${token}@github.com/${remoteUrl.slice('git@github.com:'.length)}`;
  }

  return remoteUrl;
}

const repoUrl = tokenizeRemoteUrl(getRemoteUrl());
const branch = 'gh-pages';

function exec(command) {
  console.log(`> ${command}`);
  execSync(command, { stdio: 'inherit', shell: true });
}

try {
  exec('npm run build');

  if (existsSync(join(distDir, '.git'))) {
    rmSync(join(distDir, '.git'), { recursive: true, force: true });
  }

  exec(`git init "${distDir}"`);
  exec(`cd "${distDir}" && git checkout -b ${branch}`);
  exec(`cd "${distDir}" && git config user.name "github-actions[bot]"`);
  exec(`cd "${distDir}" && git config user.email "github-actions[bot]@users.noreply.github.com"`);
  writeFileSync(join(distDir, '.nojekyll'), '');
  exec(`cd "${distDir}" && git add .`);
  exec(`cd "${distDir}" && git commit -m "Deploy to GitHub Pages"`);
  exec(`cd "${distDir}" && git remote add origin "${repoUrl}"`);
  exec(`cd "${distDir}" && git push --force origin ${branch}`);

  if (existsSync(join(distDir, '.git'))) {
    rmSync(join(distDir, '.git'), { recursive: true, force: true });
  }

  console.log('\nDeployment complete.');
} catch (error) {
  console.error('\nDeployment failed.');
  process.exit(1);
}
