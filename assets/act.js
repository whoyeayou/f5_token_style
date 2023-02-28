$(function() {

$("#token_show").on("click", function(event) {
    event.preventDefault();

    $("#f5_token").toggleClass("active");
    $("#more-icon").toggleClass("active");
});

});
