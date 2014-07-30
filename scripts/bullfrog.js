$(document).ready(function() {
 $('#tab2').hide();
 $('#button1').addClass('button-active');


 $('#button1').click(function() {
 	$('#tab1').toggle();
 	$('#tab2').toggle();
 	$('#button1').toggleClass('button-active');
 	$('#button2').toggleClass('button-active');
 });

 $('#button2').click(function() {
 	$('#tab2').toggle();
 	$('#tab1').toggle();
 	$('#button2').toggleClass('button-active');
 	$('#button1').toggleClass('button-active');

 });
});