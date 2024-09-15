import axios from "axios";
import React, { Fragment, useState } from "react";
import { navigate } from "vike/client/router";
import { useAuthContext } from "../../../renderer/components/AuthProvider/AuthProvider";

export { Page }

function Page(pageContext) {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const { setUser } = useAuthContext()

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post("/api/auth/register", {
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
      },
      );
      console.log(response, "response");

      if (response?.data?.success) {
        localStorage.setItem("token", response?.data?.token)
        setUser(response?.data?.user)

        await navigate("/");
      } else {
        setError(await response.text());
      }
    } catch (err) {
      setError("Something went wrong.");
      console.error(err);
    }
  };

  return (
    <Fragment>
      <section className="bg-gray-50">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

          <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                Sign Up
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <input
                  id="firstName"
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                  id="lastName"
                  type="text"
                  placeholder="Last Name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>

                  <input
                    id="email"
                    type="email"
                    value={email}
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="name@gmail.com"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>

                  <input
                    id="password"
                    type="password"
                    placeholder="Password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <input
                  id="confirmPassword"
                  type="password"
                  placeholder="Confirm Password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <div id="validation" style={{ color: "#f00" }}>
                  {error}
                </div>
                <button type="submit">Login</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}


