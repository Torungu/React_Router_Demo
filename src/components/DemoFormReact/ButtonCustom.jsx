import React from "react";

const ButtonCustom = ({
  content,
  type = "button",
  bgColor = "bg-green-600",
  onClick,
}) => {
  return (
    <button
      type={type}
      className={`px-5 py-2 ${bgColor} text-white font-semibold rounded-md`}
      onClick={onClick}
    >
      {content}
    </button>
  );
};

export default ButtonCustom;
