// {
//   test: /\.css$/,  //修改为==>test: /\.(css|scss)$/
//   use: [
//     require.resolve('style-loader'),
//     {
//       loader: require.resolve('css-loader'),
//       options: {
//         importLoaders: 1,//修改为==>importLoaders: 2,
//       },
//     },
//     {
//       loader: require.resolve('postcss-loader'),
//       options: {
//         // Necessary for external CSS imports to work
//         // https://github.com/facebookincubator/create-react-app/issues/2677
//         ident: 'postcss',
//         plugins: () => [
//           require('postcss-flexbugs-fixes'),
//           autoprefixer({
//             browsers: [
//               '>1%',
//               'last 4 versions',
//               'Firefox ESR',
//               'not ie < 9', // React doesn't support IE8 anyway
//             ],
//             flexbox: 'no-2009',
//           }),
//         ],
//       },
//     },
//       //新增--begin
//     {
//       loader: require.resolve('sass-loader'),
//     },
//      //新增--end

//   ],
// },
