import {Configuration, container} from 'webpack';
import dep from 'package.json';

export const webpackConfig: Configuration = {
  output: {
    publicPath: 'http://localhost:4204/',
    uniqueName: 'store',
  },
  experiments: {
    topLevelAwait: true,
  },
  optimization: {
    runtimeChunk: false,
  },
  plugins: [
    new container.ModuleFederationPlugin({
      name: 'store',
      library: {type: 'var', name: 'store'},
      filename: 'remoteStore.js',
      exposes: {
        StoreModule: 'projects/app2-store/src/app/store/store.module.ts'
      },
      shared: {
        '@angular/core': {
          eager: true,
          singleton: true,
          strictVersion: true,
          requiredVersion: dep.dependencies["@angular/router"]
        },
        '@angular/common': {
          eager: true,
          singleton: true,
          strictVersion: true,
          requiredVersion: dep.dependencies["@angular/common"]
        },
        '@angular/router': {
          eager: true,
          singleton: true,
          strictVersion: true,
          requiredVersion: dep.dependencies["@angular/router"]
        },
        'place-my-order-assets': {eager: true, singleton: true},
      }
    })
  ]
};

export default webpackConfig;
