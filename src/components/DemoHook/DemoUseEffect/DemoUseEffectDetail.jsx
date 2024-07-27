import axios from "axios";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
const DemoUseEffectDetail = () => {
  const [shoe, setShoe] = useState([]);
  const { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  // console.log(searchParams.get("brands"));
  let random = id + Math.floor(Math.random() * 6);
  useEffect(() => {
    axios({
      method: "GET",
      url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${id}`,
    })
      .then((res) => {
        setShoe(res.data.content);
      })
      .catch((err) => console.log(err));
  }, [id]);

  //useMemo and useCallBack only render 1 times, it will render whenever the data inside change
  const randomMemo = useMemo(() => {
    return random;
  }, []);
  // console.log(random);
  //can use to tracking times when users use
  useEffect(() => {
    return () => {
      console.log(" turn off useeffectdetail");
    };
  }, []);

  // useRef can run but witout rendering, render only through useState
  const refCustom = useRef(null);
  const refInput = useRef(null);
  return (
    <>
      <input
        type="text"
        placeholder="Nhap nam sinh"
        ref={refInput}
        onChange={(e) => {
          // console.log(e.target.value);
          console.log(refInput.current.value);
        }}
      />
      <p>{refInput.current?.value}</p>
      <button
        onClick={() => {
          console.log(
            refCustom.current.scrollIntoView({
              behavior: "smooth",
              block: "center",
            })
          );
        }}
        className="py-2 px-5 bg-black text-white rounde-sm"
      >
        Show Related Shoes
      </button>
      {randomMemo}
      {/* {random} */}
      <input
        type="text"
        className="p-2 border border-black rounded-sm"
        placeholder="Type ur brands"
        onChange={(e) => {
          const dataQuery = Object.fromEntries(searchParams);
          console.log(dataQuery);
          setSearchParams({
            ...dataQuery,
            brands: e.target.value,
          });
        }}
      />
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
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div>
        <div ref={refCustom}>
          <h3>Related Products</h3>
          <div className="grid grid-cols-3">
            {shoe.relatedProducts?.map((item, index) => {
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
      </div>
    </>
  );
};

export default DemoUseEffectDetail;
