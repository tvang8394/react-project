import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
const useStyles = makeStyles({
  root: {
    maxWidth: 450,
    margin: 'auto',
  },
  media: {
    height: 100,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image=""
          title="Tennis Img"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Join Now
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Register to play tournaments
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}