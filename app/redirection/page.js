"use client";
import Link from "next/link";
import { Suspense } from "react";
export default function redirection() {
  const handleRedirection = async () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },

      body: JSON.stringify({
        title: "Redirect Page",
      }),
    };
    const baseUrl = process.env.BASE_URL;
    const res = await fetch(`${baseUrl}/myaccount`, requestOptions);

    console.log(res);
    //alert(JSON.stringify(res));

    if (!res.ok) {
      throw new Error("Fetching Api error");
    }
    const data = await res.json();

    // router.push("/read_cookie");
  };
  return (
    <>
      <div className="container   m-auto my-40 items-center justify-between">
        <Suspense fallback={<h3>Loadding.....</h3>}>
          <div className="  justify-center  m-auto">
            <section className="bg-white dark:bg-gray-900">
              <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
                  Redirection
                </h2>
                <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
                  Implement a route that redirects the user to a different page
                  within your application using NextResponse.redirect().
                </p>
                <Link href="/myaccount">Re href</Link>
                <div className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
                  <button
                    className="border border-green-500 bg-green-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline"
                    onClick={() => handleRedirection()}
                  >
                    Redirect url
                  </button>
                </div>
              </div>
            </section>
          </div>
        </Suspense>
      </div>
    </>
  );
}
