"use client";

import { createTopic } from "@/actions/topic/createTopic";
import React, { useState } from "react";
import FormButton from "../FormButton/FormButton";
import InputComponent from "../InputComponent/InputComponent";

const CreateTopic = () => {
  const [topic, setTopic] = useState("");

  const handleCreateTopic = async (e) => {
        e.preventDefault();
        try {
            const topicAdding = await createTopic(topic);
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
      <FormButton type="submit" text="Create" />
    </form>
  );
};

export default CreateTopic;
