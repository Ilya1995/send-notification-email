import React, { useState } from 'react';
import { useFirebase, useFirebaseConnect } from 'react-redux-firebase';
import Button from '@material-ui/core/Button';
import AddCircleOutline from '@material-ui/icons/AddCircleOutline';
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { NotificationManager } from 'react-notifications';
import { validate } from 'email-validator';

export const AddEmail = () => {
  const [newEmail, setNewEmail] = useState('');
  const firebase = useFirebase();
  useFirebaseConnect([{ path: 'emails' }]);

  const addEmail = () => {
    const email = newEmail.trim();

    if (validate(email)) {
      firebase.push('emails', email);
      setNewEmail('');
      NotificationManager.success('Email добавлен', 'Ура!');
    } else {
      NotificationManager.error('Email не прошел валидацию', 'Отстой!');
    }
  };

  return (
    <Box id="add-email" mb={2}>
      <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="center"
      >
        <TextField
          id="standard-basic"
          style={{ width: '70%' }}
          value={newEmail}
          onChange={event => setNewEmail(event.target.value)}
        />
        <IconButton
          aria-label="comments"
          onClick={addEmail}
          className="icon-button_add-email"
        >
          <AddCircleOutline color="primary" fontSize="large" />
        </IconButton>
        <Button
          variant="contained"
          onClick={addEmail}
          color="primary"
          className="button_add-email"
        >
          Добавить
        </Button>
      </Grid>
    </Box>
  );
};
