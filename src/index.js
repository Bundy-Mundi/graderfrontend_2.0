import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./styles/reset.css";
import "./styles/global.css";
import { ApolloProvider } from "@apollo/react-hooks"
import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: 'https://grader-backend-2.herokuapp.com/',
});


ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={ client }>
        <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);