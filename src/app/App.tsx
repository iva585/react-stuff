import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import Stuff from './pages/stuff/stuff';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      Landingpage
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="stuff">
          <Route path=":thingID" element={<Stuff />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
