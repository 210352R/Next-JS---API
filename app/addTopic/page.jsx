"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { useState } from "react";

export default function AddTopic() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newTopic = {
      title,
      description,
    };

    try {
      const response = await fetch("http://localhost:3000/api/topics", {
        method: "POST", // Specify the HTTP method as 'POST'
        headers: {
          "Content-Type": "application/json", // Set the content type of the request body
        },
        body: JSON.stringify(newTopic), // Convert the data to JSON format
      });

      if (!response.ok) {
        throw new Error("Failed to create a new topic");
      }
      router.push("/");
      return response.json(); // Return the parsed JSON response
    } catch (error) {
      console.error(error);
    }

    console.log(newTopic);
    alert(newTopic.title + " " + newTopic.description);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="border border-slate-500 px-8 py-2"
          type="text"
          placeholder="Topic Title"
        />

        <input
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="border border-slate-500 px-8 py-2"
          type="text"
          placeholder="Topic Description"
        />

        <button
          type="submit"
          className="bg-green-600 font-bold text-white py-3 px-6 w-fit"
        >
          Add Topic
        </button>
      </form>
    </div>
  );
}
