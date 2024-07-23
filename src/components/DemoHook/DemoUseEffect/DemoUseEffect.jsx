import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const DemoUseEffect = () => {
  const [listShoe, setListShoe] = useState([]);
  useEffect(() => {
    // console.log("useEffect");
    axios({
      method: "GET",
      url: "https://shop.cyberlearn.vn/api/Product",
    })
      .then((res) => {
        setListShoe(res.data.content);
        // console.log(res.data.content);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(listShoe);
  //   console.log("Demo Component Hook");
  function render() {
    // console.log("Demo Render Hook");
    return <p>HELLU</p>;
  }
  return (
    <div>
      {/* {render()} */}
      <div className="grid grid-cols-4">
        {listShoe.map((item, index) => {
          return (
            <div className="col" key={index}>
              <img src={item.image} alt="" width={100} />
              <h3>{item.name}</h3>
              <p>Price {item.price}</p>
              <Link
                to={`/demoUseEffectDetail/${item.id}`}
                className="bg-blue-500 text-white py-2 px-5 rounded-sm"
              >
                Details
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DemoUseEffect;