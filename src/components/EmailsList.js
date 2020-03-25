import React from 'react';
import { useSelector } from 'react-redux';
import {
  useFirebase,
  useFirebaseConnect,
  isLoaded,
  isEmpty
} from 'react-redux-firebase';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import { NotificationManager } from 'react-notifications';

export const EmailsList = () => {
  const firebase = useFirebase();
  useFirebaseConnect([{ path: 'emails' }]);

  const emails = useSelector(state => state.ordered.emails);

  const removeEmail = key => {
    firebase.remove(`emails/${key}`);
    NotificationManager.success('Email удален', 'Ура!');
  };

  return (
    <Box>
      {isLoaded(emails) ? (
        !isEmpty(emails) ? (
          <List>
            {emails.map(email => {
              return (
                <ListItem key={email.key} button divider>
                  <ListItemText primary={email.value} />
                  <ListItemSecondaryAction>
                    <IconButton
                      aria-label="comments"
                      onClick={() => removeEmail(email.key)}
                    >
                      <DeleteIcon style={{ color: 'red' }} />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              );
            })}
          </List>
        ) : (
          <Box textAlign="center" component="h3">
            Список пуст
          </Box>
        )
      ) : (
        <Box textAlign="center" component="h3">
          Loading . . .
        </Box>
      )}
    </Box>
  );
};
