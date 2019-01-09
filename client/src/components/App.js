import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Albums from './Albums';
import Pictures from './Pictures'
import Photo from './Photo'


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path = '/' component= {Albums}/>
          <Route path = '/albums/:id' component= {Pictures}/>
          <Route path = '/photos/id' component= {Photo}/>
        </div>  
     </Router>
      );
    }
  }

export default App;
