// câu lệnh : rafce
import React from "react";

const HeaderDemo = () => {
  const sinhVien = {
    hoTen: "Nguyễn Văn A",
    lop: "FE52",
    tuoi: 18,
  };
  const arrMonAn = [
    {
      tenMon: "Mì xào hải sản",
      giaTien: 25000,
    },
    {
      tenMon: "Súp cua",
      giaTien: 15000,
    },
    {
      tenMon: "Lẩu manwah",
      giaTien: 35000,
    },
  ];
  // string,number,array (string,number,jsx)
  const classButton = "py-2 px-5 bg-purple-500 text-white rounded-md";
  return (
    <div className="bg-black text-white p-10">
      <p>Tôi là {sinhVien.hoTen}</p>
      <button className={classButton} id={sinhVien.lop}>
        Đăng nhập
      </button>
      <p>
        {sinhVien.tuoi > 18
          ? "Xin chúc mừng bạn đã đủ tuổi"
          : "Xin lỗi bạn chưa đủ tuổi"}
      </p>
      <button className={classButton}>Đăng ký</button>
      {arrMonAn.map((item, index) => {
        return (
          <div>
            <h3>{item.tenMon}</h3>
            <p>{item.giaTien}</p>
          </div>
        );
      })}
    </div>
  );
};

export default HeaderDemo;
