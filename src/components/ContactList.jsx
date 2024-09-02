import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { List, Grid, CircularProgress, Typography } from '@mui/material';
import { fetchContacts, deleteContact } from '../redux/contactsThunks';
import ContactItem from './ContactItem';
import Filter from './Filter';
const ContactList = () => {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector(state => state.contacts);
  const filter = useSelector(state => state.contacts.filter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filteredContacts = items.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  if (isLoading) return <CircularProgress />;
  if (error) return <Typography color="error">Error: {error}</Typography>;

  return (
    <Grid container spacing={2}>
        <Grid item xs={12} md={4}  sx={{ boxShadow:1}}>
        <Filter/>
    <List>
      {filteredContacts.map(contact => (
        <ContactItem
          key={contact.id}
          contact={contact}
          onDelete={() => dispatch(deleteContact(contact.id))}
        />
      ))}
    </List>
    </Grid>
    </Grid>
  );
};

export default ContactList;
