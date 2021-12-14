import $ from '../core';

// техническая функция запуска анимации
$.prototype.animateOverTime = function(duration, callback, final) {
	let timeStart;
	function _animateOverTime(time) {
		if (!timeStart) {
			timeStart = time;
		}
		let timePassed = time - timeStart;
		let param = Math.min(timePassed / duration, 1);

		callback(param);

		if (timePassed < duration) {
			requestAnimationFrame(_animateOverTime);
		} else {
			if (typeof final === 'function') {
				final();
			}
		}
	}
	return _animateOverTime;
};
// fadeIn animation
$.prototype.fadeIn = function(duration, display, final) {
	for (let i = 0; i < this.length; i++) {
		this[i].style.display = display || 'block';

		const _fadeIn = (param) => {
			this[i].style.opacity = param;
		};

		const animation = this.animateOverTime(duration, _fadeIn, final);
		requestAnimationFrame(animation);
	}
	return this;
};
// fadeOut animation
$.prototype.fadeOut = function(duration, final) {
	for (let i = 0; i < this.length; i++) {
		const _fadeOut = (param) => {
			this[i].style.opacity = 1 - param;
			
			if (param === 1) {
				this[i].style.display = 'none';
			}
		};

		const animation = this.animateOverTime(duration, _fadeOut, final);
		requestAnimationFrame(animation);
	}
	return this;
};