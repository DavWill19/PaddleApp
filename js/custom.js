/*---------------------------------------------------------------------
    File Name: custom.js
---------------------------------------------------------------------*/

$(function () {

	"use strict";

	/* Preloader
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	setTimeout(function () {
		$('.loader_bg').fadeToggle();
	}, 1500);

	/* JQuery Menu
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$(document).ready(function () {
		$('header nav').meanmenu();
	});

	/* Tooltip
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$(document).ready(function () {
		$('[data-toggle="tooltip"]').tooltip();
	});

	/* sticky
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$(document).ready(function () {
		$(".sticky-wrapper-header").sticky({ topSpacing: 0 });
	});

	/* Mouseover
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$(document).ready(function () {
		$(".main-menu ul li.megamenu").mouseover(function () {
			if (!$(this).parent().hasClass("#wrapper")) {
				$("#wrapper").addClass('overlay');
			}
		});
		$(".main-menu ul li.megamenu").mouseleave(function () {
			$("#wrapper").removeClass('overlay');
		});
	});

	/* NiceScroll
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$(".brand-box").niceScroll({
		cursorcolor: "#9b9b9c",
	});

	/* NiceSelect
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$(document).ready(function () {
		$('select').niceSelect();
	});

	/* OwlCarousel - Blog Post slider
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$(document).ready(function () {
		var owl = $('.carousel-slider-post');
		owl.owlCarousel({
			items: 1,
			loop: true,
			margin: 10,
			autoplay: true,
			autoplayTimeout: 3000,
			autoplayHoverPause: true
		});
	});

	/* OwlCarousel - Banner Rotator Slider
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$(document).ready(function () {
		var owl = $('.banner-rotator-slider');
		owl.owlCarousel({
			items: 1,
			loop: true,
			margin: 10,
			nav: true,
			dots: false,
			navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
			autoplay: true,
			autoplayTimeout: 3000,
			autoplayHoverPause: true
		});
	});

	/* OwlCarousel - Product Slider
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$(document).ready(function () {
		var owl = $('#product-in-slider');
		owl.owlCarousel({
			loop: true,
			nav: true,
			margin: 10,
			navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 2
				},
				960: {
					items: 3
				},
				1200: {
					items: 4
				}
			}
		});
		owl.on('mousewheel', '.owl-stage', function (e) {
			if (e.deltaY > 0) {
				owl.trigger('next.owl');
			} else {
				owl.trigger('prev.owl');
			}
			e.preventDefault();
		});
	});


	
	/* Scroll to Top
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$(window).on('scroll', function () {
		scroll = $(window).scrollTop();
		if (scroll >= 100) {
			$("#back-to-top").addClass('b-show_scrollBut')
		} else {
			$("#back-to-top").removeClass('b-show_scrollBut')
		}
	});
	$("#back-to-top").on("click", function () {
		$('body,html').animate({
			scrollTop: 0
		}, 1000);
	});

	/* Contact-form
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	$.validator.setDefaults({
		submitHandler: function () {
			alert("submitted!");
		}
	});

	$(document).ready(function () {
		$("#contact-form").validate({
			rules: {
				firstname: "required",
				email: {
					required: true,
					email: true
				},
				lastname: "required",
				message: "required",
				agree: "required"
			},
			messages: {
				firstname: "Please enter your firstname",
				email: "Please enter a valid email address",
				lastname: "Please enter your lastname",
				username: {
					required: "Please enter a username",
					minlength: "Your username must consist of at least 2 characters"
				},
				message: "Please enter your Message",
				agree: "Please accept our policy"
			},
			errorElement: "div",
			errorPlacement: function (error, element) {
				// Add the `help-block` class to the error element
				error.addClass("help-block");

				if (element.prop("type") === "checkbox") {
					error.insertAfter(element.parent("input"));
				} else {
					error.insertAfter(element);
				}
			},
			highlight: function (element, errorClass, validClass) {
				$(element).parents(".col-md-4, .col-md-12").addClass("has-error").removeClass("has-success");
			},
			unhighlight: function (element, errorClass, validClass) {
				$(element).parents(".col-md-4, .col-md-12").addClass("has-success").removeClass("has-error");
			}
		});
	});

	/* heroslider
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	var swiper = new Swiper('.heroslider', {
		spaceBetween: 30,
		centeredSlides: true,
		slidesPerView: 'auto',
		paginationClickable: true,
		loop: true,
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
			dynamicBullets: true
		},
	});


	/* Product Filters
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	var swiper = new Swiper('.swiper-product-filters', {
		slidesPerView: 3,
		slidesPerColumn: 2,
		spaceBetween: 30,
		breakpoints: {
			1024: {
				slidesPerView: 3,
				spaceBetween: 30,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 30,
				slidesPerColumn: 1,
			},
			640: {
				slidesPerView: 2,
				spaceBetween: 20,
				slidesPerColumn: 1,
			},
			480: {
				slidesPerView: 1,
				spaceBetween: 10,
				slidesPerColumn: 1,
			}
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
			dynamicBullets: true
		}
	});

	/* Countdown
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$('[data-countdown]').each(function () {
		var $this = $(this),
			finalDate = $(this).data('countdown');
		$this.countdown(finalDate, function (event) {
			var $this = $(this).html(event.strftime(''
				+ '<div class="time-bar"><span class="time-box">%w</span> <span class="line-b">weeks</span></div> '
				+ '<div class="time-bar"><span class="time-box">%d</span> <span class="line-b">days</span></div> '
				+ '<div class="time-bar"><span class="time-box">%H</span> <span class="line-b">hr</span></div> '
				+ '<div class="time-bar"><span class="time-box">%M</span> <span class="line-b">min</span></div> '
				+ '<div class="time-bar"><span class="time-box">%S</span> <span class="line-b">sec</span></div>'));
		});
	});

	/* Deal Slider
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$('.deal-slider').slick({
		dots: false,
		infinite: false,
		prevArrow: '.previous-deal',
		nextArrow: '.next-deal',
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 3,
		infinite: false,
		responsive: [{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 2,
				infinite: true,
				dots: false
			}
		}, {
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			}
		}, {
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}]
	});

	/* News Slider
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$('#news-slider').slick({
		dots: false,
		infinite: false,
		prevArrow: '.previous',
		nextArrow: '.next',
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		responsive: [{
			breakpoint: 1024,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				dots: false
			}
		}, {
			breakpoint: 600,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}, {
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}]
	});

	/* Fancybox
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$(".fancybox").fancybox({
		maxWidth: 1200,
		maxHeight: 600,
		width: '70%',
		height: '70%',
	});

	/* Toggle sidebar
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$(document).ready(function () {
		$('#sidebarCollapse').on('click', function () {
			$('#sidebar').toggleClass('active');
			$(this).toggleClass('active');
		});
	});

	/* Product slider 
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	// optional
	$('#blogCarousel').carousel({
		interval: 5000
	});


});

// Weather API//
let temperature = document.querySelector('.temperature-degree');
let describe = document.querySelector('.temperature-description');
let icon = document.querySelector('.icon');
let temperature2 = document.querySelector('.temperature-degree2');
let describe2 = document.querySelector('.temperature-description2');
let icon2 = document.querySelector('.icon2');
let temperature3 = document.querySelector('.temperature-degree3');
let describe3 = document.querySelector('.temperature-description3');
let icon3 = document.querySelector('.icon3');
let temperature4 = document.querySelector('.temperature-degree4');
let describe4 = document.querySelector('.temperature-description4');
let icon4 = document.querySelector('.icon4');
let temperature5 = document.querySelector('.temperature-degree5');
let describe5 = document.querySelector('.temperature-description5');
let icon5 = document.querySelector('.icon5');
let temperature6 = document.querySelector('.temperature-degree6');
let describe6 = document.querySelector('.temperature-description6');
let icon6 = document.querySelector('.icon6');

const api1 = 'https://api.openweathermap.org/data/2.5/weather?lat=40.3937&lon=-77.9411&cnt=10&appid=9fe3916f8f1041f29ee752c05a931976&units=imperial';
const api2 = 'https://api.openweathermap.org/data/2.5/weather?lat=40.2747&lon=-78.1211&cnt=10&appid=9fe3916f8f1041f29ee752c05a931976&units=imperial';
const api3 = 'https://api.openweathermap.org/data/2.5/weather?lat=40.3645&lon=-78.0827&cnt=10&appid=9fe3916f8f1041f29ee752c05a931976&units=imperial';
const api4 = 'https://api.openweathermap.org/data/2.5/weather?lat=41.2448&lon=-78.1150&cnt=10&appid=9fe3916f8f1041f29ee752c05a931976&units=imperial';
const api5 = 'https://api.openweathermap.org/data/2.5/weather?lat=41.0703&lon=-78.0633&cnt=10&appid=9fe3916f8f1041f29ee752c05a931976&units=imperial';
const api6 = 'https://api.openweathermap.org/data/2.5/weather?lat=40.5544&lon=-77.4709&cnt=10&appid=9fe3916f8f1041f29ee752c05a931976&units=imperial';

function fetch1() { 	
	fetch(api1)
		.then(response => {
			return response.json();
		})
		.then(data => {
			console.log(data);
			temperature.textContent = Math.round(data.main.temp) + 'F';
			describe.textContent = data.weather[0].description;
			var img = document.createElement("img");
			img.classList.add("iconImage");0
			img.src = `animated/${data.weather[0].icon}.svg`;
			var src = document.querySelector('.icon');
			src.appendChild(img);
		})
		.catch(err => {
			console.error(err);
		});
	};

function fetch2() {
		fetch(api2)
		.then(response => {
			return response.json();
		})
		.then(data => {
			console.log(data);
			temperature2.textContent = Math.round(data.main.temp) + 'F';
			describe2.textContent = data.weather[0].description;
			var img = document.createElement("img");
			img.classList.add("iconImage");0
			img.src = `animated/${data.weather[0].icon}.svg`;
			var src = document.querySelector('.icon2');
			src.appendChild(img);
		})
		.catch(err => {
			console.error(err);
		});
	};

function fetch3() {
		fetch(api3)
		.then(response => {
			return response.json();
		})
		.then(data => {
			console.log(data);
			temperature3.textContent = Math.round(data.main.temp) + 'F';
			describe3.textContent = data.weather[0].description;
			var img = document.createElement("img");
			img.classList.add("iconImage");0
			img.src = `animated/${data.weather[0].icon}.svg`;
			var src = document.querySelector('.icon3');
			src.appendChild(img);
		})
		.catch(err => {
			console.error(err);
		});
};

function fetch4() {
		fetch(api4)
		.then(response => {
			return response.json();
		})
		.then(data => {
			console.log(data);
			temperature4.textContent = Math.round(data.main.temp) + 'F';
			describe4.textContent = data.weather[0].description;
			var img = document.createElement("img");
			img.classList.add("iconImage");0
			img.src = `animated/${data.weather[0].icon}.svg`;
			var src = document.querySelector('.icon4');
			src.appendChild(img);
		})
		.catch(err => {
			console.error(err);
		});
	};

function fetch5() {
		fetch(api5)
		.then(response => {
			return response.json();
		})
		.then(data => {
			console.log(data);
			temperature5.textContent = Math.round(data.main.temp) + 'F';
			describe5.textContent = data.weather[0].description;
			var img = document.createElement("img");
			img.classList.add("iconImage");0
			img.src = `animated/${data.weather[0].icon}.svg`;
			var src = document.querySelector('.icon5');
			src.appendChild(img);
		})
		.catch(err => {
			console.error(err);
		});
	};

function fetch6() {
		fetch(api6)
		.then(response => {
			return response.json();
		})
		.then(data => {
			console.log(data);
			temperature6.textContent = Math.round(data.main.temp) + 'F';
			describe6.textContent = data.weather[0].description;
			var img = document.createElement("img");
			img.classList.add("iconImage");0
			img.src = `animated/${data.weather[0].icon}.svg`;
			var src = document.querySelector('.icon6');
			src.appendChild(img);
		})
		.catch(err => {
			console.error(err);
		});
};
fetch1();
fetch2();
fetch3();
fetch4();
fetch5();
fetch6();


///Water Data //
const apiRiver = 'https://waterservices.usgs.gov/nwis/iv/?format=json&sites=01563500&parameterCd=00060,00065&siteType=ST&siteStatus=active';

function fetchWater() {
	
	fetch(apiRiver)
	.then(response => {
		return response.json();
	})
	.then(data => {
		console.log(data);
		document.querySelector('.water-level-1').textContent = `Current Water Level: ${data.value.timeSeries[1].values[0].value[0].value} Feet`;
		document.querySelector('.water-discharge-1').textContent = `Current Water Level: ${data.value.timeSeries[0].values[0].value[0].value} Cubic Feet Per Second`;

		if (data.value.timeSeries[1].values[0].value[0].value >= 1.5) {
			document.querySelector('.height-ok-1').textContent = "Water Levels Are Great!";
			document.querySelector('.height-ok-1').style.color = "green";
			document.querySelector('.height-ok-1').classList = ("animate__animated animate__pulse animate__infinite");
		}
		else {
			document.querySelector('.height-ok-1').textContent = "Water Levels Are Too Low!";
			document.querySelector('.height-ok-1').style.color = "red";
			document.querySelector('.height-ok-1').classList = ("animate__animated animate__pulse animate__infinite");
		  }
	})
	.catch(err => {
		console.error(err);
	});
};
fetchWater();

const apiRiver2 = 'https://waterservices.usgs.gov/nwis/iv/?format=json&sites=01556000&parameterCd=00060,00065&siteType=ST&siteStatus=active';

function fetchWater2() {
	fetch(apiRiver2)
	.then(response => {
		return response.json();
	})
	.then(data => {
		console.log(data);
		document.querySelector('.water-level-2').textContent = `Current Water Level: ${data.value.timeSeries[1].values[0].value[0].value} Feet`;
		document.querySelector('.water-discharge-2').textContent = `Current Water Level: ${data.value.timeSeries[0].values[0].value[0].value} Cubic Feet Per Second`;

		if (data.value.timeSeries[1].values[0].value[0].value >= 1.5) {
			document.querySelector('.height-ok-2').textContent = "Water Levels Are Great!"
			document.querySelector('.height-ok-2').style.color = "green";
			document.querySelector('.height-ok-2').classList = ("animate__animated animate__pulse animate__infinite");
		}
		else {
			document.querySelector('.height-ok-2').textContent = "Water Levels Are Too Low!"
			document.querySelector('.height-ok-2').style.color = "red";
			document.querySelector('.height-ok-2').classList = ("animate__animated animate__pulse animate__infinite");
		  }
	})
	.catch(err => {
		console.error(err);
	});
};
fetchWater2();

const apiRiver3 = 'https://waterservices.usgs.gov/nwis/iv/?format=json&sites=01542500&parameterCd=00060,00065&siteType=ST&siteStatus=active';

function fetchWater3() {
	fetch(apiRiver3)
	.then(response => {
		return response.json();
	})
	.then(data => {
		console.log(data);
		document.querySelector('.water-level-3').textContent = `Current Water Level: ${data.value.timeSeries[1].values[0].value[0].value} Feet`;
		document.querySelector('.water-discharge-3').textContent = `Current Water Level: ${data.value.timeSeries[0].values[0].value[0].value} Cubic Feet Per Second`;

		if (data.value.timeSeries[1].values[0].value[0].value >= 1.5) {
			document.querySelector('.height-ok-3').textContent = "Water Levels Are Great!";
			document.querySelector('.height-ok-3').style.color = "green";
			document.querySelector('.height-ok-3').classList = ("animate__animated animate__pulse animate__infinite");
		}
		else {
			document.querySelector('.height-ok-3').textContent = "Water Levels Are Too Low!";
			document.querySelector('.height-ok-3').style.color = "red";
			document.querySelector('.height-ok-3').classList = ("animate__animated animate__pulse animate__infinite");
		  }
	})
	.catch(err => {
		console.error(err);
	});
};
fetchWater3();

const apiRiver4 = 'https://waterservices.usgs.gov/nwis/iv/?format=json&sites=01543000&parameterCd=00060,00065&siteType=ST&siteStatus=active';

function fetchWater4() {
	fetch(apiRiver4)
	.then(response => {
		return response.json();
	})
	.then(data => {
		console.log(data);
		document.querySelector('.water-level-4').textContent = `Current Water Level: ${data.value.timeSeries[1].values[0].value[0].value} Feet`;
		document.querySelector('.water-discharge-4').textContent = `Current Water Level: ${data.value.timeSeries[0].values[0].value[0].value} Cubic Feet Per Second`;

		if (data.value.timeSeries[1].values[0].value[0].value >= 1.5) {
			document.querySelector('.height-ok-4').textContent = "Water Levels Are Great!";
			document.querySelector('.height-ok-4').style.color = "green";
			document.querySelector('.height-ok-4').classList = ("animate__animated animate__pulse animate__infinite");
		}
		else {
			document.querySelector('.height-ok-4').textContent = "Water Levels Are Too Low!";
			document.querySelector('.height-ok-4').style.color = "red";
			document.querySelector('.height-ok-4').classList = ("animate__animated animate__pulse animate__infinite");
		  }
	})
	.catch(err => {
		console.error(err);
	});
};
fetchWater4();

const apiRiver5 = 'https://waterservices.usgs.gov/nwis/iv/?format=json&sites=01558000&parameterCd=00060,00065&siteType=ST&siteStatus=active';

function fetchWater5() {
	fetch(apiRiver5)
	.then(response => {
		return response.json();
	})
	.then(data => {
		console.log(data);
		document.querySelector('.water-level-5').textContent = `Current Water Level: ${data.value.timeSeries[1].values[0].value[0].value} Feet`;
		document.querySelector('.water-discharge-5').textContent = `Current Water Level: ${data.value.timeSeries[0].values[0].value[0].value} Cubic Feet Per Second`;

		if (data.value.timeSeries[1].values[0].value[0].value >= 1.5) {
			document.querySelector('.height-ok-5').textContent = "Water Levels Are Great!";
			document.querySelector('.height-ok-5').style.color = "green";
			document.querySelector('.height-ok-5').classList = ("animate__animated animate__pulse animate__infinite");
		}
		else {
			document.querySelector('.height-ok-5').textContent = "Water Levels Are Too Low!"
			document.querySelector('.height-ok-5').style.color = "red";
			document.querySelector('.height-ok-5').classList = ("animate__animated animate__pulse animate__infinite");
		  }
	})
	.catch(err => {
		console.error(err);
	});
};
fetchWater5();

const apiRiver6 = 'https://waterservices.usgs.gov/nwis/iv/?format=json&sites=01547100&parameterCd=00060,00065&siteType=ST&siteStatus=active';


function fetchWater6() {
	fetch(apiRiver6)
	.then(response => {
		return response.json();
	})
	.then(data => {
		console.log(data);
		document.querySelector('.water-level-6').textContent = `Current Water Level: ${data.value.timeSeries[1].values[0].value[0].value} Feet`;
		document.querySelector('.water-discharge-6').textContent = `Current Water Level: ${data.value.timeSeries[0].values[0].value[0].value} Cubic Feet Per Second`;

		if (data.value.timeSeries[1].values[0].value[0].value >= 1.5) {
			document.querySelector('.height-ok-6').textContent = "Water Levels Are Great!";
			document.querySelector('.height-ok-6').style.color = "green";
			document.querySelector('.height-ok-6').classList = ("animate__animated animate__pulse animate__infinite");
		}
		else {
			document.querySelector('.height-ok-6').textContent = "Water Levels Are Too Low!";
			document.querySelector('.height-ok-6').style.color = "red";
			document.querySelector('.height-ok-6').classList = ("animate__animated animate__pulse animate__infinite");
		  }
	})
	.catch(err => {
		console.error(err);
	});
};
fetchWater6();

const apiRiver7 = 'https://waterservices.usgs.gov/nwis/iv/?format=json&sites=01547100&parameterCd=00060,00065&siteType=ST&siteStatus=active';


function fetchWater7() {
	fetch(apiRiver6)
	.then(response => {
		return response.json();
	})
	.then(data => {
		console.log(data);
		document.querySelector('.water-level-7').textContent = `Current Water Level: ${data.value.timeSeries[1].values[0].value[0].value} Feet`;
		document.querySelector('.water-discharge-7').textContent = `Current Water Level: ${data.value.timeSeries[0].values[0].value[0].value} Cubic Feet Per Second`;

		if (data.value.timeSeries[1].values[0].value[0].value >= 1.5) {
			document.querySelector('.height-ok-7').textContent = "Water Levels Are Great!";
			document.querySelector('.height-ok-7').style.color = "green";
			document.querySelector('.height-ok-7').classList = ("animate__animated animate__pulse animate__infinite");
		}
		else {
			document.querySelector('.height-ok-7').textContent = "Water Levels Are Too Low!";
			document.querySelector('.height-ok-7').style.color = "red";
			document.querySelector('.height-ok-7').classList = ("animate__animated animate__pulse animate__infinite");
		  }
	})
	.catch(err => {
		console.error(err);
	});
};
fetchWater7();

//Google Maps//

	function initMap1(putIn, takeOut, id) {
		const map = new google.maps.Map(document.getElementById(id), {
		  zoom: 10,
		  center: putIn,
		});
		new google.maps.Marker({
		  position: takeOut,
		  map,
		  title: "Take Out",
		  icon: {
			url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png"
		  }
		});
		new google.maps.Marker({
			position: putIn,
			map,
			title: "Put In",
			icon: {
				url: "http://maps.google.com/mapfiles/ms/icons/green-dot.png"
			  }
		  });
	}

initMap1({ lat: 40.364615, lng: -77.811638 }, { lat: 40.392624, lng: -77.834099 }, 'map');
initMap1({ lat: 40.472997, lng: -78.267312 }, { lat: 40.461728, lng: -78.198310 }, 'map2');
initMap1({ lat: 41.068709, lng: -78.359954 }, { lat: 41.077854, lng: -78.235155 }, 'map3');
initMap1({ lat: 41.338185, lng: -78.134852 }, { lat: 41.318352, lng: -78.083204 }, 'map4');
initMap1({ lat: 40.587094, lng: -78.100481 }, { lat: 40.565726, lng: -78.070153 }, 'map5');
initMap1({ lat: 40.915928, lng: -77.784904 }, { lat: 40.941443, lng: -77.787273 }, 'map6');
initMap1({ lat: 40.014472, lng: -78.431776 }, { lat: 40.007770, lng: -78.359664 }, 'map7');





