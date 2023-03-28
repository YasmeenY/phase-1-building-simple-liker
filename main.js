// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

const heartSign = document.getElementsByClassName("like-glyph");

function likeFunc(e){
  const target = e.target;
  mimicServerCall("http://mimicServer.example.com")
  .then(function(){
    if (target.textContent === EMPTY_HEART){
      target.textContent = FULL_HEART;
      target.className = "active-heart";
    }
    else {
      target.textContent = EMPTY_HEART;
      target.className = "";
    }
  })
  .catch(function(error){
    const modal = document.getElementById("modal");
    modal.className = "";
    modal.textContent = error;
    setTimeout(() => modal.className = "hidden", 3000)
  })
}

for (const glyph of heartSign){
  glyph.addEventListener("click", likeFunc)
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
