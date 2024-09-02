import React from 'react';
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom';
import RegisterPage from './components/Register';
import LoginPage from './components/Login';
import PrivateRoute from './components/PrivateRoute'; // Protect contacts route
import Navigation from './components/Navigation';
import ContactForm from './components/ContactForm';
import UserMenu from './components/UserMenu';
import ContactList from './components/ContactList';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './redux/persist';
const ContactsPage = () => {
  return (
    <div>
      <UserMenu />
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <ContactList />
    </div>
  );
}


const router = createBrowserRouter([
  {
    path: "/goit-react-hw-08-phonebook",
    element: (
      <div>
        <Navigation />
        <h1>Welcome to Contact Book</h1>
      </div>
    ),
  },
  {
    path: "/goit-react-hw-08-phonebook/register",
    element: <>
         <Navigation />
    <RegisterPage />
    </>,
  },
  {
    path: "/goit-react-hw-08-phonebook/login",
    element: <>
       <Navigation />
    <LoginPage />
    </>,
  },
  {
    path: "/goit-react-hw-08-phonebook/contacts",
    element: (
      <PrivateRoute>
        <ContactsPage />
      </PrivateRoute>
    ),
  },
]);

function App() {
  return (
    <PersistGate loading={null} persistor={persistor}>
      <RouterProvider router={router} />
    </PersistGate>
  );
}

export default App;
