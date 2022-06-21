import { useSession } from "next-auth/react";
import Router from "next/router";
import Loader from "../layout/loader";

export function AuthGuard({ children }) {
  const { data: session, status } = useSession();

  const handleClick = () => {
    Router.push("/auth/signin");
  };

  /* show loading indicator while the auth provider is still initializing */
  if (status === "loading") {
    return <Loader component />;
  }

  // if auth initialized with a valid user show protected page
  if (status !== "loading" && session) {
    return <>{children}</>;
  }

  // if auth initialized with a valid user show protected page
  if (status !== "loading" && !session) {
    return (
      <div className="flex flex-col items-center justify-center h-full mt-20">
        <h1 className="text-lg text-gray-500">
          Please sign in to view this data
        </h1>
        <button
          onClick={handleClick}
          className="btn bg-primary rounded-full my-2"
        >
          {" "}
          Sign In
        </button>
      </div>
    );
  }

  /* otherwise don't return anything, will do a redirect from useEffect */
  return null;
}
