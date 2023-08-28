import ModCookie from "./mod_cookie/page";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <div className="max-w-[1240px]  m-auto my-5 ">
        <ModCookie />
      </div>
    </main>
  );
}
