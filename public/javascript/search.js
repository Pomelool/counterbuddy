var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
var main = document.getElementById('main');
main.style.minHeight = Math.round(0.9*height).toString() + "px";
