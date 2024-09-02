import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { signupUser } from '../redux/authSlice'; // Your registration action
import { useNavigate } from 'react-router-dom';
const RegisterPage = () => {
    const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector(state => state.auth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const resultAction = await dispatch(signupUser({ email,name, password }));
        if (signupUser.fulfilled.match(resultAction)) {
          // Redirect to contacts page on success
          navigate('/goit-react-hw-08-phonebook/contacts');
        }
      } catch (error) {
        console.error('Failed to register:', error);
      }
  };

  return (
    <Container maxWidth="xs">
      <Box sx={{ mt: 8 }}>
        <Typography variant="h4" gutterBottom>Register</Typography>
        <form onSubmit={handleSubmit}>
        <TextField
            fullWidth
            type='text'
            label="Name"
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <TextField
            fullWidth
            label="Email"
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button variant="contained" color="primary" fullWidth type="submit" sx={{ mt: 2 }}>
            Register
          </Button>
          {error && <p>{error}</p>}
        </form>
      </Box>
    </Container>
  );
};

export default RegisterPage;
