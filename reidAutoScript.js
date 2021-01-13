$(document).ready(function () {

//      *makes slider**
var $slider = $("#slider");
var $slides = $slider.find("#slides");
var $slide = $slides.find(".slide");
var count = 0;
setInterval(function () {
    count++
    if (count == $slide.length) {
        $slides.css("margin-left", 0);
        count = 1;
    }
    $slides.animate({ "margin-left": "-=800px" }, 750);
}, 3500)

    var map;
    function initMap() {
        map = new google.maps.Map(document.getElementById("map"), {
            center: { lat: -34.397, lng: 150.644 },
            zoom: 8
        });
    }




})