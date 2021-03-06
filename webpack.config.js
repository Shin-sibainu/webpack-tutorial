module.exports = {
  //エントリーポイント
  entry: "./src/index.js",

  //ファイルの出力設定
  output: {
    //出力ファイルのディレクトリ名(なくてもいい)
    path: `${__dirname}/dist`,
    //出力ファイル名
    filename: "main.js",
  },
  //開発時(ソースマップ有効)にはdevelopment,公開時にはproduction
  mode: "development",
  //ローカル開発用環境を立ち上げる
  //実行時にブラウザが自動的にlocakhostを開く
  devServer: {
    static: "dist",
    open: true,
  },
};
