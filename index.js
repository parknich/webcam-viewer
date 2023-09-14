var vid = document.querySelector("#videoElement");
const errorField = document.getElementById("errorField");
const selectBox = document.getElementById("selectBox");
const submitButton = document.getElementById("submitButton");
let resWidth;
let resHeight;
let resMinFps;
let resMaxFps;
let res = (submitButton.onclick = async () => {
  res = selectBox.value;
});

switch (res) {
  case 0:
    resWidth = 1920;
    resHeight = 1080;
    resMinFps = 55;
    resMaxFps = 60;
    break;
  case 1:
    resWidth = 1920;
    resHeight = 1080;
    resMinFps = 25;
    resMaxFps = 30;
    break;
  case 2:
    resWidth = 1280;
    resHeight = 720;
    resMinFps = 55;
    resMaxFps = 60;
    break;
  case 3:
    resWidth = 1280;
    resHeight = 720;
    resMinFps = 25;
    resMaxFps = 30;
    break;

  default:
    console.error("WebCamViewer: Unknown Error");
    break;
}
vid.style.width = resWidth
vid.style.height = resHeight
// Set constraints for the video element, including setting the FPS to 55-60
const constraints = {
  video: {
    video: true,
    audio: true,
    controls: true,
    autoplay: true,
    frameRate: { ideal: resMinFps, max: resMaxFps },
  },
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
        console.error(
          "Something went wrong when trying to set video element, trying again"
        );
      });
  }
}
streamFunc();
