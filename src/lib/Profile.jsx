import NavBar from "./components/NavBar";

function Profile() {
  return (
    <section className="h-screen  bg-slate-50">
      <NavBar></NavBar>
      <div className="mt-24">
        <div className="w-full relative  flex justify-center items-center shadow-md mx-auto max-w-screen-lg p-10 rounded-xl bg-white">
          <img
            className="rounded-full border-2 w-32 border-purple-700   absolute -top-1 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            src="https://xsgames.co/randomusers/avatar.php?g=pixel"
            alt=""
          />
          <div className="flex flex-col mt-10 justify-center items-center">
            <div className="text-2xl ">Gay Saloni</div>
            <div className="text-xl opacity-50">Trans Gender</div>
          </div>
        </div>
      </div>
      <div className="mt-24 grid grid-cols-2 gap-4 mx-auto max-w-screen-lg ">
        <div className="w-full relative  flex justify-center items-center shadow-md  p-10 rounded-xl bg-white">
          <div className="rounded-full text-center bg-purple-50 text-purple-600 p-5 font-bold w-32    absolute -top-1  transform  -translate-y-1/2 left-10">
            About me
          </div>
          <div className="mt-3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
            consectetur temporibus, quaerat possimus nobis doloremque mollitia
            quia voluptatum quas distinctio iure minima pariatur modi ea
            repudiandae praesentium, ut, maxime sit.
          </div>
        </div>
        <div className="w-full relative  flex  items-center shadow-md  p-10 rounded-xl bg-white">
          <div className="rounded-full text-center bg-purple-50 text-purple-600 p-5 font-bold     absolute -top-1  transform  -translate-y-1/2 left-10">
            Other Deets
          </div>
          <div className="mt-3  text-xl flex self-start  flex-col gap-3">
            <div className="flex gap-5 items-center">
              <div>👩‍💻</div>
              <div>I am a Coder</div>
            </div>
            <div className="flex gap-5 items-center">
              <div>🍫</div>
              <div>I love chocolate</div>
            </div>
            <div className="flex gap-5 items-center">
              <div>🐶</div>
              <div>Dog Person</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
