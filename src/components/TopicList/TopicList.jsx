"use client";

import { deleteTopic } from "@/actions/topic/deleteTopic";
import { editTopic } from "@/actions/topic/editTopic";
import { getTopics } from "@/actions/topic/getTopics";
import React, { useState, useEffect } from "react";
import InputComponent from "../InputComponent/InputComponent";

const TopicList = () => {
  const [topics, setTopics] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState(null);

  useEffect(() => {
    fetchTopics();
  }, []);

  console.log("selectedTopic", selectedTopic);

  const fetchTopics = async () => {
    try {
      const data = await getTopics();
      setTopics(data);
    } catch (error) {
      console.error("Error fetching topics:", error);
    }
  };

  const handleEdit = (topic) => {
    setSelectedTopic(topic);
  };

  const handleDelete = async (topic) => {
    try {
      await deleteTopic(topic.id);
      fetchTopics();
    } catch (error) {
      console.error("Error deleting topics:", error);
    }
  };

  const handleEditSave = async () => {
    try {
      await editTopic(selectedTopic.id, selectedTopic.topic);
      setSelectedTopic(null);
      fetchTopics();
    } catch (error) {
      console.error("Error saving topic:", error);
    }
  };

  const handleEditClose = () => {
    setSelectedTopic(null);
  };

  const handleInputChange = (e) => {
    setSelectedTopic({ ...selectedTopic, topic: e.target.value });
  };

  return (
    <div>
      <h1>Topic List</h1>
      {topics.map((topic) => (
        <div key={topic.id}>
          {selectedTopic && selectedTopic.id === topic.id ? (
            <>
              <InputComponent
                value={selectedTopic.topic}
                onChange={handleInputChange}
              />
              <button onClick={handleEditSave}>Save</button>
              <button onClick={handleEditClose}>Close</button>
            </>
          ) : (
            <>
              {topic.topic}
              <button onClick={() => handleEdit(topic)}>Edit</button>
              <button onClick={() => handleDelete(topic)}>Delete</button>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default TopicList;
