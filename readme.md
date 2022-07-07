### ❯ 各種ファイルの役割と構造について
![structure](https://user-images.githubusercontent.com/49393142/177698697-e615d950-0b48-4d6d-b05a-24492a099413.png)

serverを起動し、xamppやmampの場合はfolder/htdocsにこのrepositoryを入れてchromeなどで[ http://localhost:8080/xxx.html ]でアクセス。
localの場合はxxx.htmlを開く。


各フォルダとファイルの説明

### ❯ HTML

- index.html ... login画面
- resuster.html ... 登録画面
- change.html ... 資産の変更
- submit.html ... 資産の登録
- list.html ... 資産の一覧表示, 資産の検索
- user.html ... ユーザ情報

### ❯ CSS

- style.css
- フロント担当に任せます

### ❯ JS

- root.js ... データテーブルの管理をする
- scripts.js ... ファイルを読み込み表示する
- data.csv ... sqlから持ってきたデータ。refresh()はnode.js環境下でのみ実行可能

### ❯ images

- 画像ファイル群

### ❯ local

