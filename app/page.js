import ModCookie from "./mod_cookie/page";

import Link from "next/link";
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <div className="max-w-[1240px]  m-auto my-5 ">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white mt-32">
          Assignment Description:
        </h2>
        <p className="mb-5 lg:mb-5 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
          In this assignment, you will create a simple web application using
          Next.js 13 that uses cookies to store user preferences, responds with
          JSON data, and handles redirection and header modification.
        </p>

        <ModCookie />

        <div className="my-5">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white mt-10">
            JSON Response
          </h2>
          <div className="mb-5 lg:mb-5 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            <pre>
              Create a route that returns a JSON response with the following
              {' data: {"message": "Welcome to our API!", "version": "1.0" }'}
            </pre>
          </div>

          <p className="py-8 lg:py-8 text-center">
            <Link
              href="/api/preferences"
              target="_blank"
              className="border   border-green-500 bg-green-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline"
            >
              View Preferences
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
