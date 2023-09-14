var vid = document.getElementById("videoElement");
const wrapper = document.getElementById("wrapper");
const errorField = document.getElementById("errorField");
const selectBox = document.getElementById("selectBox");
const submitButton = document.getElementById("submitButton");
let resWidth;
let resHeight;
let resMinFps;
let resMaxFps;
selectBox.onchange = async () => {
  res = selectBox.value;
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
};

submitButton.onclick = function pee() {
  vid.style.width = 1280;
  vid.style.height = 720;
  wrapper.style.width = 1280;
  wrapper.style.height = 720;
  streamFunc();
};

// Set constraints for the video element, including setting the FPS to 55-60

// Set the video element to the camera
function streamFunc() {
  const constraints = {

      video: true,
      audio: true,
      controls: true,
      autoplay: true,
      height: { min: 720, max: 720},
      width: { min: 1280, max: 1280},
      frameRate: { ideal: 55, max: 60 },

  };

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
