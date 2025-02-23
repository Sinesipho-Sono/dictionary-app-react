import React from "react";
import Synonyms from "./Synonyms";
export default function Meaning(props) {
  let { partOfSpeech, definitions } = props.meaning;

  return (
    <div className="Meaning">
      <h4>{partOfSpeech}</h4>
      {definitions.slice(0, 2).map((definition, index) => (
        <div key={index}>
          <p>{definition.definition}</p>
          {definition.example && (
            <p>
              <em>Example: {definition.example}</em>
            </p>
          )}
        </div>
      ))}

      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
