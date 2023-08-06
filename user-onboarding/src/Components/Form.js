import axios from "axios"
import React from "react"

const Form = (props) => {
  // const [form, setForm] = useState({
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   password: "",
  //   TermsOfService: false
  // })

  return (
    <div>
      <form className="form">
        <label>First Name
          <input onChange={props.change} value={props.form.firstName} name="firstName" type="text" />
        </label>
        <label>Last Name
          <input onChange={props.change} value={props.form.lastName} name="lastName" type="text" />
        </label>
        <label>Email
          <input onChange={props.change} value={props.form.email} name="email" type="email" />
        </label>
        <label>Password
          <input onChange={props.change} value={props.form.password} name="password" type="password" />
        </label>
        <label>Terms of Service
          <input onChange={props.change} checked={props.form.TermsOfService} name="TermsOfService" type="checkbox" />
        </label>
        <label>
          <button type="submit" className="button">submit</button>
        </label>
      </form>
    </div>
  )
}
export default Form