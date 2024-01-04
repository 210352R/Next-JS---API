"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { HiOutlineTrash } from "react-icons/hi";

export default function RemoveBtn({ id }) {
  const router = useRouter();
  const handleClick = async (e) => {
    e.preventDefault();
    const confirmed = confirm("Are you sure?");

    if (confirmed) {
      const res = await fetch(`http://localhost:3000/api/topics?id=${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        //alert("Delete Suceessfully ------------ ");
        router.refresh();
      }
    }
  };

  return (
    <button
      onClick={(e) => {
        handleClick(e);
      }}
      className="text-red-400"
    >
      <HiOutlineTrash size={24} />
    </button>
  );
}
