import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { editPost } from "../api/crud";

const EditPost = ({ getPostById, getDate }) => {
  const navigate = useNavigate();

  const { id } = useParams();

  const post = getPostById(id);

  const [title, setTitle] = useState(post.title);
  const [description, setDescription] = useState(post.description);

  const handleClick = () => {
    const date = getDate();
    editPost({
      id: `${id}`,
      date: date,
      title: title,
      description: description,
    });
    navigate(`../${id}`);
  };
  return (
    <main className="flex-1 p-4">
      <h1 className="text-xl">Edit Post {id}</h1>
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
          className="bg-cyan-300 shadow-md rounded-md py-2 hover:border-black border-2"
          onClick={handleClick}
        >
          Save
        </button>
      </form>
    </main>
  );
};

export default EditPost;
