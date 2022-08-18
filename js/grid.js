window.onload = function(){
  var w = $(window).width();
  var x = 768;
  if (w <= x) {
    // グリッドレイアウトに変更
    var parentElem1 = document.getElementById('fb1').parentNode;
      // 親要素から最初の子要素を取得して親要素の上に子要素を移動
      while (parentElem1.firstChild) {
          parentElem1.parentNode.insertBefore(parentElem1.firstChild, parentElem1);
        }
      // 空の親要素を削除(flexbox2)
      parentElem1.parentNode.removeChild(parentElem1);
      var parentElem2 = document.getElementById('fb2').parentNode;
      // 親要素から最初の子要素を取得して親要素の上に子要素を移動
      while (parentElem2.firstChild) {
          parentElem2.parentNode.insertBefore(parentElem2.firstChild, parentElem2);
      }
      // 空の親要素を削除(flexbox2)
      parentElem2.parentNode.removeChild(parentElem2);
  }
}

$(window).resize(function(){
  var w = $(window).width();
  var x = 768;
  if (w <= x) {
    $flex = document.getElementById('flexbox1');
    if($flex != null) {
      // グリッドレイアウトに変更
      var parentElem1 = document.getElementById('fb1').parentNode;
        // 親要素から最初の子要素を取得して親要素の上に子要素を移動
        while (parentElem1.firstChild) {
            parentElem1.parentNode.insertBefore(parentElem1.firstChild, parentElem1);
          }
        // 空の親要素を削除(flexbox2)
        parentElem1.parentNode.removeChild(parentElem1);
        var parentElem2 = document.getElementById('fb2').parentNode;
        // 親要素から最初の子要素を取得して親要素の上に子要素を移動
        while (parentElem2.firstChild) {
            parentElem2.parentNode.insertBefore(parentElem2.firstChild, parentElem2);
        }
        // 空の親要素を削除(flexbox2)
        parentElem2.parentNode.removeChild(parentElem2);
      }
    } else {
      $flex = document.getElementById('flexbox1');
      if ($flex == null) {
        // フレックスに変更
        var w = $(window).width();
        var x = 768;
        if (w >= x) {
          // フレックスに変更
          // 親要素追加 flexbox1とflexbox2
          var newUL1=[];
          var newUL2=[];
          newUL1.push($('<div id="flexbox1" class="flexbox1">').append($('.flex_wrapper div:lt(2)')));
          newUL2.push($('<div class="flexbox2">').append($('.flex_wrapper div:lt(4)')));
          $('.flex_wrapper').prepend(newUL1);
          $('.flexbox1').after(newUL2);
      }
    }      
  }
});

