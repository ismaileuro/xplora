import React from "react";
import "./Body.css";
import smartphone from "../../img/smartphone.svg";
import cube from "../../img/cube.svg";
import group from "../../img/group.png";

const Body = () => {
  return (
    <div className="body">
      <div className="buttons">
        <button>The Social Revolution</button>
        <button>The New Era</button>
        <button>Let's Talk Business</button>
        <button>The New Society</button>
      </div>
      <div className="socialRevolution">
        <h1>The Social Revolution</h1>
        <img src={smartphone} alt="" />
      </div>
      <div className="newEra">
        <div className="head">
          <h1>The New Era</h1>
          <img src={cube} alt="" />
        </div>
        <button>Enter Email</button>
      </div>
      <div className="business">
        <div className="head">
          <h1>Let's Talk Business</h1>
        </div>
        <div className="buttons">
          <button>Enquire</button>
          <button>Sign-up</button>
        </div>
      </div>
      <div className="signup">
        <div className="head">
          <h1>Sign-up</h1>
        </div>
        <form className="form" action="">
            <input type="text" placeholder="Contact Name" />
            <input type="text" placeholder="Company Name" />
            <input type="text" placeholder="Position at Company" />
            <input type="text" placeholder="Contact Number" />
            <input type="text" placeholder="Contact Email" />
        </form>
      </div>
      <div className="society">
        <div className="head">
          <h1>The New Socity</h1>
        </div>
        <img src={group} alt="" />
        <div className="buttons">
          <button>Name</button>
          <button>Number</button>
          <button>Email</button>
        </div>
      </div>
    </div>
  );
};

export default Body;
