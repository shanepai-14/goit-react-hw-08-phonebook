import { createAsyncThunk } from '@reduxjs/toolkit';
import API from '../api/api';

// Fetch all user contacts
export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  const response = await API.get('/contacts');
  return response.data;
});

// Add a new contact
export const addContact = createAsyncThunk('contacts/addContact', async (newContact) => {
  const response = await API.post('/contacts', newContact);
  return response.data;
});

// Delete a contact by ID
export const deleteContact = createAsyncThunk('contacts/deleteContact', async (id) => {
  await API.delete(`/contacts/${id}`);
  return id;
});

// Update an existing contact by ID
export const updateContact = createAsyncThunk('contacts/updateContact', async ({ id, updatedContact }) => {
  const response = await API.patch(`/contacts/${id}`, updatedContact);
  return response.data;
});
