import React, { useEffect, useState } from 'react';
import { format, parseISO } from 'date-fns';
import { ru } from 'date-fns/locale';
import Box from '@material-ui/core/Box';

export const StartServer = () => {
  const [date, setDate] = useState(
    format(new Date(), "d MMMM 'в' k:mm:ss", {
      locale: ru
    })
  );

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch('/startServer');
        const data = await response.json();

        setDate(
          format(parseISO(data.time), "d MMMM 'в' k:mm:ss", {
            locale: ru
          })
        );
      } catch (err) {
        console.log('Error receiving start server time');
      }
    })();
  }, []);

  return (
    <Box textAlign="center" my={5}>
      Сервер запущен {date}
    </Box>
  );
};
