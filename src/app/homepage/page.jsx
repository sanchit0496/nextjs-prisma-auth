"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Header from "@/components/Header/Header";
import React from "react";

const Homepage = () => {
    const userSession = cookies().get("userSession")?.value;
    // console.log("User session on homepage:", userSession);

    // // if (!userSession) {
    // //     redirect("/login");
    // // }

    const user = JSON.parse(userSession);

    return (
        <div>
            <Header />
            <h1>Welcome to the Homepage, {user.email}</h1>
        </div>
    );
};

export default Homepage;
