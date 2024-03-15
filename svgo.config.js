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
          removeViewBox: false,
          removeUselessStrokeAndFill : {
          	removeNone: true,
          },
        },
      },
    },
    'convertStyleToAttrs',
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

