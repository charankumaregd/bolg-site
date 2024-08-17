import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { newPost } from "../api/crud";

const NewPost = ({ id, getDate }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleClick = async () => {
    const date = getDate();
    newPost({
      id: `${id}`,
      date: date,
      title: title,
      description: description,
    });
    setTitle("");
    setDescription("");
    navigate("/");
  };

  return (
    <main className="flex-1 p-4">
      <h1 className="text-xl">New Post</h1>
      <form
        className="flex flex-col gap-4 mt-4"
        onClick={(e) => e.preventDefault()}
      >
        <input
          type="text"
          value={title}
          placeholder="title"
          onChange={(e) => setTitle(e.target.value)}
          className="border-2 rounded-md px-2 py-1"
        />
        <textarea
          value={description}
          placeholder="description"
          onChange={(e) => setDescription(e.target.value)}
          className="border-2 rounded-md px-2 py-1"
        />
        <button
          type="submit"
          className="bg-cyan-300 shadow-md rounded-md py-2 hover:border-black border-2 border-spacing-5"
          onClick={handleClick}
        >
          Add post
        </button>
      </form>
    </main>
  );
};

export default NewPost;
