import $ from '../core';

// изменить содержимое html-элемента (если передан параметр content) или получить содержимое html-элемента (если метод вызван без аргумента)
$.prototype.htmlContent = function(content) {
	for (let i = 0; i < this.length; i++) {
		if (content) {
			this[i].innerHTML = content;
		} else {
			return this[i].innerHTML;
		}
	}
	return this;
};
// получить определенный элемент по индексу элемента среди элементов с общим родителем
$.prototype.getElem = function(i) {
	const currentObj = this[i];
	const objLength = Object.keys(this).length;

	for (let i = 0; i < objLength; i++) {
		delete this[i];
	}
	this[0] = currentObj;
	this.length = 1;

	return this;
};
// получить индекс элемента среди элементов с общим родителем
$.prototype.getElemIndex = function() {
	const parent = this[0].parentNode;
	const childrenOfParent = [...parent.children];

	const findElemIndex = (item) => {
		return item == this[0];
	};

	return childrenOfParent.findIndex(findElemIndex);
};
// найти элемент по селектору среди уже выбранных
$.prototype.findElem = function(selector) {
	const objCopy = Object.assign({}, this);// создаем копию объекта this
	
	let numberOfItems = 0;// общее кол-во элементов
	let counter = 0;// кол-во новых элементов, записанных в this

	for (let i = 0; i < objCopy.length; i++) {
		const arr = objCopy[i].querySelectorAll(selector);// ищем эл-ты по селектору внутри скопированного объекта
		
		if (arr.length == 0) {// если эл-ты не найдены, эту итерацию цикла пропускаем и продолжаем выполнение кода дальше
			continue;
		}
		for (let j = 0; j < arr.length; j++) {// если эл-ты найдены, то:
			this[counter] = arr[j];// каждый эл-т, найденный по селектору, записываем в общий объект this
			counter++;
		}
		numberOfItems += arr.length;
	}
	this.length = numberOfItems;

	const objLength = Object.keys(this).length;// кол-во эл-тов в объекте this

	for (; numberOfItems < objLength; numberOfItems++) {// перебираем объект this с новыми добавленными эл-тами и
		delete this[numberOfItems];// удаляем старые немодифицированные эл-ты
	}
	return this;// возвращаем модифицированный объект this

	// Оптимизация

	/*const newObj = this[0].querySelectorAll(selector);

	for (let i = 0; i < this.length; i++) {
		delete this[i];
	}
	Object.assign(this, newObj);
	this.length = newObj.length;
	return this;*/
};
// определаить ближайший блок по заданному селектору
$.prototype.closest = function(selector) {
	let counter = 0;
	for (let i = 0; i < this.length; i++) {
		if (!this[i].closest(selector)) {
			return this;
		}
		this[i] = this[i].closest(selector);
		counter++;
	}
	const objLength = Object.keys(this).length;// кол-во эл-тов в объекте this

	for (; counter < objLength; counter++) {// перебираем объект this с новыми добавленными эл-тами и
		delete this[counter];// удаляем старые немодифицированные эл-ты
	}
	return this;
};
// получить все соседние элементы, не включая сам элемент
$.prototype.findSiblings = function() {
	const objCopy = Object.assign({}, this);

	let numberOfItems = 0;
	let counter = 0;

	for (let i = 0; i < objCopy.length; i++) {
		const arr = objCopy[i].parentNode.children;

		for (let j = 0; j < arr.length; j++) {
			if (objCopy[i] === arr[j]) {
				continue;
			}
			this[counter] = arr[j];
			counter++;
		}
		numberOfItems += arr.length - 1;
	}
	this.length = numberOfItems;

	const objLength = Object.keys(this).length;

	for (; numberOfItems < objLength; numberOfItems++) {
		delete this[numberOfItems];
	}
	return this;
};
