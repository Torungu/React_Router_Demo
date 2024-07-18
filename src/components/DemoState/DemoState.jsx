import React, { useState } from "react";
import hinhXeDen from "./../../assets/products/black-car.jpg";
const DemoState = () => {
  // luôn khai báo hook nằm ở đầu component
  // hooks không được khai báo trong các function hay bất kì điều kiện if else, chỉ được khai báo ở trong function component
  // hook useState
  const [state, setState] = useState(8);
  const [hoTen, setHoTen] = useState("A Đông");
  let diemToan = 9;
  console.log(state);
  return (
    <div>
      <h2>Demo về state trong React</h2>
      <p>{diemToan}</p>
      <p>Giá trị state: {state}</p>
      <button
        // onClick={() => {
        //   diemToan++;
        //   console.log(diemToan);
        // }}
        onClick={() => {
          setState(state + 1);
        }}
        className="py-2 px-5 bg-red-500 rounded-lg text-white"
      >
        Tăng điểm
      </button>
      <div>
        {/* Thực hiện truyền dữ liệu state hoTen vào thẻ p thông qua data binding  */}
        {/* ở input sẽ chạy sự kiện onChange để cập nhật lại dữ liệu cho state hoTen thông qua phương thức setHoTen  */}
        <label htmlFor="">Nhập tên</label>
        <input
          onChange={(e) => {
            console.log(e.target.value);
            setHoTen(e.target.value);
          }}
          type="text"
          className="p-2 border"
          placeholder="nhập họ tên"
        />
        <p>{hoTen}</p>
      </div>
      <img src="./public/CarBasic/products/black-car.jpg" alt="" />
      <img src={hinhXeDen} alt="" />
    </div>
  );
};

export default DemoState;
