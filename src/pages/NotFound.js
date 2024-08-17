import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="flex-1 flex flex-col gap-4 justify-center items-center mb-28">
      <h1 className="text-8xl">404</h1>
      <p className="text-base">Oops! Page Not Found.</p>
      <Link
        to="/"
        className=" text-sm underline underline-offset-4 hover:text-sky-500"
      >
        Go back to Home
      </Link>
    </main>
  );
};

export default NotFound;
