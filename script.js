

// Sellction elements
const stars = document.querySelectorAll(".star");
const submit = document.querySelector(".submit");
const card = document.querySelector(".card");
const thankyouCard = document.querySelector(".thankyou-container");

// Running a loop and working for each star
stars.forEach(function(star) {
    // Settings what happened when a star is clicked
 star.addEventListener("click", function() {
stars.forEach(function(star) {
    // removing active class from all stars
    star.classList.remove("active");
});
// adding active class to the clicked star
this.classList.add("active");

});
 });

let selectedRating = null;
stars.forEach(star => {
 star.addEventListener("click", () => {
  selectedRating = star.textContent;
 submit.addEventListener("click", ()=> {
    card.style.display = "none";
    thankyouCard .style.display = "block";
    document.getElementById("result").textContent = `You selected ${selectedRating} out of 5`;
 });

 });
});
