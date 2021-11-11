import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import Stuff from './pages/stuff/stuff';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      Landingpage
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route
          path="/about"
          element={<Link to="/contact">Contact here</Link>}
        />
        <Route path="/contact" element={<p>Contact</p>} />

        <Route path="/stuff">
          <Route path=":myStuff" element={<Stuff />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
