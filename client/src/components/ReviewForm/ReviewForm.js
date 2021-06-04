import React, { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

import FlashMessage from "../Alerts";

import s from "./ReviewForm.module.css";

const baseUrl = "https://radiant-tundra-36046.herokuapp.com/api";

export default function ReviewForm({ reviews, setReviews }) {
  const [name, setName] = useState("");
  const [descr, setDescr] = useState("");
  const [alert, setAlert] = useState(false);
  const [message, setMessage] = useState(false);

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeDescr = (e) => {
    setDescr(e.currentTarget.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios
      .post(baseUrl, {
        name,
        descr,
      })
      .then(({ data }) => {
        setReviews([data.currentReview, ...reviews]);
        setMessage(data.status);
        setAlert(true);
      })
      .catch((e) => setMessage(e.message));

    setDescr("");
  };

  const onSend = async (e) => {
    e = e || window.event;
    if (e.keyCode === 13 && e.ctrlKey) {
      await axios
        .post(baseUrl, {
          name,
          descr,
        })
        .then(({ data }) => {
          setReviews([data.currentReview, ...reviews]);
          setMessage(data.status);
          setAlert(true);
        })
        .catch((e) => setMessage(e.message));

      setDescr("");
    }
  };

  return (
    <div>
      {alert ? <FlashMessage message={message} /> : ""}
      <h1 className={s.title}>Leave your review here:</h1>
      <form onSubmit={handleSubmit} className={s.form}>
        <label className={s.label}>
          Name:
          <input
            className={s.input}
            type="text"
            name="name"
            value={name}
            onChange={handleChangeName}
            placeholder="Enter name"
            minLength="3"
            maxLength="30"
            pattern="^[a-zA-Z ]+$"
            required
            onKeyDown={onSend}
          />
        </label>
        <label className={s.label}>
          Description:
          <input
            className={s.textarea}
            type="text"
            name="descr"
            value={descr}
            onChange={handleChangeDescr}
            placeholder="Enter description"
            onKeyDown={onSend}
            minLength="3"
            maxLength="200"
            required
          ></input>
        </label>

        <button type="submit" className={s.btn}>
          Add review
        </button>
      </form>
    </div>
  );
}

ReviewForm.propTypes = {
  name: PropTypes.string,
  descr: PropTypes.number,
};
