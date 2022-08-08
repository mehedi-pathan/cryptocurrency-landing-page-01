//import images
import HeroImg from "../assets/img/hero-img.png";

//import icons
import { IoIosArrowDroprightCircle } from "react-icons/io";

const Hero = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="flex flex-col items-center lg:flex-row">
          {/* hero text */}
          <div className="flex-1">
            {/* badge text */}
            <div
              className="bg-white/10 p-1 mb-6 rounded-full pl-1 pr-3 max-w-[365px]"
              data-aos="fade-down"
              data-aos-delay="400"
            >
              <div className="flex items-center justify-between text-sm lg:text-base">
                <div className="bg-white text-darkblue rounded-full font-medium py-1 px-4">
                  75% SAVE
                </div>
                <div className="capitalize">For the Black Friday weekend</div>
              </div>
            </div>
            {/* hero section title */}
            <h1
              className="text-[32px] lg:text-[64px] font-bold mb-6 leading-tight"
              data-aos="fade-down"
              data-aos-delay="500"
            >
              Fastest & secure platform to invest in crypto
            </h1>
            <p
              className="max-w-[440px] mb-8 leading-relaxed"
              data-aos="fade-down"
              data-aos-delay="600"
            >
              Buy and sell cryptocurrencies, trusted by 10M wallets with over
              $30 billion in transactions.
            </p>
            <button
              className="btn gap-x-5 pl-6 text-sm lg:h-16 lg:text-base"
              data-aos="fade-down"
              data-aos-delay="700"
            >
              Try it free
              <IoIosArrowDroprightCircle className="text-2xl lg:text-3xl" />
            </button>
          </div>
          {/* hero image */}
          <div className="flex-1">
            <img
              src={HeroImg}
              alt="Hero section img"
              data-aos="fade-up"
              data-aos-delay="600"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
