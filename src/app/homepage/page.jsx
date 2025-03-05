import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Header from "@/components/Header/Header";
import React from "react";
import CreateTopic from "@/components/CreateTopic/CreateTopic";

const Homepage = () => {
    const userSession = cookies().get("userSession")?.value;
    const user = JSON.parse(userSession);
    console.log('userSession', userSession)
    return (
        <div>
            <Header />
            <CreateTopic />
        </div>
    );
};

export default Homepage;
