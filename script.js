
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

//Mongo Connection credentials
const CONNECTION_URL =
  "mongodb+srv://luxe3sixty:chaishai1@cluster0.syd8n.mongodb.net/?retryWrites=true&w=majority";
const DATABASE_NAME = process.env.DATABASE_NAME;
const MongoClient = require("mongodb").MongoClient;
let _db;
module.exports = {
  connectToServer: function (callback) {
    MongoClient.connect(CONNECTION_URL, function (err, client) {
      _db = client.db(DATABASE_NAME);
      console.log("Connected to database: " + DATABASE_NAME);
      return callback(err);
    });
  },
  getDb: function () {
    return _db;
  },
};



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

