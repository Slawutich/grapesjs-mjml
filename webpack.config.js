// config is the default configuration
export default ({ config }) => {
  // This is how you can distinguish the `build` command from the `serve`
  const isBuild = config.mode === 'production';

  return {
    ...config,
    output: {
      library: 'grapesjs-mjml',
      libraryTarget: 'umd', // UMD or ESM for best compatibility with Vite
      filename: 'index.js',
    },
    externals: {
      ...config.externals,
      ...(isBuild ? {
        'mjml-browser': 'mjml-browser'
      } : {})
    },
    optimization: {
      minimize: false
    }, 
  };
};