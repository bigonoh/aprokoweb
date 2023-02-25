import React from "react";
require("./style.css");
/**
 * Raven Primary Button Component.
 *
 * Note: This API is a custom Button Component which accepts the following as props, "label,color, fill, icon, border, action, padding, height, width, & disabled"
 * @storybook documentation coming soon
 *
 *
 * @see https://localhost:8000/storybook/primary_button
 */
export const ButtonPrimary = (props) => {
  const {
    label,
    color,
    fill,
    icon,
    reverse,
    border,
    action,
    padding,
    height,
    width,
    disabled,
    btnStyle,
    marginTop,
  } = props;
  return (
    <button
    className={`btn ${btnStyle && btnStyle}`}
    style={{
        width: width ? width : "",
        flexDirection: reverse ? "row-reverse" : "",
        pointerEvents: disabled ? "none" : "",
        cursor: disabled ? "not-allowed" : "",
        height: height ? height : "",
        color: color ? color : "white",
        backgroundColor: fill ? fill : "",
        padding: !padding ? "1.6rem 4rem" : padding,
        opacity: disabled ? "0.2" : "",
        border: !border ? "" : border,
        transition: "all 0.3s",
        marginTop: marginTop,
      }}
      onClick={action}
      // className="btn button-black"
    >
      <div className="btn_label">{label || props.children}</div>
      {icon && <figure className="icon">{icon}</figure>}
    </button>
  );
};

/**
 * Raven Secondary Button Component.
 *
 * Note: This API is a custom Button Component which accepts the following as props, "label,color, fill, icon, border, action, padding, height, width, & disabled"
 * @storybook documentation coming soon
 *
 *
 * @see https://localhost:8000/storybook/secondary_button
 */
export const ButtonSecondary = ({
  label,
  color,
  icon,
  fill,
  action,
  fontSize,
  padding,
  // width,
  height,
  disabled,
  radius,
}) => {
  return (
    <button
      style={{
        fontSize: !fontSize ? "" : fontSize,
        // width: width ? width : "2.4rem",
        height: !height ? "2.4rem" : height,
        pointerEvents: disabled ? "none" : "",
        cursor: disabled ? "not-allowed" : "",
        borderRadius: !radius ? "" : radius,
        color: color ? color : "",
        backgroundColor: fill ? fill : "",
        padding: !padding ? "1.6rem 2rem" : padding,
        opacity: disabled ? "0.2" : "",
      }}
      onClick={action}
      className="btn button-secondary"
    >
      <div className="btn_label">{label}</div>
      <div className="icon">{icon}</div>
    </button>
  );
};

/**
 * Raven Tertiary Button Component.
 *
 * Note: This API is a custom Button Component which accepts the following as props, "label,color, fill, icon, border, action, padding, height, width, & disabled"
 * @storybook documentation coming soon
 *
 *
 * @see https://localhost:8000/storybook/tertiary_button
 */

export const ButtonTertiary = ({
  label,
  color,
  fill,
  action,
  icon,
  padding,
  width,
  fontSize,
  // height,
  disabled,
}) => {
  return (
    <button
      style={{
        fontSize: !fontSize ? "1.1rem" : fontSize,
        color: color ? color : "",
        pointerEvents: disabled ? "none" : "",
        cursor: disabled ? "not-allowed" : "",
        background: fill ? fill : "rgba(255, 255, 255, 0)",
        width: width ? width : "",
        // height: !height ? "2.4rem" : height,
        padding: padding ? padding : "1.6rem 4rem",
        opacity: disabled ? "0.2" : "",
      }}
      onClick={action}
      className="btn button-tertiary"
    >
      <div>
        {label}
        <div className="icon">{icon}</div>
      </div>
    </button>
  );
};

/**
 * Raven Icon Button Component.
 *
 * Note: This API is a custom Button Component which accepts the following as props, "label,color, fill, icon, border, action, padding, height, width, & disabled"
 * @storybook documentation coming soon
 *
 *
 * @see https://localhost:8000/storybook/primary_button
 */
export const IconButton = ({
  label,
  border,
  color,
  fill,
  action,
  icon,
  padding,
  width,
  fontSize,
  reverse,
  height,
  disabled,
  btnStyle,
}) => {
  return (
    <button
      className={`btn button-tertiary  ${btnStyle && btnStyle}`}
      style={{
        border: !border ? "" : border,
        flexDirection: reverse ? "row-reverse" : "row",
        pointerEvents: disabled ? "none" : "",
        cursor: disabled ? "not-allowed" : "",
        fontSize: !fontSize ? "1.1rem" : fontSize,
        color: color ? color : "",
        background: fill ? fill : "rgba(255, 255, 255, 0)",
        width: width ? width : "",
        padding: !padding ? "1.6rem 4rem" : padding,
        opacity: disabled ? "0.2" : "",
      }}
      onClick={action}
    >
      <div>
        <div className="icon">{icon}</div>
        {label}
      </div>
    </button>
  );
};
