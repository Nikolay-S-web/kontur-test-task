import { defineConfig } from 'vite';
import VitePluginSvgSpritemap from '@spiriit/vite-plugin-svg-spritemap';
import htmlPurge from 'vite-plugin-purgecss';
import autoprefixer from 'autoprefixer';
import pxtorem from 'postcss-pxtorem';
import legacy from '@vitejs/plugin-legacy';
import { sentryVitePlugin } from '@sentry/vite-plugin';
import { ViteMinifyPlugin } from 'vite-plugin-minify';
import imagePresets, { widthPreset } from 'vite-plugin-image-presets';
import { ghPages } from 'vite-plugin-gh-pages';

export default defineConfig({
    build: {
        emptyOutDir: true,
        assetsDir: 'assets',
        rollupOptions: {
            output: {
                assetFileNames: 'assets/[name].[hash][extname]',
            },
        },
        sourcemap: true,
    },
    plugins: [
        VitePluginSvgSpritemap('/src/assets/SVG/*.svg'),
        htmlPurge(),
        ViteMinifyPlugin(),
        legacy(),
        sentryVitePlugin({
            project: process.env.SENTRY_PROJECT,
            sourcemaps: {
                include: '/dist',
                urlPrefix: '~/',
            },
        }),
        imagePresets({
            fullsize: widthPreset({
                media: '(min-width: 1025px)',
                class: 'img fullsize',
                loading: 'eager',
                widths: [1920, 2880, 3840],
                formats: {
                    avif: { quality: 80 },
                    webp: { quality: 80 },
                    jpg: { quality: 80 },
                },
            }),
            laptop: widthPreset({
                media: '(max-width:1024px)',
                density: 1,
                class: 'img laptop',
                loading: 'eager',
                widths: [1024, 2048, 3072],
                formats: {
                    avif: { quality: 80 },
                    webp: { quality: 80 },
                    jpg: { quality: 80 },
                },
            }),
        }),
        // ghPages({
        //     branch: 'gh-pages',
        // }),
    ],
    css: {
        postcss: {
            plugins: [
                autoprefixer({
                    grid: 'autoplace',
                }),
                pxtorem({
                    rootValue: 16,
                    unitPrecision: 5,
                    propList: ['*'],
                    selectorBlackList: [],
                    replace: true,
                    mediaQuery: true,
                    minPixelValue: 0,
                    exclude: /node_modules/i,
                }),
            ],
        },
    },
});
