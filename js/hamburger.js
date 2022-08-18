$(function() {
    $('.openbtn4').click(function() {
        $(this).toggleClass('active');

    if ($(this).hasClass('active')) {
        $('body,html').css({"overflow":"hidden","height":"100%"});
        $('.globalMenuSp').addClass('active');
    } else {
        $('body,html').css({"overflow":"visible","height":"auto"});
        $('.globalMenuSp').removeClass('active');
    }
    });
});



$(function() {
	$('.hm-trigger').click(function() {
			$(this).toggleClass('m--active');

			if ($(this).hasClass('m--active')) {
					$('body,html').css({"overflow":"hidden","height":"100%"});
					$('.header-container.m--smallMedia').addClass('m--active');
					$('.hm-nav-container').addClass('m--active');
			} else {
					$('body,html').css({"overflow":"visible","height":"auto"});
					$('.header-container.m--smallMedia').removeClass('m--active');
					$('.hm-nav-container').removeClass('m--active');
			}
	});
});


$(function() {
    $('.openbtn8').click(function() {
        $(this).toggleClass('active');
 
        if ($(this).hasClass('active')) {
            $('.globalMenuSp2').addClass('active');
        } else {
            $('.globalMenuSp2').removeClass('active');
        }
    });
});

$(function() {
    $('.ham').click(function() {
        $(this).toggleClass('active');
 
        if ($(this).hasClass('active')) {
            $('.globalMenuSp3').addClass('active');
        } else {
            $('.globalMenuSp3').removeClass('active');
        }
    });
});
