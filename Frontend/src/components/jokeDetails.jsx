import React, { useEffect, useState } from "react";
import axios from "axios";

function JokeDetails() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    const fetchJokes = async () => {
      try {
        const response = await axios
          .get("http://localhost:3000/jokes")
          .then((res) => {
            setJokes(res.data);
            // console.log(res.data);
          })
          .catch((e) => console.log(e));
      } catch (error) {
        console.error("Error fetching jokes:", error);
      }
    };

    fetchJokes();
  }, []);

  return (
    <div>
      {jokes.map((joke) => (
        <div key={joke.id}>
          <h2>{joke.joke}</h2>
        </div>
      ))}
      
    </div>
  );
}

export default JokeDetails;
