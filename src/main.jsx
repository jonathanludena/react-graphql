import React from "react";
import { render } from "react-dom";
import { ApolloProvider } from "@apollo/client";

import "./index.css";
import App from "./App";

import { client } from "./persons/apollo-config";

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
