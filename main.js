// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

// Your JavaScript code goes here!
const errorModal = document.getElementById("modal");
errorModal.classList.add("hidden");

const hearts = document.querySelectorAll(".like-glyph");

hearts.forEach((heart) => {
  heart.addEventListener("click", () => {
    if (heart.textContent === EMPTY_HEART) {
      // If empty heart, try to "like" it by calling the server mimic
      mimicServerCall()
        .then(() => {
          heart.textContent = FULL_HEART;
          heart.classList.add("activated-heart");
        })
        .catch((error) => {
          errorModal.textContent = error;
          errorModal.classList.remove("hidden");
          setTimeout(() => errorModal.classList.add("hidden"), 3000);
        });
    } else {
      // If full heart, toggle it back to empty heart immediately
      heart.textContent = EMPTY_HEART;
      heart.classList.remove("activated-heart");
    }
  });
});

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
