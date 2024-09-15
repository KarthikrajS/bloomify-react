import React, { Fragment, useEffect, useState } from 'react'
import WishListItem from '../WishListItem/WishListItem'

const WishList = () => {
    const [wishListData, setWishListData] = useState([])
    useEffect(() => {
        if (typeof window.localStorage != "undefined")
            setWishListData(JSON.parse(localStorage.getItem('wishList')))
    }, [])
    console.log(wishListData?.items, "wishListData");
    return (<Fragment>
        <section className="fixed right-20 top-20 z-40">
            <div className="relative">

                {(
                    <div className="rounded-3xl co bg-gray-800">
                        <div className="max-w-lg pt-6 pb-8 px-8 mx-auto">
                            <div className="flex mb-10 items-center justify-between">
                                <h6 className="font-bold text-2xl text-white mb-0">
                                    Your Wish List
                                </h6>
                            </div>

                            <div>
                                {wishListData?.items
                                    ? wishListData?.items.map((item, index) => {
                                        console.log(item, "item_asdasd");
                                        if (item) {
                                            return <WishListItem key={index} data={item} />;
                                        }
                                    })
                                    : null}
                            </div>

                        </div>
                    </div>
                )}
            </div>
        </section>
    </Fragment>)
}

export default WishList