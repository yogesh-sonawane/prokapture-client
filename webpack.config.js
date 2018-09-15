module.exports = {
    entry: './resources/js/app.js',
    output: {
        filename: './public/javascripts/bundle.js',
    },
    alias: {
        'vue$': 'vue/dist/vue.esm.js'
    }
};