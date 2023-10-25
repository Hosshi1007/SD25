
function tr_click(num){
  let elements = document.getElementsByClassName("findID");
  //会員ID格納
  let id = elements.item(0).rows[num].cells[0].firstChild.data;
  //alert(id);
  //詳細ページに移動
  window.location.href = 'dummy.html';
}

function menu_click(hoge){
  //遷移するメニューIDを取得
  //let url_go = "menu_" + hoge + ".html";
  let url_go = "132.html";

  //詳細ページに移動
  window.location.href = url_go;
}
//こっから僕の術式だにょんよんにょｙんっよにょよのよよよおおおおんほおおおおおお
function appoint_click(num){
  let elements = document.getElementsByClassName("findID");
  //従業員名などの格納
  let id = elements.item(0).rows[num].cells[0].firstChild.data;
  let id2 = elements.item(0).rows[num].cells[1].firstChild.data + "　" + elements.item(0).rows[num].cells[2].firstChild.data;
  let id3 = elements.item(0).rows[num].cells[3].firstChild.data;
  //alert("予約ID：" + id + "\n予約日：" + id2 + "\n予約人数：" + id3);
  //詳細ページに移動
  window.location.href = '6.html';
}

function html110_click(num){
  let elements = document.getElementsByClassName("findID");
  //従業員名などの格納
  let id = elements.item(0).rows[num].cells[0].firstChild.data;
  let id2 = elements.item(0).rows[num].cells[1].firstChild.data + " / " + elements.item(0).rows[num].cells[2].firstChild.data;
  let id3 = elements.item(0).rows[num].cells[3].firstChild.data;
  //alert("発注ID：" + id + "\n発注日/納入日：" + id2 + "\n名称：" + id3);

  //詳細ページに移動
  window.location.href = '111.html';
}

function staff_click(num){
  let elements = document.getElementsByClassName("findID");
  //従業員名などの格納
  let id = elements.item(0).rows[num].cells[0].firstChild.data;
  let id2 = elements.item(0).rows[num].cells[1].firstChild.data + "　" + elements.item(0).rows[num].cells[2].firstChild.data;
  let id3 = elements.item(0).rows[num].cells[3].firstChild.data;
  //alert("従業員ID：" + id + "\n従業員名：" + id2 + "\n雇用形態：" + id3);
  //詳細ページに移動
  window.location.href = '91.html';
}


function html100_click(num){
  let elements = document.getElementsByClassName("findID");
  //メニュー名などの格納
  let id = elements.item(0).rows[num].cells[0].firstChild.data;
  let id2 = elements.item(0).rows[num].cells[1].firstChild.data;
  let id3 = elements.item(0).rows[num].cells[2].firstChild.data;
  //alert("名称：" + id + "\n分類：" + id2 + "\n価格：" + id3 + "円");
  //詳細ページに移動
  window.location.href = '101.html';
}
  
function html38_click(num){
  let elements = document.getElementsByClassName("findID");
  //従業員名などの格納
  let id = elements.item(0).rows[num].cells[0].firstChild.data;
  let id2 = elements.item(0).rows[num].cells[1].firstChild.data + "　" + elements.item(0).rows[num].cells[2].firstChild.data;
  let id3 = elements.item(0).rows[num].cells[5].firstChild.data;
  //alert("会員ID：" + id + "\n名前：" + id2 + "\n性別：" + id3);
  //詳細ページに移動
  window.location.href = '39.html';
}

function yoyaku_click(num){
  let elements = document.getElementsByClassName("findID");
  //従業員名などの格納
  let id = elements.item(0).rows[num].cells[0].firstChild.data;
  //alert("会員ID：" + id + "\n名前：" + id2 + "\n性別：" + id3);
  //詳細ページに移動
  window.location.href = '48.html';
}

let count1 = 0;
function button_kanryou4() {
  count1++
  var let1 = document.getElementById("change") != null;
  if(let1 == true){
    var target2 = document.getElementById("change");
    if(count1 % 2 == 0){
      target2.innerHTML = "予約登録が完了しました。";
    }
    else{
      target2.innerHTML = "<font color='red'>※登録処理に失敗しました。<br>もう一度登録し直すかサポートに連絡してください。</font>";
    }
  }
  }

  let count = 0;
  function error_button() {
    count++
    var let1 = document.getElementById("error_button") != null;
    var let2 = document.getElementById("error_button3")  != null; 
    var let3 = document.getElementById("error_button1") != null;
    var let4 = document.getElementById("error_button2") != null;
    if(let1 == true){
      var obj = document.getElementById("error_button");
      if(count % 2 == 0){
        obj.style.borderWidth = "0px";
      }
      else{
        obj.style.border = "solid 5px red";
      }
    }
    if(let2 == true){
    var obj1 = document.getElementById("error_button3");
    if(count % 2 == 0){
      obj1.style.borderWidth = "0px";
    }
    else{
      obj1.style.border = "solid 5px red";
    }
    }
    if(let3 == true){
    var target1 = document.getElementById("error_button1");
    if(count % 2 == 0){
      target1.innerHTML = "";
    }
    else{
      target1.innerHTML = "※入力エラーがあります。メッセージを確認して再入力してください";
    }
    }
    if(let4 == true){
    var target2 = document.getElementById("error_button2");
    if(count % 2 == 0){
      target2.innerHTML = "";
    }
    else{
      target2.innerHTML = "※必ず入力してください";
    }
    }
  }
  //ここまで僕の術式だにょんよんにょｙんっよにょよのよよよおおおおんほおおおおおお

function order_click(num){
  //んんｗｗｗｗｗこれは私のｗｗｗ術式ｗｗｗﾌｫｶﾇﾎﾟｳｗｗｗ(武)
  let elements = document.getElementsByClassName("findID");
  //会員ID格納
  let id = elements.item(0).rows[num].cells[0].firstChild.data;
  //詳細ページに移動
  window.location.href = '109.html';
  //んんｗｗｗｗｗこれは私のｗｗｗ術式ｗｗｗﾌｫｶﾇﾎﾟｳｗｗｗ(武)
}

function hattyuu_click(num){
  //んんｗｗｗｗｗこれは私のｗｗｗ術式ｗｗｗﾌｫｶﾇﾎﾟｳｗｗｗ(武)
  let elements = document.getElementsByClassName("findID");
  //会員ID格納
  let id = elements.item(0).rows[num].cells[0].firstChild.data;
  //詳細ページに移動
  window.location.href = '111.html';
  //んんｗｗｗｗｗこれは私のｗｗｗ術式ｗｗｗﾌｫｶﾇﾎﾟｳｗｗｗ(武)
}

(() => {
  //HTMLのid値を使って以下のDOM要素を取得
  const downbutton = document.getElementById('down');
  const upbutton = document.getElementById('up');
  const text = document.getElementById('textbox');
  const reset = document.getElementById('reset');

  //ボタンが押されたらカウント減
  downbutton.addEventListener('click', (event) => {
  //0以下にはならないようにする
  if(text.value >= 1) {
    text.value--;
  }
  });

  //ボタンが押されたらカウント増
  upbutton.addEventListener('click', (event) => {
    text.value++;
  })

  //ボタンが押されたら0に戻る
  reset.addEventListener('click', (event) => {
    text.value = 0;
  })

})();

