## ❯ 環境、動かすための手順

- chrome
- vscode
- mac / windows

サーバー下もしくはローカルでの開発、動作を想定。webアプリケーションなどでブラウザで実行。

__1. ローカルで動かす場合__

localの場合はxxx.htmlを開く。
localフォルダはログイン関係のファイルやサーバー側プログラムを置く予定なのでserver直下に配置する設計にする。

__2. 自分のpcでサーバーを立てて動かす場合__

    xamppをインストール

    ↓

    Generalのstartとservicesのstart

    ↓

    Networkのlocalhost:8080をenable

    ↓

    volumeのmountを押した後にexploreでフォルダを開く

    ↓

    lampp/htdocsにこのrepositoryを入れてchromeなどで、http:/localhost:8080/フォルダ名/xxx.htmlでアクセス

## ❯ 各種ファイルの役割と構造について
![structure](https://user-images.githubusercontent.com/49393142/177698697-e615d950-0b48-4d6d-b05a-24492a099413.png)


各フォルダとファイルの説明

## ❯ HTML

- index.html ... login画面
- resuster.html ... 登録画面
- change.html ... 資産の変更
- submit.html ... 資産の登録
- list.html ... 資産の一覧表示, 資産の検索
- user.html ... ユーザ情報

## ❯ CSS

- style.css
- フロント担当に任せます

## ❯ JS

- root.js ... データテーブルの管理をする
- scripts.js ... ファイルを読み込み表示する
- data.csv ... sqlから持ってきたデータ。refresh()はnode.js環境下でのみ実行可能

## ❯ images

- 画像ファイル群

## ❯ local

ログイン関係のファイルやサーバー側プログラムを置く