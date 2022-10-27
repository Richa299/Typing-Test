import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import UserPage from './Pages/UserPage';
import Home from './Pages/Home';
import AlertSnackbar from './MyComponents/Alert';
import { ThemeProvider } from "styled-components";
import { useTheme } from './Context/ThemeContext';
import { GlobalStyles } from './styles/global';

function App() {
  const {theme} = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
       <AlertSnackbar/>
    <Routes>
  
      <Route path='/' exact element={<Home/>} />
      <Route path='/user' element={<UserPage/>} />
   
     </Routes>
      </ThemeProvider>
   
  );
}

export default App;
