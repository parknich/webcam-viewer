var vid = document.querySelector("#videoElement");
const errorField = document.getElementById("errorField");

// Set constraints for the video element, including setting the FPS to 55-60
const constraints = {
  video:
  {
    video: true,
    audio: true,
    controls: true,
    autoplay: true,
    frameRate: { ideal: 55, max: 60 }
  }
};

// Set the video element to the camera
function streamFunc() {
  if (navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices
      .getUserMedia(constraints)
      .then(function (stream) {
        vid.srcObject = stream;
      })
      .catch(function (err0r) {
        console.error("Something went wrong when trying to set video element, trying again");
      });
  }
}
streamFunc();
