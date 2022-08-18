// When the user scrolls down 20px from the top of the document, show the button

$(function () {
  $("#bt_top").fadeOut("fast");

  // navH = $("nav").innerHeight();
  // $("main").css("margin-top", navH);

  if ($(".carousel").length) {
    hh = $(".carousel").innerHeight();
  } else if ($(".post-img").length) {
    hh = $(".post-img").innerHeight();
  } else {
    hh = "0";
  }
});

// window.onscroll = function () {
//   scrollFunction();
// };
// function scrollFunction() {
//   if (document.body.scrollTop > hh || document.documentElement.scrollTop > hh) {
//     document.getElementById("nav").classList.add("nav-sm");
//   } else {
//     document.getElementById("nav").classList.remove("nav-sm");
//   }
// }

$(window).on("scroll", function () {
  if ($(this).scrollTop() > 300) {
    $("#bt_top").fadeIn("fast");
  } else {
    $("#bt_top").fadeOut("fast");
  }

  scrollHeight = $(document).height();
  scrollPosition = $(window).height() + $(window).scrollTop();
  footHeight = $("footer").innerHeight();
  console.log(footHeight);

  if (scrollHeight - scrollPosition <= footHeight) {
    $("#bt_top").css({
      position: "absolute",
      bottom: footHeight,
    });
  } else {
    $("#bt_top").css({
      position: "fixed",
      bottom: "0",
    });
  }
});

$(function () {
  $(
    'a[href^="#"]' + 'a:not(".carousel-control-prev,.carousel-control-next")'
  ).click(function () {
    var speed = 500;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top;
    $("body,html").animate({ scrollTop: position }, speed, "swing");
    return false;
  });
});

//ripple
$(function () {
  var ripple, ripples, RippleEffect, loc, cover, coversize, style, x, y, i, num;
  ripples = document.querySelectorAll(".ripple");
  RippleEffect = function (e) {
    ripple = this;
    cover = document.createElement("span");
    coversize = ripple.offsetWidth;
    loc = ripple.getBoundingClientRect();
    x = e.pageX - loc.left - window.pageXOffset - coversize / 2;
    y = e.pageY - loc.top - window.pageYOffset - coversize / 2;
    pos =
      "top:" +
      y +
      "px; left:" +
      x +
      "px; height:" +
      coversize +
      "px; width:" +
      coversize +
      "px;";
    ripple.appendChild(cover);
    cover.setAttribute("style", pos);
    cover.setAttribute("class", "rp-effect");
    setTimeout(function () {
      var list = document.getElementsByClassName("rp-effect");
      for (var i = list.length - 1; i >= 0; i--) {
        list[i].parentNode.removeChild(list[i]);
      }
    }, 2000);
  };
  for (i = 0, num = ripples.length; i < num; i++) {
    ripple = ripples[i];
    ripple.addEventListener("mousedown", RippleEffect);
  }
});

//animate.css
$(window).on("load scroll", function () {
  var elem = $(".animated");
  elem.each(function () {
    var isAnimate = $(this).data("animate");
    var elemOffset = $(this).offset().top;
    var scrollPos = $(window).scrollTop();
    var wh = $(window).height();
    if (scrollPos > elemOffset - wh + wh / 5) {
      $(this).addClass(isAnimate).css("opacity", "1");
    } else {
      $(this).removeClass(isAnimate).css("opacity", "0");
    }
  });
});

/*
 * Textyle.js - v2.0
 * https://github.com/mycreatesite/Textyle.js
 * MIT licensed
 * Copyright (C) 2019 ma-ya's CREATE
 * https://myscreate.com
 */
// (function ($) {
//   $.fn.textyle = function (options) {
//     var target = this;
//     var targetTxt = target.contents();
//     var defaults = {
//       duration: 400,
//       delay: 100,
//       easing: "swing",
//       callback: null,
//     };
//     var setting = $.extend(defaults, options);
//     targetTxt.each(function () {
//       var texts = $(this);
//       if (this.nodeType === 3) {
//         mkspn(texts);
//       }
//     });
//     function mkspn(texts) {
//       texts.replaceWith(texts.text().replace(/(\S)/g, "<span>$1</span>"));
//     }
//     return this.each(function () {
//       var len = target.children().length;
//       target.css("opacity", 1);
//       for (var i = 0; i < len; i++) {
//         target
//           .children("span:eq(" + i + ")")
//           .delay(setting.delay * i)
//           .animate(
//             {
//               opacity: 1,
//               top: 0,
//               left: 0,
//             },
//             setting.duration,
//             setting.easing,
//             setting.callback
//           );
//       }
//     });
//   };
// })(jQuery);

// $(function () {
//   $(".ex").textyle();
// });

// var mySwiper = new Swiper ('.swiper-container', {
//   // ここからオプション
//   loop: true,
//   pagination: {
//     el: '.swiper-pagination',
//   },
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
//   scrollbar: {
//     el: '.swiper-scrollbar',
//   },
// })

$(function () {
  $(".faq-list__item__answer").css("display", "none");
  $(".faq-list__item__title").on("click", function () {
    $(this).next().slideToggle();
  });
});

$(function () {
  $(".link-list__item__answer").css("display", "none");
  $(".link-list__item__title").on("click", function () {
    $(this).next().slideToggle();
  });
});
