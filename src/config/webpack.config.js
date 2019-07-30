/* global __dirname, module, process, require */

/* eslint no-unused-vars: 0 */
module.exports = {
    module: {
        loaders: [
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' }
        ]
    }
};