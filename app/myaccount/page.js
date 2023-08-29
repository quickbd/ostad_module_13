"use client";

import { Suspense } from "react";
export default function redirectpage() {
  return (
    <>
      <div className="container   m-auto my-40 items-center justify-between">
        <Suspense fallback={<h3>Loadding.....</h3>}>
          <div className="  justify-center  m-auto">
            <section className="bg-white dark:bg-gray-900">
              <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
                  My Account
                </h2>
                <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
                  This is Myaccount page.
                </p>
              </div>
            </section>
          </div>
        </Suspense>
      </div>
    </>
  );
}
