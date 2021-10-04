import React from "react";
import background from "../src/images/illustration-working.svg";

const ShowCase = () => {
  return (
    <section className="showCase">
      {/* <div className="workingDiv"></div> */}
      <img src={background} alt="" className="workingIllu" />
      <article>
        <h1>More than just shorter links</h1>
        <p>
          Build your brand’s recognition and get detailed insights on how your
          links are performing.{" "}
        </p>
        <span>
          <a href="#" className="getStarted">
            Get Started
          </a>
        </span>
      </article>
    </section>
  );
};

export default ShowCase;
