import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorBoundry from "./components/ErrorBoundry";
import Main from "./components/Main";
import Post from "./components/Post";
import toast, { Toaster } from 'react-hot-toast';

function App() {
  return (
    <BrowserRouter>
     <Toaster />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
