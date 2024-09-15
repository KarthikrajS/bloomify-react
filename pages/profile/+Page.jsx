import { Fragment, useEffect, useState } from "react"
import { useAuthContext } from "../../renderer/components/AuthProvider/AuthProvider"

export { Page }


function Page() {

    const { user } = useAuthContext();
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        console.log(user, "user");
        user !== "undefined" && setUserData(JSON.parse(user?.split("j:")[1]))
    }, [user])

    return (<Fragment>

        <div className="grid grid-cols-3 sm:grid-cols-2 gap-4 px-4">



            <div className="w-full p-3 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md  sm:p-4 flex flex-col justify-center items-center">
                <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                    Profile Picture
                </h2>
                <div className="bg-white px-4 py-5 rounded-lg shadow-lg text-center w-72 ">

                    <div className="mb-4">
                        <img className="w-auto mx-auto rounded-full object-cover object-center" src={"https://media.istockphoto.com/id/2152310729/vector/portrait-of-a-redhead-woman-in-a-hat-abstract-elegant-woman-with-hat-covering-her-eyes.webp?b=1&s=612x612&w=0&k=20&c=duG7xLj9lbyyh6owDSjK5AuG72H_mhUYGWSyUCc704E="} alt="Avatar Upload" />
                    </div>
                    <label className="cursor-pointer mt-6">
                        <span className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-500" >Select Avatar</span>
                        <input type='file' className="hidden" multiple="true" accept="true" />
                    </label>
                </div>
            </div>



            <div className="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md  sm:p-8 flex flex-col items-center">
                <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                    Change Password
                </h2>
                <form className="mt-4 space-y-4 lg:mt-5 md:space-y-5 w-full" action="#">

                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">New Password</label>
                        <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required="" />
                    </div>
                    <div>
                        <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 ">Confirm password</label>
                        <input type="confirm-password" name="confirm-password" id="confirm-password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required="" />
                    </div>

                    <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-500">Reset passwod</button>
                </form>
            </div>

            <div className="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md  sm:p-8 flex-col flex  items-center">

                <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                    Settings
                </h2>
                <div className="mt-4 space-y-4 lg:mt-5 md:space-y-5 w-full flex flex-col gap-4" action="#">

                    <label className="inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" className="sr-only peer" />
                        <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Notifications</span>
                    </label>
                    <label className="inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" className="sr-only peer" />
                        <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">E-Mail and SMS</span>
                    </label>
                    <label className="inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" className="sr-only peer" />
                        <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Promotional offers E-Mail and SMS</span>
                    </label>
                </div>

            </div>

            <div className="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md  sm:p-8 flex-col flex  items-center">

                <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                    Personal Information
                </h2>


                <div className="flex w-full flex-col space-y-3 px-4 py-6 sm:px-10">
                    <label className="block" htmlFor="name">
                        <p className="text-sm">Name</p>
                        <input className="w-full rounded-md border py-2 px-2 bg-gray-50 outline-none ring-blue-600 focus:ring-1" type="text" value={userData?.username} />
                    </label>
                    <label className="block" htmlFor="email">
                        <p className="text-sm">Email</p>
                        <input className="w-full rounded-md border py-2 px-2 bg-gray-50 outline-none ring-blue-600 focus:ring-1" type="email" value={userData?.email} />
                    </label>

                    {/* <button className="mt-4 ml-auto rounded-lg bg-blue-600 px-10 py-2 text-white">Save</button> */}




                </div>



            </div>

        </div>
        {/* <div className="flex flex-row justify-between mb-6">

            <div className="row w-1/2 flex justify-center items-center ">

                <div className="w-full p-3 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md  sm:p-4 flex flex-col justify-center items-center">
                    <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                        Profile Picture
                    </h2>
                    <div className="bg-white px-4 py-5 rounded-lg shadow-lg text-center w-72 ">

                        <div className="mb-4">
                            <img className="w-auto mx-auto rounded-full object-cover object-center" src={"https://media.istockphoto.com/id/2152310729/vector/portrait-of-a-redhead-woman-in-a-hat-abstract-elegant-woman-with-hat-covering-her-eyes.webp?b=1&s=612x612&w=0&k=20&c=duG7xLj9lbyyh6owDSjK5AuG72H_mhUYGWSyUCc704E="} alt="Avatar Upload" />
                        </div>
                        <label className="cursor-pointer mt-6">
                            <span className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-500" >Select Avatar</span>
                            <input type='file' className="hidden" multiple="true" accept="true" />
                        </label>
                    </div>
                </div>
            </div>

            <div className="row w-1/2">
                <div className="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md  sm:p-8 flex flex-col items-center">
                    <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                        Change Password
                    </h2>
                    <form className="mt-4 space-y-4 lg:mt-5 md:space-y-5 w-full" action="#">

                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">New Password</label>
                            <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required="" />
                        </div>
                        <div>
                            <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 ">Confirm password</label>
                            <input type="confirm-password" name="confirm-password" id="confirm-password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required="" />
                        </div>

                        <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-500">Reset passwod</button>
                    </form>
                </div>
            </div>
        </div>

        <div className="flex flex-row justify-between">

            <div className="row w-1/2 flex justify-center items-center ">

                <div className="w-full p-3 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md  sm:p-4 flex flex-col justify-center items-center">
                    <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                        Profile Picture
                    </h2>
                    <div className="bg-white px-4 py-5 rounded-lg shadow-lg text-center w-72 ">

                        <div className="mb-4">
                            <img className="w-auto mx-auto rounded-full object-cover object-center" src={"https://media.istockphoto.com/id/2152310729/vector/portrait-of-a-redhead-woman-in-a-hat-abstract-elegant-woman-with-hat-covering-her-eyes.webp?b=1&s=612x612&w=0&k=20&c=duG7xLj9lbyyh6owDSjK5AuG72H_mhUYGWSyUCc704E="} alt="Avatar Upload" />
                        </div>
                        <label className="cursor-pointer mt-6">
                            <span className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-500" >Select Avatar</span>
                            <input type='file' className="hidden" multiple="true" accept="true" />
                        </label>
                    </div>
                </div>
            </div>

            <div className="row w-1/2">
                <div className="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md  sm:p-8 flex-col flex  items-center">

                    <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                        Settings
                    </h2>
                    <div className="mt-4 space-y-4 lg:mt-5 md:space-y-5 w-full flex flex-col gap-4" action="#">

                        <label className="inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" className="sr-only peer" />
                            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Notifications</span>
                        </label>
                        <label className="inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" className="sr-only peer" />
                            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">E-Mail and SMS</span>
                        </label>
                        <label className="inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" className="sr-only peer" />
                            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Promotional offers E-Mail and SMS</span>
                        </label>
                    </div>

                </div>
            </div>
        </div> */}



    </Fragment>)
}