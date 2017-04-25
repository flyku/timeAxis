var options = {
	"ulId": "#index-navs",
	"prevNext": ".prevNext",
	"lens": $("#index-navs li").length,
	"distance": 120,
	"num": 4
}

/*时间轴*/
$(document).on('click', 'ul#index-navs li', function(event) {
	indexs = $(this).index();
	$(this).addClass('lis-current').siblings('li').removeClass('lis-current');
});
var prevNext = function(options) {
	var lens = options.lens,
		wids = options.distance * lens;
	$(options.ulId).css("width", wids);
	var flag = 0;
	$(document).on('click', options.prevNext, function(event) {
		if ($(this).hasClass('prev')) {
			if (!flag) {
				if (lens <= options.num) {
					return;
				} else {
					var ulLeft = parseInt($(options.ulId).css("left"));
					if ((wids - options.distance * options.num) === Math.abs(ulLeft)) {
						return;
					} else {
						flag = 1;
						$(options.ulId).animate({
							"left": (ulLeft - options.distance)
						}, 400, function() {
							flag = 0;
						});
					}
				}
			}
		} else {
			if (!flag) {
				if (lens <= options.num) {
					return;
				} else {
					var ulLeft = parseInt($(options.ulId).css("left"));
					if (Math.abs(ulLeft) === 0) {
						return;
					} else {
						flag = 1;
						$(options.ulId).animate({
							"left": (ulLeft + options.distance)
						}, 400, function() {
							flag = 0;
						});
					}
				}
			}
		}
	});
};

prevNext(options)