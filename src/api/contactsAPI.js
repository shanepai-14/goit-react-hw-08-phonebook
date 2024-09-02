import axios from 'axios';

const API_URL = 'https://66cc5c59a4dd3c8a71b754ec.mockapi.io/contacts';

export const fetchContactsAPI = () => axios.get(API_URL);
export const addContactAPI = (contact) => axios.post(API_URL, contact);
export const deleteContactAPI = (contactId) => axios.delete(`${API_URL}/${contactId}`);
