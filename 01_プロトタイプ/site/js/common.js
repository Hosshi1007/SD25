
function tr_click(num){
  let elements = document.getElementsByClassName("findID");
  //会員ID格納
  let id = elements.item(0).rows[num].cells[0].firstChild.data;
  alert(id);

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

function appoint_click(num){
  //これは僕ちんの術式だにょ～～～～～～～～～NNNN（工藤）
  let elements = document.getElementsByClassName("findID");
  //会員ID格納
  let id = elements.item(0).rows[num].cells[0].firstChild.data;
  alert(id);
  //詳細ページに移動
  window.location.href = '6.html';
  //これは僕ちんの術式だにょ～～～～～～～～～NNNN（工藤）
}

function staff_click(num){
  //これは僕の術式だにょんよんにょｙんっよにょよのよよよおおおおんほおおおおおお///////♥♥♥♥
  let elements = document.getElementsByClassName("findID");
  //会員ID格納
  let id = elements.item(0).rows[num].cells[0].firstChild.data;
  let id2 = elements.item(0).rows[num].cells[1].firstChild.data + "　" + elements.item(0).rows[num].cells[2].firstChild.data;
  let id3 = elements.item(0).rows[num].cells[3].firstChild.data;
  alert("従業員ID：" + id + "\n従業員名：" + id2 + "\n雇用形態：" + id3);
    //これは僕の術式だにょんよんにょｙんっよにょよのよよよおおおおんほおおおおおお///////♥♥♥♥

  //詳細ページに移動
  window.location.href = '91.html';
}

function html100_click(num){
  //これは僕の術式だにょんよんにょｙんっよにょよのよよよおおおおんほおおおおおお///////♥♥♥♥
  let elements = document.getElementsByClassName("findID");
  //メニュー名などの格納
  let id = elements.item(0).rows[num].cells[0].firstChild.data;
  let id2 = elements.item(0).rows[num].cells[1].firstChild.data;
  let id3 = elements.item(0).rows[num].cells[2].firstChild.data;
  alert("名称：" + id + "\n分類：" + id2 + "\n価格：" + id3 + "円");
    //これは僕の術式だにょんよんにょｙんっよにょよのよよよおおおおんほおおおおおお///////♥♥♥♥

  //詳細ページに移動
  window.location.href = '101.html';
}

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

