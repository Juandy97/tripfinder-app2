import React from 'react';
import { Component } from "react";
import { Route } from "react-router-dom";
import "./index.css";
import './App.css';

import Welcome from "./components/Welcome";
import Flights from "./components/Flights";
import SearchFlights from './components/SearchFlights';
import modelInstance from "./data/Model"
import SavedSearches from './components/SavedSearches';
import PurchaseView from "./components/PurchaseView";
import Home from './components/Home';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      title: "Tripfinder"
    };
  }

  render(){
    return (

      <div className="App">
        <header className="App-header">
        <h1 className="header">{this.state.title}</h1>
     
          {/* We rended diffrent component based on the path */}
          <Route exact path="/" component={Home}  />
          <Route exact path="/search" render={() => <SearchFlights model={modelInstance}/>} />
          <Route exact path="/flights" render={() => <Flights model= {modelInstance}/>}/>
          <Route exact path="/savedSearches" render={() => <SavedSearches model={modelInstance}/>} />
          <Route exact path="/purchase" render={() => <PurchaseView model= {modelInstance} flight={Flights}/>}/>
         
        </header>
      </div>
    );
  }
}

export default App;
