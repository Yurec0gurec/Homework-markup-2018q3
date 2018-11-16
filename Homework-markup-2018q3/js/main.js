 $(document).ready(function () {
     $('.sl').slick({
         slidesToShow: 1,
         slidesToScroll: 1,
         autoplay: true,
         autoplaySpeed: 2000,
         dots: true,
         infinite: true,
         speed: 1000,
         fade: true,
         cssEase: 'linear'
     });
 });
$(document).ready(function ($) {
    $("p.req").click(function () {
            $("div.call").css('visibility', 'visible');
            $("div.call").css('top', '-20px');
        });
    $("#no").click(function() {
        $("div.call").css('visibility', 'hidden');
            $("div.call").css('top', '39px');
    });
    $("#exit").click(function() {
        $("div.call").css('visibility', 'hidden');
            $("div.call").css('top', '39px');
    });
});
