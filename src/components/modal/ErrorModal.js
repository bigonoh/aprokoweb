/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from "react";
import { ThreeDots } from "react-loader-spinner";
import { ButtonPrimary } from "../buttons/ButtonReuse";
// import { ButtonPrimary } from "../../../../components/buttons/ButtonReuse";
import "./ErrorModal.css";

const ErrorModal = ({
  onCancel,
  onClick,
  smallText,
  bigText,
  btnText,
  fillColor,
  loading,
}) => {
  return (
    <div className="error-modal-wrap">
      {/* title start */}
      <p className="title">{bigText}</p>
      {/* title end */}
      {/* text start */}
      <p className="text">{smallText}</p>
      {/* text end */}
      {/* btn wrap start */}
      <div className="btn-wrap">
        <p onClick={onCancel} className="cancel">
          Cancel
        </p>
        <ButtonPrimary
          action={onClick}
          fill={fillColor ? fillColor : "#FF0F00"}
          // label={`${btnText}`}
        >
          {loading ? (
            <div style={{ padding: ".1rem" }} className="load-wrap">
              <ThreeDots
                height="15"
                width="40"
                radius="9"
                color="#ffffff"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
              />
            </div>
          ) : (
            <span> {btnText}</span>
          )}
        </ButtonPrimary>
      </div>
      {/* btn wrap end */}
    </div>
  );
};

export default ErrorModal;
