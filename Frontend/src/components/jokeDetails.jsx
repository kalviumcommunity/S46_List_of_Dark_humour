import React, { useEffect, useState } from "react";
import axios from "axios";

function JokeDetails() {
  const [jokes, setJokes] = useState([]);
  const [updatedJoke, setUpdatedJoke] = useState("");

  useEffect(() => {
    const fetchJokes = async () => {
      try {
        const response = await axios
          .get("http://localhost:3000/jokes")
          .then((res) => {
            setJokes(res.data);
          })
          .catch((e) => console.log(e));
      } catch (error) {
        console.error("Error fetching jokes:", error);
      }
    };

    fetchJokes();
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3000/jokes/${id}`).then((res) => {
      console.log("Joke deleted:", res.data);
      setJokes((prevJokes) => prevJokes.filter((joke) => joke._id !== id));
    });
    window.location.reload().catch((error) => {
      console.error("Error deleting joke:", error);
    });
  };

  const handleUpdate = (id) => {
    console.log(id);
    console.log(updatedJoke);
    axios
      .patch(`http://localhost:3000/jokes/${id}`, { joke:updatedJoke })
      .then((response) => {
        console.log("The joke has been updated", response);
      })
      window.location.reload()
      .catch((error) => {
        console.log("Error while updating:", error);
      });
  };

  return (
    <div>
      {jokes.map((joke) => (
        <div key={joke._id}>
          <h2>{joke.joke}</h2>
          <input
            type="text"
            value={updatedJoke}
            onChange={(e) => setUpdatedJoke(e.target.value)}
          />
          <button onClick={() => handleUpdate(joke._id)}>UPDATE</button>
          <button onClick={() => handleDelete(joke._id)}>DELETE</button>
        </div>
      ))}
    </div>
  );
}

export default JokeDetails;
