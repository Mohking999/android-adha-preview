const { execSync } = require('child_process');
const { existsSync, rmSync, writeFileSync } = require('fs');
const { join } = require('path');

const distDir = join(__dirname, 'dist');
const token = process.env.GITHUB_TOKEN || process.env.GH_TOKEN || '';
const repoUrl = token
  ? `https://x-access-token:${token}@github.com/Mohking999/android-adha-preview.git`
  : 'https://github.com/Mohking999/android-adha-preview.git';
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
