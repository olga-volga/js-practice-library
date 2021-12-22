import $ from '../core';

$.prototype.getData = async function(url, answerDataType = 'json') {
	let result = await fetch(url);
	
	if (!result.ok) {
		throw new Error(`Could not fetch ${url}, status: ${result.status}`);
	}
	switch (answerDataType) {
		case 'json':
			return await result.json();
		case 'text':
			return await result.text();
		case 'blob':
			return await result.blob();
	}
}
$.prototype.postData = async function(url, data, answerDataType = 'text') {
	let result = await fetch(url, {
		method: 'POST',
		body: data
	});
	switch (answerDataType) {
		case 'text':
			return await result.text();
		case 'json':
			return await result.json();
		case 'blob':
			return await result.blob();
	}
};