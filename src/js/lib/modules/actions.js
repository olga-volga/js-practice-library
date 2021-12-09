import $ from '../core';

$.prototype.addAction = function(eventName, callback) {
	if (!eventName || !callback) {
		return this;
	}
	for (let i = 0; i < this.length; i++) {
		this[i].addEventListener(eventName, callback);
	}
	return this;
};
$.prototype.removeAction = function(eventName, callback) {
	if (!eventName || !callback) {
		return this;
	}
	for (let i = 0; i < this.length; i++) {
		this[i].removeEventListener(eventName, callback);
	}
	return this;
};
$.prototype.addClick = function(callback) {
	for (let i = 0; i < this.length; i++) {
		if (callback) {
			this[i].addEventListener('click', callback);
		} else {
			this[i].click();
		}
	}
	return this;
};