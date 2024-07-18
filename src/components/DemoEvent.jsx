import React from "react";

const DemoEvent = () => {
  // onclick, onchange
  // DOM.onclick = () => {
  //   alert("Người dùng đã bấm nút");
  // }
  function chaoMungSinhVienMoi(hoTen) {
    // Phân biệt kĩ khi nào dùng data binding và string template
    // data binding khi nào có thẻ jsx thì sử dụng
    // string template là phương thức và các xử logic của javascript
    alert(`Chúc mừng sinh viên ${hoTen} đã nhập học`);
  }
  return (
    <div className="container">
      <h2 className="text-2xl font-bold">Demo về xử lí sự kiện trong React</h2>
      <button
        // onClick={() => {
        //   alert("Người dùng đã bấm nút");
        // }}
        onClick={(event) => {
          chaoMungSinhVienMoi("Quách Khải");
        }}
        className="bg-black text-white py-2 px-5 rounded-md"
      >
        Hiển thị câu chào
      </button>
      <label htmlFor="" className="block">
        Họ tên
      </label>
      <input
        type="text"
        placeholder="Vui lòng nhập họ tên"
        className="p-2 border rounded-md block mb-10"
        onChange={(event) => {
          console.log(event.target.value);
        }}
      />
    </div>
  );
};

export default DemoEvent;
