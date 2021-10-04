import React from "react";
import brand from "../src/images/icon-brand-recognition.svg";
import record from "../src/images/icon-detailed-records.svg";
import fully from "../src/images/icon-fully-customizable.svg";

const Advanced_Statics = () => {
  return (
    <section className="advancedStatisticsSec">
      <h2>Advanced Statics</h2>
      <p>
        Track how your links are performing across the web with our advanced
        statistics dashboard
      </p>

      <article className="flex">
        <div>
          <div className="advIcons">
            <img src={brand} alt="" className="advancedStaticsImage" />
          </div>
          <h2>Brand Recognition</h2>
          <p>
            Boost your brand recognition with each click. Generic links don’t
            mean a thing. Branded links help instil confidence in your content.
          </p>
        </div>

        <div>
          <div className="advIcons">
            <img src={record} alt="" className="advancedStaticsImage" />
          </div>
          <h2>Detailed Records</h2>
          <p>
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </p>
        </div>

        <div>
          <div className="advIcons">
            <img src={fully} alt="" className="advancedStaticsImage" />
          </div>
          <h2>Fully Customizable</h2>
          <p>
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </p>
        </div>
      </article>
    </section>
  );
};

export default Advanced_Statics;
