import React from "react";
import EditTopicForm from "../../../components/EditTopicForm";

const getTopicById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function EditTopic({ params }) {
  const { topic } = await getTopicById(params.id);
  console.log(topic);
  const { title, description } = topic;
  console.log(title, description);
  return (
    <EditTopicForm id={params.id} title={title} description={description} />
  );
}
