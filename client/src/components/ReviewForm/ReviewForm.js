import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

import s from "./ReviewForm.module.css";

export default function ReviewForm() {
  const [name, setName] = useState("");
  const [descr, setDescr] = useState("");
  const [errorName, setErrorName] = useState("");
  const [errorDescr, setErrorDescr] = useState("");

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeDescr = (e) => {
    setDescr(e.currentTarget.value);
  };

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      if (name === "") {
        setErrorName(true);
        return;
      }

      if (descr === "") {
        setErrorDescr(true);
        return;
      }

      axios
        .post("http://localhost:5000/api/", { name, descr })

        .then((data) => data)
        .catch((e) => console.log(e));
    },
    [name, descr],
  );

  // useEffect(() => {
  //   window.M.updateTextFields();
  // }, []);

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <label className={s.label}>
        Name:
        <input
          className={!errorName ? s.input : s.error}
          type="text"
          name="name"
          value={name}
          onChange={handleChangeName}
          placeholder="Enter name"
        />
      </label>
      <label className={s.label}>
        Description:
        <input
          className={!errorDescr ? s.input : s.error}
          type="text"
          name="descr"
          value={descr}
          onChange={handleChangeDescr}
          placeholder="Enter description"
        ></input>
      </label>

      <button type="submit" className={s.btn}>
        Add contact
      </button>
    </form>
  );
}

ReviewForm.propTypes = {
  name: PropTypes.string,
  descr: PropTypes.number,
};
