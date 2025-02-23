import React from "react";
import Meaning from "./Meaning";
export default function Results(props) {
  if (props.result) {
    return (
      <div className="Results">
        <h2>{props.result.word}</h2>
        <h3>/{props.result.phonetic}/</h3>

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
