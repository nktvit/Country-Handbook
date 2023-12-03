import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div id="error-page" className="flex items-center justify-center w-full h-screen bg-gradient-to-r from-indigo-500 to-purple-600 animate-pulse">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white sm:text-5xl animate-bounce">Oops!</h1>
        <p className="mt-4 text-lg text-gray-300 animate-fade-in-up">Sorry, an unexpected error has occurred.</p>
        <p className="mt-2 text-md text-red-300 animate-fade-in-up">
          { error && <i>{error.statusText || error.message}</i>}
        </p>
      </div>
    </div>
  );
}
