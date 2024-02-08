import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";



function Signup() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [data, setData] = useState(false);


  const handleRegister = (e) => {
    axios
      .post("https://dark-humour.onrender.com/user/signup", {
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(email);
        localStorage.setItem("email", email);
        console.log(response.data);
        setData(true);
        navigate("/", { state:{result3:data} });

      })
      .catch((error) => {
        setError(error.response.data.error);
      });
  
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <div className="max-w-xs mx-auto p-4 bg-gray-100 rounded shadow-md">
        <input
          type="text"
          onChange={(e) => handleChange(e)}
          name="email"
          value={email}
          placeholder="Email"
          className="mb-4 p-2 w-full border rounded"
        />
        <input
          type="password"
          onChange={(e) => handleChange(e)}
          name="password"
          value={password}
          placeholder="Password"
          className="mb-4 p-2 w-full border rounded"
        />
        <p className="text-red-500 m-2">{error}</p>
        <button
          onClick={() => handleRegister()}
          class="bg-green-400 text-white p-2 w-full rounded hover:bg-green-500"
        >
          Register
        </button>
        <Link to="/">
          <button className="bg-green-400 text-white p-2 my-2 w-full rounded hover:bg-green-500">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Signup;
