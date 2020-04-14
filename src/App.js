import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Components/partials/Header";
import Footer from "./Components/partials/Footer";
import Home from "./Components/Home";
import SearchResult from "./Components/SearchResult";

function App() {
  return (
    <>
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/search-result" component={SearchResult}/>
        <Route exact path="/:id" />
        <Route exact path="/" />
      </Switch>
    </Router>
    <Footer/>
    </>
  );
}

export default App;
