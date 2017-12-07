$(function() {

	/*Главное меню (header)*/
	$('.h-nav__item-menu-1').mouseover(function() {
		$(this).addClass('h-nav__item-active');
		$('.h-subnav-1').show();
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
	$('.h-search-button').on('click', function() {
		$('.header__h-nav').toggle();
		$('.header__h-wrapper').toggle();
		$('.header__h-sitesearch').toggle();
		return false;
	});
	$('.h-dispatch__close').on('click', function() {
		$('.header__h-sitesearch').hide();
		$('.header__h-nav').show();
		$('.header__h-wrapper').show();
		return false;
	});

	/*поделиться*/
	$('.p-info__share').hover(function() {
		$(this).children('.p-info__text').hide();
		$(this).children('.p-info__hidden').show();
	}, function() {
		$(this).children('.p-info__hidden').hide();
		$(this).children('.p-info__text').show();
	});

});