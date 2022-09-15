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
function resolveTsconfigPathsToAlias({ tsconfigPath = './tsconfig.json', webpackConfigBasePath = __dirname } = {}) {
    const { paths, baseUrl } = require(tsconfigPath).compilerOptions;
    const aliases = {};

    Object.keys(paths).forEach((item) => {
        const key = item.replace('/*', '');
        aliases[key] = path.resolve(webpackConfigBasePath, baseUrl, paths[item][0].replace('/*', '').replace('*', ''));
    });

    console.log('aliases: ', aliases);
    return aliases;
}

module.exports = {
    webpack: {
        // alias: resolveTsconfigPathsToAlias(),
        alias: {
            '@src': path.resolve(__dirname, 'src'),
            '@app': path.resolve(__dirname, 'src/app'),
            '@modules': path.resolve(__dirname, 'src/modules'),
            '@module-base': path.resolve(__dirname, 'src/modules/module-base'),
            '@module-theme': path.resolve(__dirname, 'src/modules/module-theme'),
            '@module-auth': path.resolve(__dirname, 'src/modules/module-auth'),
            '@module-language': path.resolve(__dirname, 'src/modules/module-language'),
        },
    },
};
