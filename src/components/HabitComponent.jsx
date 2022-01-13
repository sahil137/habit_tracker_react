import React from 'react';
import { Container, Divider, makeStyles, Typography } from '@material-ui/core';
import { Done, Cancel, HourglassEmptyOutlined } from '@material-ui/icons';
import { DONE, NONE, NOT_DONE } from '../constants/habitStatus';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: '10px',
  },
  statusBox: {
    height: '20px',
    width: '20px',
    margin: '20px',
    marginLeft: '10px',
    cursor: 'pointer',
  },
});
const HabitComponent = ({ habit }) => {
  const classes = useStyles();
  return (
    <>
      <Typography>
        {habit.title}: {habit.description}
      </Typography>
      <Container className={classes.container}>
        {habit.consistency.map((item) => {
          return (
            <>
              <div>
                <Typography>Day {item.day}</Typography>
                {/* <Typography>Status: {item.status}</Typography> */}
                <div className={classes.statusBox}>
                  {item.status === DONE ? <Done /> : null}
                  {item.status === NOT_DONE ? <Cancel /> : null}
                  {item.status === NONE ? <HourglassEmptyOutlined /> : null}
                </div>
              </div>
            </>
          );
        })}
      </Container>
      <Divider />
    </>
  );
};

export default HabitComponent;
