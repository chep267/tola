/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

const path = require('path');

/**
 * Resolve tsconfig.json paths to Webpack aliases
 * @param  {string} tsconfigPath           - Path to tsconfig
 * @param  {string} webpackConfigBasePath  - Path from tsconfig to Webpack config to create absolute aliases
 * @return {object}                        - Webpack alias config
 */
function resolveTsconfigPathsToAlias({
    tsconfigPath = './tsconfig.paths.json',
    webpackConfigBasePath = __dirname,
} = {}) {
    const paths = require(tsconfigPath);
    const aliases = {};

    Object.keys(paths).forEach((item) => {
        const key = item.replace('/*', '');
        aliases[key] = path.resolve(webpackConfigBasePath, paths[item][0].replace('/*', ''));
    });
    return aliases;
}

module.exports = {
    webpack: {
        alias: resolveTsconfigPathsToAlias(),
    },
    eslint: null,
};
