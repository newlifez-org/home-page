$(function ($) {
    "use strict";

	$(window).load(function() {
		AOS.init();
		const current = new Date().getHours();
		if (current >= 18 || current <= 6) {
			let video = $('#bg-video');
			video.find("source").attr("src", './assets/images/The New Life 2_1.mp4');
			video.load();
			$('.nav-item').toggleClass("dark-mode");
			$('.nav-text').toggleClass("dark-mode");
		}
		let videoTrailler = $('#ideo-game-content');
		videoTrailler.load();
		$('#preloader').addClass('hide');
	});
	$('.nav-item a').click(function (e) {
		const linkHref = $(this).attr("href");
		const idElement = linkHref.substr(linkHref.indexOf("#"));
		$('html, body').animate({
			scrollTop: $(idElement).offset().top
		}, 1000);
		$('#header').toggleClass("navigation");
		$('nav').toggleClass("navigation-open");
		return false;
	});
	$(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('#button').fadeIn();
        } else {
            $('#button').fadeOut();
        }
    });
	$('#button').click(function (e) {
		window.scroll({
            top: 0,
            behavior: 'smooth'
        });
		return false;
	});
	$('#btn-burger').click(function (e) {
		$('#header').toggleClass("navigation");
		$('nav').toggleClass("navigation-open");
		return false;
	});
	$('#btn-next').click(function (e) {
		let index = $('.character-active').index();
		$('.card-character').eq(index - 1).toggleClass("character-active");
		$('.description-card-character').eq(index - 1).toggleClass("description-active");
		$('.view-item').eq(index - 1).toggleClass("view-active");
		const lenght = $('.card-character').length;
		if (lenght === index) {
			index = 0;
		}
		$('.card-character').eq(index).toggleClass("character-active");
		$('.description-card-character').eq(index).toggleClass("description-active");
		$('.view-item').eq(index).toggleClass("view-active");
		return false;
	});
	$('#btn-previous').click(function (e) {
		let index = $('.character-active').index() - 1;
		$('.view-item').eq(index).toggleClass("view-active");
		$('.card-character').eq(index).toggleClass("character-active");
		$('.description-card-character').eq(index).toggleClass("description-active");
		const lenght = $('.card-character').length;
		if (index === 0) {
			index = lenght;
		}
		$('.card-character').eq(index - 1).toggleClass("character-active");
		$('.description-card-character').eq(index - 1).toggleClass("description-active");
		$('.view-item').eq(index - 1).toggleClass("view-active");
		return false;
	});
	$('.view-detail').click(function (e) {
		let indexClick = $(this).parent().index();
		let index = $('.character-active').index() - 1;
		$('.card-character').eq(index).toggleClass("character-active");
		$('.description-card-character').eq(index).toggleClass("description-active");
		$('.card-character').eq(indexClick).toggleClass("character-active");
		$('.description-card-character').eq(indexClick).toggleClass("description-active");
		$('.view-item').eq(index).toggleClass("view-active");
		$('.view-item').eq(indexClick).toggleClass("view-active");
		return false;
	});
	$('.coming-soon').click(function (e) {
		alert('Coming soon!')
		return false;
	});

});
