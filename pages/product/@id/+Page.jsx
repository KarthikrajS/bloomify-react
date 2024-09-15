import { Fragment, useState } from 'react'
import useFetch from '../../../renderer/hooks/useFetch';
import { useAuthContext } from '../../../renderer/components/AuthProvider/AuthProvider';
import { render } from 'vike/abort';
import Cookies from 'js-cookie';
import { navigate } from 'vike/client/router';
// import { usePageContext } from '../../../renderer/usePageContext'


export { Page }
/*import React from "react";
import { useState } from "react";
import "./Product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";

const Product = () => {
  const id = useParams().id;
  const [selectedImg, setSelectedImg] = useState("img");
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();
  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);

  return (
    <div className="product">
      {loading ? (
        "loading"
      ) : (
        <>
          <div className="left">
            <div className="images">
              <img className='w-[100%] h-[150px] object-cover cursor-pointer mb-[10px]'
                src={
                  import.meta.env.PUBLIC_ENV__VIKE_UPLOAD_URL +
                  data?.attributes?.img?.data?.attributes?.url
                }
                alt=""
                onClick={(e) => setSelectedImg("img")}
              />
              <img
                src={
                  import.meta.env.PUBLIC_ENV__VIKE_UPLOAD_URL +
                  data?.attributes?.img2?.data?.attributes?.url
                }
                alt=""
                onClick={(e) => setSelectedImg("img2")}
              />
            </div>
            <div className="mainImg">
              <img
                src={
                  import.meta.env.PUBLIC_ENV__VIKE_UPLOAD_URL +
                  data?.attributes[selectedImg]?.data?.attributes?.url
                }
                alt=""
              />
            </div>
          </div>
          <div className="right">
            <h1>{data?.attributes?.title}</h1>
            <span className="price">${data?.attributes?.price}</span>
            <p>{data?.attributes?.desc}</p>
            <div className="quantity">
              <button
                onClick={() =>
                  setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                }
              >
                -
              </button>
              {quantity}
              <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
            </div>
            <button
              className="add"
              onClick={() =>
                dispatch(
                  addToCart({
                    id: data.id,
                    title: data.attributes.title,
                    desc: data.attributes.desc,
                    price: data.attributes.price,
                    img: data.attributes.img.data.attributes.url,
                    quantity,
                  })
                )
              }
            >
              <AddShoppingCartIcon /> ADD TO CART
            </button>
            <div className="links">
              <div className="item">
                <FavoriteBorderIcon /> ADD TO WISH LIST
              </div>
              <div className="item">
                <BalanceIcon /> ADD TO COMPARE
              </div>
            </div>
            <div className="info">
              <span>Vendor: Polo</span>
              <span>Product Type: T-Shirt</span>
              <span>Tag: T-Shirt, Women, Top</span>
            </div>
            <hr />
            <div className="info">
              <span>DESCRIPTION</span>
              <hr />
              <span>ADDITIONAL INFORMATION</span>
              <hr />
              <span>FAQ</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Product; */
function Page(pageContext) {

  const { id } = pageContext;

  const { addItem, addItemToWishList, user } = useAuthContext();
  console.log(id, "id");
  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);

  const [selectedImg, setSelectedImg] = useState("img");
  const [quantity, setQuantity] = useState(1);

  console.log(data, "data");
  const handleProductAdd = (item) => {
    if (!!user) {
      addItem(item, quantity)
    } else {
      navigate("/auth/sign-in")
    }

  }

  const handleProductAddToWishList = (item) => {
    if (!!user) {
      addItemToWishList(item, quantity)
    } else {
      navigate("/auth/sign-in")
    }

  }
  console.log(data?.attributes,"data?.attributes");
  return (
    <Fragment>
      <div className="px-[20px] py-[50px] flex gap-[50px]">
        {loading ? (
          "loading"
        ) : (
          <>
            <div className="flex-1 flex gap-[20px]">
              <div className="flex-1 max-w-[68px]">
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
              </div>
              <div className="flex-1">
                <img className='w-[100%] max-h-[800px] object-cover'
                  src={
                    import.meta.env.PUBLIC_ENV__VIKE_UPLOAD_URL +
                    data?.attributes[selectedImg]?.data?.attributes?.url
                  }
                  alt=""
                />
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-[30px]">
              <h1>{data?.attributes?.title}</h1>
              <span className="price">₹{data?.attributes?.price}</span>
              <p className='text-[18px] font-semibold text-justify'>{data?.attributes?.desc}</p>
              <div className="flex items-center gap-[10px]">
                <button className=' w-[50px] h-[50px] flex items-center justify-center cursor-pointer border-none;'
                  onClick={() =>
                    setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                  }
                >
                  -
                </button>
                {quantity}
                <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
              </div>
              <button
                className=" w-250px p-[10px] bg-[#2879fe] text-white flex items-center justify-center gap-[20px] cursor-pointer border-none font-bold rounded-lg"
                onClick={() => { handleProductAdd(data) }
                }
              >
                {/* <AddShoppingCartIcon /> ADD TO CART */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg> ADD TO CART

              </button>
              <div className="flex gap-[20px] flex-col lg:flex-row">
                <div className="flex items-center gap-[10px] text-[#2879fe] text-[14px] cursor-pointer hover:bg-[#2879fe] hover:text-white p-2 rounded-lg" onClick={() => { handleProductAddToWishList(data) }}>
                  {/* <FavoriteBorderIcon /> ADD TO WISH LIST */}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                  </svg> ADD TO WISH LIST

                </div>
                <div className="flex items-center gap-[10px] text-[#2879fe] text-[14px] cursor-pointer  hover:bg-[#2879fe] hover:text-white p-2 rounded-lg">
                  {/* <BalanceIcon /> ADD TO COMPARE */}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z" />
                  </svg> ADD TO COMPARE

                </div>
              </div>
              <div className="flex flex-col gap-[10px] text-gray-400 text-[14px] mt-[30px]">
                {/* <span>Vendor: Polo</span> */}
                <span>Product Type: {data?.attributes?.categories.data[0].attributes.title}</span>
                <span>{data?.attributes?.tags}</span>
              </div>
              <hr className='w-[200px] border-solid border-[rgb(238, 237, 237)] border-1' />
              <div className="flex flex-col gap-[10px] text-gray-400 text-[14px] mt-[30px]">
                <span>DESCRIPTION</span>
                <span>{data?.attributes?.desc}</span>
                <hr className='w-[200px] border-solid border-[rgb(238, 237, 237)] border-1' />
                <span>ADDITIONAL INFORMATION</span>
                <span>{data?.attributes?.additionalInfo}</span>
                {/* <hr className='w-[200px] border-solid border-[rgb(238, 237, 237)] border-1' /> */}
                {/* <span>FAQ</span> */}
              </div>
            </div>
          </>
        )}
      </div>
    </Fragment>
  );
}
