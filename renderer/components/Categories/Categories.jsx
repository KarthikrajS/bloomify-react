import React from "react";


const Categories = () => {
    return (
        <div className="flex h-[80vh] gap-[10px] m-[10px]">
            <div className="flex flex-1 flex-col gap-[10px]">
                <div className="flex flex-1 gap-[10px] relative overflow-hidden -z-10">
                    <img className="w-[100%] h-[100%] object-cover"
                        src="https://img.freepik.com/free-photo/young-woman-beautiful-red-dress_1303-17503.jpg?t=st=1723883989~exp=1723887589~hmac=9d1af2506d842c1eff9388c868ef22412361dba38414171213cd4a092d8452b9&w=900"
                        alt=""
                    />
                    <button className="absolute m-w-[100px] w-fit h-[50px] p-[10px] top-0 bottom-0 left-0 right-0 m-auto cursor-pointer border-none bg-white uppercase font-bold">
                        <a className="link" href="/products/1">
                            Sale
                        </a>
                    </button>
                </div>
                <div className="flex flex-1 gap-[10px] relative overflow-hidden -z-10">
                    <img className="w-[100%] h-[100%] object-cover"
                        src="https://img.freepik.com/free-photo/portrait-young-woman-wearing-traditional-sari-garment_23-2149565139.jpg?t=st=1723883422~exp=1723887022~hmac=42185f9dd86e8f1b3315ffb9800564daf973be6a7282eeef91b54b7e900faf5a&w=740"
                        alt=""
                    />
                    <button className="absolute m-w-[100px] w-fit h-[50px] p-[10px] top-0 bottom-0 left-0 right-0 m-auto cursor-pointer border-none bg-white uppercase font-bold">
                        <a href="/products/1" className="link">
                            Women
                        </a>
                    </button>
                </div>
            </div>
            <div className="flex flex-1 flex-col gap-[10px]">
                <div className="flex flex-1 gap-[10px] relative overflow-hidden -z-10">
                    {" "}
                    <img className="w-[100%] h-[100%] object-cover"
                        src="https://img.freepik.com/free-photo/beautiful-young-woman-wearing-sari_23-2149502994.jpg?t=st=1723883632~exp=1723887232~hmac=9d67b8c061fb358e90dc640afb205ad55d2916ea186297f430146b97e1b8b006&w=1600"
                        alt=""
                    />
                    <button className="absolute m-w-[100px] w-fit h-[50px] p-[10px] top-0 bottom-0 left-0 right-0 m-auto cursor-pointer border-none bg-white uppercase font-bold">
                        <a href="/products/1" className="link">
                            New Season
                        </a>
                    </button>
                </div>
            </div>
            <div className="flex flex-1 flex-col gap-[10px] flex-2">
                <div className="flex flex-1 gap-[10px] relative overflow-hidden">
                    <div className="flex flex-1 flex-col gap-[10px]">
                        <div className="flex flex-1 gap-[10px] relative overflow-hidden -z-10">
                            <img className="w-[100%] h-[100%] object-cover"
                                src="https://img.freepik.com/premium-photo/blue-color-this-saree-is-very-popular-choice_917855-7.jpg?w=900"
                                alt=""
                            />
                            <button className="absolute m-w-[100px] w-fit h-[50px] p-[10px] top-0 bottom-0 left-0 right-0 m-auto cursor-pointer border-none bg-white uppercase font-bold">
                                <a href="/products/1" className="link">
                                    SAREE
                                </a>
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-1 flex-col gap-[10px]">
                        <div className="flex flex-1 gap-[10px] relative overflow-hidden -z-10">
                            {" "}
                            <img className="w-[100%] h-[100%] object-cover"
                                src="https://img.freepik.com/premium-photo/gold-silver-jewelry_632261-2360.jpg?w=1600"
                                alt=""
                            />
                            <button className="absolute m-w-[100px] w-fit h-[50px] p-[10px] top-0 bottom-0 left-0 right-0 m-auto cursor-pointer border-none bg-white uppercase font-bold">
                                <a href="/products/1" className="link">
                                    Accessories
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-1 gap-[10px] relative overflow-hidden -z-10">
                    <img className="w-[100%] h-[100%] object-cover"
                        src="https://img.freepik.com/free-photo/sideways-woman-posing-green-house-looking-camera_23-2148261256.jpg?t=st=1723883912~exp=1723887512~hmac=6022167ec2aa3ef1a5d0e3bf7bf739f48c13e0a088c54c233fa1437a5684e5e0&w=1600"
                        alt=""
                    />
                    <button className="absolute m-w-[100px] w-fit h-[50px] p-[10px] top-0 bottom-0 left-0 right-0 m-auto cursor-pointer border-none bg-white uppercase font-bold">
                        <a href="/products/1" className="link">
                            Chudidhar
                        </a>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Categories;