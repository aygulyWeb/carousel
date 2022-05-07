

class SliderCarousel {
	constructor({
		main,
		wrap,
		next,
		prev,
		position = 0,
		slidesToShow = 3

	}) {
		this.main = document.querySelector(main);
		this.wrap = document.querySelector(wrap);
		this.slides = document.querySelector(wrap).children;
		this.next = document.querySelector(next);
		this.prev = document.querySelector(prev);
		this.slidesToShow = slidesToShow;
		this.options = {
			position,
			widthSlide: Math.floor(100 / this.slidesToShow)
		};

	}

	init() {
		this.addGloClass();
		this.addStyle();

		if (this.prev && this.next) {
			this.controlSlider();
		} else {
			this.addArrow();
			this.controlSlider();
		}
	}

	addGloClass() {
		this.main.classList.add('glo-slider');
		this.wrap.classList.add('glo-slider__wrap');
		for (const item of this.slides) {
			item.classList.add('glo-slider__item')
		}
	}
	addStyle() {
		const style = document.createElement('style');
		style.id = 'sliderCarusel-style';
		style.textContent = `
			.glo-slider{
				overflow:hidden !important;

			}
			.glo-slider__wrap{
				display:flex !important;
				transition:transform 0.5s !important;
				will-change:transform !important;
			}

			.glo-slider__item{
				flex:0 0 ${this.options.widthSlide}% !important;
				margin:auto 0 !important;
			}
		`;
		document.head.appendChild(style);
	}
	controlSlider() {
		this.prev.addEventListener('click', this.prevSlider.bind(this));
		this.next.addEventListener('click', this.nextSlider.bind(this));

	}
	prevSlider() {
		if (this.options.position > 0) {
			--this.options.position;
			console.log(this.options.position);
			this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
		}

	}
	nextSlider() {
		if (this.options.position < this.slides.length - this.slidesToShow) {
			++this.options.position;
			console.log(this.options.position)
			this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
		}
	}


	addArrow() {
		this.prev = document.createElement('button');
		this.next = document.createElement('button');

		this.prev.className = 'glo-slider__prev';
		this.next.className = 'glo-slider__next';

		this.main.appendChild(this.prev);
		this.main.appendChild(this.next);

	}
}


const carousel = new SliderCarousel({
	main: '.companies-wrapper',
	wrap: '.companies-hor',
	slidesToShow: 3
});

carousel.init();