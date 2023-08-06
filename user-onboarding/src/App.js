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

  const change = event => {
    const { checked, value, name, type } = event.target;
    const valueToUse = type === "checkbox" ? checked : value
    setForm({ ...form, [name]: valueToUse})
  }

  return (
    <div className="App">
      <Form form={form} change={change} />
    </div>
  );
}

export default App;
