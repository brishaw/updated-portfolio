// intro
$(".control-button").on("click", function(){
  $(".top").css({ "margin-top": "-250%", "transition-property": "margin", "transition-delay": ".7s", "transition-duration": "3.7s", "transition-timing-function" : "ease"});
  $(".right").css({ "margin-right": "-100%", "transition-property": "margin", "transition-delay": ".3s", "transition-duration": "1s", "transition-timing-function": "ease"});
  $(".left").css({ "margin-left": "-100%", "transition-property": "margin", "transition-delay": ".1s", "transition-duration": "1s", "transition-timing-function": "ease"});
  
  $(this).addClass("ani");
  
  setTimeout(off, 2000);
  
  function off() {
    console.log("called off");
    $(".control-button").css("display", "none");
    $(".right").css("display", "none");
    $(".main").fadeIn("slow");
    $("footer").fadeIn("slow");
  }; // off
  
  // setInterval(function(){
  //   location.reload();
  // },10000);
})

// parallax

// Create cross browser requestAnimationFrame method:
window.requestAnimationFrame = window.requestAnimationFrame
  || window.mozRequestAnimationFrame
  || window.webkitRequestAnimationFrame
  || window.msRequestAnimationFrame
  || function (f) { setTimeout(f, 1000 / 60) }

var test1 = document.getElementById('test1');
var test2 = document.getElementById('test2');
var test3 = document.getElementById('test3');
var test4 = document.getElementById('test4')

function parallaxbubbles() {
  var scrolltop = window.pageYOffset // get number of pixels document has scrolled vertically 
  test1.style.top = -scrolltop * .2 + 'px' // move test1 at 20% of scroll rate
  test2.style.top = -scrolltop * .5 + 'px' // move test2 at 50% of scroll rate
  test3.style.top = -scrolltop * .4 + 'px' // move test2 at 40% of scroll rate
  test4.style.top = -scrolltop * .3 + 'px' // move test2 at 30% of scroll rate
}

window.addEventListener('scroll', function () { // on page scroll
  requestAnimationFrame(parallaxbubbles) // call parallaxbubbles() on next available screen paint
}, false)

// smooth scroll

$(document).ready(function () {
  // Add smooth scrolling to all links
  $("a").on('click', function (event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function () {

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

// image grid

var imgArr = ["assets/images/hangman.png", "assets/images/crystal-collector.png", "assets/images/giftastic.png",  "assets/images/train_time.png", "assets/images/liribot.png", "assets/images/night_out.png", "assets/images/eat-da-burger.png", "assets/images/bamazon.png", "assets/images/friend-finder.png", "assets/images/adv-word-guess.png","assets/images/idecide.png"];

for (var i = 0; i < imgArr.length; i++) {
  
  var holder = $("<div>");
  
  holder.addClass("img-caption");

  $("#grid").append(holder);


  var aImg = $("<img>");

  aImg.attr("id", "izage");

  aImg.attr("src", imgArr[i]);
  aImg.attr("data-num", i);

  holder.append(aImg);


  var cap = $("<div>");

  cap.addClass("caption");

  holder.append(cap);

  cap.append("<h3>");
  cap.append("<p>");


  var linkWrap = $("<div>");
  
  linkWrap.addClass("link-wrap");

  holder.append(linkWrap);


  var tar = $("<a>");

  tar.addClass("myImg");

  linkWrap.append(tar);


  var linkIcon = $("<i>");
  
  linkIcon.addClass("fa fa-search");

  tar.append(linkIcon);


  var infoText = $("<a>");
  
  linkWrap.append(infoText);

  var infoIcon = $("<i>");

  infoIcon.addClass("fa fa-link");

  infoText.append(infoIcon);

}


// modal

var modal = document.getElementById("myModal");
var modalImg = $("#images");
var captionText = document.getElementById("caption");
var span = document.getElementsByClassName("close")[0];



$(".myImg").click(function (event) {
  var tru = event.target;
 
  console.log($(event.target).parentsUntil("img")[2].children[0]);

  //var newSrc = document.getElementById("izage").src;
  var newSrc = $(event.target).parentsUntil("img")[2].children[0].src;

  modalImg.attr("src", newSrc);

  captionText.innerHTML = document.getElementById("izage").alt;

  $("#myModal").css("display", "block");
  
});

span.onclick = function() {
  $("#myModal").fadeOut("slow");
}

window.onclick = function (event) {
  if (event.target == modal) {
    $("#myModal").fadeOut("slow");
  }
}
