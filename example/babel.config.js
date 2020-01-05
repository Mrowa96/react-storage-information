module.exports = () => {
  const presets = ['@babel/preset-env', '@babel/preset-react'];
  const plugins = ['@babel/plugin-transform-runtime'];

  return {
    presets,
    plugins,
  };
};
