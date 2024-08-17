import api from "./Axios";

const newPost = async (post) => {
  const response = await api.post("/posts", post);
  return response;
};

const editPost = async (post) => {
  const response = await api.patch(`/posts/${post.id}`, post);
  return response;
};

const getPosts = async (setPosts) => {
  const response = await api.get("/posts");
  setPosts(response.data);
};

const deletePost = async (id) => {
  const response = await api.delete(`/posts/${id}`);
  return response;
};

export { newPost, editPost, getPosts, deletePost };
