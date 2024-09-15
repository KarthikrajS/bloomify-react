import React from "react";
// import "./Card.scss";
// import { Link } from "react-router-dom";

const Card = (props) => {
    const { item } = props
    console.log(item,"itemqweq");
    return (
        <a className="link" href={`/product/${item.id}`}>
            <div className="w-[280px] flex flex-col gap-[10px] mb-[50px]">
                <div className="w-[100%] h-[400px] overflow-hidden relative">
                    {item?.attributes.isNew && <span className="absolute top-[5px] left-[5px] bg-white text-teal-400 px-[3px] py-[5px] z-30 font-semibold text-lg">New Season</span>}
                    <img
                        src={
                            import.meta.env.PUBLIC_ENV__VIKE_UPLOAD_URL + item.attributes?.img?.data?.attributes?.url
                        }
                        alt=""
                        className="z-20 hover:z-10  w-[100%] h-[100%] object-cover absolute"
                    />
                    <img
                        src={
                            import.meta.env.PUBLIC_ENV__VIKE_UPLOAD_URL + item.attributes?.img2?.data?.attributes?.url
                        }
                        alt=""
                        className="z-10 hover:z-20  w-[100%] h-[100%] object-cover absolute"
                    />
                </div>
                <h2>{item?.attributes.title}</h2>
                <div className="flex gap-[20px]">
                    <h3 className="text-[18px] font-semibold first:text-gray-400 first:line-through">₹{item.oldPrice || item?.attributes.price + 20}</h3>
                    <h3 className="text-[18px] font-semibold first:text-gray-400 first:line-through">₹{item?.attributes.price}</h3>
                </div>
            </div>
        </a>
    );
};

export default Card;