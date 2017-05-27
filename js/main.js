$(document).ready(function () {
    $(".read-more").mouseover(function(){
        $("#arrow1").css("visibility", "visible")
    });

    $(".read-more").mouseout(function(){
        $("#arrow1").css("visibility","hidden");
    });
});