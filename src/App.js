import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Counter from './Counter';
import Form from './Form';
import { Routes, Route, Link } from "react-router-dom";
import Links from './Link';
import Time from './Time';
import Queue from './Queue';
import Effect from './Effect';
function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Links />} />
                <Route path="/form" element={<Form />} />
                <Route path="/counter" element={<Counter />} />
                <Route path="/time" element={<Time />} />
                <Route path="/queue" element={<Queue />} />
                <Route path="/effect" element={<Effect />} />
               
            </Routes>
          
        </div>
    );
}
export default App;