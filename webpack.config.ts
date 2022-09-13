import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

module.exports = {
    //other rules
    resolve: {
        plugins: [new TsconfigPathsPlugin()],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
};
