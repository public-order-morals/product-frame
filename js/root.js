message.innerHTML = "データを取得してください";
var data = [
    {
        "id": "1",
        "資産番号": "23456-88888888-98745",
        "所属": "CS",
        "資産名": "PC",
        "場所": "402",
        "担当": "utsugi",
        "管理者": "simakawa",
        "形式": "macbookpro",
        "個数": "2",
        "識別番号": "1",
        "取得日時": "2020/09/11",
        "編集日時": "2022/06/13"
    },
    {
        "id": "2",
        "資産番号": "23456-88888888-98745",
        "所属": "CS",
        "資産名": "PC",
        "場所": "403",
        "担当": "uchida",
        "管理者": "uchida",
        "形式": "macbookpro",
        "個数": "2",
        "識別番号": "1",
        "取得日時": "2020/09/11",
        "編集日時": "2022/06/13"
    },
    {
        "id": "3",
        "資産番号": "23456-88888888-98745",
        "所属": "CS",
        "資産名": "PC",
        "場所": "402",
        "担当": "utsugi",
        "管理者": "uchida",
        "形式": "macbookpro",
        "個数": "2",
        "識別番号": "1",
        "取得日時": "2020/09/11",
        "編集日時": "2022/06/13"
    },
    {
        "id": "4",
        "資産番号": "23456-88888888-98745",
        "所属": "CS",
        "資産名": "PC",
        "場所": "403",
        "担当": "uchida",
        "管理者": "uchida",
        "形式": "macbookpro",
        "個数": "2",
        "識別番号": "1",
        "取得日時": "2020/09/11",
        "編集日時": "2022/06/13"
    },
    {
        "id": "5",
        "資産番号": "23456-88888888-98745",
        "所属": "CS",
        "資産名": "PC",
        "場所": "402",
        "担当": "uchida",
        "管理者": "uchida",
        "形式": "macbookpro",
        "個数": "2",
        "識別番号": "1",
        "取得日時": "2020/09/11",
        "編集日時": "2022/06/13"
    }
]
function refresh() {

    console.log(data);
    let tbody = document.querySelector('#csv_data_table tbody');
    tbody.innerHTML = "";

    //　CSVの内容を表示
    let tbody_html = "";
    for (item of data) {
        tbody_html += `<tr>
      <td>${item.id}</td>
      <td>${item.資産番号}</td>
      <td>${item.所属}</td>
      <td>${item.資産名}</td>
      <td>${item.場所}</td>
      <td>${item.担当}</td>
      <td>${item.管理者}</td>
      <td>${item.形式}</td>
      <td>${item.個数}</td>
      <td>${item.識別番号}</td>
      <td>${item.取得日時}</td>
      <td>${item.編集日時}</td>
    </tr>
    `
    }
    tbody.innerHTML = tbody_html;
    console.log(tbody_html);
    message.innerHTML = data.length + "件のデータがあります。"
};

function Utt() {
    console.log(data);
};

function location_search() {
    const str = document.getElementById("location1").value;

    let tbody = document.querySelector('#csv_data_table tbody');
    tbody.innerHTML = "";

    var data_03 = data.filter(function (data) {
        return data.場所 == str;
    })
    console.log(data_03);
    //　CSVの内容を表示
    let tbody_html = "";
    for (item of data_03) {
        tbody_html += `<tr>
      <td>${item.id}</td>
      <td>${item.資産番号}</td>
      <td>${item.所属}</td>
      <td>${item.資産名}</td>
      <td>${item.場所}</td>
      <td>${item.担当}</td>
      <td>${item.管理者}</td>
      <td>${item.形式}</td>
      <td>${item.個数}</td>
      <td>${item.識別番号}</td>
      <td>${item.取得日時}</td>
      <td>${item.編集日時}</td>
    </tr>
    `
    }
    tbody.innerHTML = tbody_html;
    console.log(tbody_html);
    message.innerHTML = "部屋" + str + "には" + data_03.length + "件の資産があります。"
};

function kind_search() {
    const str = document.getElementById("kind").value;

    let tbody = document.querySelector('#csv_data_table tbody');
    tbody.innerHTML = "";

    var data_03 = data.filter(function (data) {
        return data.所属 == str;
    })
    console.log(data_03);
    //　CSVの内容を表示
    let tbody_html = "";
    for (item of data_03) {
        tbody_html += `<tr>
      <td>${item.id}</td>
      <td>${item.資産番号}</td>
      <td>${item.所属}</td>
      <td>${item.資産名}</td>
      <td>${item.場所}</td>
      <td>${item.担当}</td>
      <td>${item.管理者}</td>
      <td>${item.形式}</td>
      <td>${item.個数}</td>
      <td>${item.識別番号}</td>
      <td>${item.取得日時}</td>
      <td>${item.編集日時}</td>
    </tr>
    `
    }
    tbody.innerHTML = tbody_html;
    console.log(tbody_html);
    message.innerHTML = "学科" + str + "が所有している資産は" + data_03.length + "件です"
};

function user_search() {
    const str = document.getElementById("user").value;

    let tbody = document.querySelector('#csv_data_table tbody');
    tbody.innerHTML = "";

    var data_03 = data.filter(function (data) {
        return data.担当 == str;
    })
    console.log(data_03);
    //　CSVの内容を表示
    let tbody_html = "";
    for (item of data_03) {
        tbody_html += `<tr>
      <td>${item.id}</td>
      <td>${item.資産番号}</td>
      <td>${item.所属}</td>
      <td>${item.資産名}</td>
      <td>${item.場所}</td>
      <td>${item.担当}</td>
      <td>${item.管理者}</td>
      <td>${item.形式}</td>
      <td>${item.個数}</td>
      <td>${item.識別番号}</td>
      <td>${item.取得日時}</td>
      <td>${item.編集日時}</td>
    </tr>
    `
    }
    tbody.innerHTML = tbody_html;
    console.log(tbody_html);
    message.innerHTML = "ユーザー" + str + "は" + data_03.length + "件の資産を担当しています"
};

function admin_search() {
    const str = document.getElementById("admin1").value;

    let tbody = document.querySelector('#csv_data_table tbody');
    tbody.innerHTML = "";

    var data_03 = data.filter(function (data) {
        return data.管理者 == str;
    })
    console.log(data_03);
    //　CSVの内容を表示
    let tbody_html = "";
    for (item of data_03) {
        tbody_html += `<tr>
      <td>${item.id}</td>
      <td>${item.資産番号}</td>
      <td>${item.所属}</td>
      <td>${item.資産名}</td>
      <td>${item.場所}</td>
      <td>${item.担当}</td>
      <td>${item.管理者}</td>
      <td>${item.形式}</td>
      <td>${item.個数}</td>
      <td>${item.識別番号}</td>
      <td>${item.取得日時}</td>
      <td>${item.編集日時}</td>
    </tr>
    `
    }
    tbody.innerHTML = tbody_html;
    console.log(tbody_html);
    message.innerHTML = "管理者" + str + "は" + data_03.length + "件の資産を持っています。"
};