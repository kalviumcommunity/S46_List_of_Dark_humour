import React, { useState, useEffect } from "react";
import { Link,useNavigate } from "react-router-dom";

function Navbar() {
  const [user, setUser] = useState(false);
  const [usermail, setUsermail] = useState("");
  const navigate=useNavigate()
  useEffect(() => {
    // Check if the user is logged in when the component mounts
    if (localStorage.getItem("email")) {
      setUsermail(localStorage.getItem("email"));
      setUser(true);
    } else {
      setUser(false);
    }
  }, []);

  const handleLogout = () => {

    // Clear the user's email from localStorage and reset state
    localStorage.removeItem("email");
    setUsermail("");
    setUser(false);
    navigate("/",{state:user})

  };

  return (
    <div className="grid grid-cols-3 justify-between  bg-black text-center p-10">
      <div className="w-90"></div>
      <h4 className="text-3xl font-semibold text-white">Humour World</h4>
      <div className="flex items-center justify-end">
        {!user && (
          <>
            <Link to="/login">
              <button className="font-semibold text-white px-6 rounded m-2 bg-green-400">
                Log-in
              </button>
            </Link>
            <Link to="/signup">
              <button className="font-semibold text-white px-6 rounded m-2 bg-green-400">
                Sign-up
              </button>
            </Link>
          </>
        )}
        {user && (
          <>
            <p className="text-white m-2 font-semibold">{usermail}</p>
            {/* <Link to="/" state={{result:user}}> */}
              <button
                className="font-semibold text-white px-6 rounded m-2 bg-green-400"
                onClick={handleLogout}  
              >Logout
              </button>
            {/* </Link> */}
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
