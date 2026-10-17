const card = document.querySelector('.thecard');
card.addEventListener("click", function() {
    card.classList.toggle("is-flipped");
});

document.getElementById("button").addEventListener("click", function() {
    window.location.href = "index2.html";
});