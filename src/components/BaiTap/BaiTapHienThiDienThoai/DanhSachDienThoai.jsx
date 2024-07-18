import React from "react";

const DanhSachDienThoai = ({ listPhone, title, updateDienThoai }) => {
  return (
    <>
      <h3>{title}</h3>
      <div className="grid grid-cols-4">
        {/* NV1 : Thực hiện sử dụng mảng để render tạo các div item hiển thị dữ liệu điện thoại, các thông tin cần hiển thị bao gồm: hình ảnh, tên điện thoại và một nút button xem chi tiết */}
        {listPhone.map((item, index) => {
          const { image, name } = item;
          return (
            <div key={index}>
              <img src={image} alt="" />
              <h3>{name}</h3>
              <button
                onClick={() => {
                  updateDienThoai(item);
                }}
                className="bg-green-700 text-white py-2 px-5 rounded-lg"
              >
                Xem chi tiết
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default DanhSachDienThoai;
