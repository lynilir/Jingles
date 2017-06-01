var audioContext = new (window.AudioContext || window.webKitAudioContext)();
// Our audio context
var source = null; // This is the BufferSource containing the buffered audio


// Used the File API in order to asynchronously obtain the bytes of the file that the user selected in the
// file input box. The bytes are returned using a callback method that passes the resulting ArrayBuffer.

const sounds = [
  "sounds/0.mp3",
];

function loadSounds(sources, cb) {
  sources.forEach( (url) => {
    let request = new XMLHttpRequest();
    request.open("GET", url, true);
    request.responseType = "arraybuffer";
    request.onload = () => {
      this.context.decodeAudioData(request.response, (soundBuffer) => {
          this.buffers.push(soundBuffer);
        });
      };

    request.send();
  });
}


function decodeMp3BytesFromArrayBufferAndPlay(mp3BytesAsArrayBuffer) {

  // The AudioContext will asynchronously decode the bytes in the ArrayBuffer for us and return us
  // the decoded samples in an AudioBuffer object.
  audioContext.decodeAudioData(mp3BytesAsArrayBuffer, function (decodedSamplesAsAudioBuffer) {

    // Clear any existing audio source that we might be using
    if (source != null) {
      source.disconnect(audioContext.destination);
      source = null; // Leave existing source to garbage collection
    }

    // In order to play the decoded samples contained in the audio buffer we need to wrap them in
    // an AudioBufferSourceNode object. This object will stream the audio samples to any other
    // AudioNode or AudioDestinationNode object.
    source = audioContext.createBufferSource();
    source.buffer = decodedSamplesAsAudioBuffer; // set the buffer to play to our audio buffer
    source.connect(audioContext.destination); // connect the source to the output destinarion
    source.start(0); // tell the audio buffer to play from the beginning
  });

}


// Assign event handler for when the 'Play' button is clicked
document.addEventListener("onClick", function (event) {
    loadSounds(sounds, function (mp3BytesAsArrayBuffer) {
      // Pass the ArrayBuffer to the decode method
      decodeMp3BytesFromArrayBufferAndPlay(mp3BytesAsArrayBuffer);

    });
});






// var dogBarkingBuffer = null;
// // Fix up prefixing
// window.AudioContext = window.AudioContext || window.webkitAudioContext;
// var context = new AudioContext();
//
// function loadSound() {
// var request = new XMLHttpRequest();
// request.open('GET', "sounds/0.mp3", true);
// request.responseType = 'arraybuffer';
//
// // Decode asynchronously
// request.onload = function() {
//   console.log(typeof request.responseType);
// };
// request.send();
// }
