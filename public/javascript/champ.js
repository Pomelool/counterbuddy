document.getElementById("loadingSection").style.display = "block";
window.onload = setTimeout(function(){
   document.getElementById("loadingSection").style.display = "none";
 },1000);


var page1 = document.getElementById('p1');
var page2 = document.getElementById('p2');
var page3 = document.getElementById('p3');
var rightArrow = document.getElementById('rightArrow');
var leftArrow = document.getElementById('leftArrow');
var content3 = document.getElementById('content1');
var content1 = document.getElementById('content2');
var content2 = document.getElementById('content3');
p1.style.fontSize = "30px";
var current = "1";

function myClick(pageThis){
  page1.style.fontSize = "20px";
  page2.style.fontSize = "20px";
  page3.style.fontSize = "20px";
  pageThis.style.fontSize = "30px";
  current = pageThis.innerHTML;
  checkArrow();
}

function checkArrow(){
  if (current == "1") {
    leftArrow.style.display = "none";
    content2.style.display = "none";
    content3.style.display = "none";
    $("#content1").fadeIn('slow');
  }

  else if(current == "2"){
    leftArrow.style.display = "inline";
    rightArrow.style.display = "inline";
    content1.style.display = "none";
    content3.style.display = "none";
    $("#content2").fadeIn('slow');
  }
  else if (current == "3") {
    rightArrow.style.display = "none";
    content2.style.display = "none";
    content1.style.display = "none";
    $("#content3").fadeIn('slow');
  }
}

function clickRight(){
  if(current == "1"){
    current = "2";
    myClick(page2);
  }
  else if (current == "2") {
    current = "3";
    myClick(page3);
  }
}

function clickLeft(){
  if(current == "2"){
    current = "1";
    myClick(page1);
  }
  else if (current == "3"){
    current = "2";
    myClick(page2);
  }
}
