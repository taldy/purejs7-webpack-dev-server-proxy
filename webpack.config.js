module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "app.js"
  },
  devServer: {
    proxy: {
      '/api': 'http://localhost:8089'
    }
  }
};
