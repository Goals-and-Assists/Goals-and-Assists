import React, { useEffect } from "react";
import { AmazonSmileContainer, AmazonImg } from "./AmazonSmileElements";
import Amazon from "../../images/amazon-smile.png";

const AmazonSmile = () => {
  useEffect(() => {});

  return (
    <AmazonSmileContainer>
      <a href="https://smile.amazon.com/ch/87-3901111" target="blank">
        <AmazonImg src={Amazon} alt="Amazon Smile banner" />
      </a>
    </AmazonSmileContainer>
  );
};

export default AmazonSmile;
