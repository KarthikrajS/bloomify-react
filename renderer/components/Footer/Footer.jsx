import React, { Fragment } from "react";

const Footer = () => {
    return (
        <Fragment>
            <div className="mt-[100px]  mb-[20px] my-200px">
                <div className="flex gap-[50px]">
                    <div className="flex flex-col gap-3 text-lg align-justify">
                        <h1 className="text-lg font-normal text-[#555]">Categories</h1>
                        <span className="text-gray-400">Silk Saree</span>
                        <span className="text-gray-400">Cotton Saree</span>
                        <span className="text-gray-400">Chudidhar</span>
                        {/* <span className="text-gray-400">Accessories</span> */}
                        {/* <span className="text-gray-400">New Arrivals</span> */}
                    </div>
                    <div className="flex flex-col gap-3 text-lg align-justify ">
                        <h1 className="text-lg font-normal text-[#555]">Links</h1>
                        <span className="text-gray-400">FAQ</span>
                        <span className="text-gray-400">Pages</span>
                        <span className="text-gray-400">Stores</span>
                        <span className="text-gray-400">Compare</span>
                        <span className="text-gray-400">Cookies</span>
                    </div>
                    <div className="flex flex-col gap-3 text-lg align-justify w-1/3">
                        <h1 className="text-lg font-normal text-[#555]">About</h1>
                        <span className="text-gray-400">
                            Welcome to Bloomify, your ultimate destination for stylish and sophisticated women's clothing. As a premier eCommerce LLC, we are dedicated to curating a collection that blends the latest trends with timeless elegance, ensuring every piece enhances your unique style. Our mission is to provide a seamless shopping experience, combining exceptional quality with outstanding customer service. From chic everyday wear to elegant evening attire, our carefully selected range is designed to empower and inspire. At Bloomify, we believe that fashion is more than just clothing—it's about expressing who you are. Join us in discovering your next favorite outfit!
                        </span>
                    </div>
                    <div className="flex flex-col gap-3 text-lg align-justify w-1/3">
                        <h1 className="text-lg font-normal text-[#555]">Contact</h1>
                        <span className="text-gray-400">
                            We’d love to hear from you! Whether you have questions about our collections, need assistance with an order, or just want to share your feedback, our team is here to help. Reach out to us through the following channels:
                            <br />
                            Email: support@bloomify.com
                            Phone: (123) 456-7890
                            Address: 123 Fashion Avenue, Suite 456, City, State, ZIP Code
                            <br />
                            Customer Service Hours:
                            Monday - Friday: 9:00 AM - 6:00 PM
                            Saturday: 10:00 AM - 4:00 PM
                            Sunday: Closed
                            <br />
                            For the latest updates and exclusive offers, follow us on social media:
                            [Facebook] [Instagram] [Twitter]

                            Thank you for choosing Bloomify. We look forward to assisting you!




                        </span>
                    </div>
                </div>
                <div className="flex items-center justify-between mt-[50px]">
                    <div className="flex items-center">
                        <span className="text-[#2879fe] font-bold text-xl">
                            Bloomify
                        </span>
                        <span className=" ml-[20px] text-[12px] text-gray-400">
                            © Copyright 2024. All Rights Reserved
                        </span>
                    </div>
                    <div className="right">
                        <img src="./payment.png" alt="" className="h-[50px]" />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Footer