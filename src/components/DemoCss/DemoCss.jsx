import React from "react";
// import "./demoCss.css";
import style from "./demoCss.module.css";
const DemoCss = () => {
  return (
    <div className="demo_css">
      <h2 className={style.h2}>Demo về sử dụng CSS trong dự án React</h2>
      <p className={style.sub_title}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
        repudiandae!
      </p>
    </div>
  );
};

export default DemoCss;
