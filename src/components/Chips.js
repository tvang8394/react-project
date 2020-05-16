import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import FaceIcon from "@material-ui/icons/Face";
import DoneIcon from "@material-ui/icons/Done";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5),
    },
    color: "red",
  },
}));

export default function Chips() {
  const classes = useStyles();

  const handleClick = () => {
    console.info("You clicked the Chip.");
  };

  return (
    <div className={classes.root}>
      <Chip
        avatar={<Avatar>T1</Avatar>}
        label="Tournament 1"
        onClick={handleClick}
        color="primary"
      />
      <Chip
        avatar={<Avatar>T2</Avatar>}
        label="Tournament 2"
        onClick={handleClick}
        color="secondary"

      />
      <Chip
        avatar={<Avatar>T3</Avatar>}
        label="Tournament 3"
        onClick={handleClick}
        color="primary"

      />
      <Chip
        avatar={<Avatar>T4</Avatar>}
        label="Tournament 4"
        onClick={handleClick}
        color="secondary"

      />
      <Chip
        avatar={<Avatar>T5</Avatar>}
        label="Tournament 5"
        onClick={handleClick}
        color="primary"
      />
      
      
    </div>
  );
}
