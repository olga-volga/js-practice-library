import './lib/lib';
import $ from './lib/lib';

//$('div');
//$('.active').hide().show();
//$('div').hide().show();
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
$('button').addClick(function() {
	$('.active').toggleAttr('id', 'new');
});

/*function sayHello() {
	console.log('Hello');
}*/