import React, { useCallback, useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { NotificationContext } from "../../../App";

const DemoUseEffect = () => {
  const data = useContext(NotificationContext);
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
    data.handleNotification("error", "Hello");
  }, []);
  // console.log(listShoe);
  //   console.log("Demo Component Hook");
  function render() {
    // console.log("Demo Render Hook");
    return <p>{listShoe && listShoe[0]?.name}</p>;
  }
  const [number, setNumber] = useState("");
  const funtionCallBack = useCallback(render, [number]);

  return (
    <div>
      {funtionCallBack()}
      <input
        type="text"
        placeholder="random number"
        onChange={(e) => {
          setNumber(e.target.value);
        }}
      />
      <div className="grid grid-cols-4">
        {listShoe.map((item, index) => {
          return (
            <div key={index}>
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
