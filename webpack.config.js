// config is the default configuration
export default ({ config }) => {
  // This is how you can distinguish the `build` command from the `serve`
  const isBuild = config.mode === 'production';

  return {
    ...config,
    externals: {
      ...config.externals,
      ...(isBuild ? {
        'mjml-browser': 'mjml-browser'
      } : {})
    },
    optimization: {
      ...config.optimization,
      minimize: false
    }, 
  };
};