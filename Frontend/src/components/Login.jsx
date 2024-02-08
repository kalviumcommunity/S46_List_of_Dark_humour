import React, { useState ,useEffect} from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setError(null);
    
    axios
      .post("https://dark-humour.onrender.com/user/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        // Handle successful login
        localStorage.setItem("email", email);
        navigate("/");
      })
      .catch((error) => {
        setError(error.response.data.error);
      });
  };

  const handleChange = (e) => {
    // console.log(e)
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
          onChange={handleChange}
          name="email"
          value={email}
          placeholder="Email"
          className="mb-4 p-2 w-full border rounded"
        />
        <input
          type="password"
          onChange={handleChange}
          name="password"
          value={password}
          placeholder="Password"
          className="mb-4 p-2 w-full border rounded"
        />
        {error && <p className="text-red-500 m-2">{error}</p>}
        <button
          onClick={handleLogin} // Pass event argument here
          className="bg-green-400 text-white p-2 w-full rounded hover:bg-green-500"
        >
          Log-in
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

export default Login;
