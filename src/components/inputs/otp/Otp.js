import React, { useRef, useState } from "react";
import otpStyle from "./otp.module.css";
import { Helmet } from "react-helmet";
import ReactPinField from "react-pin-field";

function Otp({
  paddingTop,
  fontSize,
  pinNum,
  value,
  onComplete,
  onEdit,
  onChange,
}) {
  // const { paddingTop, fontSize, pinNum, value, onComplete, onEdit } = props;

  // Feature detection
  if ("OTPCredential" in window) {
    window.addEventListener("DOMContentLoaded", (e) => {
      const input = document.querySelector(
        'input[autocomplete="one-time-code"]'
      );
      if (!input) return;
      // Cancel the WebOTP API if the form is submitted manually.
      const ac = new AbortController();
      const form = input.closest("form");
      if (form) {
        form.addEventListener("submit", (e) => {
          // Cancel the WebOTP API.
          ac.abort();
        });
      }
      // Invoke the WebOTP API
      navigator.credentials
        .get({
          otp: { transport: ["sms"] },
          signal: ac.signal,
        })
        .then((otp) => {
          input.value = otp.code;
          // Automatically submit the form when an OTP is obtained.
          if (form) form.submit();
        })
        .catch((err) => {});
    });
  }

  const [data, setData] = useState("");
  const [completePin, setCompletePin] = useState(false);

  // props?.value(data)
  value ? value(data) : "";

  return (
    <div className={otpStyle.pin_field_group}>
      <ReactPinField
        length={pinNum || 6}
        type="password"
        className={`${otpStyle.pin_field} ${
          completePin && otpStyle.pin_field_completed
        }`}
        onChange={(num) => {
          setCompletePin(false);
          onEdit && onEdit();
          setData(num);
          onChange && onChange(num);
        }}
        onComplete={(num) => {
          setCompletePin(true);
          onComplete && onComplete(num);
        }}
        format={(k) => k.toUpperCase()}
        //  disabled={showTime}
        validate="0123456789"
        // eslint-disable-next-line jsx-a11y/no-autofocus
        autoFocus
        // ref={ref}
      />
    </div>
  );
}

export default Otp;
