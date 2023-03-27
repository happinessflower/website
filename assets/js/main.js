$(document).ready(function(){
	fetch("header.html")
	  .then(response => {
		return response.text()
	  })
	  .then(data => {
		$("#header").html(data);
	  });

	fetch("footer.html")
	  .then(response => {
		return response.text()
	  })
	  .then(data => {
		 $("#footer").html(data);
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