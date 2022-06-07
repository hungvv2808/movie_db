import React, { Component } from "react";
import { Wrapper } from "./Button.styles";
import { PropTypes } from "prop-types";

const Button = ({ text, callback, icon }) => (
  <Wrapper type="button" onClick={callback}>
    {text}
    <ion-icon name={icon}></ion-icon>
  </Wrapper>
);

Button.propTypes = {
  text: PropTypes.string,
  callback: PropTypes.func,
};

export default Button;
