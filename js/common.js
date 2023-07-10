//共通用JS
document.addEventListener('DOMContentLoaded', function () {
  //ハンバーガーアイコン
  const hamburger = document.getElementById('hamburger-menu');

  //スライドメニュー
  const slideMenu = document.getElementById('slide-menu');

  //スライドメニューリンク
  const slideMenuLink = document.querySelectorAll('.slide-menu__link');

  //ハンバーガーアイコンクリック時処理
  hamburger.addEventListener('click', function () {
    this.classList.toggle('opened');
    slideMenu.classList.toggle('opened');
  });

  slideMenuLink.forEach(link => {
    link.addEventListener('click', function(){
      hamburger.classList.remove('opened');
      slideMenu.classList.remove('opened');
    });
    link.addEventListener('mouseover', function(){
      slideMenuLink.forEach(link => {
        link.classList.add('no-focus');
      });
      link.classList.remove('no-focus');
    });
    link.addEventListener('mouseleave', function(){
      slideMenuLink.forEach(link => {
        link.classList.remove('no-focus');
      });
    });
  });
}, false);