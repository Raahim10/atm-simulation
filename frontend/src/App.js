import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';
import './App.css';

function App() {
  const [user, setUser] = useState(null);
  const [showRegister, setShowRegister] = useState(false);

  return (
    <div className="App">
      <h1 className='title'>ATM SIMULATION SYSTEM </h1>
      {!user ? (
        showRegister ? (
          <Register setUser={setUser} setShowRegister={setShowRegister} />
        ) : (
          <Login setUser={setUser} setShowRegister={setShowRegister} />
        )
      ) : (
        <Dashboard user={user} />
      )}
      <p className='footer'>
        DEVELOPED BY AUR
      </p>
    </div>


  );
}

export default App;
