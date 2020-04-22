import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollToTop from 'react-router-scroll-top';
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
    <Router onUpdate={() => window.scrollTo(0, 0)}>
      <ScrollToTop>
        <Header/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About}/>
          <Route exact path="/contact" component={Contact}/>
          <Route exact path="/search-result" component={SearchResult}/>
          <Route exact path="/view/:id" component={Chart}/>
        </Switch>
      </ScrollToTop>
    </Router>
    <Footer/>
    </>
  );
}

export default App;
