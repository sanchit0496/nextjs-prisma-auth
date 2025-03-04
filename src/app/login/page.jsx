"use client";
import React, { useState } from "react";
import { redirect } from "next/navigation";
import FormButton from "../components/FormButton/FormButton";
import InputComponent from "../components/InputComponent/InputComponent";
import { createUser } from "../actions/createUser";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleHomepageRedirect = () => {
    redirect("/");
  };

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      const create = await createUser(email, password)
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <form>
      <div>Login Form</div>
      <InputComponent
        label={"Email"}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <InputComponent
        label={"Password"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <FormButton text="Redirect" onClick={handleHomepageRedirect} />
      <FormButton text="Login" onClick={(e) => handleLogin(e)} />
    </form>
  );
};

export default Login;
