import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Homepage from '../home/Homepage';
import { Container, ThemeProvider, createTheme } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

function App() {
  const themeSelect = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: "#0F2940"
        
      },
      secondary: {
        main: "#E95A21"
      },
    },
  });


  return (
    <>
      <ThemeProvider theme={themeSelect}>
        <Header />
        <Container>
          <Outlet />
        </Container>
        <Footer/>
      </ThemeProvider>

    </>

  );
}

export default App;
