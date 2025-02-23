import React from "react";
import Phonetic from "./Phonetic";
import Meaning from "./Meaning";

export default function Results(props) {
  if (props.result) {
    return (
      <div className="Results">
        <h2>{props.result.word}</h2>

        {props.result.phonetics.length > 0 && (
          <Phonetic phonetic={props.result.phonetics[0]} />
        )}

        {props.result.meanings.map(function (meaning, index) {
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
