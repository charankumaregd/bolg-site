import { useNavigate, useParams } from "react-router-dom";
import { deletePost } from "../api/crud";

const Post = ({ getPostById }) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const post = getPostById(id);

  const handleEdit = () => {
    navigate("edit-post");
  };

  const handleDelete = () => {
    deletePost(id);
    navigate("/");
  };

  return (
    <div className="p-4 flex-1 flex flex-col gap-2">
      <h1 className="text-xl">{post.title} </h1>
      <p className="text-xs">{post.date} </p>
      <p className="text-base">{post.description}</p>
      <div className="flex gap-4 py-4">
        <button
          className="bg-cyan-300 shadow-md px-3 py-1 rounded-md hover:border-black border-2"
          onClick={handleEdit}
        >
          Edit
        </button>
        <button
          className="bg-red-500 text-white shadow-md px-3 py-1 rounded-md hover:border-black border-2"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Post;
