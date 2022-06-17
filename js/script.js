//どうにかしてphpmyadminを使わずにsql文でdata_01.csvの形にして、Desktop/re-pro/localに持ってくる。
//それを二次元配列varに全て格納し、クラスで管理することによって、サーチ、リスト、変更、削除、追加を素早く行える。
//完成されたデータは規定の形にソートしてdbに送り返す。
//CSVファイルを読み込む関数getCSV()の定義
function getCSV(){
    var req = new XMLHttpRequest(); // HTTPでファイルを読み込むためのXMLHttpRrequestオブジェクトを生成
    req.open("get", "data_01.csv", true); // アクセスするファイルを指定
    req.send(null); // HTTPリクエストの発行

    // レスポンスが返ってきたらconvertCSVtoArray()を呼ぶ
    req.onload = function(){
	convertCSVtoArray(req.responseText); // 渡されるのは読み込んだCSVデータ
    }
}

// 読み込んだCSVデータを二次元配列に変換する関数convertCSVtoArray()の定義
function convertCSVtoArray(str){ // 読み込んだCSVデータが文字列として渡される
    var result = []; // 最終的な二次元配列を入れるための配列
    var tmp = str.split("\n"); // 改行を区切り文字として行を要素とした配列を生成
    // 各行ごとにカンマで区切った文字列を要素とした二次元配列を生成
    for(var i=0;i<tmp.length;++i){
        result[i] = tmp[i].split(',');
    }
    alert(result[1][2]); // 300yen
}

var book = getCsv();


　for (var i = 0; i < book.length; i++) {
  for (var j = 0; j < book[0].length; j++){
　　var bookList = document.createElement('li');
　　todoList.textContent = book[i][0];
　　document.getElementById('list').appendChild(bookList);
　}
}
