import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import SparkCard from "./components/SparkCard";
import Modal from "react-modal";
import axios from "axios";

function Home() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [people, setPeople] = useState([]);
  const [mypeople, setmypeople] = useState([]);
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [aboutme, setAboutMe] = useState("");
  const [deet1, setDeet1] = useState("");
  const [deet2, setDeet2] = useState("");
  const [deet3, setDeet3] = useState("");
  const [quote, setquote] = useState("");

  const [dp, setdp] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/allusers").then((res) => {
      let newpp = res.data.filter((item) => {
        if (item.username !== localStorage.getItem("username")) return item;
      });
      console.log("newpp", res.data);
      setPeople(newpp);
    });
    axios
      .post("http://localhost:5000/getuser", {
        username: localStorage.getItem("username"),
      })
      .then((res) => {
        setName(res.data.name);
        setdp(res.data.dp);
        setAboutMe(res.data.aboutme);
        setGender(res.data.gender);
        setDeet1(res.data.deet1);
        setDeet2(res.data.deet2);
        setDeet3(res.data.deet3);
        setquote(res.data.quote);
      });
    axios
      .post("http://localhost:5000/mysparks", {
        username: localStorage.getItem("username"),
      })
      .then((res) => {
        setmypeople(res.data.payload);
        console.log("bv", res.data.payload);
      });
  }, []);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        className="max-w-screen-md mx-auto h-full p-10 grid  "
        onRequestClose={closeModal}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            axios
              .post("http://localhost:5000/update", {
                username: localStorage.getItem("username"),
                deet1,
                deet2,
                aboutme,
                quote,
                dp,
                gender,
                deet3,
              })
              .then((res) => {
                if (res.data.status === "ok") alert("saved");
                else alert("not ok");
              });
          }}
          className="bg-white rounded-md p-10 shadow-2xl flex flex-col gap-3 overflow-y-auto  "
        >
          <div className="flex justify-between text-xl font-bold items-center">
            <div>Edit details</div>
            <div
              onClick={() =>
                (window.location.href =
                  "/profile" + localStorage.getItem("username"))
              }
              className="opacity-50 hover:opacity-100 cursor-pointer"
            >
              View Profile
            </div>
          </div>
          <div>
            <label>dp url</label>
            <input
              onChange={(e) => setdp(e.target.value)}
              value={dp}
              type="text"
              className="p-3 mt-1 w-full border-separate border rounded-xl"
              name=""
              id=""
            />
          </div>
          <div>
            <label>Name</label>
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              className="p-3 mt-1 w-full border-separate border rounded-xl"
              name=""
              id=""
            />
          </div>
          <div>
            <label>Gender</label>
            <input
              onChange={(e) => setGender(e.target.value)}
              value={gender}
              type="text"
              className="p-3 mt-1 w-full border-separate border rounded-xl"
              name=""
              id=""
            />
          </div>
          <div>
            <label>About me</label>
            <textarea
              onChange={(e) => setAboutMe(e.target.value)}
              value={aboutme}
              rows={10}
              className="p-3 mt-1 w-full border-separate border rounded-xl"
              name=""
              id=""
            />
          </div>
          <div>
            <label>Other detail #1</label>
            <input
              onChange={(e) => setDeet1(e.target.value)}
              value={deet1}
              type="text"
              className="p-3 mt-1 w-full border-separate border rounded-xl"
              name=""
              id=""
            />
          </div>
          <div>
            <label>Other detail #2</label>
            <input
              onChange={(e) => setDeet2(e.target.value)}
              value={deet2}
              type="text"
              className="p-3 mt-1 w-full border-separate border rounded-xl"
              name=""
              id=""
            />
          </div>
          <div>
            <label>Other detail #3</label>
            <input
              onChange={(e) => setDeet3(e.target.value)}
              value={deet3}
              type="text"
              className="p-3 mt-1 w-full border-separate border rounded-xl"
              name=""
              id=""
            />
          </div>
          <div>
            <label>Quote</label>
            <input
              onChange={(e) => setquote(e.target.value)}
              value={quote}
              type="text"
              className="p-3 mt-1 w-full border-separate border rounded-xl"
              name=""
              id=""
            />
          </div>
          <div className="">
            <input
              type="submit"
              className="bg-purple-500 p-4 rounded-lg text-white text-center"
              name=""
              id=""
            />
          </div>
        </form>
      </Modal>
      <section className="h-full min-h-screen  bg-slate-50">
        <NavBar></NavBar>
        <div className="col-span-2 py-10">
          <div className="mt-10">
            <div className="w-full shadow-md mx-auto max-w-screen-lg p-10 rounded-xl bg-white">
              <div className="flex justify-between">
                <div>
                  <div className="text-2xl">Welcome, {name}</div>
                  <div className="text-xl opacity-50">
                    it is a beautiful sunday
                  </div>
                </div>
                <div className="rounded-full w-16 ">
                  <img
                    onClick={openModal}
                    className="border-2 rounded-full border-purple-400"
                    src="https://xsgames.co/randomusers/avatar.php?g=pixel"
                    alt=""
                    srcset=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 mx-auto w-full  max-w-screen-lg ">
            <div className="mx-auto w-full  max-w-screen-lg my-5 text-2xl opacity-50 font-bold">
              My Sparks ✨
            </div>
            <div className="flex gap-3 overflow-auto">
              {mypeople.map((item) => {
                return (
                  <img
                    onClick={() => {
                      window.location.href = "/profile/" + item.username;
                    }}
                    src={item.dp}
                    className="w-20 rounded-full"
                    alt=""
                    srcset=""
                  />
                );
              })}
            </div>
          </div>
          <div className="mt-10">
            <div className="mx-auto w-full  max-w-screen-lg my-5 text-2xl opacity-50 font-bold">
              Cool People on Truly Pride
            </div>
            <div className="w-full mx-auto grid grid-cols-3 gap-10 max-w-screen-lg rounded-xl ">
              {people.map((item) => {
                console.log("helllp");
                return <SparkCard item={item} />;
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
