import React, { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

import s from "./ReviewForm.module.css";

export default function ReviewForm({ getData }) {
  const [name, setName] = useState("");
  const [descr, setDescr] = useState("");

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeDescr = (e) => {
    setDescr(e.currentTarget.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.post("http://localhost:5000/api/", {
      name,
      descr,
    });

    getData();
    setDescr("");
  };

  const onSend = async (e) => {
    e = e || window.event;
    if (e.keyCode === 13 && e.ctrlKey) {
      await axios.post("http://localhost:5000/api/", {
        name,
        descr,
      });
      getData();
      setDescr("");
    }
  };

  return (
    <div>
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
            minLength="2"
            maxLength="30"
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
