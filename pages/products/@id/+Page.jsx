import { Fragment, useState } from 'react'
import useFetch from '../../../renderer/hooks/useFetch';
import List from '../../../renderer/components/List/List';

export { Page }

function Page(pageContext) {

  const { id } = pageContext;

  console.log(id, "id");

  const [maxPrice, setMaxPrice] = useState(5000);
  const [sort, setSort] = useState("desc");
  const [selectedSubCats, setSelectedSubCats] = useState([]);

  const { data, loading, error } = useFetch(
    `/sub-categories?[filters][categories][id][$eq]=${id}`
  );

  console.log(data, "data");
  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;
    console.log(value, "value");
    setSelectedSubCats(
      isChecked
        ? [...selectedSubCats, value]
        : selectedSubCats.filter((item) => item !== value)
    );
  };

  const handleToggle = (e) => {
    // e.preventDefault();
    sort === "desc" ? setSort("asc") : setSort("desc")
  }

  return (
    <div className="px-[30px] py-[50px] flex">
      <div className=" sticky h-[100%] top-[50px] p-[10px]">
        <div className="mb-[30px]">
          <h2 className='font-semibold mb-[20px]'>Product Categories</h2>
          {data?.map((item) => (
            <div className="mb-10px" key={item.id}>
              <input
                type="checkbox"
                id={item.id}
                value={item.id}
                onChange={(e)=>handleChange(e)}
              />
              <label className='mb-[10px] ml-3' htmlFor={item.id}>{item.attributes.title}</label>
            </div>
          ))}
        </div>
        <div className="mb-[30px]">
          <h2 className='font-semibold mb-[20px]'>Filter by price</h2>
          <div className="mb-10px">
            <span>0</span>
            <input
              type="range"
              min={0}
              max={5000}
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="mb-[30px]">
          <h2 className='font-semibold mb-[20px]'>Sort by</h2>
          {/* <div className="mb-10px">
            <input
              type="radio"
              id="asc"
              value="asc"
              name="price"
              onChange={(e) => {e.preventDefault(); setSort("asc")}}
            />
            <label className='mb-[10px]' htmlFor="asc">Price (Lowest first)</label>
          </div>
          <div className="mb-10px">
            <input
              type="radio"
              id="desc"
              value="desc"
              name="price"
              onChange={(e) => {e.preventDefault(); setSort("desc")}}
            />
            <label className='mb-[10px]' htmlFor="desc">Price (Highest first)</label>
          </div> */}

          <label className="inline-flex items-center cursor-pointer gap-3">
            <span className=" text-sm font-medium text-gray-900 dark:text-gray-300">Low</span>
            <input type="checkbox" id="asc"
              value="asc"
              name="price" className="sr-only peer" onChange={(e) => handleToggle(e)} />
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">High</span>
          </label>
        </div>
      </div>
      <div className="flex-1 p-[10px]">
        <img
          className="w-[100%] h-[300px] object-cover mb-[50px]"
          src="https://img.freepik.com/free-photo/beautiful-young-woman-wearing-sari_23-2149502989.jpg?t=st=1723884103~exp=1723887703~hmac=c8cedd044a16a956d56efa72626073cb2454be05036008b729efbde56399459c&w=1800"
          alt=""
        />
        <List catId={id} maxPrice={maxPrice} sort={sort} subCats={selectedSubCats} />
      </div>
    </div>
  );
}

