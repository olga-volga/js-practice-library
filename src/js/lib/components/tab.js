import $ from '../core';

$.prototype.tab = function() {
	for (let i = 0; i < this.length; i++) {
		$(this[i]).addClick(() => {
			$(this[i])
				.addClass('tab-item--active')
				.findSiblings()
				.removeClass('tab-item--active')
				.closest('.tab')
				.findElem('.tab-content')
				.removeClass('tab-content--active')
				.getElem($(this[i]).getElemIndex())
				.addClass('tab-content--active');
		});
	}
};

$('[data-tabpanel] .tab-item').tab();