//共通用JS
document.addEventListener('DOMContentLoaded', function () {
  //ハンバーガーアイコン
  const hamburger = document.getElementById('hamburger-menu');

  //スライドメニュー
  const slideMenu = document.getElementById('slide-menu');

  //ハンバーガーアイコンクリック時処理
  hamburger.addEventListener('click', function () {
    this.classList.toggle('opened');
    slideMenu.classList.toggle('opened');
  });
}, false);