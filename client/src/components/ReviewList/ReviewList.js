import React from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";

import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import Loader from "../Loader";

const useStyles = makeStyles((theme) => ({
  list: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    alignItems: "center",
  },
  item: {
    listStyle: "none",
  },
  box: {
    border: "1px dashed blue",
    marginLeft: "10px",
    marginBottom: "10px",
    width: "80vw",
  },
}));

export default function ReviewList({ reviews, load, hasError }) {
  const classes = useStyles();

  return (
    <>
      {hasError && <h1 style={{ textAlign: "center" }}>Error fetch data</h1>}
      {load ? (
        <Loader />
      ) : (
        <ul className={classes.list}>
          {reviews &&
            reviews.map((review) => (
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
      )}
    </>
  );
}

ReviewList.propTypes = {
  reviews: PropTypes.array,
  load: PropTypes.bool,
  hasError: PropTypes.bool,
};
