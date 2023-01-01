const HtmlWebpackPlugin =  require('html-webpack-plugin');
module.exports = {
  mode : 'development',
  entry : './js/app.js',
  devServer: {
    liveReload: true,
    hot: true,
    open: true,
    static: ['./'],
    compress: true, 
    Inline: true, 
    port: '8080',
    allowedHosts: ['.host.com', 'host2.com'],
    allowedHosts: ['.azurewebsites.net', 'webappgg1.azurewebsites.net'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ]
};