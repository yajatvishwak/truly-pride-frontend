import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "./components/NavBar";

function Profile() {
  const { username } = useParams();
  const [name, setname] = useState("");
  const [gender, setgender] = useState("");
  const [aboutme, setaboutme] = useState("");
  const [deet1, setdeet1] = useState("");
  const [deet2, setdeet2] = useState("");
  const [deet3, setdeet3] = useState("");

  useEffect(() => {
    axios.post("http://localhost:5000/getuser", { username }).then((res) => {
      setname(res.data.name);
      setaboutme(res.data.aboutme);
      setgender(res.data.gender);
      setdeet1(res.data.deet1);
      setdeet2(res.data.deet2);
      setdeet3(res.data.deet3);
    });
  }, []);
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
            <div className="text-2xl ">{name}</div>
            <div className="text-xl opacity-50">{gender}</div>
          </div>
        </div>
      </div>
      <div className="mt-24 grid grid-cols-2 gap-4 mx-auto max-w-screen-lg ">
        <div className="w-full relative  flex justify-center items-center shadow-md  p-10 rounded-xl bg-white">
          <div className="rounded-full text-center bg-purple-50 text-purple-600 p-5 font-bold w-32    absolute -top-1  transform  -translate-y-1/2 left-10">
            About me
          </div>
          <div className="mt-3">{aboutme}</div>
        </div>
        <div className="w-full relative  flex  items-center shadow-md  p-10 rounded-xl bg-white">
          <div className="rounded-full text-center bg-purple-50 text-purple-600 p-5 font-bold     absolute -top-1  transform  -translate-y-1/2 left-10">
            Other Deets
          </div>
          <div className="mt-3  text-xl flex self-start  flex-col gap-3">
            <div className="flex gap-5 items-center">{deet1}</div>
            <div className="flex gap-5 items-center">{deet2}</div>
            <div className="flex gap-5 items-center">{deet3}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
