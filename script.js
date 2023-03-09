
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

//javascript for about page gallery 
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}


function myFunction() {
  var popup = document.getElementById("myPopup");
  // popup.classList.toggle("show");
  popup.style.visibility = 'visible';
  popup.style.animation = 'fadedIn 1s';
 
//Increment/Decrement
}
//initialising a variable name data
  
var data = 0;
  
//printing default value of data that is 0 in h2 tag
document.getElementById("counting").innerText = data;
  
//creation of increment function
function increment() {
    data = data + 1;
    document.getElementById("counting").innerText = data;
}
//creation of decrement function
function decrement() {
    data = data - 1;
    document.getElementById("counting").innerText = data;
}

//add-to-cart code
// select all add-to-cart buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart');

// loop through each button and add an event listener
addToCartButtons.forEach(button => {
  button.addEventListener('click', function() {
    const itemId = this.parentNode.id; // get the ID of the item
    addToCart(itemId); // call the addToCart function with the item ID
  });
});

// function to add item to cart
function addToCart(itemId) {
  // add item to cart code here
  console.log(`Item ${itemId} added to cart!`);
}
