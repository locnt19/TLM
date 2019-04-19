$(document).ready(function () {
	// All script write here
	const Header = {
		toggleLanguage: function () {
			$('header .language .current').on('click', function () {
				$('header .language-content').toggleClass('active')
			})
		},
		toggleMainMenu: function () {
			$('header .mobile-hamburger').on('click', function () {
				$(this).toggleClass('active')
				$('header .mobile-nav-wrapper').toggleClass('active')
				$('.main-header .mobile-line').toggleClass('active')
				$('.main-header .mobile-backdrop').toggleClass('active')
			})
		},
		moveLanguageOnMobile: function () {
			let moveLanguage = new MappingListener({
				selector: 'header .language',
				mobileWrapper: 'header .mobile-language',
				mobileMethod: 'appendTo',
				desktopWrapper: 'header .language-wrapper',
				desktopMethod: 'appendTo',
				breakpoint: 1410,
			}).watch()
		},
		moveNavigationOnMobile: function () {
			let moveNavigation = new MappingListener({
				selector: 'header .main-nav',
				mobileWrapper: 'header .mobile-nav',
				mobileMethod: 'appendTo',
				desktopWrapper: 'header .main-header-nav',
				desktopMethod: 'appendTo',
				breakpoint: 1410,
			}).watch()
		},
		movePhoneOnMobile: function () {
			let movePhone = new MappingListener({
				selector: 'header .phone',
				mobileWrapper: 'header .mobile-nav',
				mobileMethod: 'appendTo',
				desktopWrapper: 'header .phone-wrapper',
				desktopMethod: 'appendTo',
				breakpoint: 1410,
			}).watch()
		},
		moveSearchBoxOnMobile: function () {
			let moveSearchBox = new MappingListener({
				selector: 'header .search-box',
				mobileWrapper: 'header .mobile-nav',
				mobileMethod: 'appendTo',
				desktopWrapper: 'header .search-wrapper',
				desktopMethod: 'appendTo',
				breakpoint: 1410,
			}).watch()
		},
		fixedPositon: function () {
			let headerOuterHeight = $('header').outerHeight();
			$('main').css({
				'padding-top': headerOuterHeight + 'px'
			})
		},
	}
	Header.toggleMainMenu();
	Header.toggleLanguage();
	Header.moveLanguageOnMobile();
	Header.movePhoneOnMobile();
	Header.moveNavigationOnMobile();
	Header.moveSearchBoxOnMobile();
	Header.fixedPositon();
});