"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";

export default function TopicsList() {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/topics", {
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error("Failed to fetch topics");
        }

        const data = await res.json();
        setTopics(data.topics);
      } catch (error) {
        console.error("Error loading topics: ", error);
      }
    };

    fetchTopics();
  }, []); // Empty dependency array to run the effect only once on mount
  console.log(topics);
  return (
    <>
      {topics.map((topic) => (
        <div
          key={topic?._id}
          className="flex justify-between items-center bg-white px-8 py-3 border border-slate-500 my-3"
        >
          <div>
            <Link
              href={`/topic/${topic?._id}`}
              className="font-bold text-slate-800"
            >
              {topic?.title}
            </Link>
            <p className="text-slate-600">{topic?.description}</p>
          </div>
          <div className="flex gap-3">
            <Link href={`/editTopic/${topic?._id}`} className="text-green-600">
              <HiPencilAlt size={24} />
            </Link>
            <RemoveBtn id={topic?._id} />
          </div>
        </div>
      ))}
    </>
  );
}
