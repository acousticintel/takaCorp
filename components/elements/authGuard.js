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
      <div className="flex flex-col items-center max-w-md mx-auto justify-center h-full mt-20">
        <h1 className="text-lg text-gray-400 font-semibold text-center">
          To protect company data. Some information is only available to authorised users.
        </h1>
        <button
          onClick={handleClick}
          className="btn bg-primary rounded-full my-2"
        >
          {" "}
          Click here to sign In
        </button>
      </div>
    );
  }

  /* otherwise don't return anything, will do a redirect from useEffect */
  return null;
}
