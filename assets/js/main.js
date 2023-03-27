$(document).ready(function(){
	fetch("_header.html")
	  .then(response => {
		return response.text()
	  })
	  .then(data => {
		$("#_header").html(data);
	  });

	fetch("_footer.html")
	  .then(response => {
		return response.text()
	  })
	  .then(data => {
		 $("#_footer").html(data);
	  });
 
  
	$(window).scroll(function () {
		if ($(this).scrollTop() > 50) {
			$('#back-to-top').fadeIn();
		} else {
			$('#back-to-top').fadeOut();
		}
	});

	$('#back-to-top').click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 400);
		return false;
	});
});