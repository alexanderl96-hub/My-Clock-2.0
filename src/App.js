import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Home from './Components/Home/Home'
const memberImg2 = 'https://www.citypng.com/public/uploads/preview/png-apple-iphone-13-front-view-mockup-31628678178s9vsrvqjj5.png';


function App() {
  return (
    <div className="App"  >
      <Router  >
        <Routes >
          <Route exact path='/' element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
