import NavBar from "./components/NavBar";

function Home() {
  return (
    <section className="h-screen  bg-slate-50">
      <NavBar></NavBar>
      <div className="mt-10">
        <div className="w-full shadow-md mx-auto max-w-screen-lg p-10 rounded-xl bg-white">
          <div className="text-2xl">Welcome, Gay Saloni</div>
          <div className="text-xl opacity-50">it is a beautiful sunday</div>
        </div>
      </div>
      <div className="mt-10">
        <div className="mx-auto w-full  max-w-screen-lg my-5 text-2xl opacity-50 font-bold">
          Cool People on TrulyPride
        </div>
        <div className="w-full mx-auto grid grid-cols-3 gap-3 max-w-screen-lg rounded-xl ">
          <div className="flex flex-col bg-white  rounded-xl shadow-md">
            <div className="p-7 text-xl ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
              assumenda aliquam distinctio adipisci delect
            </div>
            <div className="flex my-3  px-7  items-center py-5 bg-purple-100">
              <div>
                <div className="text-xl">Name</div>
                <div className="text-sm">Name</div>
              </div>
              <div className="w-1/5 ml-auto ">
                <img
                  className="rounded-full"
                  src="https://xsgames.co/randomusers/avatar.php?g=pixel"
                  alt=""
                />
              </div>
            </div>
            <div className="flex mb-3 p-5 gap-3">
              <div className="rounded-full hover:bg-purple-50 transition-all cursor-pointer  p-3">
                ⚡ Spark
              </div>
              <div className="rounded-full hover:bg-purple-50 transition-all cursor-pointer  p-3">
                🧑‍🦰 Prof
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
