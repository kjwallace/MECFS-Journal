import React, { useState } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LoginPage from './components/Login/Login';
import HomePage from './components/Home/Home';

const Page = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 97vw;
  overflow-x: hidden;
  padding-left: 1vw;
  padding-right: 1vw;

  background-color: #C0C0BF;
`;

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Placeholder function for handling login. Replace with your actual login logic.
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <Page>
        <Routes>
          <Route path='/' element={<LoginPage/>} />
          <Route path='/loggedIN' element={<HomePage/>} />
          {/* Add more routes for other pages/components */}
        </Routes>
      </Page>
    </Router>
  );
}

export default App;