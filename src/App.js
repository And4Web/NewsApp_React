import React, { Component } from 'react';
import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Home';
// import RoutesComponent from './RoutesComponent';


class App extends Component {
  render() {
    return (
      <div> 
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/international' element={<h1>international</h1>}/>
          <Route exact path='/entertainment' element={<h1>entertainment</h1>}/>
          <Route exact path='/sports' element={<h1>sports</h1>}/>
          <Route exact path='/health' element={<h1>health</h1>}/>
          <Route exact path='/misc' element={<h1>misc</h1>}/>
        </Routes>  
      </div>
    );
  }
}

export default App;
