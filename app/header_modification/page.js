"use client";
import { Suspense, useState } from "react";
export default function headerModification(param) {
  const [authToken, setToken] = useState("");
  const [beare_token, setBeare_token] = useState("");

  const baseUrl = process.env.BASE_URL;

  //console.log(baseUrl);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json", auth_token: authToken },

      body: JSON.stringify({
        title: "Authorization Token",
      }),
    };

    const res = await fetch(`${baseUrl}api/token`, requestOptions);
    // let res = await fetch(`${baseUrl}api/token/`, requestOptions);

    console.log(res);
    //alert(JSON.stringify(res));

    if (!res.ok) {
      throw new Error("Fetching Api error");
    }
    const data = await res.json();

    setBeare_token(JSON.stringify(data));
    setToken("");
  };

  return (
    <>
      <div className="container   m-auto my-40 items-center justify-between">
        <Suspense fallback={<h3>Loadding.....</h3>}>
          <div className="  justify-center  m-auto">
            <section className="bg-white dark:bg-gray-900">
              <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
                  Header Modification
                </h2>
                <p className="mb-2 lg:mb-4 font-light text-left text-gray-500 dark:text-gray-400 sm:text-xl">
                  Create a route that accepts an incoming request with an
                  "Authorization" header.
                </p>
                <p className="mb-2 lg:mb-4 font-light text-left text-gray-500 dark:text-gray-400 sm:text-xl">
                  Extract the token from the header, prefix it with "Bearer ",
                  and add it as a new "Authorization" header.
                </p>
                <p className="mb-2 lg:mb-4 font-light text-left text-gray-500 dark:text-gray-400 sm:text-xl">
                  Use NextResponse.next() to produce the response.{" "}
                </p>
                <p className="mb-8 lg:mb-16 font-light text-left text-gray-500 dark:text-gray-400 sm:text-xl">
                  Styling: Feel free to style with any of the CSS framework
                </p>
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div>
                    <label
                      for="api"
                      className="block mb-2 form-control text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      API Request To(POST): {baseUrl}api/token
                    </label>
                  </div>
                  <div>
                    <label
                      for="authorization"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Authorization
                    </label>
                    <input
                      type="text"
                      id="authorization"
                      value={authToken}
                      onChange={(e) => setToken(e.target.value)}
                      className="shadow-sm bg-gray-50 border
               border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 
               block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 
                dark:shadow-sm-light"
                      placeholder="Authorization Token"
                      required
                    />
                  </div>

                  <div className="text-center">
                    <button
                      type="submit"
                      className="border border-green-500 bg-green-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline"
                    >
                      Generate Bearer Authorization Token 👇
                    </button>
                  </div>
                </form>

                <div className="sm:col-span-2 mt-10">
                  <label
                    for="message"
                    onChange={(e) => setMessage(e.target.value)}
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                  >
                    Result: Authorization Token with "Bearer"
                  </label>
                  <textarea
                    id="beare_token"
                    rows="6"
                    value={beare_token ?? ""}
                    className="block p-2.5 w-full text-sm
               text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 
               focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Autorazation Responce..."
                  />
                </div>
              </div>
            </section>
          </div>
        </Suspense>
      </div>
    </>
  );
}
