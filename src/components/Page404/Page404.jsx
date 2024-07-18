import React from "react";
import Lottie from "lottie-react";
import animation404 from "../../assets/animation/404animation.json";
import { Link, useNavigate } from "react-router-dom";
const Page404 = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <Lottie animationData={animation404} loops width="600px" height="600px" />
      <h2>WEB NOT FOUND !!</h2>
      <button
        onClick={() => {
          navigate("/");
        }}
        className="bg-red-400 py-2 px-5 rounded-lg"
      >
        Back to Home
      </button>
      {/* <Link to={"/"} className="bg-red-400 py-2 px-5 rounded-lg">
        Back to Home
      </Link> */}
    </div>
  );
};

export default Page404;
