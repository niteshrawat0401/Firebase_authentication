import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { MantineProvider, Text } from "@mantine/core";
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import { Home } from './pages'
import { Login } from "./pages/Login/Login"

function App() {
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
