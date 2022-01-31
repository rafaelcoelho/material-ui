import './App.css';
import React, { Component, Fragment } from "react";
import RegisterForm from './components/RegisterForm/registerForm';
import { Container, Typography } from '@material-ui/core';
import 'fontsource-roboto'

function App() {
  return (
    <Container component={'article'} maxWidth='sm'>
      <Typography variant='h3' component={'h1'} align='center' >Register Form</Typography>
      <RegisterForm />
    </Container>
  );
}

export default App;