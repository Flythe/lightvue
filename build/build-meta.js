const fs = require('fs-extra');
const path = require('path');

fs.readdirSync('dist/').forEach(folder => {
  if (folder !== 'lightvue.css' && folder !== 'package.json' && folder !== 'README.md') {
    fs.copySync(path.resolve(__dirname, './package-build.json'), 'dist/' + folder + '/package.json');
  }
  if (folder === 'skeleton') {
    fs.copySync('core/components/skeleton/preset', 'dist/skeleton/preset');
  }
});

// Make sure to update correct version in ./dist/package.json file.
