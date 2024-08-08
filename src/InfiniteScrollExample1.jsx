import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import { Loader, MantineProvider } from '@mantine/core';
// import ProductCard from "./ProductCard";
// import Loader from "./Loader";

const InfiniteScrollExample1 = () => {
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [index, setIndex] = useState(2);

  useEffect(() => {
    axios
      .get("https://api.escuelajs.co/api/v1/products?offset=10&limit=5")
      .then((res) => setItems(res.data))
      .catch((err) => console.log(err));
  }, []);

  const fetchMoreData = () => {
    axios
      .get(`https://api.escuelajs.co/api/v1/products?offset=${index}0&limit=5`)
      .then((res) => {
        setItems((prevItems) => [...prevItems, ...res.data]);

        res.data.length > 0 ? setHasMore(true) : setHasMore(false);
      })
      .catch((err) => console.log(err));

    setIndex((prevIndex) => prevIndex + 1);
  };

  const ProductCard = (item) => {
console.log(item )

let candidate = item?.data;

    return (
    <div>
        <h6>
            {candidate?.price}
        </h6>
        <h6>
            {candidate?.title}
        </h6>
        <h6>
            {candidate?.description}
        </h6>
        <h6>
            {candidate?.creationAt}
        </h6>
        <h6>
            {candidate?.category?.name}
        </h6>

        <h6>
           ----------------------------
        </h6>

        
    </div>
  )}

  return (
    <MantineProvider>
    <InfiniteScroll
      dataLength={items.length}
      next={fetchMoreData}
      hasMore={hasMore}
      loader={<Loader color="blue" size={70}/>}
    >
      <div className='container'>
        <div className='row'>
          {items &&
            items.map((item) => <ProductCard data={item} key={item.id} />)}
        </div>
      </div>
    </InfiniteScroll>
    </MantineProvider>
  );
};

export default InfiniteScrollExample1;