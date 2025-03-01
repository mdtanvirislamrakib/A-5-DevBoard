// back to desk
const deskButton = document.getElementById("desk-button");
deskButton.addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = "./index.html";
})