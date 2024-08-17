import Post from "../components/Post";

const Home = ({ posts }) => {
  return (
    <main className="flex flex-1 justify-center overflow-y-scroll">
      {posts.length > 0 ? (
        <ul>
          {posts.map((post) => (
            <Post
              key={post.id}
              id={post.id}
              title={post.title}
              date={post.date}
              description={post.description}
            />
          ))}
        </ul>
      ) : (
        <p className="p-4">No Posts to display</p>
      )}
    </main>
  );
};

export default Home;
