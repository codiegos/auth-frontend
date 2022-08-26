const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { 
                "@primary-color": "#746CC0",
                "@success-color": "#B5B1E0"
             },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
