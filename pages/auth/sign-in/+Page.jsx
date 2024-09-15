import axios from "axios";
import { Fragment, useState } from "react"
import { navigate } from "vike/client/router";
import { useAuthContext } from "../../../renderer/components/AuthProvider/AuthProvider";

export { Page }

function Page(pageContext) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const { setUser } = useAuthContext()
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const response = await axios.post("/api/auth/login", {
                email,
                password,
            }, {
                withCredentials: true,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json'
                }
            });
            // console.log(response, "getCookie");
            console.log(response, "response");
            if (response?.data?.success) {
                localStorage.setItem("token", response?.data?.token)
                console.log(response?.data?.user, "response?.data?.user");
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

    return (<Fragment>
        <section className="bg-gray-50">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

                <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                            Sign in to your account
                        </h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                                <input onChange={(e) => setEmail(e.target.value)} id="email"
                                    type="email"
                                    placeholder="name@gmail.com"
                                    value={email}
                                    name="email"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"  required="" />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                                <input

                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required="" />
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300" required="" />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="remember" className="text-gray-500">Remember me</label>
                                    </div>
                                </div>
                                <a href="#" className="text-sm font-medium text-primary-600 hover:underline ">Forgot password?</a>
                            </div>
                            <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-400">Sign in</button>
                            <p className="text-sm font-light text-gray-500">
                                Don’t have an account yet? <a href="/auth/sign-up" className="font-medium text-primary-600 hover:underline text-blue-400">Sign up</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </Fragment>)
}