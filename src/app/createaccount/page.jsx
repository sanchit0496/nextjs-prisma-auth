"use client";
import React, { useState } from "react";
import { redirect } from "next/navigation";
import FormButton from "@/components/FormButton/FormButton";
import InputComponent from "@/components/InputComponent/InputComponent";
import { useRouter } from "next/navigation";
import { createUser } from "@/actions/user/createUser";


const CreateAccount = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter()

  const handleHomepageRedirect = () => {
    router.push("/");
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const create = await createUser(email, password);
      router.push("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form>
      <div>Create Account</div>
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
      <FormButton text="Homepage" onClick={handleHomepageRedirect} />
      <FormButton text="Create Account" onClick={(e) => handleLogin(e)} />
    </form>
  );
};

export default CreateAccount;
