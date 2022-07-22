
function submit_input() {
    const str1 = document.getElementById("submit_kind").value;

    console.log(str1);
    const str2 = document.getElementById("submit_place").value;

    console.log(str2);
    const str3 = document.getElementById("submit_user").value;

    console.log(str3);
    const str4 = document.getElementById("submit_admin").value;

    console.log(str4);
    const str5 = document.getElementById("submit_name").value;

    console.log(str5);
    const str6 = document.getElementById("submit_format").value;

    console.log(str6);
    const str7 = document.getElementById("submit_number").value;

    console.log(str7);
    const str8 = document.getElementById("submit_images").value;

    console.log(str8);

    message_out.innerHTML = "下記の内容で登録しますか？" + "<br>" + "学科 : "+ str1
                                                + "<br>" + "場所 : " + str2
                                                + "<br>" + "所有者 : " + str3
                                                + "<br>" + "管理者 : " + str4
                                                + "<br>" + "資産名 : " + str5
                                                + "<br>" + "形式 : " + str6
                                                + "<br>" + "個数 : " + str7
                                                + "<br>" + "画像ファイル（仮） : " + str8
    
};

function upload_input(){
    message.innerHTML = "登録しました。"
}