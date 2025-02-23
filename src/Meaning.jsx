import React from "react";
import Synonyms from "./Synonyms";
export default function Meaning(props) {
  let { partOfSpeech, definitions } = props.meaning;

  return (
    <div className="Meaning">
      <h4>{partOfSpeech}</h4>
      {definitions.slice(0, 3).map((definition, index) => (
        <div key={index}>
          <p>
            1. <strong>Definition:</strong> {definition.definition}
          </p>
          {definition.example && (
            <p>
              2.
              <em>
                {" "}
                <strong>Example:</strong> {definition.example}
              </em>
            </p>
          )}
        </div>
      ))}

      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
