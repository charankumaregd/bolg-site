import { useNavigate } from "react-router-dom";

const Post = ({ id, title, date, description }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`${id}`);
  };

  return (
    <div
      className="flex flex-col gap-2 my-4 p-4 border-2 shadow-md rounded-lg w-[97vw] cursor-pointer"
      onClick={handleClick}
    >
      <h1 className="text-xl">{title}</h1>
      <p className="text-xs">{date}</p>
      <p className="text-base">{description}</p>
    </div>
  );
};

export default Post;
