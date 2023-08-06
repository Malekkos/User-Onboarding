import * as yup from "yup";

const formSchema = yup.object().shape({
  firstName: yup
    .string("This field must only contain letters")
    .trim()
    .required("At least one name is required")
    .min(3, "Name must at least be 3 characters")
    .max(20, "Name cannot exceed 20 characters"),
  lastName: yup
    .string("This field must only contain letters")
    .trim()
    .min(3, "Name must at least be 3 characters")
    .max(20, "Name cannot exceed 20 characters"),
  email: yup
    .string()
    .email("You must supply a valid email")
    .required("Email is a required field"),
  password: yup
    .string()
    .required("A password is reuqired!")
    .min(6, "password must be at least 6 characters long"),
  TermsOfService: yup
    .boolean()
    .oneOf([true], "You are required to accept our ToS")
})

export default formSchema