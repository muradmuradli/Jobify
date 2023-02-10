import React from "react";
import { Link } from "react-router-dom";
import img from "../assets/images/not-found.svg";
import Wrapper from "../assets/wrappers/ErrorPage";

const Error = () => {
  return (
    <Wrapper className="full-page">
      <div>
        <img src={img} alt="not found" />
        <h3>oh! page not found</h3>
        <p>we can't seem to find the page you're looking for</p>
        <Link to={`/`}>back home</Link>
        <p></p>
      </div>
    </Wrapper>
  );
};

export default Error;