import React, { Component } from 'react';

import MainPage from "./containers/MainPage/MainPage"
import {BrowserRouter} from "react-router-dom"

class App extends Component {
  render () {
    return (
      <BrowserRouter>
      <div className="App">
       <MainPage />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
