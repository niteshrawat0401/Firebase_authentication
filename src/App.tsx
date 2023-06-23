import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { MantineProvider, Text } from "@mantine/core";
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import { Home, Login } from './pages'
import { auth } from "./config";

function App() {
  useEffect(()=>{
    auth.onAuthStateChanged((user)=>{
      if(user) console.log(user);
      
    })
  }, [])
  return (
    <div className="App">
      <MantineProvider withGlobalStyles withNormalizeCSS>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/auth" element={<Login/>}/>
            </Routes>
          </BrowserRouter>
      </MantineProvider>
    </div>
  );
}

export default App;
