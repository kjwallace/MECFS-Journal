import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { UserContext } from '../../contexts/user.context';
import  {Link, useLocation, useNavigate} from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();


const {user, fetchUser, emailPasswordLogin} = useContext(UserContext);


const [form, setForm] = useState({
  email: '',
  password: '',
});

const onFormInputChange = (event) => {
  const {name, value} = event.target;
  setForm({...form, [name]: value});
}

//redirects when user successfully logs in 
const redirectNow = () => {
  const redirectTo = location.search.replace('?redirectTo=', '');
  navigate(redirectTo ? redirectTo : '/');
}

// tracks user is reloaded 
const loadUser = async () => {
  if (!user) {
    const fetchedUser = await fetchUser();
    if (fetchedUser) { redirectNow(); 
    }
  }
}
useEffect(() => {
  loadUser();
}, [setLoggedIn]); 

const onSubmit = async (event) => {
  try {
    const user = await emailPasswordLogin(form.email, form.password);
    if (user) {
      redirectNow();
    }
  }
  catch (error) {
    if (error.statusCode === 401) {
      alert('Invalid username or password');
    
  }
  else { alert(error); }
  }


}
    return (

        <LoginForm>
            <Row>
                <Title>ME-CFS Symptom Journal</Title>
            </Row>

            <Input placeholder="Username" />
            <Input type="password" placeholder="Password" />
            <Row>
                <Button2 whileTap={{ scale: 0.95 }} whileHover={{ backgroundColor: '#FFF', color: '#820000' }} onClick={handleLoginClick}>Login</Button2>
                <Button2 whileTap={{ scale: 0.95 }} whileHover={{ backgroundColor: '#FFF', color: '#820000' }} >Forgot Login</Button2>
            </Row>


        </LoginForm>
    );
};

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 90%;
  height: auto;
  padding: 10px;
  margin-bottom: 10px;
`;

const LoginForm = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  min-width: 22vw;
  width: auto;
  min-height: 25vh;
  background-color: #EAEAEA;
  
  padding: 2vw;
  border: 1px solid black;
  border-radius: 8px;
  box-shadow: 10px 10px 10px 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  margin-bottom: 20px;
  background-color: #820000;
  padding: 20px;
  width: 100%;
  color: white;
  text-align: center;
  border-radius: 20px;
  font-size: 2rem;
`;

const Input = styled.input`
  min-width: 20vw;
  height: auto;
  padding: 10px;
  margin-bottom: 10px;
  font-size: 1.5rem;
`;

const Button = styled(motion.button)`
  width: 40%;
  padding: 10px;
  
  margin: 10px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const Button2 = styled(motion.button)`
  width: 40%;
  padding: 10px;
  
  margin: 10px;
  background-color: #820000;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1.5rem;
`;

export default LoginPage;