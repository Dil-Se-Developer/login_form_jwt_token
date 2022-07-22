import React, { useState } from "react";
import FormInput from "../UI/FormInput";
import "./Login.css";

async function loginUser(credentials) {
  return fetch("http://localhost:8080/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

const Login = ({ setToken }) => {
  const intialValues = {
    username: "",
    password: "",
  };

  const [formValues, setFormValues] = useState(intialValues);

  const loginHandler = async (event) => {
    event.preventDefault();
    const token = await loginUser(formValues);
    setToken(token);
    // console.log(token, 'fetchtoken');
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  // console.log(formValues);
  // console.log(setToken);
  
  return (
    <>
      <div className="form_card login_card">
        <h2>Login</h2>
        <form>
          <FormInput
            inputLabel="Username :"
            inputType="text"
            inputName="username"
            inputValue={formValues.username}
            onHandleChange={handleChange}
            customClass={"form_input"}
          />
          <FormInput
            inputLabel="Password :"
            inputType="password"
            inputName="password"
            inputValue={formValues.password}
            onHandleChange={handleChange}
            customClass={"form_input"}
          />

          <div className="form_input login_btn">
            <button className="form_btn" onClick={loginHandler}>
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
