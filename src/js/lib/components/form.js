import $ from '../core';

$.prototype.submitForm = function() {
	for (let i = 0; i < this.length; i++) {
		$(this[i]).addAction('submit', (e) => {
			e.preventDefault();

			const formData = new FormData(this[i]);

			$().postData('server.php', formData)
				.then(res => console.log(res))
				.catch(err => console.log(err))
				.finally(() => {
					this[i].reset();
				});
		});
	}
};

$('form').submitForm();