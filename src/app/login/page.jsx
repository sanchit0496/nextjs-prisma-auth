"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import FormButton from "@/components/FormButton/FormButton";
import InputComponent from "@/components/InputComponent/InputComponent";
import { loginUser } from "@/actions/user/loginUser";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const router = useRouter();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const userFound = await loginUser(email, password);
            console.log("userFound", userFound);
            if (userFound) {
                router.push("/homepage");
            } else {
                setError("Credentials Incorrect");
            }
        } catch (error) {
            console.log(error);
            setError("Something went wrong!");
        }
    };

    return (
        <form onSubmit={handleLogin}>
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
            {error && <p style={{ color: "red" }}>{error}</p>}
            <FormButton text="Login" />
        </form>
    );
};

export default Login;
