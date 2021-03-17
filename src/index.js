#!/usr/bin/env node
const inquirer = require('inquirer');
const path = require('path');
const { writeFile, readdir, readFile } = require('fs').promises;

const configFiles = {};
const configFolderPath = path.resolve(__dirname, 'config');

async function main() {
  const files = await readdir(configFolderPath).catch(console.log);
  for (let file of files) {
    const frameworkName = file.split('.')[1];
    configFiles[frameworkName] = path.join(configFolderPath, file);
  }

  const { framework } = await inquirer.prompt([
    {
      type: 'list',
      message: "Pick the framework you're using:",
      name: 'framework',
      choices: Object.keys(configFiles),
    },
  ]);

  let config = await readFile(configFiles[framework]).catch(console.log);
  let tsconfig = path.join(process.cwd(), 'tsconfig.json');

  // Create separate file if is tsconfig.json extended for cypress folder
  if (framework === 'cypress')
    tsconfig = path.join(process.cwd(), 'tsconfig.cypress.json');

  await writeFile(tsconfig, config.toString());
  console.log('tsconfig.json successfully created');
}

main().catch((err) => {
  console.error(err);
});
