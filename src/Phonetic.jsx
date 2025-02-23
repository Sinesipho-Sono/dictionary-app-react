import React from "react";
import PhoneticAudio from "./PhoneticAudio";
export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      {props.phonetic.audio && (
        <PhoneticAudio audioSrc={props.phonetic.audio} />
      )}
      <p>{props.phonetic.text}</p>
    </div>
  );
}
