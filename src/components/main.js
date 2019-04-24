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
	};

	const Home = {
		banner: function () {
			let bannerHome = new Swiper('.home-banner .swiper-container', {
				slidesPerView: 1,
				loop: true,
				autoplay: {
					delay: 3000
				},
				speed: 3000,
				pagination: {
					el: '.swiper-pagination',
				},
			});
		},
		gallerySlide: function () {
			let gallerySlide = new Swiper('.home-gallery .swiper-container', {
				slidesPerView: 1,
				loop: true,
				autoplay: {
					delay: 2000
				},
				speed: 2500,
				pagination: {
					el: '.swiper-pagination',
				},
			});
		}
	};

	const GioiThieu = {
		slideDoiTac: function () {
			let slideDoiTac = new Swiper('.gioithieu-doitac .swiper-container', {
				slidesPerView: 5,
				spaceBetween: 60,
				loop: true,
				autoplay: {
					delay: 2500
				},
				speed: 2000,
				breakpoints: {
					1200: {
						spaceBetween: 50
					},
					992: {
						slidesPerView: 4,
						spaceBetween: 40
					},
					768: {
						slidesPerView: 3,
						spaceBetween: 30
					},
					576: {
						slidesPerView: 2,
						spaceBetween: 20
					},
					340: {
						slidesPerView: 1,
						spaceBetween: 10
					}
				},
				navigation: {
					nextEl: '.gioithieu-doitac .btn-next',
					prevEl: '.gioithieu-doitac .btn-prev'
				}
			});
		},
		slideLichSu: function () {
			let slideLichSuTop = new Swiper('.gioithieu-lichsu .top-swiper', {
				slidesPerView: 6,
				freeMode: true,
				watchSlidesVisibility: true,
				watchSlidesProgress: true,
				slideToClickedSlide: true,
				speed: 2000,
				breakpoints: {
					992: {
						slidesPerView: 5,
					},
					768: {
						slidesPerView: 4,
					},
					576: {
						slidesPerView: 3,
					}
				},
			});
			let slideLichSuBottom = new Swiper('.gioithieu-lichsu .bottom-swiper', {
				slidesPerView: 1,
				spaceBetween: 15,
				slideToClickedSlide: true,
				speed: 2000,
				thumbs: {
					swiper: slideLichSuTop
				}
			});
		},
		slideGiaiThuong: function () {
			let slideGiaiThuong = new Swiper('.gioithieu-giaithuong .swiper-container', {
				slidesPerView: 4,
				spaceBetween: 30,
				loop: true,
				autoplay: {
					delay: 2500
				},
				speed: 2000,
				breakpoints: {
					992: {
						slidesPerView: 3
					},
					768: {
						slidesPerView: 2
					},
					576: {
						slidesPerView: 1
					}
				},
				navigation: {
					nextEl: '.gioithieu-giaithuong .btn-next',
					prevEl: '.gioithieu-giaithuong .btn-prev'
				}
			});
		},
	};
	
	const DuAnChiTiet = {
		slideTienIch: function () {
			let slideTienIch = new Swiper('.duanct-tienich .swiper-container', {
				slidesPerView: 1,
				loop: true,
				autoplay: {
					delay: 2500
				},
				speed: 2000,
				navigation: {
					nextEl: '.duanct-tienich .btn-next',
					prevEl: '.duanct-tienich .btn-prev'
				}
			});
		},
		slideTinTuc: function () {
			let slideTinTuc = new Swiper('.duanct-thuvien-tintuc .tin-tuc .swiper-container', {
				slidesPerView: 4,
				loop: true,
				autoplay: {
					delay: 2500
				},
				speed: 2000,
				breakpoints: {
					1200: {
						slidesPerView: 3
					},
					992: {
						slidesPerView: 2
					},
					768: {
						slidesPerView: 1
					},
				},
				navigation: {
					nextEl: '.duanct-thuvien-tintuc .tin-tuc .btn-next',
					prevEl: '.duanct-thuvien-tintuc .tin-tuc .btn-prev'
				}
			});
		},
	}

	$('.fixed-phone .phone-icon').click(function () {
		$('.fixed-phone .phone-number').toggleClass('show')
	});

	Header.toggleMainMenu();
	Header.toggleLanguage();
	Header.moveLanguageOnMobile();
	Header.movePhoneOnMobile();
	Header.moveNavigationOnMobile();
	Header.moveSearchBoxOnMobile();
	Header.fixedPositon();
	Home.banner();
	Home.gallerySlide();
	GioiThieu.slideDoiTac();
	GioiThieu.slideLichSu();
	GioiThieu.slideGiaiThuong();
	DuAnChiTiet.slideTienIch();
	DuAnChiTiet.slideTinTuc();
});