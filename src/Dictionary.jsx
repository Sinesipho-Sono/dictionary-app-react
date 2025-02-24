import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";
export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const [result, setResult] = useState(null);
  const [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResult(response.data[0]);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  function load() {
    setLoaded(true);
    search();
  }
  if (loaded) {
    return (
      <div className="Dictionary">
        <div className="header">
          <h1>Dictionary App</h1>
          <h2 className="header-h2">Look up a word:</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              value={keyword}
              placeholder="enter a word"
              onChange={handleKeywordChange}
            />
          </form>
          <div className="hint">suggested words: book, flight, nature...</div>
        </div>
        <Results result={result} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
