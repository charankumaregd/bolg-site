import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ searchPost }) => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    searchPost(search);
  }, [search]);

  return (
    <nav className="flex justify-between gap-3 sm:items-center bg-cyan-300 p-4 max-sm:flex-col">
      {/* <input
        type="text"
        value={search}
        placeholder="search"
        onChange={(e) => setSearch(e.target.value)}
        className="px-3 py-1 rounded-lg lg:w-[30%] border-[0.1rem]"
      /> */}
      <div className="flex h-fit gap-4 pr-6">
        <Link className="hover:underline underline-offset-4" to="/">
          Home
        </Link>
        <Link className="hover:underline underline-offset-4" to="/new-post">
          NewPost
        </Link>
        <Link className="hover:underline underline-offset-4" to="/about">
          About
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
