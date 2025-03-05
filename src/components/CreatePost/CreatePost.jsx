"use client";

import createPost from "@/actions/post/createPost";
import getPosts from "@/actions/post/getPosts";
import React, { useState } from "react";
import FormButton from "../FormButton/FormButton";
import InputComponent from "../InputComponent/InputComponent";

const CreatePost = ({topic, user}) => {
  const [post, setPost] = useState("");
  const [error, setError] = useState('Hello')


  const handleCreateTopic = async (e) => {
        e.preventDefault();
        try {
            const postAdding = await createPost(post, user, topic);
            setError("")
            // const data = await getPosts();
            // const filteredData = data.filter((item) => item.topicId === topic)
            // setPost(filteredData);
        } catch (error) {
            console.log(error);
            setError("Something went wrong!");
        }
    };

  return (
    <form onSubmit={handleCreateTopic}>
      Create Post
      <InputComponent
        label="Post"
        value={post}
        onChange={(e) => setPost(e.target.value)}
      />
      {error}
      <FormButton type="submit" text="Create" />
    </form>
  );
};

export default CreatePost;
