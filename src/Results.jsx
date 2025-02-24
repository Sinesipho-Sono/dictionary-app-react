import React from "react";
import Phonetic from "./Phonetic";
import Meaning from "./Meaning";
import "./Results.css";
export default function Results(props) {
  if (props.result) {
    return (
      <div className="Results">
        <section>
          <h2>{props.result.word}</h2>

          {props.result.phonetics.length > 0 && (
            <Phonetic phonetic={props.result.phonetics[0]} />
          )}
        </section>
        {props.result.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <Meaning meaning={meaning} key={index} />
            </section>
          );
        })}
      </div>
    );
  } else return null;
}
