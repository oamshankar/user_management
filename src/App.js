import React from 'react';
import './App.css';
import Createuser from './Createuser';
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Table from "./Table";

function App() {
  return (
    <>
  <ToastContainer></ToastContainer>
    <Router>
      <Routes>
        <Route path="/" element={<Table/>}/>
        <Route path="/createuser" element={<Createuser/>}/>
    </Routes>
    </Router>
    </>
   
  );
}

export default App;
