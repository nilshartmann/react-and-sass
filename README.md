# React, Sass and Webpack

Very simple example that demonstrates how to compile SASS files from webpack

This repository contains two branches:

* [master](https://github.com/nilshartmann/react-and-sass/tree/master): shows the [sass-loader](https://github.com/jtangelder/sass-loader) that compiles the SASS files and includes them in Webpack's output file (`dist/main.js`)
* [extract_text_plugin](https://github.com/nilshartmann/react-and-sass/tree/extract_text_plugin): Add the [extract-text-webpack-plugin](https://github.com/webpack/extract-text-webpack-plugin) to the example and creates a separate CSS file during the build, that can be included in the `index.html` file

You can see the changes needed to introduce `extract-text-webpack-plugin` by [comparing the branches](https://github.com/nilshartmann/react-and-sass/compare/extract_text_plugin).

## Run

* `npm install`
* `npm run devserver` (servers artifacts from memory) or 
* `npm run webpack` runs webpack and generates artifacts to `public/dist`




