import axios from "axios"
import React, { useState, useEffect } from "react"
import './App.css';
import Form from "./Components/Form"


function App() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    TermsOfService: false
  })
  return (
    <div className="App">
      <Form form={form} />
    </div>
  );
}

export default App;
