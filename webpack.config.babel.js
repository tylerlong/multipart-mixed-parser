import path from 'path'

export default {
  mode: 'production',
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'multipart-mixed-parser.js',
    library: 'multipartMixedParser',
    libraryTarget: 'umd',
    globalObject: 'this' // fix window undefined issue in node
  }
}
