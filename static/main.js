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

$('#toggle-about').click(function() {
	if ($('#blurb').css('display') === 'block') {
		$("#blurb").hide()
	} else if ($('#blurb').css('display') === 'none') {
		$("#blurb").show()
	}
});

