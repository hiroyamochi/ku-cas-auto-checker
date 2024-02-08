# つかいかた
1. このソース一式をダウンロード
2. ダウンロードしたフォルダは解凍し，任意の場所に置いておく (フォルダが削除されないように注意)
3. Chromeの拡張機能ページ [chrome://extensions/](chrome://extensions/) でデベロッパーモードを有効にする
4. 「パッケージ化されていない拡張機能を読み込む」から先ほどのフォルダを選択する
  
# Usage
1. 拡張機能のアイコンをクリックする
2. 何番目のIDを自動選択するかを設定し，保存ボタンを押す
3. ログイン画面で自動選択されているか確認する

# Application
Xcodeの変換機能を使うことでiOS/iPadOSのSafariにおける「機能拡張」として，この拡張機能を利用することもできる．

以下のコマンドを実行すれば良い．

`xcrun /Applications/Xcode.app/Contents/Developer/usr/bin/safari-web-extension-converter /path/to/this/repository/`

XcodeにおけるBuild Settingなどは気が向いたら書く．