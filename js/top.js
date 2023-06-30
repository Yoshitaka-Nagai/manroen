//TOPページ用JS
document.addEventListener('DOMContentLoaded', function () {

  //メニュー開閉ボタン
  const menuBtn = document.querySelectorAll('.menu__heading-btn');

  //メニュー開閉ボタンクリック時処理
  menuBtn.forEach(btn => {
    btn.addEventListener('click', () => {
      const contents = btn.parentElement.nextElementSibling;
      const children = contents.children;

      //リストの高さ合計を取得
      let contentsHeight = 0;
      for (let i = 0; i < children.length; i++) {
        contentsHeight += children[i].offsetHeight;
      }

      //開閉処理
      if (btn.classList.contains('opened')) {
        btn.classList.remove('opened');
        contents.style.height = contentsHeight + 'px';
        setTimeout(() => {
          contents.style.height = 0;
          contents.style.opacity = 0;
        });
      } else {
        btn.classList.add('opened');
        contents.style.height = contentsHeight + 'px';
        contents.style.opacity = 1;
        setTimeout(() => {
          contents.style.height = 'auto';
        }, 600);
      }
    })
  });
}, false);