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
  const [disabled, setDisabled] = useState(true)
  const [user, setUser] = useState({})

  const change = event => {
    const { checked, value, name, type } = event.target;
    const valueToUse = type === "checkbox" ? checked : value
    setForm({ ...form, [name]: valueToUse})
  }
  const submit = event => {
    event.preventDefault()
    const newUser = { firstName: form.firstName.trim(), lastName: form.lastName.trim(), email: form.email, password: form.password, TermsOfService: form.TermsOfService }
    axios.post("https://reqres.in/api/users", newUser)
    .then(res => {
      setForm({firstName: "", lastName: "", email: "", password: "", TermsOfService: false})
    })
    .catch(err => {
      console.log(err);
    })
    .finally(val => {
      setUser(val)
    })
  }
  return (
    <div className="App">
      <Form form={form} change={change} submit={submit} disabled={disabled} />
      
    </div>
  );
}

export default App;
