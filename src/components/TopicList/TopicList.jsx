"use client";

import { deleteTopic } from "@/actions/topic/deleteTopic";
import { getTopics } from "@/actions/topic/getTopics";
import React, { useState, useEffect } from "react";

const TopicList = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    fetchTopics();
  }, []);

  const fetchTopics = async () => {
    try {
      const data = await getTopics();
      setTopics(data);
    } catch (error) {
      console.error("Error fetching topics:", error);
    }
  };

  const handleEdit = (topic) => {
    console.log("handleEdit", topic);
  };

  const handleDelete = async (topic) => {
    console.log("handleDelete", topic);
    try {
        const data = await deleteTopic(topic.id);
        fetchTopics()
      } catch (error) {
        console.error("Error deleting topics:", error);
      }
  };

  return (
    <div>
      <h1>Topic List</h1>
      {topics.map((topic) => (
        <div key={topic.id}>
          {topic.topic}
          <button onClick={() => handleEdit(topic)}>Edit</button>
          <button onClick={() => handleDelete(topic)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default TopicList;
