import React, { useState } from "react";
import DanhSachDienThoai from "./DanhSachDienThoai";
import ChiTietDienThoai from "./ChiTietDienThoai";
import { useSelector } from "react-redux";
const BaiTapHienThiDienThoai = () => {
  const { iphones } = useSelector((state) => state.iPhoneSlice);
  let [dienThoai, setChiTietDienThoai] = useState(iphones[0]);
  // console.log(dienThoai);
  function updateDienThoai(dienThoai) {
    setChiTietDienThoai(dienThoai);
  }
  return (
    <div>
      <h2>Bài tập hiển thị chi tiết điện thoại</h2>
      <DanhSachDienThoai
        updateDienThoai={updateDienThoai}
        listPhone={iphones}
        title="Danh sách điện thoại"
      />
      <ChiTietDienThoai dienThoai={dienThoai} />
    </div>
  );
};

export default BaiTapHienThiDienThoai;
