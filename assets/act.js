$(function() {

$("#token_show").on("click", function(event) {
    event.preventDefault();

    $(this).removeClass("active");
    $("#token").toggleClass("active");
});

});
