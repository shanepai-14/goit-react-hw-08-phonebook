import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ children }) => {
  const token = useSelector(state => state.auth.token);
  return token ? children : <Navigate to="/goit-react-hw-08-phonebook/login" />;
};

export default PrivateRoute;
