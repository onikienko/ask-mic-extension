function getAudioStream() {
   return navigator.mediaDevices
        .getUserMedia({video: false, audio: true})
        .catch((err) => console.error(`you got an error: ${err}`));
}

window.addEventListener('DOMContentLoaded', async () => {
    const stream = await getAudioStream();
    if (stream) {
        // you have a stream
        // do something
    } else {
        // not allowed by the user or some other error
        // do something
    }
});
