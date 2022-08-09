// import image
import FeaturesImg1 from "../assets/img/feature-1-img.png";

const FeaturesSection1 = () => {
  return (
    <section className="pb-[30px] lg:pb-[120px] pt-0">
      <div className="flex flex-col lg:flex-row">
        {/* text */}
        <div
          className="max-w-[454px] mb-6 lg:mt-10"
          data-aos="fade-right"
          data-aos-offset="400"
        >
          <h3 className="h3 mb-6">Invest Smart</h3>
          <p className="text-gray mb-8">
            Get full statistic information about the behavior of buyers and
            sellers will help you to make the decision.
          </p>
          <button className="btn px-8">Learn more</button>
        </div>
        {/* image */}
        <div
          className="flex-1 flex justify-center lg:justify-end"
          data-aos="fade-left"
          data-aos-offset="400"
        >
          <img
            className="w-[80%] lg:w-[100%] my-8 lg:my-0"
            src={FeaturesImg1}
            alt="feature section one img"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection1;
