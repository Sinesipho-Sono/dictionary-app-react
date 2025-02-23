import React from "react";
import Synonyms from "./Synonyms";
export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h4>{props.meaning.partOfSpeech}</h4>
      <p>1. {props.meaning.definition}</p>
      {props.meaning.example && (
        <p>
          <em>
            2. <strong> Example:</strong> "{props.meaning.example}"
          </em>
        </p>
      )}
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
