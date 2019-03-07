import React, { useState } from 'react';
import { useFirebaseAuth } from '@use-firebase/auth';

import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/styles';

import Garage from './Garage';
import OpenedCount from './OpenedCount';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 400,
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    // transition: theme.transitions.create('transform', {
    //   duration: theme.transitions.duration.shortest,
    // }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  instructions: {
    textAlign: 'left',
    color: '#333',
  },
}));

//    <Header {...user} />

const AuthenticatedApp = () => {
  const { user } = useFirebaseAuth();
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  function handleExpandClick() {
    setExpanded(!expanded);
  }
  return (
    <Card>
      <CardContent className="garage-card">
        <Garage />
        <OpenedCount />
      </CardContent>
      <CardContent className={classes.instructions}>
        <h3>Instructions</h3>
        Click on the garage door opener keypad above to open/close the garage
        door. Note that you are effecting everyone who is running this app. In
        fact, open the app on two browsers (even on two computers) and see for
        yourself.
      </CardContent>
      <CardActions className={classes.actions} disableActionSpacing>
        <IconButton
          className={classnames(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="Show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <code>
            <pre>{JSON.stringify(user, undefined, 2)}</pre>
          </code>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default AuthenticatedApp;
