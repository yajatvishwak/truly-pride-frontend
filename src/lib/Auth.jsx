import axios from "axios";
import { useState } from "react";
import NavBar from "./components/NavBar";

function Auth() {
  const [isSignup, setisSignup] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  return (
    <section className="h-screen ">
      <NavBar></NavBar>

      {isSignup ? (
        <div className="">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              axios
                .post("http://localhost:5000/signup", {
                  name,
                  username,
                  password,
                })
                .then((res) => {
                  console.log(res.data);
                  if (res.data.status === "ok") {
                    localStorage.setItem("username", username);
                    // localStorage.setItem("name", name);
                    window.location.href = "/";
                  } else alert("invalid credentials");
                });
            }}
            className="p-10 rounded-2xl shadow-xl bg-white mx-auto  mt-28 max-w-4xl"
          >
            <div className="opacity-30">Truely pride welcomes you 🥴</div>
            <h1 className="text-3xl font-bold">Sign up to continue</h1>
            <div className="my-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Name
              </label>
              <input
                onChange={(e) => setName(e.target.value)}
                className="p-3 w-full border rounded-lg shadow-md shadow-purple-50"
                id="name"
                type="text"
                placeholder="Name"
              />
            </div>
            <div className="my-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                onChange={(e) => setUsername(e.target.value)}
                className="p-3 w-full border rounded-lg shadow-md shadow-purple-50"
                id="username"
                type="text"
                placeholder="Username"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                className="p-3 w-full border rounded-lg shadow-md shadow-purple-50"
                id="password"
                type="text"
                placeholder="Password"
              />
            </div>
            <div className="my-4">
              Not New to Truely Pride?{" "}
              <span
                onClick={() => setisSignup(false)}
                className="font-bold cursor-pointer"
              >
                Login
              </span>
            </div>
            <button
              className="bg-purple-500 p-3 w-full text-white rounded-2xl"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      ) : (
        <div className="">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              axios
                .post("http://localhost:5000/signin", { username, password })
                .then((res) => {
                  if (res.data.status === "ok") {
                    localStorage.setItem("username", username);
                    window.location.href = "/";
                  } else alert("invalid credentials");
                });
            }}
            className="p-10 rounded-2xl shadow-xl bg-white mx-auto  mt-28 max-w-4xl"
          >
            <div className="opacity-30">Truely pride welcomes you 🥴</div>
            <h1 className="text-3xl font-bold">Sign in to continue 💋</h1>

            <div className="my-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                onChange={(e) => setUsername(e.target.value)}
                className="p-3 w-full border rounded-lg shadow-md shadow-purple-50"
                id="username"
                type="text"
                placeholder="Username"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                className="p-3 w-full border rounded-lg shadow-md shadow-purple-50"
                id="password"
                type="text"
                placeholder="Password"
              />
            </div>
            <div className="my-4">
              New to Truely Pride?{" "}
              <span
                onClick={() => setisSignup(true)}
                className="font-bold cursor-pointer"
              >
                Signup
              </span>
            </div>
            <button
              className="bg-purple-500 p-3 w-full text-white rounded-2xl"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </section>
  );
}

export default Auth;
