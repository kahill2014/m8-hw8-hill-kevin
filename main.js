$(function(){
    $("#sliding-box").click(function(){
        $("#sliding-box").animate({left:"50%"}, 2000, "swing")
            .animate({top:"50%"}, 2000, "swing");
        $("#sliding-box").animate({left:"0"}, 2000, "swing")
            .animate({top:"0"}, 2000, "swing");
    });
});
