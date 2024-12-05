import React, { useState } from 'react';

function Form() {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");  
  const [message, setMessage] = useState("");  // New state for the message box

  const [userErr, setUserErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [passErr, setPassErr] = useState(false);
  const [phoneErr, setPhoneErr] = useState(false);  
  const [messageErr, setMessageErr] = useState(false); // Error state for the message box


  const [formData, setFormData] = useState(null);  // New state to store the form data

  // Email validation pattern
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phonePattern = /^[0-9]{10}$/;  // Phone number should be 10 digits

  // Handle form submission
  function loginHandle(e) {
    e.preventDefault();
    if (
      user.length < 3 ||
      password.length < 3 ||
      !emailPattern.test(email) ||
      !phonePattern.test(phone) ||
      message.trim().length === 0
    ) {
      alert("Please enter correct values in all fields.");
    } else {
      setFormData({
        user,
        email,
        phone,
        message,
      });  // Save form data when form is valid
    }
  }

  // Username validation handler
  function userHandler(e) {
    const inputValue = e.target.value;
    setUser(inputValue);

    if (inputValue.length < 3) {
      setUserErr(true);
    } else {
      setUserErr(false);
    }
  }

  // Email validation handler
  function emailHandler(e) {
    const inputValue = e.target.value;
    setEmail(inputValue);

    if (!emailPattern.test(inputValue)) {
      setEmailErr(true);
    } else {
      setEmailErr(false);
    }
  }

  // Password validation handler
  function passHandler(e) {
    const inputValue = e.target.value;
    setPassword(inputValue);

    if (inputValue.length < 3) {
      setPassErr(true);
    } else {
      setPassErr(false);
    }
  }

  // Phone number validation handler
  function phoneHandler(e) {
    const inputValue = e.target.value;
    setPhone(inputValue);

    if (!phonePattern.test(inputValue)) {
      setPhoneErr(true);
    } else {
      setPhoneErr(false);
    }
  }

  // Message box handler
  function messageHandler(e) {
    const inputValue = e.target.value;
    setMessage(inputValue);

    if (inputValue.trim().length === 0) {
      setMessageErr(true);
    } else {
      setMessageErr(false);
    }
  }

  return (
    <div style={{ margin: "20px" }}>
      <h1>Login</h1>
      <form onSubmit={loginHandle}>
        {/* Username Input */}
        <input
          type="text"
          placeholder="Enter username"
          onChange={userHandler}
        />
        {userErr && <span style={{ color: "red" }}> Username Not Valid!</span>}
        <br />

        {/* Email Input */}
        <input
          type="email"
          placeholder="Enter your email"
          onChange={emailHandler}
        />
        {emailErr && <span style={{ color: "red" }}> Invalid Email!</span>}
        <br />

        {/* Password Input */}
        <input
          type="password"
          placeholder="Enter password"
          onChange={passHandler}
        />
        {passErr && (
          <span style={{ color: "red" }}> Password Not Valid!</span>
        )}
        <br />

        {/* Phone Number Input */}
        <input
          type="text"
          placeholder="Enter phone number"
          onChange={phoneHandler}
        />
        {phoneErr && <span style={{ color: "red" }}> Invalid Phone Number!</span>}
        <br />

        {/* Message Box */}
        <textarea
          placeholder="Enter your message"
          onChange={messageHandler}
          rows="4" // Number of rows for the text box
          cols="50" // Number of columns for the text box
        />
        {messageErr && <span style={{ color: "red" }}> Message cannot be empty!</span>}
        <br />

        {/* Submit Button */}
        <button type="submit">Login</button>
      </form>

      {/* Display the filled form data */}
      {formData && (
        <div style={{ marginTop: "20px" }}>
          <h2>Form Data:</h2>
          <p><strong>Username:</strong> {formData.user}</p>
          <p><strong>Email:</strong> {formData.email}</p>
          <p><strong>Phone:</strong> {formData.phone}</p>
          <p><strong>Message:</strong> {formData.message}</p>
        </div>
      )}
    </div>
  );
}

export default Form;
