import React, { Component, useState, useEffect } from "react";
import "../../../../../node_modules/bootstrap/dist/css/bootstrap.css";

export default function User() {
  const [userName, setUserName] = useState();

  const handleSubmit = () => {
    localStorage.setItem("username", userName);
  };

  const handleChange = (e) => {
    setUserName(e.target.value);
  };

    const localUser = localStorage.getItem("username");

  return (
    <>
     {!localUser && (
        <form>
        <div className="mb-3">
          <label className="form-label">Enter your name</label>
          <input
            type="text"
            className="form-control"
            id=""
            aria-describedby=""
            value={userName}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
          Submit
        </button>
      </form>
     )}
      {localUser && <h1>Hello {localUser}</h1>}
    </>
  );
}
