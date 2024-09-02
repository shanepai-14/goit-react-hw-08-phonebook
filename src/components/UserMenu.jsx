import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../redux/authSlice'; // Your logout action

const UserMenu = () => {
  const dispatch = useDispatch();
  const email = useSelector(state => state.auth.user?.email); // Handle possible null user

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
      <Typography variant="body1">{email}</Typography>
      <Button
        variant="contained"
        color="secondary"
        onClick={handleLogout}
      >
        Logout
      </Button>
    </Box>
  );
};

export default UserMenu;
