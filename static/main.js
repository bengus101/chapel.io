$('#log-out').click(function() {
	$.ajax({
		type: "GET",
		url: '/auth/logout'
	});
	console.log('Clicked');
});
	
$('#reaction-gif').click(function() {
	console.log('Gif button clicked!');
	$('.display').empty();
	var tags = $('#search-tags').val();
	var url = 'http://replygif.net/api/gifs?tag=' + tags + '&tag-operator=and&api-key=39YAprx5Yi';
	var response = [];
	console.log(response);

	$.ajax({
		type: 'GET',
		url: url
	}).done(function(data) {
		console.log(data);
		data.forEach(function(image, index) {
		var newObj = {
			id: image.id,
			url: image.url,
			file: image.file
		};
		var img = $('<img src="' + newObj.file + '">');
		$('.display').append(img);
		});
	});

	response.forEach(function(data) {
		
		
	});
	
});

$('#about').click(function(e) {
	e.preventDefault();
	var display = $('#blurb').css('display');
	$("#confessional").hide();
	$("#judge").hide();
	if (display === 'block') {
		$("#blurb").hide()
	} else if (display === 'none') {
		$("#blurb").show()
	}
});

$('#log-in').click(function(e) {
	e.preventDefault();
	var display = $('#login').css('display');
	$("#confessional").hide();
	$("#judge").hide();
	if (display === 'block') {
		$("#login").hide()
	} else if (display === 'none') {
		$("#login").show()
	}
});

$('#sign-up').click(function(e) {
	e.preventDefault();
	var display = $('#signup').css('display');
	$("#confessional").hide();
	$("#judge").hide();
	if (display === 'block') {
		$("#signup").hide()
	} else if (display === 'none') {
		$("#signup").show()
	}
});

