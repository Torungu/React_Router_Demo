import React, { useState } from "react";

const BaiTap1State = (props) => {
  // dữ liệu props là dữ liệu chỉ đọc (readonly)
  const [selectCar, setSelectCar] = useState("black-car.jpg");
  console.log(props);
  const arrButton = [
    {
      icon: "./public/CarBasic/icons/icon-black.jpg",
      title: "Crystal Black",
      subTitle: "Pearl",
      selectCar: "black-car.jpg",
    },
    {
      icon: "./public/CarBasic/icons/icon-steel.jpg",
      title: "Modern Steel",
      subTitle: "Pearl",
      selectCar: "steel-car.jpg",
    },
    {
      icon: "./public/CarBasic/icons/icon-silver.jpg",
      title: "Lunar Silver",
      subTitle: "Pearl",
      selectCar: "silver-car.jpg",
    },
    {
      icon: "./public/CarBasic/icons/icon-red.jpg",
      title: "Rallye Red",
      subTitle: "Pearl",
      selectCar: "red-car.jpg",
    },
  ];
  // props.abc = "huhu";

  return (
    <div>
      <h2>Bài tập hiển thị loại xe tương ứng bằng State {props.abc}</h2>
      <button
        onClick={props.updateStateCount}
        className="py-2 px-5 bg-red-500 text-white rounded-lg"
      >
        Tăng count
      </button>
      <div className="flex">
        <div className="w-2/3">
          <img src={`./public/CarBasic/products/${selectCar}`} alt="" />
        </div>
        <div className="w-1/3 space-y-5">
          {arrButton.map((item, index) => {
            return (
              <button
                onClick={() => {
                  setSelectCar(item.selectCar);
                }}
                className="flex items-center py-2 px-5 rounded-lg border space-x-3 border-black w-full"
              >
                <img width={40} src={item.icon} alt="" />
                <div className="text-left">
                  <b>{item.title}</b>
                  <p>{item.subTitle}</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BaiTap1State;
