module.exports = {
    webpack: (config, options) => {
      config.module.rules.push({
        test: /\.(jpe?g|png)$/,
        loader: 'responsive-loader',
        options: {
          name: 'views/assets/images/[hash]-[width].[ext]',
          placeholder: true,
        },
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-loader',
          },
        ],
      })
  
      return config
    },
  }