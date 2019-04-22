import React, { Component } from "React";
import PropTypes from "prop-types";

const Button = props => {
  <button onClick={props.onClick}>{props.children}</button>;
};

Button.defaultProps = {
  children: "Salvar vindo do defaultProps"
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string
};

export default Button;
