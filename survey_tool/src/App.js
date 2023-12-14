import React, { useState } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LoginPage from './components/Login/Login';
import HomePage from './components/Home/Home';
import './App.css'; 

const Page = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;

  overflow-x: hidden;


  background-color: #EAEAEA;
`;

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Placeholder function for handling login. Replace with your actual login logic.
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/loggedIN' element={<LoginPage/>} />
          <Route path='/' element={<HomePage/>} />
          {/* Add more routes for other pages/components */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
