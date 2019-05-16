var concat = require('concat');

const files = [
    './dist/angular-element-app/runtime.js',
    './dist/angular-element-app/polyfills.js',
    './dist/angular-element-app/scripts.js',
    './dist/angular-element-app/main.js'
]

concat(files, './dist/concated-angular-elements.js')
console.info('Custom elements created successfully!')
