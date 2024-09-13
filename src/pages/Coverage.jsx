import "../App.css";
import coverage1 from "../assets/coverage1.svg";
import coverage2 from "../assets/coverage2.svg";
import coverage3 from "../assets/coverage3.svg";
import coverage4 from "../assets/coverage4.svg";
import coverage5 from "../assets/coverage5.svg";
import coverage6 from "../assets/coverage6.svg";

const Coverage = () => {
  return (
    <section className="bg-[#F7F8FF]">
      <div className="w-full py-16 flex flex-col items-center justify-center px-[16px] lg:px-[120px]">
        <h4 className="coverage-head text-center text-[32px] md:text-[40px]">
          Sectors Coverage
        </h4>
        <p className="coverage-title pt-2">Here are the sectors we cover</p>

        <div className="flex flex-col lg:flex-row gap-3 pt-10">
          <div className="coverage-card">
            <img src={coverage1} alt="" className="pb-2" />
            <p className="coverage-card-title py-3">Retail</p>
            <p className="coverage-card-text">
              Track pricing trends to optimize inventory and pricing strategies
              for maximum profitability
            </p>
          </div>

          <div className="coverage-card">
            <img src={coverage2} alt="" className="pb-2" />
            <p className="coverage-card-title py-3">
              Restaurants & Food Services
            </p>
            <p className="coverage-card-text">
              Understand ingredient cost fluctuations to manage menu pricing and
              procurement
            </p>
          </div>

          <div className="coverage-card">
            <img src={coverage3} alt="" className="pb-2" />
            <p className="coverage-card-title py-3">
              Consumer Goods & Manufacturing
            </p>
            <p className="coverage-card-text">
              Analyze raw material costs and supply chain trends to maintain
              competitive advantage
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-3 pt-3">
          <div className="coverage-card">
            <img src={coverage4} alt="" className="pb-2" />
            <p className="coverage-card-title py-3">Agriculture & Farming</p>
            <p className="coverage-card-text">
              Gain insights into market demands and price forecasts to optimize
              production.
            </p>
          </div>

          <div className="coverage-card">
            <img src={coverage5} alt="" className="pb-2" />
            <p className="coverage-card-title py-3">Government & Policy </p>
            <p className="coverage-card-text">
              Access data-driven insights for policy-making & economic planning
            </p>
          </div>

          <div className="coverage-card">
            <img src={coverage6} alt="" className="pb-2" />
            <p className="coverage-card-title py-3">Finance & Investment </p>
            <p className="coverage-card-text">
              Leverage market data to inform investment strategies and financial
              forecasting.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Coverage;
