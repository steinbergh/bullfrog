// $(document).ready(function(){
// //jq goes here
// 	alert('document is ready');
// 	//this calls out the header
// 	// $('header').slideUp(3000);

// 	$('#main-nav').click(function(){
// 		// $('header').show(function(){
// 		$('header').slideToggle()
// 	});

// 	$('section.content-center a').click(function(){
// 		alert('you clicked a link');
// 	});
// 	//you can also call an element using the css id
// 	$('a').hover(function(){
// 		console.log('you hovered over a link');
// 	});
// });

//hide all recernt content links in the list.
$(document).ready(function(){
	//hide all but the first link in .content-center links
	function hideRestLinks(){
	$('section.content-center ul a').slice(1).hide();
	};

	hideRestLinks();
//show only the first link//
// //show the first link on hover
	$('section.content-center ul a').hover(function(){
		$(this).parent().next().children('a').slideDown();
		});
	
//add a minimize link [after view all link]
//the after minimize hide all but first link

	$('section.content-center').append('<a href="#" id="minimize">Minimize</a>');
	$('a#minimize').click(function(){
		$('section.content-center a');
			hideRestLinks();
		});

	});




