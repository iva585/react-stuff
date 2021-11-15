import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import Stuff from './pages/Stuff/Stuff';
import Add from './pages/Add/Add';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      Landingpage
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="stuff">
          <Route path=":thingID" element={<Stuff />} />
        </Route>
        <Route path="/add" element={<Add />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
