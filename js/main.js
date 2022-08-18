// カレント表示
$(function () {
  $('.global-nav li a').each(function(){
    var target = $(this).attr('href');
    if(location.href.match(target)) {
      $(this).parent().addClass('current');
    } else {
      $(this).parent().removeClass('current');
    }
  });
});


$(function () {

  //モーダルウィンドウを出現させるクリックイベント
  $("#modal-open").click(function () {

    //キーボード操作などにより、オーバーレイが多重起動するのを防止する
    $(this).blur();	//ボタンからフォーカスを外す　
    if ($("#modal-overlay")[0]) return false;		//新しくモーダルウィンドウを起動しない (防止策1)
    //if($("#modal-overlay")[0]) $("#modal-overlay").remove() ;		//現在のモーダルウィンドウを削除して新しく起動する (防止策2)

    //オーバーレイを出現させる
    $("body").append('<div id="modal-overlay">hogehoge</div>');
    $("#modal-overlay").fadeIn("slow");

    //コンテンツをセンタリングする
    centeringModalSyncer();

    //コンテンツをフェードインする
    $("#modal-content").fadeIn("slow");

    //[#modal-overlay]、または[#modal-close]をクリックしたら…
    $("#modal-overlay,#modal-close").unbind().click(function () {

      //[#modal-content]と[#modal-overlay]をフェードアウトした後に…
      $("#modal-content,#modal-overlay").fadeOut("slow", function () {

        //[#modal-overlay]を削除する
        $('#modal-overlay').remove();

      });

    });

  });

  //リサイズされたら、センタリングをする関数[centeringModalSyncer()]を実行する
  $(window).resize(centeringModalSyncer);

  //センタリングを実行する関数
  function centeringModalSyncer() {

    //画面(ウィンドウ)の幅、高さを取得
    var w = $(window).width();
    var h = $(window).height();

    // コンテンツ(#modal-content)の幅、高さを取得
    // jQueryのバージョンによっては、引数[{margin:true}]を指定した時、不具合を起こします。
    //		var cw = $( "#modal-content" ).outerWidth( {margin:true} );
    //		var ch = $( "#modal-content" ).outerHeight( {margin:true} );
    var cw = $("#modal-content").outerWidth();
    var ch = $("#modal-content").outerHeight();

    //センタリングを実行する
    $("#modal-content").css({ "left": ((w - cw) / 2) + "px", "top": ((h - ch) / 2) + "px" });

  }

});


/*--------------------------
アコーディオン
--------------------------*/
$('#acdn-button').click( function() {
  $('#acdn-target').slideToggle();
});

// DOMを全て読み込んでから処理する
$(function()
{
	// [.syncer-acdn]にクリックイベントを設定する
	$( '.syncer-acdn' ).click( function()
	{
		// [data-target]の属性値を代入する
		var target = $( this ).data( 'target' ) ;

		// [target]と同じ名前のIDを持つ要素に[slideToggle()]を実行する
		$( '#' + target ).slideToggle() ;

		// 終了
		return false ;
	} ) ;
}) ;

const menu = document.querySelectorAll(".js-menu");

  function toggle() {
    const content = this.nextElementSibling;
    this.classList.toggle("is-active");
    content.classList.toggle("is-open");
  }

  for (let i = 0; i < menu.length; i++) {
    menu[i].addEventListener("click", toggle);
  }


  // select内容を選択したら表示
  $('.select_fadein').change(function () {
    // var val = $('.select_fadein option:selected').val();
    // if (val == '.select_fadein') return;
    // $('.section_fadein').fadeOut();
    // $('section#' + val ).fadeIn();
    $('.section_fadein').fadeIn();
  });



  // #outer要素の親要素を取得
document.addEventListener('DOMContentLoaded', function () {
  var oyakeshi = document.getElementById('oyakeshi');
  oyakeshi.addEventListener('click', function() {
    var parentElem = document.getElementById('inner').parentNode;
    // 親要素から最初の子要素を取得して親要素の上に子要素を移動
    while (parentElem.firstChild) {
        parentElem.parentNode.insertBefore(parentElem.firstChild, parentElem);
    }
    // 空の親要素を削除
    parentElem.parentNode.removeChild(parentElem);
  })
})

// ウィンドウサイズの変更に応じて、高さと幅を表示
function showWindowSize() { 
  $('#height').text($(window).height());
  $('#width').text($(window).width());
}
$(window).resize(showWindowSize);

$(window).resize(function(){
  var w = $(window).width();
  var x = 768;
  if (w <= x) {
      $('#sample').css({
          color: 'red'
      });
  } else {
      $('#sample').css({
          color: 'black'
      });
  }
});

// 親要素追加
$(function(){
  var newUL=[];
  // if(newUL.length>0) 
  // newUL.push($('<div class="kaigyo"></div>'));
  newUL.push($('<ul class="printpage">').append($('.printpage li:lt(-2)')));
  // if(newUL.length>0) 
  // newUL.push($('<div class="kaigyo"></div>'));
  // newUL.push($('<ul class="printpage">').append($('.printpage li:lt(4)')));
  // $('.printpage').after(newUL).remove();
});


// クリックで矢印反転(アニメーション)
$('.up_arrow').on('click', function() {
  $(this).toggleClass('down_arrow');
  $(this).next('ul').slideToggle();
});


// requiredを削除、付ける
var arrayReq = document.getElementsByClassName('remove_required');
for (var i = 0; i < arrayReq.length; i++) {
  console.log(arrayReq[i]);
}

var remReq = document.getElementById('btn_required');
remReq.addEventListener('click', function() {
  for (var i = 0; i < arrayReq.length; i++) {
    console.log(arrayReq[i]);
    arrayReq[i].required = false;
  }
}, false);

var addReq = document.getElementById('add_required');
addReq.addEventListener('click', function() {
  for (var i = 0; i < arrayReq.length; i++) {
    console.log(arrayReq[i]);
    arrayReq[i].required = true;
  }
}, false);

// ホバー時にクラス名付ける
$('.bl_hover').hover( function() {
  $(this).find('.bl_hover_link').toggleClass('on_hover');
});


// 選択肢に合わせて、項目を表示する

var noValue = $('#child').html();

$('#parent').on('change', function(){
  var cat = $(this).val();
  if (cat) {
    var item = products[cat];
    console.log(cat);
    console.log(item);
    $('#child').html('');
    var option;
    for (var i = 0; i < item.length; i++) {
      option = '<option value="' + item[i] +'">'+ item[i] +'</option>';
      $('#child').append(option);
    }
  } else {
    $('#child').html(noValue);
  }
});

var products = {
  a:[
    '製品1',
    '製品2',
  ],
  b:[
    '製品3',
    '製品4',
  ],
  c:[
    '製品5',
    '製品6',
    '製品7',
  ],
};
