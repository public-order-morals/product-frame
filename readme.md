## ❯ About 
システムの雛形に使ってください。各種html,cssファイル群のデザイン、構想等は仮のものですので、要求仕様書通りに作り直すこと。実行方法は、環境、動かすための手順　(MAC , WINDOWS)を見てね
サーバー下もしくはローカルサーバーでの開発、動作を想定。ブラウザで実行。

## ❯ 環境、動かすための手順　- MAC OS

__1. HTMLファイルをそのままブラウザで動かす場合__

    確認したいxxx.htmlを開く。
     

__2. 自分のpcでサーバーを立ててローカル環境で動かす場合__

    xamppをインストール

    ↓

    Generalのstartとservicesのstart

    ↓

    Networkのlocalhost:8080をenable

    ↓

    volumeのmountを押した後にexploreでフォルダを開く

    ↓

    lampp/htdocsにこのrepositoryを入れてchromeなどで、http:/localhost:8080/フォルダ名/xxx.htmlでアクセス

## ❯ 環境、動かすための手順　- WINDOWS OS

追記します。

## ❯ 各種ファイルの役割と構造について
フォルダの階層はこんな感じになってます（vscodeより）
![structure](https://user-images.githubusercontent.com/49393142/177698697-e615d950-0b48-4d6d-b05a-24492a099413.png)

### ❯ HTML

- index.html ... login画面
- resuster.html ... 登録画面
- change.html ... 資産の変更
- submit.html ... 資産の登録
- list.html ... 資産の一覧表示、資産の検索
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

ログイン関係のファイルやサーバー側プログラムを仮で置いてます。