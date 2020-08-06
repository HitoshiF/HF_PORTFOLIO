// スムーススクロール

$(function () {
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});

// 固定ヘッダーによるズレを回避

$(function(){
	var headerHeight = $('header').outerHeight();
	$('a[href^="#"]').click(function(){
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top - headerHeight;
		$("html, body").stop().animate({scrollTop:position}, 500);
		return false;
	});
});

// ハンバーガーメニュー

(function($) {
  $(function () {
    $('#nav-toggle').on('click', function() {
      $('body').toggleClass('open');
    });
  });
})(jQuery);

// リンククリックで閉じる

$('#hb-list a[href]').on('click', function(event) {
  $('#nav-toggle').trigger('click');
});

// スクロールエフェクト

//index.html
ScrollReveal().reveal('.circle', { 
  duration: 2000, 
  origin: 'left', 
  distance: '400px',
  reset: true   
});

ScrollReveal().reveal('.profile-img', { 
  duration: 2000, 
  delay: 200,
  origin: 'left', 
  distance: '500px',
  reset: true   
});

ScrollReveal().reveal('.coding-box', { 
  duration: 2000, 
  delay: 200,
  origin: 'right', 
  distance: '300px',
  reset: true   
});

ScrollReveal().reveal('.design-box', { 
  duration: 2000, 
  delay: 200,
  origin: 'left', 
  distance: '300px',
  reset: true   
});

ScrollReveal().reveal('.responsive-box', { 
  duration: 2000, 
  delay: 200,
  origin: 'right', 
  distance: '300px',
  reset: true   
});

ScrollReveal().reveal('.thumbnail_01', { 
  duration: 2000, 
  opacity: 0,
  delay: 200,
  reset: true   
});

ScrollReveal().reveal('.thumbnail_02', { 
  duration: 2000, 
  opacity: 0,
  delay: 400,
  reset: true   
});

ScrollReveal().reveal('.thumbnail_03', { 
  duration: 2000, 
  opacity: 0,
  delay: 600,
  reset: true   
});

ScrollReveal().reveal('.thumbnail_04', { 
  duration: 2000, 
  opacity: 0,
  delay: 800,
  reset: true   
});

ScrollReveal().reveal('.contact-me', { 
  duration: 2000, 
  opacity: 0,
  delay: 300,
  reset: true   
});




