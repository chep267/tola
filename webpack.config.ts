/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
const path = require('path');

/**
 * Resolve tsconfig.json paths to Webpack aliases
 * @param  {string} tsconfigPath           - Path to tsconfig
 * @param  {string} webpackConfigBasePath  - Path from tsconfig to Webpack config to create absolute aliases
 * @return {object}                        - Webpack alias config
 */
function resolveTsconfigPathsToAlias({ tsconfigPath = './tsconfig.json', webpackConfigBasePath = __dirname } = {}) {
    const { paths, baseUrl } = require(tsconfigPath).compilerOptions;
    const aliases: { [key: string]: string } = {};

    Object.keys(paths).forEach((item) => {
        const key = item.replace('/*', '');
        aliases[key] = path.resolve(webpackConfigBasePath, baseUrl, paths[item][0].replace('/*', '').replace('*', ''));
    });
    return aliases;
}

module.exports = {
    //other rules
    resolve: {
        plugins: [
            new TsconfigPathsPlugin({
                configFile: './tsconfig.json',
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            }),
        ],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        baseUrl: './',
        alias: resolveTsconfigPathsToAlias(),
    },
};
