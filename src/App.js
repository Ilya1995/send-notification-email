import React from 'react';
import { StartServer } from './components/StartServer';
import { AddEmail } from './components/AddEmail';
import { EmailsList } from './components/EmailsList';
import Container from '@material-ui/core/Container';

export const App = () => (
  <Container maxWidth="sm">
    <StartServer />
    <AddEmail />
    <EmailsList />
  </Container>
);
