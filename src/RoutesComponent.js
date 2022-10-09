import React from 'react';
import {Routes, Route} from 'react-router-dom';

function RoutesComponent() {
  return (
    <div>
      <Routes>
          <Route exact path='/' element={<h1>home</h1>}/>
          <Route exact path='/international' element={<h1>international</h1>}/>
          <Route exact path='/entertainment' element={<h1>entertainment</h1>}/>
          <Route exact path='/sports' element={<h1>sports</h1>}/>
          <Route exact path='/health' element={<h1>health</h1>}/>
          <Route exact path='/misc' element={<h1>misc</h1>}/>
        </Routes>    
    </div>
  )
}

export default Routes