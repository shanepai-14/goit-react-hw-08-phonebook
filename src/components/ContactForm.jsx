import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../redux/contactsThunks';
import { TextField, Button, Typography, Grid } from '@mui/material';
const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const { items, isLoading } = useSelector(state => state.contacts);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check for duplicate contacts
    if (items.some(contact => contact.name.toLowerCase() === name.toLowerCase())) {
      alert(`${name} is already in contacts.`);
      return;
    }

    // Dispatch the thunk to add a new contact
    dispatch(addContact({ name, number }));

    // Clear form fields
    setName('');
    setPhone('');
  };

  return (
    <form onSubmit={handleSubmit} noValidate autoComplete="off">
      <Grid container spacing={2} flexDirection={'column'}>
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            label="Name"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            sx={{marginBottom:1}}
          />
           <TextField
            fullWidth
            label="Phone Number"
            variant="outlined"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Grid>
        <Grid item xs={4}>
        <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            disabled={isLoading}
          >
            {isLoading ? 'Loading...' : 'Add Contact'}
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default ContactForm;
