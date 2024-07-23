import React from "react";
import { useDispatch } from "react-redux";
import { capNhatHoTen } from "../../redux/slices/userSlice";

const DemoRedux = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Demo Redux</h2>
      <label htmlFor="" className="mx-2">
        UserName
      </label>
      <input
        type="text"
        name="Pls enter your name"
        id=""
        className="border p-2 rounded-sm"
        onChange={(event) => {
          dispatch(capNhatHoTen(event.target.value));
        }}
      />
    </div>
  );
};

export default DemoRedux;
