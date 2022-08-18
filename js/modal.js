$('.js-modal-open').on('click', function () {
  var target = $(this).data('target');
  var modal = document.getElementById(target);
  scrollPosition = $(window).scrollTop();

  $('body').addClass('fixed').css({ 'top': -scrollPosition });
  $(modal).fadeIn();
  return false;
});

$('.js-modal-close').on('click', function () {
  $('body').removeClass('fixed');
  window.scrollTo(0, scrollPosition);
  $('.js-modal').fadeOut();
  return false;
});

// モーダルが複数ある場合
$(function () {
  // モーダルのボタンをクリックした時
  $('.modal_trigger .modal_btn').on('click', function() {
    var btnIndex = $(this).index(); // 何番目のモーダルボタンかを取得
    $('.modal_area .modal_box').eq(btnIndex).fadeIn(); // クリックしたモーダルボタンと同じ番目のモーダルを表示する
  });

  // ×やモーダルの背景をクリックした時
  $('.modal_close , .modal_bg').click(function(){
    $('.modal_box').fadeOut(); // モーダルを非表示にする
  });
});