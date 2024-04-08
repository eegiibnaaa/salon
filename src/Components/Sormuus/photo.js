import react from "react";
import image from "./../../images/sormuus.png";

function Photo() {
  return (
    <div className="w-full flex justify-center">
      <img src={image} alt="keke" className="h-[35rem]"></img>
    </div>
  );
}

export default Photo;
