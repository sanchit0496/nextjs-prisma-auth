"use client";
import React, { useState } from "react";
import { redirect } from "next/navigation";
import FormButton from "@/components/FormButton/FormButton";
import InputComponent from "@/components/InputComponent/InputComponent";
import { useRouter } from "next/navigation";
import { loginUser } from "@/actions/loginUser";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState('')

  const router = useRouter()

  const handleHomepageRedirect = () => {
    redirect("/");
  };

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      const userFound = await loginUser(email, password)
      console.log('userFound', userFound)
      if(userFound){
        router.push("/homepage")   
      }else{
        setError('Credentials Incorrect')
      }

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
      {error}
      <FormButton text="Homepage" onClick={handleHomepageRedirect} />
      <FormButton text="Login" onClick={(e) => handleLogin(e)} />
    </form>
  );
};

export default Login;
