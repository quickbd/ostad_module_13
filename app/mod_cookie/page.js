"use client";
import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Suspense, useState } from "react";
export default function ModCookie() {
  const [lang, setlang] = useState(Cookies.get("lang"));
  const [theme, setTheme] = useState(Cookies.get("theme"));
  const router = useRouter();
  const handleLangPreference = (lang) => {
    setlang(lang);
    Cookies.set("lang", lang);
    //router.push("/read_cookie");
  };

  const handleThemePreference = (theme) => {
    setTheme(theme);
    Cookies.set("theme", theme);
    // router.push("/read_cookie");
  };

  return (
    <>
      <div className="container   m-auto my-40 items-center justify-between">
        <Suspense fallback={<h3>Loadding.....</h3>}>
          <div className="  justify-center  m-auto">
            <section className="bg-white dark:bg-gray-900">
              <div className="py-8 lg:py-8 px-4 mx-auto max-w-screen-md text-center">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
                  Set Cookies
                </h2>
                <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
                  Implement a route that sets a cookie when a user clicks a
                  button. The cookie should store a user preference, e.g.,
                  "theme: dark" or "language: en".
                </p>
                <button
                  className="border border-green-500 bg-green-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline"
                  onClick={() =>
                    handleThemePreference(theme === "dark" ? "light" : "dark")
                  }
                >
                  Set {theme ?? ""} Theme
                </button>

                <button
                  className="border border-green-500 bg-green-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline"
                  onClick={() =>
                    handleLangPreference(lang === "en" ? "bn" : "en")
                  }
                >
                  Set {lang ?? ""} Language
                </button>
                <div className=" mt-20">
                  <Link
                    href="/read_cookie"
                    className="border border-blue-500 bg-blue-500 text-white rounded-md px-4 py-2 m-2
                  transition duration-500 ease select-none hover:bg-blue-600 focus:outline-none 
                   focus:shadow-outline"
                  >
                    Read cookie
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </Suspense>
      </div>
    </>
  );
}
