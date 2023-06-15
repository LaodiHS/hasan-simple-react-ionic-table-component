import React, { FC } from "react";
import PropTypes from "prop-types";
import { IonButton } from "@ionic/react";

interface ButtonProps {
  onClick: () => void;
}

export const Button: FC<ButtonProps> = ({ onClick }) => {
  return <IonButton onClick={onClick}>Click</IonButton>;
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
