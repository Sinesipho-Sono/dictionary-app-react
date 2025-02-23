import React from "react";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h4>{props.meaning.partOfSpeech}</h4>
      <p>
        1.
        {props.meaning.definition}
      </p>
      {props.meaning.example && (
        <p>
          <em>2. "{props.meaning.example}"</em>
        </p>
      )}
    </div>
  );
}
