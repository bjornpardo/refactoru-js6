$(document).on('ready', function() {

	$('form').hide();

	$('.show-btn').on('click',function() {
		$('form').slideToggle();
	});

	$('.ok-btn').on('click',function() {
		// console.log ('Ok');
		return false;
	});


	$('.ok-btn').on('click',function() {
		var name = $("textarea.name").val();
		var bio = $("textarea.bio").val();
		var books = $("textarea.books").val();
		var libs = $("textarea.libs").val();
		$('form').after('<p> Name: ' + name +'</p>' + '\n' + '<p>Bio: ' + bio +'</p>' + '\n' + '<p> Favorite Books: ' + books +'</p>' + '\n' + '<p> Favorite Javascript Libraries: ' + libs +'</p>') ;
	});	
  
});