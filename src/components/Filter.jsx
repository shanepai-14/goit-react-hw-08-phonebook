import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TextField } from '@mui/material';
import { setFilter } from '../redux/contactsSlice';

const Filter = () => {
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  return (
    <TextField
      fullWidth
      label="Search contacts"
      variant="outlined"
      value={filter}
      onChange={(e) => dispatch(setFilter(e.target.value))}
      placeholder="Search contacts"
    />
  );
};

export default Filter;
