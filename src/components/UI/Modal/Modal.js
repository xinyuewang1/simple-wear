import React from "react";

import Style from "./Modal.module.css";

import Backdrop from "../Backdrop/Backdrop";
import Aux from "../../../hoc/Auxiliary/Auxiliary";

const Modal = props => (
  <Aux>
    <Backdrop show={props.show} clicked={props.modalClosed} />
    <div
      className={Style.Modal}
      style={{
        transform: props.show ? "translateY(0)" : "translateY(-100%)",
        opacity: props.show ? "1" : "0"
      }}
    >
      {props.children}
    </div>
  </Aux>
);

export default Modal;
