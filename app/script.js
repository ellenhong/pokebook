$(document).ready(function() {
	sizeImage();

	$(window).resize(function() {
		sizeImage();
	});

	function sizeImage() {
		var imgwidth = $(".square-grid__cell--7").width();
		$(".grid-img").css("width", imgwidth);
		$(".grid-img").css("height", imgwidth);
	};

	$('.square-grid__content').hover(
		function() {
			$(this).find('.overlay').css('opacity', '0');
			$(this).find('.info').css('opacity', '1');
		},
		function() {
			$(this).find('.overlay').css('opacity', '0.25');
			$(this).find('.info').css('opacity', '0');
		}
	);

	$('.square-grid__content').click(
		function() {
			var imgNum = $(this).find('.grid-img').attr('id');
			$("#number").text(imgNum);

			var imgPath = 'url("app/img/' + imgNum + '.png")';
			$("#full-img").css('background-image', imgPath);
			$("#card").css('opacity', '1');
			$("#card").css('z-index', '200');
			$("#full-overlay").css('opacity', '0.5');
			$("#full-overlay").css('z-index', '200');
			$("#fixed-wrapper").css('z-index', '500');
		}
	);

	$('#fixed-wrapper').click(
		function() {
			$("#card").css('opacity', '0');
			$("#card").css('z-index', '-100');
			$("#full-overlay").css('opacity', '0');
			$("#full-overlay").css('z-index', '-100');
			$("#fixed-wrapper").css('z-index', '-200');
		}
	);
});