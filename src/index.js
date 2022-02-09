import React from "react";
import ReactDOM from "react-dom";
import GraphiQL from "graphiql";
import fetch from "isomorphic-fetch";
import jsonData from "./schema.json";

import "./styles.css";

const url = "https://swapi-graphql.netlify.app/.netlify/functions/index";

function graphQLFetcher(graphQLParams) {
  return fetch(url, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(graphQLParams)
  }).then((response) => jsonData);
}

function App() {
  return (
    <div className="App">
      <GraphiQL fetcher={graphQLFetcher} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
