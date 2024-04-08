import React from 'react';
import MainRouter from './Router/MainRouter';
import { isAuthenticated } from './Utils/Requests/Auth';
import setAuthToken from './Utils/setAuthToken';
import "./App.css"

setAuthToken(isAuthenticated().token);

function App() {
  return (
    
    <MainRouter />
  
  );
}

export default App;
