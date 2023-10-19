
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
