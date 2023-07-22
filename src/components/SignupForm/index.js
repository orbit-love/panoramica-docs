import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import { useState } from 'react';

function SignupForm() {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Define the payload
    const payload = {
      email
    };

    // Define the options for the fetch request
    const options = {
      method: 'POST',
      body: JSON.stringify(payload)
    };

    // Send the post request

    fetch('https://app.orbit.love/submissions/59d63df6-a7a0-4770-81fe-0f6f2b43deba', options)
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="col col--8 col--offset-2 center">
      <h2 className="subhead">Signup for the hosted version</h2>
      <h3>If you'd like to try Panormica with your existing Orbit workspace, fill out this form and we'll reach out to enable it for you.</h3>
      <form onSubmit={handleSubmit} className="center">
        <label htmlFor="application-email">
        ✉️ Your email address
        </label>
        <input 
          type="email" 
          id="application-email" 
          value={email} 
          onChange={handleEmailChange} 
          required 
        />
        <button className="button button--secondary button--lg" type="submit">Signup</button>
      </form>
    </div>
  );
}

export default SignupForm;