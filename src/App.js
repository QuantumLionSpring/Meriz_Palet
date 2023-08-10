
import './App.css';

import React from "react";


import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter ,Routes, Route } from "react-router-dom";

// Navbas bileşenindeki <Router> etiketini kaldırın
import Blog from './Pages/Blog'
import HomePage from './Pages/Homepage'
import Foto from "./Pages/Foto";
import Document from "./Pages/Document";
import SSS from "./Pages/sss";


function App() {
    return (
        <div className="App">
<BrowserRouter>
<Routes>
                <Route path='/' element={<HomePage/>}/>
              <Route path='/Blog' element={<Blog/>}/>
    <Route path='/Foto' element={<Foto/>}/>
    <Route path='/Document' element={<Document/>}/>
    <Route path='/SSS' element={<SSS/>}/>
</Routes>
</BrowserRouter>

        </div>
    );
}

export default App;
