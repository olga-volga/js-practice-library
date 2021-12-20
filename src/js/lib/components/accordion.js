import $ from '../core';

$.prototype.accordion = function(headActiveClass = 'accordion-head--active', contentActiveClass = 'accordion-content--active', padding = 40) {
	for (let i = 0; i < this.length; i++) {
		$(this[i]).addClick(() => {
			$(this[i]).toggleClass(headActiveClass);
			$(this[i].nextElementSibling).toggleClass(contentActiveClass);

			if (this[i].classList.contains(headActiveClass)) {
				this[i].nextElementSibling.style.maxHeight = this[i].nextElementSibling.scrollHeight + padding + 'px';
			} else {
				this[i].nextElementSibling.style.maxHeight = '0px';
			}
		});
	}
};

$('.accordion-head').accordion();