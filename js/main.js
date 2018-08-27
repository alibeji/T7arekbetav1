  AOS.init();
	var scroll = $(window).scrollTop();
  $(window).scroll(function(){
    $(".top").css("opacity", 1 - $(window).scrollTop() / 200);
});

var pxlCount = 0
$(window).on('scroll', function () {
    pxlCount = $(document).scrollTop()/50;
  	$('p.pxlCount > span').text(pxlCount);
    $(".top").css({"-webkit-filter": "blur("+pxlCount*2.3+"px)","-moz-filter": "blur("+pxlCount*2.3+"px)","filter": "blur("+pxlCount*2.3+"px)" })     
});

$(".sliding-link").click(function(e) {
    e.preventDefault();
    var aid = $(this).attr("href");
    $('html,body').animate({scrollTop: $(aid).offset().top},'slow');
});