// import React from "react";
import LoanOption from "../homepage/component/LoanOption";

const ApplyToLoan = () => {
  return (
    <div className=" w-screen h-dvh sm:overflow-hidden sm:pt-10 bg-transparent z-20 flex items-center justify-center relative">
      <video
        src="/loan-apply.mp4"
        playsInline
        className="absolute w-screen sm:hidden block z-0 "
      ></video>
      <video
        src="/loan-apply.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute w-screen sm:block hidden z-0 "
      ></video>
      <LoanOption white={true} />
    </div>
  );
};

export default ApplyToLoan;
