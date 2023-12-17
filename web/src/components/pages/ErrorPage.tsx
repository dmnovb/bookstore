import { useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error: any = useRouteError();
  console.error(error);

  return (
    <div className="bg-slate text-white font-sans flex items-center justify-center h-screen text-center">
      <div className="bg-zinc-900 p-8 rounded shadow-md max-w-md w-full">
        <h1 className="text-4xl font-bold mb-4">404 Not Found</h1>
        <p className="text-gray-400 mb-8">
          Sorry, the page you are looking for might be in another universe.
        </p>
        <a
          href="/"
          className="text-white px-4 py-2 rounded-md hover:bg-slate-500 transition-all antialiased text-md"
        >
          Go Home
        </a>
      </div>
    </div>
  );
};
