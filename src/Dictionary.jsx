import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";
export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [result, setResult] = useState(null);

  function handleResponse(response) {
    setResult(response.data);
  }
  function search(event) {
    event.preventDefault();
    let apiKey = "dfc8b6f54adt4d38bbe0o47364a63d82";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" value={keyword} onChange={handleKeywordChange} />
      </form>
      <Results result={result} />
    </div>
  );
}
