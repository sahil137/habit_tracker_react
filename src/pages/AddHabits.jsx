import {
  Button,
  Container,
  makeStyles,
  TextField,
  Typography,
} from '@material-ui/core';
import { KeyboardArrowRight } from '@material-ui/icons';
import React, { useState } from 'react';

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: 'block',
    width: '600px',
  },
  title: {
    fontSize: '2rem',
  },
  container: {
    padding: '20px',
  },
});

const AddHabits = () => {
  // hooks to set title and details of habit
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');

  // error states
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    // set error state to false of text fields
    setTitleError(false);
    setDetailsError(false);

    if (title === '') {
      setTitleError(true);
    }
    if (details === '') {
      setDetailsError(true);
    }
  };
  const classes = useStyles();
  return (
    <Container size="sm" className={classes.container}>
      <Typography
        variant="h6"
        color="textPrimary"
        gutterBottom
        className={classes.title}
      >
        {' '}
        Create a new Habit
      </Typography>
      <form onSubmit={handleSubmit} autoComplete="off" noValidate>
        <TextField
          className={classes.field}
          variant="outlined"
          label="Habit Title"
          color="primary"
          required
          error={titleError}
          onChange={(event) => setTitle(event.target.value)}
        />
        <TextField
          className={classes.field}
          variant="outlined"
          label="Habit Description"
          color="primary"
          fullWidth
          rows={3}
          required
          error={detailsError}
          onChange={(event) => setDetails(event.target.value)}
        />
        <Button
          type="submit"
          color="primary"
          variant="contained"
          endIcon={<KeyboardArrowRight />}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default AddHabits;
