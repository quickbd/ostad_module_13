import ModCookie from "./mod_cookie/page";

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
      </div>
    </main>
  );
}
