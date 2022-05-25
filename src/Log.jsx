import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Main from "./Main";
import ProtectedRoute from "./ProtectedRoute";

function Log() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1",
    },
    {
      username: "user2",
      password: "pass2",
    },
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password",
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
  
    <div >
      <form onSubmit={handleSubmit}>
        <div className="input-container-u">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container-p">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>

        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div>
      <div className="login-form">
        {isSubmitted ? (
          <div>
            <Link className="Main" to="/Main">
               Search Now
            </Link>{" "}
            <Link className="Back" to="/App">
              Go back
            </Link>{" "}
          </div>
        ) : (
          renderForm
        )}
        <Routes>
          <Route element={<ProtectedRoute />} />
          <Route path="/Main" element={<Main />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default Log;
