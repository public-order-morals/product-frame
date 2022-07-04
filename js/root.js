const output_csv_el = document.querySelector('#output_csv');

// CSVの読み込み
function import_csv(csv_path)
{
    fetch(csv_path)
    .then((res) => {
        if(!res.ok) {
            console.log('正常にリクエストを処理できませんでした。');
        }
        return res.text();
    })
    .then((csv_data) => {
        convert_array(csv_data);
    })
    .catch((error) => {
        console.log('エラーが発生しました。');
    })
}

// テキストデータを配列に変換
function convert_array(csv_data)
{
    let data_array = [];
    const data_string = csv_data.split('\n');
    for (let i = 0; i < data_string.length; i++) {
        data_array[i] = data_string[i].split(',');
    }
    draw_table(data_array);
}

// テーブル描画
function draw_table(data_array)
{
    data_array.forEach(elements => {
        const tr = document.createElement('tr');
        output_csv_el.appendChild(tr);
        elements.forEach(element => {
            let td = document.createElement('td');
            td.innerText = element
            tr.appendChild(td);
        });
    });
}
