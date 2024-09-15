import { Fragment, useEffect, useState } from "react"

import { useAuthContext } from "../../renderer/components/AuthProvider/AuthProvider";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import DataTable from "react-data-table-component";


export { Page }


function Page() {
    const { user } = useAuthContext();
    const [userData, setUserData] = useState(null)

    const [columnData, setColumnData] = useState([]);

    const [userToken, setUserToken] = useState(null);

    useEffect(() => {
        console.log(user, "user");
        user !== "undefined" && setUserData(JSON.parse(user?.split("j:")[1]))
    }, [user])


    useEffect(() => {
        if (typeof window.localStorage !== 'undefined') {
            const token = localStorage.getItem('token')
            if (token) {
                console.log(jwtDecode(token), "token_1231");
                setUserToken((token))
            }
        }
    }, [])

    useEffect(() => {
        getOrders();
    }, [userToken])

    /* 
    <div className="flex-1">
                <img className='w-[100%] h-[150px] object-cover cursor-pointer mb-[10px]'
                  src={
                    import.meta.env.PUBLIC_ENV__VIKE_UPLOAD_URL +
                    data?.attributes?.img?.data?.attributes?.url
                  }
                  alt=""
                  onClick={(e) => setSelectedImg("img")}
                />
                <img className='w-[100%] h-[150px] object-cover cursor-pointer mb-[10px]'
                  src={
                    import.meta.env.PUBLIC_ENV__VIKE_UPLOAD_URL +
                    data?.attributes?.img2?.data?.attributes?.url
                  }
                  alt=""
                  onClick={(e) => setSelectedImg("img2")}
                />
              </div>*/

    console.log(userData?.id, "userData?.id");
    const getOrders = async () => {
        const response = typeof userData?.id !== "undefined" && await axios.get(`/api/orders/token=${userToken}&populate=*&[filters][user][id][$eq]=${userData?.id}`);
        console.log(response, "response");
        const data = response?.data?.orderList?.data?.data;
        console.log(data, "data");

        const newData = data?.map(d => {
            console.log(d?.attributes?.items?.flatMap(f => f.attributes?.img?.data?.attributes?.url), "data_123");
            return {
                order_id: d?.id, date: new Date(d?.attributes?.createdAt).toDateString(), price: d?.attributes?.amount, status: d?.attributes?.order_status, payment_id: d?.attributes?.payment_id, receipt_url: d?.attributes?.receipt_url, address: d?.attributes?.address,
                name: d?.attributes?.items?.flatMap(f => f?.attributes?.title).toString(),
                img1: d?.attributes?.items?.flatMap(f => f.attributes?.img?.data?.attributes?.url),
                img2: d?.attributes?.items?.flatMap(f => f.attributes?.img2?.data?.attributes?.url)
            }
        })
        setColumnData(newData)
    }

    const columns = [
        {
            name: <div className="text-base font-medium text-gray-500">Order ID:</div>,
            selector: row => row.order_id,
            cell: (row, i, column) => {
                return (<Fragment>
                    <div className="mt-1.5 text-base font-semibold text-gray-900">
                        <div className="hover:underline">#{row?.order_id}</div>
                    </div>
                </Fragment>)
            }
        },
        {
            name: <div className="text-base font-medium text-gray-500">Name:</div>,
            selector: row => row.name,
            cell: (row, i, column) => {
                const [isHovering, setIsHovered] = useState(false);
                const onMouseEnter = () => setIsHovered(true);
                const onMouseLeave = () => setIsHovered(false);

                return (<Fragment>
                    <div className="flex-col flex p-2">
                        <div className="mt-1.5 text-base font-semibold text-gray-900">
                            <div className="hover:underline">{row?.name}</div>
                        </div>
                        <div
                            className="flex items-center  cursor-pointer overscroll-x-auto w-auto"
                            onMouseEnter={onMouseEnter}
                            onMouseLeave={onMouseLeave}
                        >
                            <Fragment>
                                <div className="h-auto flex flex-row gap-2 justify-center">
                                    {isHovering ? (
                                        row?.img1?.map((d, idx) => <img key={idx} src={
                                            import.meta.env.PUBLIC_ENV__VIKE_UPLOAD_URL +
                                            d
                                        } width={88} height={77} alt="logo" />)

                                    ) : (
                                        row?.img2?.map((d, idx) => <img key={idx} src={
                                            import.meta.env.PUBLIC_ENV__VIKE_UPLOAD_URL +
                                            d
                                        } width={88} height={77} alt="logo" />)

                                    )}
                                </div>
                            </Fragment>
                        </div>

                    </div>
                </Fragment>)
            }
        },
        {
            name: <div className="text-base font-medium text-gray-500">Date:</div>,
            selector: row => row.date,
            cell: (row, i, column) => {
                return (<Fragment>
                    <div className="mt-1.5 text-base font-semibold text-gray-900">
                        {row.date}
                    </div>
                </Fragment>)
            }
        },
        {
            name: <div className="text-base font-medium text-gray-500">Price:</div>,
            selector: row => row.price,
            cell: (row, i, column) => {
                return (<Fragment>
                    <div className="mt-1.5 text-base font-semibold text-gray-900">₹ {row.price}</div>
                </Fragment>)
            }
        },
        {
            name: <div className="text-base font-medium text-gray-500">Status:</div>,
            selector: row => row.status,
            cell: (row, i, column) => {
                const statusBadge = () => {
                    switch (row?.status) {
                        case "INITIATED":
                            return <span className="bg-gray-100 text-gray-800 text-sm  flex flex-row gap-2 font-medium me-2 px-2.5 py-0.5 rounded  items-center lowercase">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-5 w-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>

                                {row?.status}</span>;
                            break;

                        case "CONFIRMED":
                            return <span className="bg-green-100 text-green-800 text-sm  flex flex-row gap-2 font-medium me-2 px-2.5 py-0.5 rounded  items-center lowercase">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                </svg>


                                {row?.status}</span>;
                            break;
                        case "PACKED":
                            return <span className="bg-indigo-100 text-indigo-800 text-sm  flex flex-row gap-2 font-medium me-2 px-2.5 py-0.5 rounded  items-center lowercase">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                                </svg>


                                {row?.status}</span>;
                            break;

                        case "SHIPPED":
                            return <span className="bg-purple-100 text-purple-800 text-sm  flex flex-row gap-2 font-medium me-2 px-2.5 py-0.5 rounded  items-center lowercase">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="256" height="256" viewBox="0 0 256 256" xml:space="preserve" className="h-7 w-7  C">

                                    <defs>
                                    </defs>
                                    <g transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
                                        <path d="M 89.334 47.69 L 79.145 36.229 c -0.5 -0.563 -1.218 -0.885 -1.97 -0.885 h -9.356 v -6.467 c 0 -3.053 -2.1 -5.537 -4.681 -5.537 H 31.866 c -2.581 0 -4.681 2.484 -4.681 5.537 v 30.23 c 0 1.758 1.245 3.188 2.774 3.188 h 7.277 c 0.563 2.495 2.794 4.365 5.457 4.365 s 4.893 -1.87 5.457 -4.365 h 17.669 h 2 h 7.542 c 0.563 2.495 2.794 4.365 5.457 4.365 s 4.894 -1.87 5.457 -4.365 h 1.089 c 1.453 0 2.636 -1.183 2.636 -2.636 V 49.441 C 90 48.797 89.764 48.175 89.334 47.69 z M 86.773 47.819 H 74.619 c -0.255 0 -0.463 -0.207 -0.463 -0.462 v -5.44 c 0 -0.255 0.208 -0.463 0.463 -0.463 h 6.495 L 86.773 47.819 z M 42.693 64.66 c -1.984 0 -3.598 -1.614 -3.598 -3.598 c 0 -1.984 1.614 -3.599 3.598 -3.599 s 3.598 1.614 3.598 3.599 C 46.291 63.046 44.677 64.66 42.693 64.66 z M 48.232 60.295 c -0.376 -2.724 -2.713 -4.831 -5.539 -4.831 s -5.163 2.107 -5.539 4.831 h -7.195 c -0.366 0 -0.774 -0.487 -0.774 -1.188 v -30.23 c 0 -1.95 1.203 -3.537 2.681 -3.537 h 31.272 c 1.479 0 2.681 1.587 2.681 3.537 v 6.467 v 15.598 H 38.095 c -0.552 0 -1 0.447 -1 1 s 0.448 1 1 1 h 27.724 v 7.353 H 48.232 z M 80.817 64.66 c -1.983 0 -3.598 -1.614 -3.598 -3.598 c 0 -1.984 1.614 -3.599 3.598 -3.599 c 1.984 0 3.599 1.614 3.599 3.599 C 84.416 63.046 82.802 64.66 80.817 64.66 z M 87.364 60.295 h -1.007 c -0.376 -2.724 -2.714 -4.831 -5.54 -4.831 s -5.163 2.107 -5.539 4.831 h -7.46 V 37.344 h 9.356 c 0.182 0 0.354 0.078 0.476 0.214 l 1.686 1.896 h -4.717 c -1.358 0 -2.463 1.105 -2.463 2.463 v 5.44 c 0 1.357 1.104 2.462 2.463 2.462 H 88 v 9.84 C 88 60.01 87.715 60.295 87.364 60.295 z" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                                        <path d="M 21.207 52.942 H 8.615 c -0.552 0 -1 -0.447 -1 -1 s 0.448 -1 1 -1 h 12.592 c 0.552 0 1 0.447 1 1 S 21.759 52.942 21.207 52.942 z" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                                        <path d="M 21.207 46.031 H 4.617 c -0.552 0 -1 -0.448 -1 -1 s 0.448 -1 1 -1 h 16.59 c 0.552 0 1 0.448 1 1 S 21.759 46.031 21.207 46.031 z" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                                        <path d="M 21.207 39.121 H 1 c -0.552 0 -1 -0.448 -1 -1 s 0.448 -1 1 -1 h 20.207 c 0.552 0 1 0.448 1 1 S 21.759 39.121 21.207 39.121 z" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                                    </g>
                                </svg>

                                {row?.status}</span >;
                            break;
                        case "DELIVERED":
                            return <span className="bg-green-100 text-green-800 text-sm  flex flex-row gap-2 font-medium me-2 px-2.5 py-0.5 rounded  items-center lowercase">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="256" height="256" viewBox="0 0 256 256" xml:space="preserve" className="h-7 w-7">

                                    <defs>
                                    </defs>
                                    <g transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
                                        <path d="M 87.364 62.295 h -1.948 v -2 h 1.948 c 0.351 0 0.636 -0.285 0.636 -0.636 V 49.441 c 0 -0.155 -0.058 -0.307 -0.161 -0.424 L 77.65 37.558 c -0.121 -0.136 -0.294 -0.214 -0.476 -0.214 h -9.356 v 22.951 h 8.401 v 2 H 65.818 V 35.344 h 11.356 c 0.752 0 1.47 0.322 1.97 0.885 L 89.334 47.69 C 89.764 48.175 90 48.797 90 49.441 v 10.218 C 90 61.112 88.817 62.295 87.364 62.295 z" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                                        <path d="M 67.818 62.295 H 47.291 v -2 h 18.527 V 28.877 c 0 -1.95 -1.202 -3.537 -2.681 -3.537 H 31.866 c -1.479 0 -2.681 1.587 -2.681 3.537 v 30.23 c 0 0.7 0.408 1.188 0.774 1.188 h 8.143 v 2 h -8.143 c -1.53 0 -2.774 -1.43 -2.774 -3.188 v -30.23 c 0 -3.053 2.1 -5.537 4.681 -5.537 h 31.272 c 2.581 0 4.681 2.484 4.681 5.537 V 62.295 z" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                                        <path d="M 80.817 66.66 c -3.087 0 -5.598 -2.511 -5.598 -5.598 s 2.511 -5.599 5.598 -5.599 s 5.599 2.512 5.599 5.599 S 83.904 66.66 80.817 66.66 z M 80.817 57.464 c -1.983 0 -3.598 1.614 -3.598 3.599 c 0 1.983 1.614 3.598 3.598 3.598 c 1.984 0 3.599 -1.614 3.599 -3.598 C 84.416 59.078 82.802 57.464 80.817 57.464 z" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                                        <path d="M 42.693 66.66 c -3.087 0 -5.598 -2.511 -5.598 -5.598 s 2.511 -5.599 5.598 -5.599 s 5.598 2.512 5.598 5.599 S 45.78 66.66 42.693 66.66 z M 42.693 57.464 c -1.984 0 -3.598 1.614 -3.598 3.599 c 0 1.983 1.614 3.598 3.598 3.598 s 3.598 -1.614 3.598 -3.598 C 46.291 59.078 44.677 57.464 42.693 57.464 z" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                                        <path d="M 89 49.819 H 74.619 c -1.358 0 -2.463 -1.104 -2.463 -2.462 v -5.44 c 0 -1.358 1.104 -2.463 2.463 -2.463 h 6.944 v 2 h -6.944 c -0.255 0 -0.463 0.208 -0.463 0.463 v 5.44 c 0 0.255 0.208 0.462 0.463 0.462 H 89 V 49.819 z" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                                        <path d="M 21.207 52.942 H 8.615 c -0.552 0 -1 -0.447 -1 -1 s 0.448 -1 1 -1 h 12.592 c 0.552 0 1 0.447 1 1 S 21.759 52.942 21.207 52.942 z" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                                        <path d="M 21.207 46.031 H 4.617 c -0.552 0 -1 -0.448 -1 -1 s 0.448 -1 1 -1 h 16.59 c 0.552 0 1 0.448 1 1 S 21.759 46.031 21.207 46.031 z" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                                        <path d="M 21.207 39.121 H 1 c -0.552 0 -1 -0.448 -1 -1 s 0.448 -1 1 -1 h 20.207 c 0.552 0 1 0.448 1 1 S 21.759 39.121 21.207 39.121 z" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                                        <path d="M 47.502 51.655 c -5.695 0 -10.328 -4.633 -10.328 -10.328 S 41.807 31 47.502 31 c 5.694 0 10.327 4.633 10.327 10.328 S 53.196 51.655 47.502 51.655 z M 47.502 33 c -4.592 0 -8.328 3.736 -8.328 8.328 s 3.736 8.328 8.328 8.328 c 4.592 0 8.327 -3.736 8.327 -8.328 S 52.094 33 47.502 33 z" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                                        <path d="M 46.299 45.637 c -0.272 0 -0.533 -0.111 -0.722 -0.308 l -2.728 -2.845 c -0.382 -0.398 -0.369 -1.031 0.03 -1.414 c 0.398 -0.383 1.031 -0.37 1.414 0.03 l 1.96 2.045 l 4.417 -5.208 c 0.357 -0.42 0.988 -0.473 1.409 -0.116 c 0.422 0.357 0.474 0.988 0.116 1.41 l -5.134 6.053 c -0.184 0.216 -0.449 0.344 -0.732 0.353 C 46.319 45.637 46.309 45.637 46.299 45.637 z" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                                    </g>
                                </svg>

                                {row?.status}</span>;
                            break;
                    }
                }
                return (<Fragment>
                    <div>{statusBadge()}</div>

                </Fragment>)
            }
        },
        {
            name: <div className="text-base font-medium text-gray-500">Payment Id:</div>,
            selector: row => row.payment_id,
            cell: (row, i, column) => {
                return (<Fragment>
                    <div className="mt-1.5 text-base font-semibold text-gray-900">{row.payment_id}</div>
                </Fragment>)
            }
        },
        {
            name: <div className="text-base font-medium text-gray-500">Delivery-Address:</div>,
            selector: row => row.address,
            cell: (row, i, column) => {
                return (<Fragment>
                    <div className="mt-1.5 text-base font-semibold text-gray-900">{row.address}</div>
                </Fragment>)
            }
        },

        {
            name: <div className="text-base font-medium text-gray-500">Receipt:</div>,
            selector: row => row.payment_id,
            cell: (row, i, column) => {
                return (<Fragment>
                    <a href={row?.receipt_url}>
                        <div className="mt-1.5 text-base font-semibold text-gray-900 hover:cursor-pointer">

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m.75 12 3 3m0 0 3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                            </svg>

                        </div>
                    </a>
                </Fragment>)
            }
        },


    ];






    return (<Fragment>
        <section className="bg-white py-8 antialiased md:py-16">
            <div className="mx-auto px-4 2xl:px-0">
                <div className="">
                    <div className="gap-4 sm:flex sm:items-center sm:justify-between">
                        <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">My orders</h2>

                        <div className="mt-6 gap-4 space-y-4 sm:mt-0 sm:flex sm:items-center sm:justify-end sm:space-y-0">
                            <div>
                                <label htmlFor="order-type" className="sr-only mb-2 block text-sm font-medium text-gray-900">Select order type</label>
                                <select id="order-type" className="block w-full min-w-[8rem] rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500">
                                    <option selected>All orders</option>
                                    <option value="pre-order">Pre-order</option>
                                    <option value="transit">In transit</option>
                                    <option value="confirmed">Confirmed</option>
                                    <option value="cancelled">Cancelled</option>
                                </select>
                            </div>

                            <span className="inline-block text-gray-500 "> from </span>

                            <div>
                                <label htmlFor="duration" className="sr-only mb-2 block text-sm font-medium text-gray-900">Select duration</label>
                                <select id="duration" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500">
                                    <option selected>this week</option>
                                    <option value="this month">this month</option>
                                    <option value="last 3 months">the last 3 months</option>
                                    <option value="lats 6 months">the last 6 months</option>
                                    <option value="this year">this year</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    {userToken && <DataTable
                        columns={columns}
                        data={columnData}
                        pagination
                    />}

                    {/* <div className="mt-6 flow-root sm:mt-8">
                        <div className="divide-y divide-gray-200">
                            <div className="flex flex-wrap items-center gap-y-4 py-6">
                                <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                                    <dt className="text-base font-medium text-gray-500">Order ID:</dt>
                                    <dd className="mt-1.5 text-base font-semibold text-gray-900">
                                        <a href="#" className="hover:underline">#FWB127364372</a>
                                    </dd>
                                </dl>

                                <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                                    <dt className="text-base font-medium text-gray-500">Date:</dt>
                                    <dd className="mt-1.5 text-base font-semibold text-gray-900">20.12.2023</dd>
                                </dl>

                                <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                                    <dt className="text-base font-medium text-gray-500">Price:</dt>
                                    <dd className="mt-1.5 text-base font-semibold text-gray-900">$4,756</dd>
                                </dl>

                                <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                                    <dt className="text-base font-medium text-gray-500">Status:</dt>
                                    <dd className="me-2 mt-1.5 inline-flex items-center rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800">
                                        <svg className="me-1 h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.5 4h-13m13 16h-13M8 20v-3.333a2 2 0 0 1 .4-1.2L10 12.6a1 1 0 0 0 0-1.2L8.4 8.533a2 2 0 0 1-.4-1.2V4h8v3.333a2 2 0 0 1-.4 1.2L13.957 11.4a1 1 0 0 0 0 1.2l1.643 2.867a2 2 0 0 1 .4 1.2V20H8Z" />
                                        </svg>
                                        Pre-order
                                    </dd>
                                </dl>

                                <div className="w-full grid sm:grid-cols-2 lg:flex lg:w-64 lg:items-center lg:justify-end gap-4">
                                    <button type="button" className="w-full rounded-lg border border-red-700 px-3 py-2 text-center text-sm font-medium text-red-700 hover:bg-red-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-red-300 lg:w-auto">Cancel order</button>
                                    <a href="#" className="w-full inline-flex justify-center rounded-lg  border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 lg:w-auto">View details</a>
                                </div>
                            </div>

                            <div className="flex flex-wrap items-center gap-y-4 py-6">
                                <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                                    <dt className="text-base font-medium text-gray-500">Order ID:</dt>
                                    <dd className="mt-1.5 text-base font-semibold text-gray-900">
                                        <a href="#" className="hover:underline">#FWB125467980</a>
                                    </dd>
                                </dl>

                                <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                                    <dt className="text-base font-medium text-gray-500">Date:</dt>
                                    <dd className="mt-1.5 text-base font-semibold text-gray-900">11.12.2023</dd>
                                </dl>

                                <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                                    <dt className="text-base font-medium text-gray-500">Price:</dt>
                                    <dd className="mt-1.5 text-base font-semibold text-gray-900">$499</dd>
                                </dl>

                                <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                                    <dt className="text-base font-medium text-gray-500">Status:</dt>
                                    <dd className="me-2 mt-1.5 inline-flex items-center rounded bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800">
                                        <svg className="me-1 h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" />
                                        </svg>
                                        In transit
                                    </dd>
                                </dl>

                                <div className="w-full grid sm:grid-cols-2 lg:flex lg:w-64 lg:items-center lg:justify-end gap-4">
                                    <button type="button" className="w-full rounded-lg border border-red-700 px-3 py-2 text-center text-sm font-medium text-red-700 hover:bg-red-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-red-300 lg:w-auto">Cancel order</button>
                                    <a href="#" className="w-full inline-flex justify-center rounded-lg  border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 lg:w-auto">View details</a>
                                </div>
                            </div>

                            <div className="flex flex-wrap items-center gap-y-4 py-6">
                                <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                                    <dt className="text-base font-medium text-gray-500">Order ID:</dt>
                                    <dd className="mt-1.5 text-base font-semibold text-gray-900">
                                        <a href="#" className="hover:underline">#FWB139485607</a>
                                    </dd>
                                </dl>

                                <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                                    <dt className="text-base font-medium text-gray-500">Date:</dt>
                                    <dd className="mt-1.5 text-base font-semibold text-gray-900">08.12.2023</dd>
                                </dl>

                                <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                                    <dt className="text-base font-medium text-gray-500">Price:</dt>
                                    <dd className="mt-1.5 text-base font-semibold text-gray-900">$85</dd>
                                </dl>

                                <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                                    <dt className="text-base font-medium text-gray-500">Status:</dt>
                                    <dd className="me-2 mt-1.5 inline-flex items-center rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 ">
                                        <svg className="me-1 h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5" />
                                        </svg>
                                        Confirmed
                                    </dd>
                                </dl>

                                <div className="w-full grid sm:grid-cols-2 lg:flex lg:w-64 lg:items-center lg:justify-end gap-4">
                                    <button type="button" className="w-full rounded-lg bg-primary-700 px-3 py-2 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 lg:w-auto">Order again</button>
                                    <a href="#" className="w-full inline-flex justify-center rounded-lg  border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 lg:w-auto">View details</a>
                                </div>
                            </div>

                            <div className="flex flex-wrap items-center gap-y-4 py-6">
                                <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                                    <dt className="text-base font-medium text-gray-500">Order ID:</dt>
                                    <dd className="mt-1.5 text-base font-semibold text-gray-900">
                                        <a href="#" className="hover:underline">#FWB137364371</a>
                                    </dd>
                                </dl>

                                <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                                    <dt className="text-base font-medium text-gray-500">Date:</dt>
                                    <dd className="mt-1.5 text-base font-semibold text-gray-900">16.11.2023</dd>
                                </dl>

                                <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                                    <dt className="text-base font-medium text-gray-500">Price:</dt>
                                    <dd className="mt-1.5 text-base font-semibold text-gray-900">$119</dd>
                                </dl>

                                <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                                    <dt className="text-base font-medium text-gray-500">Status:</dt>
                                    <dd className="me-2 mt-1.5 inline-flex items-center rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                                        <svg className="me-1 h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5" />
                                        </svg>
                                        Confirmed
                                    </dd>
                                </dl>

                                <div className="w-full grid sm:grid-cols-2 lg:flex lg:w-64 lg:items-center lg:justify-end gap-4">
                                    <button type="button" className="w-full rounded-lg bg-primary-700 px-3 py-2 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300  lg:w-auto">Order again</button>
                                    <a href="#" className="w-full inline-flex justify-center rounded-lg  border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 lg:w-auto">View details</a>
                                </div>
                            </div>

                            <div className="flex flex-wrap items-center gap-y-4 py-6">
                                <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                                    <dt className="text-base font-medium text-gray-500">Order ID:</dt>
                                    <dd className="mt-1.5 text-base font-semibold text-gray-900">
                                        <a href="#" className="hover:underline">#FWB134567890</a>
                                    </dd>
                                </dl>

                                <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                                    <dt className="text-base font-medium text-gray-500">Date:</dt>
                                    <dd className="mt-1.5 text-base font-semibold text-gray-900">02.11.2023</dd>
                                </dl>

                                <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                                    <dt className="text-base font-medium text-gray-500">Price:</dt>
                                    <dd className="mt-1.5 text-base font-semibold text-gray-900">$2,056</dd>
                                </dl>

                                <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                                    <dt className="text-base font-medium text-gray-500">Status:</dt>
                                    <dd className="me-2 mt-1.5 inline-flex items-center rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                                        <svg className="me-1 h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5" />
                                        </svg>
                                        Confirmed
                                    </dd>
                                </dl>

                                <div className="w-full grid sm:grid-cols-2 lg:flex lg:w-64 lg:items-center lg:justify-end gap-4">
                                    <button type="button" className="w-full rounded-lg bg-primary-700 px-3 py-2 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 lg:w-auto">Order again</button>
                                    <a href="#" className="w-full inline-flex justify-center rounded-lg  border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 lg:w-auto">View details</a>
                                </div>
                            </div>

                            <div className="flex flex-wrap items-center gap-y-4 py-6">
                                <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                                    <dt className="text-base font-medium text-gray-500">Order ID:</dt>
                                    <dd className="mt-1.5 text-base font-semibold text-gray-900">
                                        <a href="#" className="hover:underline">#FWB146284623</a>
                                    </dd>
                                </dl>

                                <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                                    <dt className="text-base font-medium text-gray-500">Date:</dt>
                                    <dd className="mt-1.5 text-base font-semibold text-gray-900">26.09.2023</dd>
                                </dl>

                                <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                                    <dt className="text-base font-medium text-gray-500">Price:</dt>
                                    <dd className="mt-1.5 text-base font-semibold text-gray-900">$180</dd>
                                </dl>

                                <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                                    <dt className="text-base font-medium text-gray-500">Status:</dt>
                                    <dd className="me-2 mt-1.5 inline-flex items-center rounded bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800">
                                        <svg className="me-1 h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6" />
                                        </svg>
                                        Cancelled
                                    </dd>
                                </dl>

                                <div className="w-full grid sm:grid-cols-2 lg:flex lg:w-64 lg:items-center lg:justify-end gap-4">
                                    <button type="button" className="w-full rounded-lg bg-primary-700 px-3 py-2 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 lg:w-auto">Order again</button>
                                    <a href="#" className="w-full inline-flex justify-center rounded-lg  border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 lg:w-auto">View details</a>
                                </div>
                            </div>

                            <div className="flex flex-wrap items-center gap-y-4 py-6">
                                <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                                    <dt className="text-base font-medium text-gray-500">Order ID:</dt>
                                    <dd className="mt-1.5 text-base font-semibold text-gray-900">
                                        <a href="#" className="hover:underline">#FWB145967376</a>
                                    </dd>
                                </dl>

                                <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                                    <dt className="text-base font-medium text-gray-500">Date:</dt>
                                    <dd className="mt-1.5 text-base font-semibold text-gray-900">17.07.2023</dd>
                                </dl>

                                <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                                    <dt className="text-base font-medium text-gray-500">Price:</dt>
                                    <dd className="mt-1.5 text-base font-semibold text-gray-900">$756</dd>
                                </dl>

                                <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                                    <dt className="text-base font-medium text-gray-500">Status:</dt>
                                    <dd className="me-2 mt-1.5 inline-flex items-center rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                                        <svg className="me-1 h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5" />
                                        </svg>
                                        Confirmed
                                    </dd>
                                </dl>

                                <div className="w-full grid sm:grid-cols-2 lg:flex lg:w-64 lg:items-center lg:justify-end gap-4">
                                    <button type="button" className="w-full rounded-lg bg-primary-700 px-3 py-2 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300  lg:w-auto">Order again</button>
                                    <a href="#" className="w-full inline-flex justify-center rounded-lg  border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 lg:w-auto">View details</a>
                                </div>
                            </div>

                            <div className="flex flex-wrap items-center gap-y-4 py-6">
                                <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                                    <dt className="text-base font-medium text-gray-500">Order ID:</dt>
                                    <dd className="mt-1.5 text-base font-semibold text-gray-900">
                                        <a href="#" className="hover:underline">#FWB148756352</a>
                                    </dd>
                                </dl>

                                <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                                    <dt className="text-base font-medium text-gray-500">Date:</dt>
                                    <dd className="mt-1.5 text-base font-semibold text-gray-900">30.06.2023</dd>
                                </dl>

                                <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                                    <dt className="text-base font-medium text-gray-500">Price:</dt>
                                    <dd className="mt-1.5 text-base font-semibold text-gray-900">$235</dd>
                                </dl>

                                <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                                    <dt className="text-base font-medium text-gray-500">Status:</dt>
                                    <dd className="me-2 mt-1.5 inline-flex items-center rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                                        <svg className="me-1 h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5" />
                                        </svg>
                                        Confirmed
                                    </dd>
                                </dl>

                                <div className="w-full grid sm:grid-cols-2 lg:flex lg:w-64 lg:items-center lg:justify-end gap-4">
                                    <button type="button" className="w-full rounded-lg bg-primary-700 px-3 py-2 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300  lg:w-auto">Order again</button>
                                    <a href="#" className="w-full inline-flex justify-center rounded-lg  border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 lg:w-auto">View details</a>
                                </div>
                            </div>

                            <div className="flex flex-wrap items-center gap-y-4 py-6">
                                <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                                    <dt className="text-base font-medium text-gray-500">Order ID:</dt>
                                    <dd className="mt-1.5 text-base font-semibold text-gray-900">
                                        <a href="#" className="hover:underline">#FWB159873546</a>
                                    </dd>
                                </dl>

                                <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                                    <dt className="text-base font-medium text-gray-500">Date:</dt>
                                    <dd className="mt-1.5 text-base font-semibold text-gray-900">04.06.2023</dd>
                                </dl>

                                <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                                    <dt className="text-base font-medium text-gray-500">Price:</dt>
                                    <dd className="mt-1.5 text-base font-semibold text-gray-900">$90</dd>
                                </dl>

                                <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                                    <dt className="text-base font-medium text-gray-500">Status:</dt>
                                    <dd className="me-2 mt-1.5 inline-flex items-center rounded bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800">
                                        <svg className="me-1 h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6" />
                                        </svg>
                                        Cancelled
                                    </dd>
                                </dl>

                                <div className="w-full grid sm:grid-cols-2 lg:flex lg:w-64 lg:items-center lg:justify-end gap-4">
                                    <button type="button" className="w-full rounded-lg bg-primary-700 px-3 py-2 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300  lg:w-auto">Order again</button>
                                    <a href="#" className="w-full inline-flex justify-center rounded-lg  border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 lg:w-auto">View details</a>
                                </div>
                            </div>

                            <div className="flex flex-wrap items-center gap-y-4 py-6">
                                <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                                    <dt className="text-base font-medium text-gray-500">Order ID:</dt>
                                    <dd className="mt-1.5 text-base font-semibold text-gray-900">
                                        <a href="#" className="hover:underline">#FWB156475937</a>
                                    </dd>
                                </dl>

                                <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                                    <dt className="text-base font-medium text-gray-500">Date:</dt>
                                    <dd className="mt-1.5 text-base font-semibold text-gray-900">11.02.2023</dd>
                                </dl>

                                <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                                    <dt className="text-base font-medium text-gray-500">Price:</dt>
                                    <dd className="mt-1.5 text-base font-semibold text-gray-900">$1,845</dd>
                                </dl>

                                <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                                    <dt className="text-base font-medium text-gray-500">Status:</dt>
                                    <dd className="me-2 mt-1.5 inline-flex items-center rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                                        <svg className="me-1 h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5" />
                                        </svg>
                                        Confirmed
                                    </dd>
                                </dl>

                                <div className="w-full grid sm:grid-cols-2 lg:flex lg:w-64 lg:items-center lg:justify-end gap-4">
                                    <button type="button" className="w-full rounded-lg bg-primary-700 px-3 py-2 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 lg:w-auto">Order again</button>
                                    <a href="#" className="w-full inline-flex justify-center rounded-lg  border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 lg:w-auto">View details</a>
                                </div>
                            </div>
                        </div>
                    </div> 

                    <nav className="mt-6 flex items-center justify-center sm:mt-8" aria-label="Page navigation example">
                        <ul className="flex h-8 items-center -space-x-px text-sm">
                            <li>
                                <a href="#" className="ms-0 flex h-8 items-center justify-center rounded-s-lg border border-e-0 border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 ">
                                    <span className="sr-only">Previous</span>
                                    <svg className="h-4 w-4 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 19-7-7 7-7" />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex h-8 items-center justify-center border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700">1</a>
                            </li>
                            <li>
                                <a href="#" className="flex h-8 items-center justify-center border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700">2</a>
                            </li>
                            <li>
                                <a href="#" aria-current="page" className="z-10 flex h-8 items-center justify-center border border-primary-300 bg-primary-50 px-3 leading-tight text-primary-600 hover:bg-primary-100 hover:text-primary-700 ">3</a>
                            </li>
                            <li>
                                <a href="#" className="flex h-8 items-center justify-center border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700">...</a>
                            </li>
                            <li>
                                <a href="#" className="flex h-8 items-center justify-center border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700">100</a>
                            </li>
                            <li>
                                <a href="#" className="flex h-8 items-center justify-center rounded-e-lg border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                                    <span className="sr-only">Next</span>
                                    <svg className="h-4 w-4 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7" />
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </nav>
                    */}
                </div>
            </div>
        </section>
    </Fragment>)
}