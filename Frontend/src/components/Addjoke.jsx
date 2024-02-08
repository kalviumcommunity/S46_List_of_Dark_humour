import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Addjoke() {
  const [value, setValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const [data, setData] = useState(true);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!value.trim()) {
      setErrorMessage("Please enter a joke before submitting.");
      return;
    }

    axios
      .post("https://dark-humour.onrender.com/jokes/", { joke: value })
      .then((res) => {
        console.log("Server response:", res.data);
        navigate("/", { state: { result4: data } });
      })
      .catch((error) => {
        console.error("Error:", error);
        setErrorMessage("An error occurred while submitting the joke.");
      });
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-center h-screen bg-black"
      >
        <div className="max-w-xs mx-auto p-4 bg-gray-100 rounded shadow-md">
          <input
            type="text"
            placeholder="Add a joke"
            onChange={handleChange}
            value={value}
            className="mb-4 p-2 w-full border rounded"
          />
          {errorMessage && (
            <p className="text-red-500 text-sm mb-4">{errorMessage}</p>
          )}
          <button
            type="submit"
            className="bg-green-400 text-white p-2 w-full rounded hover:bg-green-500"
          >
            ADD
          </button>
        </div>
      </form>
    </div>
  );
}

export default Addjoke;
