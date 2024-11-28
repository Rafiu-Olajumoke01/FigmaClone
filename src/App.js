import logo from './logo.svg';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./App.css"




const Home = React.lazy(() => import("./Pages/Home/Home"))
const About = React.lazy(() => import("./Pages/About/About"))
const LastPage = React.lazy(() => import("./Pages/LastPage/LastPage"))
const Footer = React.lazy(() => import("./Pages/Footer/Footer"))



function App() {
  return (
    <div className="App">
      <React.Suspense>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/About' element={<About />} />
            <Route path='/LastPage' element={<LastPage />} />
            <Route path='/Footer' element={<Footer />} />
          </Routes>
        </BrowserRouter>
      </React.Suspense>

    </div >
  );
}

export default App;
