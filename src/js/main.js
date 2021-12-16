import './lib/lib';
import $ from './lib/lib';

//$('div');
//$('.active').hide().show();
//$('div').hide().show();

//Работа с css-классами и обработчиками событий
//$('.active').toggle().toggle();
//$('.active').addClass('super', 'hello');
//$('div').addClass('super', 'hello');
//$('.active').removeClass('super', 'hello');
//$('.active').toggleClass('super');
//$('.active').addAction('click', sayHello);
//$('.active').removeAction('click', sayHello);
//$('.active').addClick(sayHello);
/*$('button').addAction('click', function() {
	$(this).toggleClass('active');
});*/
/*$('button').addClick(function() {
	$(this).toggleClass('active');
});*/
//$('button').setAttr('disabled', 'true');
//$('button').getAttr('disabled');
/*$('button').addClick(function() {
	$(this).setAttr('disabled', 'true');
});*/
/*$('button').addClick(function() {
	$(this).getAttr();
});*/
//$('div').setAttr('id', 'new');
//console.log($('.active').getAttr('id'));
//$('div').removeAttr('id');
//$('.active').setAttr('id', 'new');
//$('.active').toggleAttr('id', 'new');
/*$('button').addClick(function() {
	$('.active').toggleAttr('id', 'new');
});*/

//Создаем методы для работы с элементами
//console.log($('.active').htmlContent());
/*$('button').addClick(function() {
	$(this).htmlContent('Thanks!');
});*/
/*$('button').addClick(function() {
	$('div').getElem(2).toggleClass('active');
});*/
/*$('button').addClick(function() {
	$('div').getElem(2).htmlContent('Thanks!');
});
$('div').addClick(function() {
	console.log($(this).getElemIndex());
});*/
//console.log($('div').getElem(2).findElem('.more'));
//console.log($('div').getElem(2).findElem('.some'));
//console.log($('.some').closest('.findme'));
//console.log($('.some').closest('.findme5').addClass('kjl'));
//console.log($('.findme').findSiblings());
//console.log($('.more').getElem(0).findSiblings());

// Создаем анимации fadeIn/fadeOut
//$('button').fadeOut(1800);
//$('button').fadeIn(1800);

/*function sayHello() {
	console.log('Hello');
}*/

// Работа со стилями + создаем готовые компоненты кнопок для библиотеки
/*$('#first').addClick(() => {
	$('div').getElem(1).fadeOut(800);
});
$('[data-count="second"]').addClick(() => {
	$('div').getElem(2).fadeOut(800);
});
$('button').getElem(2).addClick(() => {
	$('.w-500').fadeOut(800);
});*/

// Создаем анимацию fadeToggle
/*$('#first').addClick(() => {
	$('div').getElem(1).fadeToggle(800);
});
$('[data-count="second"]').addClick(() => {
	$('div').getElem(2).fadeToggle(800);
});
$('button').getElem(2).addClick(() => {
	$('.w-500').fadeToggle(800);
});*/

//Создаем Dropdown menu динамически
$('.wrap').htmlContent(
	`<div class="dropdown">
	    <button class="btn btn-primary dropdown-toggle" id="dropdownMenuButton">Dropdown button</button>
	    <div class="dropdown-menu" data-toggle-id="dropdownMenuButton>
	    	<a href="#" class="dropdown-item">Action #1</a>
	    	<a href="#" class="dropdown-item">Action #2</a>
	    	<a href="#" class="dropdown-item">Action #3</a>
	    </div>
	</div>`
);
$('.dropdown-toggle').dropdown();