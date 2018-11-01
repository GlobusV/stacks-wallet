/**
 * Base webpack config used across other specific configs
 */

import path from "path";
import webpack from "webpack";

import { dependencies } from "../package.json";

export default {
  externals: [...Object.keys(dependencies || {})],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true
          }
        }
      }
    ]
  },

  output: {
    path: path.join(__dirname, "..", "app"),
    // https://github.com/webpack/webpack/issues/1114
    libraryTarget: "commonjs2"
  },

  /**
   * Determine the array of extensions that should be used to resolve modules.
   */
  resolve: {
    extensions: [".js", ".jsx", ".json"],
    modules: [path.join(__dirname, "../app"), "node_modules"],
    alias: {
      "@components": path.resolve(__dirname, "../app", "components"),
      "@containers": path.resolve(__dirname, "../app", "containers"),
      "@common": path.resolve(__dirname, "../app", "common"),
      "@stores": path.resolve(__dirname, "../app", "store"),
      "@actions": path.resolve(__dirname, "../app", "actions"),
      "@reducers": path.resolve(__dirname, "../app", "reducers"),
      "@utils": path.resolve(__dirname, "../app", "utils")
    }
  },

  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: "production"
    }),
    new webpack.NamedModulesPlugin()
  ]
};
