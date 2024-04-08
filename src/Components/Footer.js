import react from "react";
import facebook from "./../images/facebook.svg";
import instagram from "./../images/instagram.svg";
import twitter from "./../images/twitter.svg";

function Footer() {
  return (
    <div className="bg-pink-200 h-min-48 p-16 bottom-0 w-screen flex justify-center items-center flex-col">
      <div className="flex flex-col">
        Санал хүсэлт
        <div>
          <input
            type="text"
            className="w-96 border-orange-800 border-2 rounded-lg h-9"
          ></input>
          <button className="bg-white ml-3 rounded-lg p-1 px-2 border-orange-800 border-2">
            Илгээх
          </button>
        </div>
      </div>
      <div className="flex flex-row space-x-20 m-5">
        <img src={facebook} alt="facebook" />
        <img src={instagram} alt="facebook" />
        <img src={twitter} alt="facebook" />
      </div>
      <div className="flex flex-row space-x-20">
        <div>Холбоо барих</div>
        <div>Салбар газрууд</div>
      </div>
    </div>
  );
}

export default Footer;
