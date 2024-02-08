import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";

function Content() {
  const [jokes, setJokes] = useState([]);
  const [logged, setLogged] = useState(false);

  const location = useLocation();
  // console.log(location);
  const { result1, result2 } = location.state || {};

  useEffect(() => {
    const fetchJokes = async () => {
      try {
        const response = await axios
          .get("https://dark-humour.onrender.com/jokes/")
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
    axios
      .delete(`https://dark-humour.onrender.com/jokes/${id}`)
      .then((res) => {
        console.log("Joke deleted:", res.data);
        setJokes((prevJokes) => prevJokes.filter((joke) => joke._id !== id));
      })
      .catch((error) => {
        console.error("Error deleting joke:", error);
      });
  };

  useEffect(() => {
    console.log(result1, result2);
    if (result1 === undefined && result2 === undefined) {
      setLogged(false);
    }
    if (result1 === false) {
      setLogged(true);
    }
    if (result2 === true) {
      setLogged(false);
    }
  }, [result1, result2]);

  return (
    <>
      <div className="bg-black flex justify-center">
        {logged && (
          <Link to="/addjoke">
            <button className="text-lg font-semibold text-white px-6 rounded m-2 bg-green-400">
              Offend more
            </button>
          </Link>
        )}
      </div>
      {!logged && (
        <p className="text-white underline border-dashed flex justify-center text-lg font-semibold ">
          Welcome to humour world to offend more after login
        </p>
      )}
      <div className="bg-black  flex justify-center content-center p-10 overflow-hidden">
        <div className="flex items-center flex-col  text-left mx-10">
          {jokes.map((joke) => (
            <div className="mb-6 w-full" key={joke._id}>
              <h2 className="text-white flex justify-between">
                {joke.joke}
                <span>
                  <Link to={"/updatejoke"} state={{ id: joke._id }}>
                    <button className="bg-white text-black mx-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="white"
                        className="w-6 h-6 bg-black"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                        />
                      </svg>
                    </button>
                  </Link>

                  <button
                    className="bg-white text-black mx-3"
                    onClick={() => handleDelete(joke._id)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="white"
                      className="w-6 h-6 bg-black"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                      />
                    </svg>
                  </button>
                </span>
              </h2>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Content;
