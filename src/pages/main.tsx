import * as React from "react";
import profileImage from "../images/profile_pic.jpg";

const MainPage = () => {
  return (
    <div className="container h-screen w-full min-h-full min-w-full bg-deep-purple">
      <div className="flex flex-col items-center justify-center gap-y-8 w-full sm:w-50">
        <h1 className="font-sans font-light text-light-purple text-4xl self-stretch leading-10 text-center items-center">
          Hello, I'm William
        </h1>
        <img
          className="overflow-visible h-2/5 w-2/5 min-w-[300px] rounded-full border border-[#ffffff] drop-shadow-md"
          src={profileImage}
        />
      </div>
    </div>
  );
};

export default MainPage;
