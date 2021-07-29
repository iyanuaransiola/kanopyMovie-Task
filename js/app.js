// let movieOne = document.querySelector("#movieOne");
// let movieTwo = document.querySelector("#movieTwo");
// let movieThree = document.querySelector("#movieThree");
// let movieFour = document.querySelector("#movieFour");
// let movieFive = document.querySelector("#movieFive");
// let movieSix = document.querySelector("#movieSix");
// let movieSeven = document.querySelector("#movieSeven");
// let movieEight = document.querySelector("#movieEight");


// movieOne.addEventListener("click", displayMovieInfo1);
// movieTwo.addEventListener("click", displayMovieInfo2);
// movieThree.addEventListener("click", displayMovieInfo3);
// movieFour.addEventListener("click", displayMovieInfo4);
// movieFive.addEventListener("click", displayMovieInfo5);
// movieSix.addEventListener("click", displayMovieInfo6);
// movieSeven.addEventListener("click", displayMovieInfo7);
// movieEight.addEventListener("click", displayMovieInfo8);



var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}


//function displayMovieInfo1(){
   // window.open("movieInfo1.html", "I Am Not Your Negro", "width=400, height=600, scrollbars=yes");
//}