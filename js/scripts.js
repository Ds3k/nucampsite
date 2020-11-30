$(function() {

    //   Week4 Assignment Task2
    $('#reserveButton').click(function (){
        $('#reserveModal').modal('toggle');
    });
    //   Week4 Assignment Task3
    $('#loginButton').click(function (){
        $('#loginModal').modal('toggle');
    });

    $(".carousel").carousel({ interval: 2000});
    $("#carouselButton").click(function(){
        if ($("#carouselButton").children("i").hasClass("fa-pause")) {
            $(".carousel").carousel("pause");
            $("#carouselButton").children("i").removeClass("fa-pause");
            $("#carouselButton").children("i").addClass("fa-play");
        } else {
            $(".carousel").carousel("cycle");
            $("#carouselButton").children("i").removeClass("fa-play");
            $("#carouselButton").children("i").addClass("fa-pause");
        }
    });
});