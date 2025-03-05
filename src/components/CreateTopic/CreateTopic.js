"use client";

import { createTopic } from "@/actions/topic/createTopic";
import React, { useState } from "react";
import FormButton from "../FormButton/FormButton";
import InputComponent from "../InputComponent/InputComponent";

const CreateTopic = ({user}) => {
  const [topic, setTopic] = useState("");
  const [error, setError] = useState('')

  const handleCreateTopic = async (e) => {
        e.preventDefault();
        try {
            const topicAdding = await createTopic(topic, user);
            setError("")
        } catch (error) {
            console.log(error);
            setError("Something went wrong!");
        }
    };

  return (
    <form onSubmit={handleCreateTopic}>
      Create Topic
      <InputComponent
        label="Topic"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
      />
      {error}
      <FormButton type="submit" text="Create" />
    </form>
  );
};

export default CreateTopic;
