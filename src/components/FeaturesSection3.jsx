// import image
// import FeaturesImg3 from "../assets/img/feature-3-img.png";
import FeaturesImg3 from "../assets/img/Table.png";

const FeaturesSection3 = () => {
  return (
    <section className="py-[30px] lg:py-[120px]">
      <div className="flex flex-col lg:flex-row">
        {/* text */}
        <div
          className="max-w-[454px] mb-6 lg:mt-10"
          data-aos="fade-right"
          data-aos-offset="400"
        >
          <h3 className="h3 mb-6">
            Grow your profit and track your investments
          </h3>
          <p className="text-gray mb-8 max-w-[408px]">
            Use advanced analytical tools. Clear TradingView charts let you
            track current and historical profit investments.
          </p>
          <button className="btn px-8">Learn more</button>
        </div>
        <div
          className="flex flex-1 lg:justify-end justify-start"
          data-aos="fade-left"
          data-aos-offset="400"
        >
          <img
            className="w-[90%] lg:w-[100%] my-8 lg:my-0"
            src={FeaturesImg3}
            alt="feature section img"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection3;
