import { useState } from "react";
//import data
import { currency } from "../data";

// import icons
// import { AiOutlineRightCircle } from "react-icons/ai";
// import image
import ArrowImg from "../assets/img/Arrow_Right.svg";

const Trade = () => {
  // item name state maintain
  const [itemName, setItemName] = useState("Bitcoin");
  return (
    <section className="section lg:pt-[320px]  bg-gradient-to-b from-[#f8f9fb] to-[#fafbff] text-darkblue lg:-mt-[320px]">
      <div className="container mx-auto">
        <div className="text-center max-w-[758px] mx-auto mb-24 lg:mb-[64px]">
          <h2 className="section-title">
            Trade securely and market the high growth cryptocurrencies.
          </h2>
        </div>

        {/* items */}
        <div className="flex flex-col gap-[45px] lg:flex-row">
          {currency.map((item, index) => {
            const { image, name, abbr, description } = item;
            return (
              //items
              <div
                onMouseEnter={() => setItemName(name)}
                onMouseLeave={() => setItemName(!name)}
                className={`${
                  name === itemName ? "bg-violet text-white" : "bg-white"
                } w-full rounded-2xl py-12 px-6 shadow-primary cursor-pointer transition duration-300`}
                key={index}
              >
                <div className="flex flex-col justify-center items-center">
                  {/* item image */}
                  <img className="mb-12" src={image} alt="single card img" />
                  {/* imte name */}
                  <div className="flex mb-4 items-center gap-x-2">
                    <div className="text-[32px] font-bold">{name}</div>
                    <div className="text-lg text-gray-400 font-medium">
                      {abbr}
                    </div>
                  </div>

                  {/* item description */}
                  <p className="mb-6 text-center">{description}</p>
                  {/* button */}
                  <button
                    className={`${
                      name === itemName
                        ? "text-white bg-blue hover:bg-blue-hover border-none pl-8 pr-6 gap-x-3"
                        : "text-blue w-16"
                    } border-2 border-gray-300 rounded-full h-16 flex justify-center items-center `}
                  >
                    {name === itemName && (
                      <div className="text-lg font-medium capitalize">
                        Start mining
                      </div>
                    )}
                    <img
                      className={`${
                        name === itemName
                          ? "w-[32px] h-[32px]"
                          : "w-[64px] h-[64px]"
                      } transition`}
                      src={ArrowImg}
                      alt=""
                    />
                    {/* <AiOutlineRightCircle
                      className={`${
                        name === itemName ? "text-2xl" : "text-3xl"
                      }`}
                    /> */}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Trade;
