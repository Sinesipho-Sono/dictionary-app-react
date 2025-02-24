import React from "react";
import PhoneticAudio from "./PhoneticAudio";
import "./Phonetic.css";
export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <div className="Phonetic-content">
        {props.phonetic.audio && (
          <PhoneticAudio audioSrc={props.phonetic.audio} />
        )}
        <p>{props.phonetic.text}</p>
      </div>
    </div>
  );
}
