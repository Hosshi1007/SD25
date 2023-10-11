
function tr_click(num){
  let elements = document.getElementsByClassName("findID");
  //会員ID格納
  let id = elements.item(0).rows[num].cells[0].firstChild.data;
  alert(id);

  //詳細ページに移動
  window.location.href = 'dummy.html';
}

function menu_click(hoge){
  alert("aaa");
  //遷移するメニューIDを取得
  let url_go = "menu_" + hoge + ".html";
  alert(url_go);

  //詳細ページに移動
  window.location.href = url_go;
}



