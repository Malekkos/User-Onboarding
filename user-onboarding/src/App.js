import axios from "axios"
import React, { useState, useEffect } from "react"
import './App.css';
import Form from "./Components/Form"
import schema from "./Validation/formSchema"
import * as yup from "yup"


function App() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    TermsOfService: false
  })
  const initialFormErrors = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    TermsOfService: ""
  }
  const [disabled, setDisabled] = useState(true)
  const [users, setUser] = useState([])
  const [formErrors, setFormErrors] = useState(initialFormErrors);

  
  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: ""}))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0]}))
  }
  
  const change = event => {
    const { checked, value, name, type } = event.target;
    const valueToUse = type === "checkbox" ? checked : value
    validate(name, value);
    setForm({ ...form, [name]: valueToUse})
  }
  const submit = event => {
    event.preventDefault()
    const newUser = { firstName: form.firstName.trim(), lastName: form.lastName.trim(), email: form.email, password: form.password, TermsOfService: form.TermsOfService }
    axios.post("https://reqres.in/api/users", newUser)
    .then(res => {
      console.log(res);
      console.log(newUser);
      setUser([res.data, ...users])

    })
    .catch(err => {
      console.log(err);
    })
    .finally(() => {
      
      setForm({firstName: "", lastName: "", email: "", password: "", TermsOfService: false})
    })
    
  }
  return (
    <div className="App">
      <Form form={form} change={change} submit={submit} disabled={disabled} errors={formErrors} />
      {users.map(user => (
        <div>
          <h2>{user.firstName} {user.lastName}</h2>
          <h3>{user.email}</h3>
          <h3>{user.password}</h3>
        </div>
        
      ))}
    </div>
  );
}

export default App;
