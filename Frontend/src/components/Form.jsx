import React, { useState } from "react";
import axios from "axios";

function Form() {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    console.log(value)
    e.preventDefault();
    axios
      .post("http://localhost:3000/jokes/", { joke: value })
      .then((res) => {
        console.log("Server response:", res.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add a joke"
          onChange={handleChange}
          value={value}
        />
        <button type="submit">ADD</button>
      </form>
    </div>
  );
}

export default Form;
