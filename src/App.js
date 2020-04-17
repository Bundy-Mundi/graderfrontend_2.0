import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Components/partials/Header";
import Footer from "./Components/partials/Footer";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Chart from "./Components/Chart";
import SearchResult from "./Components/SearchResult";

function App() {
  return (
    <>
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About}/>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/search-result" component={SearchResult}/>
        <Route exact path="/view/:id" component={Chart}/>
      </Switch>
    </Router>
    <Footer/>
    </>
  );
}

export default App;
