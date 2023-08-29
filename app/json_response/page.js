"use client";
import Link from "next/link";
import { Suspense, useState } from "react";
export default function redirectpage() {
  const [JSONresponse, setJSONresponse] = useState("");
  const baseUrl = process.env.BASE_URL;

  //console.log(baseUrl);

  const handleJsonResponse = async () => {
    const res = await fetch(`${baseUrl}api/preferences`);

    console.log(res);
    //alert(JSON.stringify(res));

    if (!res.ok) {
      throw new Error("Fetching Api error");
    }
    const data = await res.json();

    setJSONresponse(JSON.stringify(data));
  };
  return (
    <>
      <div className="container   m-auto my-40 items-center justify-between">
        <Suspense fallback={<h3>Loadding.....</h3>}>
          <div className="  justify-center  m-auto">
            <section className="bg-white dark:bg-gray-900">
              <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
                  JSON Response
                </h2>
                <div className="my-5">
                  <div className="mb-5 lg:mb-5 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
                    <div>
                      Create a route that returns a JSON response with the
                      following
                      {
                        ' data: {"message": "Welcome to our API!", "version": "1.0" }'
                      }
                    </div>
                  </div>

                  <p className="mb-5 lg:mb-10 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
                    If you want to see another browser tab, Please click the
                    following button
                  </p>
                  <div className="py-8 lg:py-8 text-center">
                    <Link
                      href="/api/preferences"
                      target="_blank"
                      className="border   border-green-500 bg-green-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline"
                    >
                      View Preferences
                    </Link>

                    <div className="mt-8">
                      {" "}
                      ===========================OR=======================
                    </div>
                  </div>

                  <p className="mb-5 lg:mb-10 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
                    If you want to get the response in same page, you may try
                    the following option:
                  </p>

                  <button
                    className="border border-green-500 bg-green-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline"
                    onClick={() => handleJsonResponse()}
                  >
                    Get Response
                  </button>
                  <div className="sm:col-span-2 mt-10">
                    <label
                      for="message"
                      onChange={(e) => setMessage(e.target.value)}
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                    >
                      Responce Result:
                    </label>
                    <textarea
                      id="JSONresponse"
                      rows="6"
                      value={JSONresponse ?? ""}
                      className="block p-2.5 w-full text-sm
               text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 
               focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Responce..."
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </Suspense>
      </div>
    </>
  );
}
