$(document).ready(function() {
/*	$('.language a').click(function() {
		$(this).siblings().find('.active').removeClass('active');
		// $(this).addClass('active');
	});
	return false
*/
	// ##############################

// variant 1  - robo4iy

		$('.language a').click(function() {
		if ($(this).hasClass('is-active')) {
			// $(this).prev().removeClass('active');
			// $(this).next().removeClass('active');
			// $(this).siblings().removeClass('active');

		}
		else {$(this).addClass('is-active')};
					$(this).siblings().removeClass('is-active');
	});
	return false

	$(document).ready(function() {
	 $(".slider").each(function () { // обрабатываем каждый слайдер
	  var obj = $(this);
	  $(obj).append("<div class='nav'></div>");
	  $(obj).find("li").each(function () {
	   $(obj).find(".nav").append("<span rel='"+$(this).index()+"'></span>"); // добавляем блок навигации
	   $(this).addClass("slider"+$(this).index());
	  });
	  $(obj).find("span").first().addClass("on"); // делаем активным первый элемент меню
	 });
	});
	function sliderJS (obj, sl) { // slider function
	 var ul = $(sl).find("ul"); // находим блок
	 var bl = $(sl).find("li.slider"+obj); // находим любой из элементов блока
	 var step = $(bl).width(); // ширина объекта
	 $(ul).animate({marginLeft: "-"+step*obj}, 500); // 500 это скорость перемотки
	}
	$(document).on("click", ".slider .nav span", function() { // slider click navigate
	 var sl = $(this).closest(".slider"); // находим, в каком блоке был клик
	 $(sl).find("span").removeClass("on"); // убираем активный элемент
	 $(this).addClass("on"); // делаем активным текущий
	 var obj = $(this).attr("rel"); // узнаем его номер
	 sliderJS(obj, sl); // слайдим
	 return false;
	});




});