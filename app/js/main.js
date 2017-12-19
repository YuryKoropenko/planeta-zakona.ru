$(function() {

	/*Главное меню (header)*/
	var wh = $(window).width();
	$('.h-subnav__wrapper').width(wh);

	$('.h-nav__item').hover(function() {
		$(this).children('.h-subnav__wrapper').show();
		$(this).addClass('h-nav__item-active');
	}, function() {
		$(this).children('.h-subnav__wrapper').hide();
		$(this).removeClass('h-nav__item-active');
	});

	/*email-рассылка*/
	$('.h-email__link-button').on('click', function() {
		$('.header__h-nav').toggle();
		$('.header__h-wrapper').toggle();
		$('.header__h-dispatch').toggle();
		return false;
	});
	$('.h-dispatch__close').on('click', function() {
		$('.header__h-dispatch').hide();
		$('.header__h-nav').show();
		$('.header__h-wrapper').show();
		return false;
	});


	/*поиск по сайту*/
	if ( $(window).width() > 992 ) {
		$('.h-search-button').on('click', function() {
			$('.header__h-nav').toggle();
			$('.header__h-wrapper').toggle();
			$('.header__h-sitesearch').toggle();
			return false;
		});
	}
	$('.h-dispatch__close').on('click', function() {
		$('.header__h-sitesearch').hide();
		$('.header__h-nav').show();
		$('.header__h-wrapper').show();
		return false;
	});

	/*поделиться*/
	if ($(window).width() > 991) {
		$('.p-info__share').hover(function() {
			$(this).children('.p-info__text').hide();
			$(this).children('.p-info__hidden').show();
		}, function() {
			$(this).children('.p-info__hidden').hide();
			$(this).children('.p-info__text').show();
		});
	}
	if ($(window).width() < 991) {
		$('.p-info__share').on('click', function() {
			$(this).children('.p-info__text').toggle();
			$(this).children('.p-info__hidden').toggle();
		});
	}

	/*якорь*/
	$(function() {
		$(window).scroll(function() {
			if($(this).scrollTop() != 0)
				$('.scroller').show();
			else
			$('.scroller').hide();
		});
	});
	$(".scroller").on("click", function() {
		$('html, body').animate({scrollTop:0}, 'slow');
		return false
	});

	$(function() {
		$(window).scroll(function() {
			if($(this).scrollTop() != 0)
				$('.p-info__share-mob').show();
			else
			$('.p-info__share-mob').hide();
		});
	});

	

	/*mob-menu*/
	$('.mob-nav__button').on('click', function() {
		$('.m-leftmob').css('left', '0');
		return false;
	})
	$('.m-leftmob__button').on('click', function() {
		$(this).toggleClass('m-leftmob__button-active');
		$(this).parent().children('.m-leftmob__submenu').slideToggle(300);
	});
	$('.m-leftmob__close').on('click', function() {
		$('.m-leftmob').css('left', '-320px');
		return false;
	});

	$('.h-social__link-mob').on('click', function() {
		$('.m-rassmob').toggleClass('m-rassmob-active');
		return false;
	});

	if ( $(window).width() < 992 ) {
		$('.h-search-button').on('click', function() {
			$('.m-searchmob').toggleClass('m-searchmob-active');
			return false;
		});
	}

	$('.p-time__notime').on('click', function() {
		$(this).toggleClass('p-time__notime-active');
		$('.p-time__notime').text('Нет времени читать?');
		$('.p-time__notime-active').text('Прочту');
		$('.page__p-notime').toggle();
		return false;
	});
	$('.p-notime__item-first').on('click', function() {
		$('.p-notime__hide').toggle();
		$(this).toggleClass('p-notime__item-active');
		return false;
	});

	$('.p-path__slider').owlCarousel({
		loop:true,
		nav:true,
		items:1
	});

	/*скрипт на троеточие*/
	/*
	var size = 70;
	var newsContent = $('.p-article__title');
	var newsText = newsContent.text();

	if(newsText.length > size){
		newsContent.text(newsText.slice(0, size) + ' ...');
	}*/

	/*vhod*/
	$('.p-vhod__title').on('click', function() {
		$(this).parent().children('.p-vhod__list').toggle();
		return false;
	});

	$('.h-buttons__link-cb').fancybox();
	$('.m-leftmob__link-cb').fancybox();

});