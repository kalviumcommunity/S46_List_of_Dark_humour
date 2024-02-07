import axios from "axios";
import { React, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function UpdateJoke() {
  const navigate = useNavigate();
  const location = useLocation();

  const id = location.state || {};

  const [updatedJoke, setUpdatedJoke] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(id.id);

    if (!updatedJoke.trim()) {
      setError("Please enter a joke before submitting.");
      return;
    }

    axios
      .patch(`http://localhost:3000/jokes/${id.id}`, { joke: updatedJoke })
      .then((response) => {
        console.log("The joke has been updated", response);
        navigate("/");
        fetchJokes();
      })
      .catch((error) => {
        console.log("Error while updating:", error);
      });
  };

  const handleChange = (e) => {
    setUpdatedJoke(e.target.value);
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
            placeholder="Update a joke"
            onChange={handleChange}
            value={updatedJoke}
            className="mb-4 p-2 w-full border rounded"
          />
          <button
            type="submit"
            className="bg-green-400 text-white p-2 w-full rounded hover:bg-green-500"
          >
            Update
          </button>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>
      </form>
    </div>
  );
}

export default UpdateJoke;
