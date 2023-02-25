/* eslint-disable react/display-name */
import { useState, useEffect } from "react";
import { forwardRef, useRef, useImperativeHandle } from "react";

import PropTypes from "prop-types";

import "./Toast.css";

const errorIcon = (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="14" cy="14" r="14" fill="white" />
    <g clipPath="url(#clip0_4684_13675)">
      <path
        d="M13.9997 20.6673C17.6816 20.6673 20.6663 17.6825 20.6663 14.0007C20.6663 10.3188 17.6816 7.33398 13.9997 7.33398C10.3178 7.33398 7.33301 10.3188 7.33301 14.0007C7.33301 17.6825 10.3178 20.6673 13.9997 20.6673Z"
        stroke="#CC0000"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 11.334V14.0007"
        stroke="#CC0000"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 16.666H14.0067"
        stroke="#CC0000"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_4684_13675">
        <rect width="16" height="16" fill="white" transform="translate(6 6)" />
      </clipPath>
    </defs>
  </svg>
);

const close = (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.0002 25.6673C20.4435 25.6673 25.6668 20.444 25.6668 14.0007C25.6668 7.55733 20.4435 2.33398 14.0002 2.33398C7.55684 2.33398 2.3335 7.55733 2.3335 14.0007C2.3335 20.444 7.55684 25.6673 14.0002 25.6673Z"
      fill="white"
      fillOpacity="0.15"
    />
    <path
      d="M17.5 10.5L10.5 17.5"
      stroke="white"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.5 10.5L17.5 17.5"
      stroke="white"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Toast = (props) => {
  const { toastList, position, autoDelete, autoDeleteTime } = props;
  const [list, setList] = useState(toastList);

  useEffect(() => {
    setList([...toastList]);
  }, [toastList]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (autoDelete && toastList.length && list.length) {
        deleteToast(toastList[0].id);
      }
    }, autoDeleteTime);

    return () => {
      clearInterval(interval);
    };

    // eslint-disable-next-line
  }, [toastList, autoDelete, autoDeleteTime, list]);

  const deleteToast = (id) => {
    const listItemIndex = list.findIndex((e) => e.id === id);
    const toastListItem = toastList.findIndex((e) => e.id === id);
    list.splice(listItemIndex, 1);
    toastList.splice(toastListItem, 1);
    setList([...list]);
  };

  return (
    <>
      <div className={`notification-container ${position}`}>
        {list.map((toast, i) => (
          <div
            key={i}
            className={`notification toast ${position}`}
            style={{
              backgroundColor: toast.backgroundColor,
              borderColor: toast.borderColor,
              width: toast.width,
            }}
          >
            <div className="toast-content">
              <div className="notification-image">{toast.icon}</div>
              <div>
                <p className="notification-title">{toast.title}</p>
                {toast.description && (
                  <p className="notification-message">{toast.description}</p>
                )}
              </div>
            </div>
            <button className="closeBtn" onClick={() => deleteToast(toast.id)}>
              {close}
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

const Toastify = forwardRef((props, ref) => {
  const [list, setList] = useState([]);

  useImperativeHandle(ref, () => ({
    showToast() {
      setList([...list, TOAST_PROP]);
    },
  }));

  //  const showToast = () =>  {
  //     setList([...list, TOAST_PROP]);
  //   }

  const TOAST_PROP = {
    id: Math.floor(Math.random() * 101 + 1),
    title: props.title ? props.title : "Title will appear here",
    type: props.type ? props.type : "success",
    description: props.description ? props.description : "",
    width: props.width ? props.width : "52.7rem",
    backgroundColor:
      props.type === "error"
        ? "#CC0000"
        : props.type === "warning"
        ? "#FFF1F0"
        : "#3CC35C",

    borderColor:
      props.type === "error"
        ? "#CC0000"
        : props.type === "warning"
        ? "#FFF1F0"
        : "#3CC35C",
    icon: props.type === "error" ? errorIcon : errorIcon,
  };

  return (
    <>
      {/* <button  onClick={showToast}>Show toast</button> */}
      <Toast
        autoDelete={props.autoDelete ? props.autoDelete : true}
        autoDeleteTime={props.expireIn ? props.expireIn : "3000"}
        toastList={list}
        position={props.position ? props.position : "top-right"}
      />
    </>
  );
});

export default Toastify;

Toastify.propTypes = {
  autoDelete: PropTypes.bool,
  position: PropTypes.string.isRequired,
  autoDeleteTime: PropTypes.number,
};
