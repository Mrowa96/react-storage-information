module.exports = api => {
  const isDevelopment = api.env() === 'development';
  const isTest = api.env() === 'test';

  const presets = [
    !isTest
      ? '@babel/preset-env'
      : [
          '@babel/preset-env',
          {
            targets: {
              node: 'current',
            },
          },
        ],
    [
      '@babel/preset-react',
      {
        development: isDevelopment || isTest,
        useBuiltIns: true,
      },
    ],
  ];

  const plugins = ['@babel/plugin-transform-runtime'];

  return {
    presets,
    plugins,
  };
};
