import './App.css';
import React from 'react'
import Login from './Components/Login/Login';
import Dashboard from './Components/Dashboard/Dashboard';
import useLocalStorage from './Hooks/useLocalStorage'
import { ContactsProvider } from './Context/ContactsProvider';
import { ConversationsProvider } from './Context/ConversationsProvider';

function App() {
  const [id, setId] = useLocalStorage('id')

  const dashboard = (
    <ContactsProvider>
      <ConversationsProvider>
        <Dashboard id={id} />
      </ConversationsProvider>
    </ContactsProvider>
  )

  return (
      id ? dashboard : <Login onIdSubmit={setId} />
  );
}

export default App;
