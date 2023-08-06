import axios from "axios"
import React, { useState, useEffect } from "react"

function Form() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    TermsOfService: false
  })

  return (
    <div>
      <form className="form">
        <label>First Name
          <input value={form.firstName} name="firstName" type="text" />
        </label>
        <label>Last Name
          <input value={form.lastName} name="lastName" type="text" />
        </label>
        <label>Email
          <input value={form.email} name="email" type="email" />
        </label>
        <label>Password
          <input value={form.password} name="password" type="password" />
        </label>
        <label>Terms of Service
          <input checked={form.TermsOfService} name="TermsOfService" type="checkbox" />
        </label>
        <label>
          <button type="submit" className="button">submit</button>
        </label>
      </form>
    </div>
  )
}
export default Form