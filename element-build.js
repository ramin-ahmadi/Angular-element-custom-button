const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
    const files = [
        './dist/angular-elements/runtime.js',
        './dist/angular-elements/polyfills.js',
        './dist/angular-elements/scripts.js',
        './dist/angular-elements/main.js',
    ]

    await fs.ensureDir('elements')

    await concat(files, 'elements/custom-button.js');

    await fs.copyFile('./dist/angular-elements/styles.css', 'elements/styles.css')

    await fs.copy('./dist/angular-elements/assets/', 'elements/assets/' )
    
})()