import axios from "axios"
import React, { useState, useEffect } from "react"
import './App.css';



function App() {
  return (
    <div className="App">
      <form className="form">
        <label>First Name
          <input value="" name="firstName" type="text" />
        </label>
        <label>Last Name
          <input value="" name="firstName" type="text" />
        </label>
        <label>Email
          <input value="" name="email" type="email" />
        </label>
        <label>Password
          <input value="" name="password" type="password" />
        </label>
        <label>Terms of Service
          <input value="" name="TermsOfService" type="checkbox" />
        </label>
        <label>
          <button type="submit" className="button">submit</button>
        </label>
      </form>
    </div>
  );
}

export default App;
