//import images
import WhyImg from "../assets/img/why-img.png";

const Why = () => {
  return (
    <section className="section">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-x-[70px] lg:flex-row">
          {/* image */}
          <div className="order-2 lg:order-1 flex items-center justify-center">
            <img
              className="w-[60%] lg:w-[100%]"
              src={WhyImg}
              alt="why section images"
            />
          </div>
          {/* text */}
          <div className="order-1 lg:order-2">
            <h2 className="section-title">Why you should choose CRAPPO</h2>
            <p className="section-subtitle max-w-[408px]">
              Experience the next generation cryptocurrency platform. No
              financial borders, extra fees, and fake reviews.
            </p>
            <button className="btn px-6">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why;
