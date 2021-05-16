import React from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";

import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  list: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
  },
  item: {
    listStyle: "none",
  },
  box: {
    border: "1px dashed blue",
    marginLeft: "10px",
    marginBottom: "10px",
    width: "900px",
  },
}));

export default function ReviewList({ reviews }) {
  const classes = useStyles();
  return (
    <ul className={classes.list}>
      {reviews.map((review) => (
        <ListItem
          alignItems="flex-start"
          className={classes.box}
          key={uuidv4()}
        >
          <ListItemText
            key={review.id}
            primary={`Name: ${review.name}`}
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.item}
                  color="textPrimary"
                ></Typography>
                {review.descr}
              </React.Fragment>
            }
          />
        </ListItem>
      ))}
    </ul>
  );
}

ReviewList.propTypes = {
  reviews: PropTypes.array.isRequired,
};
