import React from "react";
import Meaning from "./Meaning";
export default function Results(props) {
  if (props.result) {
    let filteredMeanings = props.result.meanings.filter((meaning) =>
      ["noun", "verb", "adjective"].includes(meaning.partOfSpeech)
    );

    let firstThreeMeanings = filteredMeanings.slice(0, 3);
    return (
      <div className="Results">
        <h2>{props.result.word}</h2>
        <h3>/{props.result.phonetic}/</h3>

        {firstThreeMeanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} key={index} />
            </div>
          );
        })}
      </div>
    );
  } else return null;
}
