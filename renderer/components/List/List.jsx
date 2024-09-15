import React from "react";
import Card from "../Card/Card";
import useFetch from "../../hooks/useFetch";

const List = ({ subCats, maxPrice, sort, catId }) => {
    const { data, loading, error } = useFetch(
        `/products?populate=*&[filters][categories][id]=${catId}${subCats?.map(
            (item) => `&[filters][sub_categories][id][$eq]=${item}`
        )}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`
    );

    console.log(data, "data_Asda");
    return (
        <div className="flex justify-around flex-row gap-3">
            {loading
                ? "loading"
                : data?.map((item) =>{ console.log(item, "itemasdad"); return <Card item={item} key={item.id} />})}
        </div>
    );
};

export default List;