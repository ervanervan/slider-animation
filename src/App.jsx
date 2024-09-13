import wallpaper1 from "./assets/wallpaper 1.jpg";

function App() {
  return (
    <>
      <div className="w-full h-dvh relative">
        <img
          src={wallpaper1}
          alt=""
          className="absolute -z-10 top-0 w-full h-dvh object-cover"
        />
        <div className="container px-10 mx-auto text-white py-20">
          <div className="flex flex-col gap-2 justify-start">
            <h1 className="uppercase tracking-[.75em] font-bold text-base">
              demon slayer
            </h1>
            <h2 className="uppercase font-extrabold text-5xl my-2">
              Tanjiro Kamado
            </h2>
            <p className="w-full md:w-[45%] font-medium">
              A determined demon slayer seeking to cure his sister Nezuko, who
              turned into a demon.
            </p>
            <button className="mt-5 w-fit border px-5 py-2.5 rounded-md">
              More details
            </button>
          </div>

          <div className="flex items-end">test</div>
        </div>
      </div>
    </>
  );
}

export default App;
