module.exports = {
  multipass: true,
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          convertColors: {
          	shortname: false,
          },
          inlineStyles: {
            onlyMatchedOnce: false,
          },
          removeDesc: {
            removeAny: true,
          },
          removeViewBox: false,
          removeUselessStrokeAndFill : {
          	removeNone: true,
          },
        },
      },
    },
    'convertStyleToAttrs',
    'sortAttrs',
    'removeDimensions',
    'removeRasterImages',
    'removeScriptElement',
    'removeStyleElement',
    {
      name: 'removeAttrs',
      params: {
        attrs: 'svg:fill:none|svg:xml:space',
      },
    },
  ],
};

