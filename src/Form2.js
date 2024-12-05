import React, { useRef, useState } from 'react';

function Form2() {
  const userRef = useRef(null);    
  const emailRef = useRef(null);   
  const passwordRef = useRef(null); 
  const phoneRef = useRef(null);   
  const messageRef = useRef(null); 

  const [errors, setErrors] = useState({}); 
  const [formData, setFormData] = useState(null);


  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phonePattern = /^[0-9]{10}$/; 

  const validateForm = () => {
    const errors = {};
    const user = userRef.current.value.trim();
    const email = emailRef.current.value.trim();
    const password = passwordRef.current.value.trim();
    const phone = phoneRef.current.value.trim();
    const message = messageRef.current.value.trim();

    if (user.length < 3) {
      errors.user = "Username must be at least 3 characters long.";
    }

    if (!emailPattern.test(email)) {
      errors.email = "Please enter a valid email address.";
    }

    if (password.length < 3) {
      errors.password = "Password must be at least 3 characters long.";
    }

    if (!phonePattern.test(phone)) {
      errors.phone = "Phone number must be exactly 10 digits.";
    }

    if (message.length === 0) {
      errors.message = "Message cannot be empty.";
    }

    return { isValid: Object.keys(errors).length === 0, errors };
  };

  const loginHandle = (e) => {
    e.preventDefault();

    const { isValid, errors } = validateForm();
    if (!isValid) {
      setErrors(errors);
    } else {
      setErrors({});
      setFormData({
        user: userRef.current.value.trim(),
        email: emailRef.current.value.trim(),
        password: passwordRef.current.value.trim(),
        phone: phoneRef.current.value.trim(),
        message: messageRef.current.value.trim(),
      });
    }
  };

  return (
    <div style={{ margin: "20px" }}>
      <h1>Login</h1>
      <form onSubmit={loginHandle}>
        
        <input type="text" placeholder="Enter username" ref={userRef} />
        {errors.user && <span style={{ color: "red" }}>{errors.user}</span>}
        <br />

        
        <input type="email" placeholder="Enter your email" ref={emailRef} />
        {errors.email && <span style={{ color: "red" }}>{errors.email}</span>}
        <br />

        <input type="password" placeholder="Enter password" ref={passwordRef} />
        {errors.password && <span style={{ color: "red" }}>{errors.password}</span>}
        <br />

        <input type="text" placeholder="Enter phone number" ref={phoneRef} />
        {errors.phone && <span style={{ color: "red" }}>{errors.phone}</span>}
        <br />

        <textarea
          placeholder="Enter your message"
          ref={messageRef}
          rows="4"
          cols="50"
        />
        {errors.message && <span style={{ color: "red" }}>{errors.message}</span>}
        <br />

        <button type="submit">Login</button>
      </form>

      {formData && (
        <div style={{ marginTop: "20px" }}>
          <h2>Form Data:</h2>
          <p><strong>Username:</strong> {formData.user}</p>
          <p><strong>Email:</strong> {formData.email}</p>
          <p><strong>Password:</strong> {formData.password}</p>
          <p><strong>Phone:</strong> {formData.phone}</p>
          <p><strong>Message:</strong> {formData.message}</p>
        </div>
      )}
    </div>
  );
}

export default Form2;
