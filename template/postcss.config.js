module.exports = {
    syntax: 'postcss-scss',
    plugins: {
        'postcss-import': {},
        'precss': {},
        'autoprefixer': {},
        'cssnano': {preset: 'default'},
    }
}