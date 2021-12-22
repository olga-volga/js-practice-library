import $ from '../core';

$.prototype.slider = function(autoplayInterval = false) {
	for (let i = 0; i < this.length; i++) {
		const sliderInnerWidth = window.getComputedStyle(this[i].querySelector('.carousel-inner')).width;// ширина carousel-inner из браузера
		const slides = this[i].querySelectorAll('.carousel-item');// слайды
		const slidesField = this[i].querySelector('.carousel-slides');// обертка слайдов
		const dots = this[i].querySelectorAll('.carousel-indicators li');// точки-индикаторы слайдов
		
		let slideIndex = 0;
		let offset = 0;
		let timerId;
		
		slidesField.style.width = 100 * slides.length + '%';// задаем ширину carousel-slides в зависимости от количества слайдов

		slides.forEach(item => {// задаем ширину для каждого слайда равной sliderInnerWidth, т.к. будет показываться по одному слайду
			item.style.width = sliderInnerWidth;
		});

		const moveSlide = (value, index) => {
			slidesField.style.transform = `translateX(-${value}px)`;
			$(slidesField).fadeIn(300, 'flex');

			dots.forEach(item => $(item).removeClass('active'));
			$(dots[index]).addClass('active');
		};

		$(this[i].querySelector('[data-slide="next"]')).addClick((e) => {
			e.preventDefault();

			if (offset == +sliderInnerWidth.replace(/\D/ig, '') * (slides.length - 1)) {
				offset = 0;
				slideIndex = 0;
			} else {
				offset += +sliderInnerWidth.replace(/\D/ig, '');
				slideIndex++;
			}
			moveSlide(offset, slideIndex);
		});

		$(this[i].querySelector('[data-slide="prev"]')).addClick((e) => {
			e.preventDefault();

			if (offset == 0) {
				offset = +sliderInnerWidth.replace(/\D/ig, '') * (slides.length - 1);
				slideIndex = slides.length - 1;
			} else {
				offset -= sliderInnerWidth.replace(/\D/ig, '');
				slideIndex--;
			}
			moveSlide(offset, slideIndex);
		});

		dots.forEach(item => {
			$(item).addClick(() => {
				slideIndex = +$(item).getAttr('data-slide-to');
				offset = +sliderInnerWidth.replace(/\D/ig, '') * slideIndex;
				moveSlide(offset, slideIndex);
			});
		});

		const activateAutoplay = () => {
			timerId = setInterval(() => {
				$(this[i].querySelector('[data-slide="next"]')).addClick();
			}, autoplayInterval);
		};

		if (autoplayInterval) {
			activateAutoplay();

			$(this[i]).addAction('mouseenter', () => clearInterval(timerId));
			$(this[i]).addAction('mouseleave', () => activateAutoplay());
		}
	}
};

$('#carousel').slider();

$.prototype.createSlider = function({width, height, effects, slides}) {
	for (let i = 0; i < this.length; i++) {
		$(this[i]).htmlContent(
			`<ol class="carousel-indicators"></ol>
	    	<div class="carousel-inner">
	    		<div class="carousel-slides"></div>
	    	</div>
	    	<a href="#" class="carousel-prev" data-slide="prev">
	    		<span class="carousel-prev-icon">&lt;</span>
	    	</a>
	    	<a href="#" class="carousel-next" data-slide="next">
	    		<span class="carousel-next-icon">&gt;</span>
	    	</a>`
		);

		this[i].style.width = `${width}px`;// задаем ширину всего слайдера
		this[i].querySelector('.carousel-inner').style.height = `${height}px`;// задаем высоту carousel-inner

		for (let j = 0; j < slides.length; j++) {
			const indicator = document.createElement('li');
			const slideItem = document.createElement('div');
			const slideImg = document.createElement('img');

			$(indicator).setAttr('data-slide-to', `${j}`);
			if (j == 0) {
				$(indicator).addClass('active');
			}
			this[i].querySelector('.carousel-indicators').append(indicator);

			$(slideItem).addClass('carousel-item');
			this[i].querySelector('.carousel-slides').append(slideItem);

			$(slideImg).setAttr('src', `${slides[j].src}`);
			$(slideImg).setAttr('alt', `${slides[j].alt}`);
			slideItem.append(slideImg);
		}

		this[i].querySelector('.carousel-slides').style.transition = effects.transition;
	}
	return this;
};