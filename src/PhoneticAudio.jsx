import React from "react";

export default function AudioPlayer({ audioSrc }) {
  function playAudio() {
    if (audioSrc) {
      new Audio(audioSrc).play();
    }
  }

  return (
    <button onClick={playAudio} className="AudioButton">
      🔊
    </button>
  );
}
