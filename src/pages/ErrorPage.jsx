import { TriangleAlert } from "lucide-react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="h-screen grid place-items-center bg-stone-950 text-stone-100">
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-stone-950 via-red-900/20 via-50% to-stone-950 opacity-80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <div className="flex flex-col justify-center items-center h-96 text-gray-100 z-10">
        <TriangleAlert
          className="text-yellow-400 mb-4 animate-pulse"
          size={70}
        />
        <h1 className="text-6xl font-bold mb-4">404 Not Found</h1>
        <p className="text-xl mb-5">This page does not exist</p>
        <Link
          to={"/"}
          className="rounded-md px-3 py-2 mt-4 bg-stone-950/50 hover:bg-stone-950"
        >
          Go Back
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
