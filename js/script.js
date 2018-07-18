
$( function() {
// Add background image
	$.backstretch('images/main.jpg');
	var endDate = "December  27, 2018 15:03:25";
	$('.countdown.simple').countdown({ date: endDate });
	$('.countdown.styled').countdown({
	  date: endDate,
	  render: function(data) {
		$(this.el).html("<div>" + this.leadingZeros(data.days, 3) + " <span>days</span></div><div>" + this.leadingZeros(data.hours, 2) + " <span>hrs</span></div><div>" + this.leadingZeros(data.min, 2) + " <span>min</span></div><div>" + this.leadingZeros(data.sec, 2) + " <span>sec</span></div>");
	  }
	});
	$('.countdown.callback').countdown({
	  date: +(new Date) + 10000,
	  render: function(data) {
		$(this.el).text(this.leadingZeros(data.sec, 2) + " sec");
	  },
	  onEnd: function() {
		$(this.el).addClass('ended');
	  }
	}).on("click", function() {
	  $(this).removeClass('ended').data('countdown').update(+(new Date) + 10000).start();
	});
$(".copyright").after(atob("PGRpdiBjbGFzcz0nY29sLW1kLTYnPjxkaXYgY2xhc3M9J3JpZ2h0LXRleHQnPkRlc2lnbiAmYW1wOyBEZXZlbG9wZWQgYnk6IDxhIGhyZWY9J2h0dHBzOi8vYm9vdHN0cmFwd2VidGVtcGxhdGVzLmNvbS8nIHRhcmdldD0nX2JsYW5rJz5Cb290c3RyYXAgV2Vic2l0ZSBUZW1wbGF0ZXM8L2E+PC9kaXY+PC9kaXY="));


});
