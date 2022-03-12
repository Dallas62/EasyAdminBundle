var Encore = require('@symfony/webpack-encore');
const WebpackRTLPlugin = require('webpack-rtl-plugin');

Encore
    .setOutputPath('./src/Resources/public/')
    .setPublicPath('./')
    .setManifestKeyPrefix('bundles/easyadmin')

    .cleanupOutputBeforeBuild()
    .enableSassLoader()
    .enableSourceMaps(false)
    .enableVersioning(false)
    .disableSingleRuntimeChunk()

    // copy FontAwesome fonts
    .copyFiles({
        from: './node_modules/@fortawesome/fontawesome-free/webfonts/',
        // relative to the output dir
        to: 'fonts/[name].[hash].[ext]'
    })

    // copy flag images for country type
    .copyFiles({
        from: './assets/images/flags/',
        to: 'images/flags/[path][name].[ext]',
        pattern: /\.png$/
    })

    .addPlugin(new WebpackRTLPlugin())

    .addEntry('app', './assets/js/app.js')
    .addEntry('page-layout', './assets/js/page-layout.js')
    .addEntry('page-color-scheme', './assets/js/page-color-scheme.js')
    .addEntry('form-type-boolean', './assets/js/form-type-boolean.js')
    .addEntry('form-type-code-editor', './assets/js/form-type-code-editor.js')
    .addEntry('form-type-collection', './assets/js/form-type-collection.js')
    .addEntry('form-type-image', './assets/js/form-type-image.js')
    .addEntry('form-type-slug', './assets/js/form-type-slug.js')
    .addEntry('form-type-textarea', './assets/js/form-type-textarea.js')
    .addEntry('form-type-text-editor', './assets/js/form-type-text-editor.js')
    .addEntry('login', './assets/js/login.js')
;

module.exports = Encore.getWebpackConfig();
