import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";
export default function Meaning(props) {
  let { partOfSpeech, definitions } = props.meaning;

  return (
    <div className="Meaning">
      <h4>{partOfSpeech}</h4>
      {definitions.slice(0, 3).map((definition, index) => (
        <div key={index}>
          <div className="definition">{definition.definition}</div>
          <div className="example">
            {definition.example && <em>'' {definition.example}"</em>}
          </div>
        </div>
      ))}

      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
