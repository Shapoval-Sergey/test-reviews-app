import React, { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

import FlashMessage from "../Alerts";

import s from "./ReviewForm.module.css";

export default function ReviewForm({ getData }) {
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
      .post("http://localhost:5000/api/", {
        name,
        descr,
      })
      .then(({ data }) => {
        setMessage(data.status);
        setAlert(true);
      })
      .catch((e) => setMessage(e.message));

    getData();
    setDescr("");
  };

  const onSend = async (e) => {
    e = e || window.event;
    if (e.keyCode === 13 && e.ctrlKey) {
      await axios
        .post("http://localhost:5000/api/", {
          name,
          descr,
        })
        .then(({ data }) => {
          console.log(data);
          setMessage(data.status);
          setAlert(true);
        })
        .catch((e) => setMessage(e.message));
      getData();
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
          />
        </label>
        <label className={s.label}>
          Description:
          <textarea
            rows="5"
            cols="33"
            className={s.textarea}
            type="text"
            name="descr"
            value={descr}
            onChange={handleChangeDescr}
            placeholder="Enter description"
            onKeyDown={onSend}
            minLength="5"
            maxLength="200"
            pattern="^[a-zA-Z0-9,. ]*$"
            required
          ></textarea>
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
