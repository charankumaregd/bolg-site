import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import NewPost from "./pages/NewPost";
import NotFound from "./pages/NotFound";
import Post from "./pages/Post";
import EditPost from "./pages/EditPost";
import { useState, useEffect } from "react";
import { getPosts } from "./api/crud";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts(setPosts);
  }, [posts]);

  const getPostById = (id) => {
    const postFilter = posts.filter((post) => post.id === id);
    return postFilter[0];
  };

  const getDate = () => {
    const fullDate = new Date();

    return (
      fullDate.getFullYear() +
      "-" +
      fullDate.getMonth() +
      "-" +
      fullDate.getDate() +
      " " +
      fullDate.getHours() +
      ":" +
      fullDate.getMinutes()
    );
  };

  const searchPost = (value) => {
    const searchFilter = posts.filter(
      (post) => post.title.includes(value) || post.description.includes(value)
    );
    setPosts(searchFilter);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout searchPost={searchPost} />}>
          <Route index element={<Home posts={posts} />} />
          <Route path=":id" element={<Post getPostById={getPostById} />} />
          <Route
            path=":id/edit-post"
            element={<EditPost getPostById={getPostById} getDate={getDate} />}
          />
          <Route
            path="new-post"
            element={<NewPost id={posts.length + 1} getDate={getDate} />}
          />

          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
