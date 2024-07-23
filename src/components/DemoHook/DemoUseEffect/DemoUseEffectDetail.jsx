import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DemoUseEffectDetail = () => {
  const [shoe, setShoe] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios({
      method: "GET",
      url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${id}`,
    })
      .then((res) => {
        setShoe(res.data.content);
      })
      .catch((err) => console.log(err));
  });
  console.log(shoe);
  return (
    <div>
      <h2>Detail Shoes</h2>
      <div className="flex">
        <div className="w-4/12">
          <img src={shoe.image} alt="" />
        </div>
        <div className="w-8/12">
          <h2>{shoe.name}</h2>
          <p>{shoe.description}</p>
          <p>{shoe.price}</p>
          <button>Buy</button>
        </div>
      </div>
    </div>
  );
};

export default DemoUseEffectDetail;
