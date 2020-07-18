$(function(){
    $("#sliding-box").click(function(){
        $("#sliding-box").animate({left:"50%"}, 2000, "linear")
            .animate({top:"50%"}, 2000, "linear");
        $("#sliding-box").animate({left:"0"}, 2000, "linear")
            .animate({top:"0"}, 2000, "linear");
    });
});
