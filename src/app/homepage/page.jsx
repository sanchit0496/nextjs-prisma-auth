import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Header from "@/components/Header/Header";
import React from "react";
import CreateTopic from "@/components/CreateTopic/CreateTopic";
import TopicList from "@/components/TopicList/TopicList";

const Homepage = () => {
    const userSession = cookies().get("userSession")?.value;
    const user = JSON.parse(userSession);
    return (
        <div>
            <Header />
            <CreateTopic user = {user} />
            <TopicList />
        </div>
    );
};

export default Homepage;
