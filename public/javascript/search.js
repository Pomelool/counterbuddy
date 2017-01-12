var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
var main = document.getElementById('main');
main.style.minHeight = Math.round(0.9*height).toString() + "px";

$(window).scroll(function() {
    if($(window).scrollTop() == $(document).height() - $(window).height()) {
      $("#sp2").fadeIn(2000);
    }
});
