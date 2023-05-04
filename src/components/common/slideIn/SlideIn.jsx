/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useState } from 'react'
import style from 'react-awesome-modal/lib/style'
import { isMobile } from '../../../utils/DetectMobile'
import backIcon from '../../../assets/arrow-angle-left-icon.svg'
import slideStyle from './styles.module.css'
function SlideIn(props) {
  const [show, setShow] = useState(false)
  const [slide, setSlide] = useState(false)

  let multiStep = props.multiStep
  let currentStep = props.currentStep
  let totalSteps = props.totalSteps ? props.totalSteps : 4

  const handleClose = (e) => {
    setSlide(false)
    props.onClose(false)
    setTimeout(() => {
      setShow(false)
    }, 1000)
  }

  // const mobile = isMobile();

  let step1 = currentStep === 1
  let step2 = currentStep === 2
  let step3 = currentStep === 3
  let step4 = currentStep === 4
  let step5 = currentStep === 5
  // let step5 = currentStep === 5;

  const cancel = (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 6L6 18"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 6L18 18"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )

  useEffect(() => {
    setSlide(props.show)
    if (props.show === false) {
      setTimeout(() => {
        setShow(props.show)
      }, 1000)
    } else {
      setShow(props.show)
    }
  }, [props.show])
  return (
    <div>
      {/* {show &&  */}
      <div
        style={{
          visibility: show ? 'visible' : 'hidden',
          opacity: slide ? '1' : '0',
        }}
        className={slideStyle.overlay}
      >
        <div
          // style={{
          //   // visibility: show ? "visible" : "hidden",
          //   width: show ? (mobile ? "95vw " : "45em") : "0px",
          // }}
          className={`${slideStyle.mainSlide} ${
            slide && slideStyle.slideLeft
          } ${!slide && slideStyle.slideOut}`}
        >
          {props?.back ? (
            <div
              style={{
                width: '4rem',
                height: '4rem',
                backgroundColor: '#f7f8f7',
                borderRadius: '50%',
                display: 'grid',
                placeItems: 'center',
                cursor: 'pointer',
                position: 'absolute',
                left: '2rem',
                top: '3rem',
              }}
              className="icon-box"
              onClick={props.onBack}
            >
              <figure
                style={{
                  width: '1.7rem',
                  height: '1.7rem',
                }}
                className="img-box"
              >
                <img
                  style={{
                    objectFit: 'contain',
                    width: '100%',
                    height: '100%',
                  }}
                  src={backIcon}
                  alt=""
                  className="img"
                />
              </figure>
            </div>
          ) : (
            <div
              style={{ cursor: 'pointer' }}
              className={slideStyle.cancel}
              onClick={() => handleClose()}
            >
              {cancel}
            </div>
          )}
          <div className={slideStyle.title_contain}>
            <div>
              <h2>
                {props.title
                  ? props.title
                  : props.title === false
                  ? ''
                  : 'Add Title '}
              </h2>
              <small>
                {props.sub
                  ? props.sub
                  : props.sub === false
                  ? ''
                  : 'The little brown fox jumped over ikoyi bridge'}{' '}
              </small>
            </div>

            <div>
              <h2>
                {props.rightTitle
                  ? props.rightTitle
                  : props.rightTitle === false
                  ? ''
                  : ''}
              </h2>
              <small>
                {props.rightSub
                  ? props.rightSub
                  : props.rightSub === false
                  ? ''
                  : ''}{' '}
              </small>
            </div>
          </div>

          {multiStep && (
            <div className={slideStyle.steps}>
              {totalSteps === 2 && (
                <>
                  <p className={step1 ? slideStyle.stepsActive : ''}></p>
                  <p className={step2 ? slideStyle.stepsActive : ''}></p>
                </>
              )}
              {totalSteps === 3 && (
                <>
                  <p className={step1 ? slideStyle.stepsActive : ''}></p>
                  <p className={step2 ? slideStyle.stepsActive : ''}></p>
                  <p className={step3 ? slideStyle.stepsActive : ''}></p>
                </>
              )}
              {totalSteps === 4 && (
                <>
                  <p
                    className={
                      step1
                        ? slideStyle.stepsActive
                        : step2 || step3 || step4
                        ? slideStyle.stepsDone
                        : slideStyle.stepsInactive
                    }
                  ></p>
                  <p
                    className={
                      step2
                        ? slideStyle.stepsActive
                        : step3 || step4
                        ? slideStyle.stepsDone
                        : slideStyle.stepsInactive
                    }
                  ></p>
                  <p
                    className={
                      step3
                        ? slideStyle.stepsActive
                        : step4
                        ? slideStyle.stepsDone
                        : slideStyle.stepsInactive
                    }
                  ></p>
                  <p
                    className={
                      step4 ? slideStyle.stepsActive : slideStyle.stepsInactive
                    }
                  ></p>
                </>
              )}
              {totalSteps === 5 && (
                <>
                  <p
                    className={
                      step1
                        ? slideStyle.stepsActive
                        : step2 || step3 || step4 || step5
                        ? slideStyle.stepsDone
                        : slideStyle.stepsInactive
                    }
                  ></p>
                  <p
                    className={
                      step2
                        ? slideStyle.stepsActive
                        : step3 || step4 || step5
                        ? slideStyle.stepsDone
                        : slideStyle.stepsInactive
                    }
                  ></p>
                  <p
                    className={
                      step3
                        ? slideStyle.stepsActive
                        : step4 || step5
                        ? slideStyle.stepsDone
                        : slideStyle.stepsInactive
                    }
                  ></p>
                  <p
                    className={
                      step4
                        ? slideStyle.stepsActive
                        : step5
                        ? slideStyle.stepsDone
                        : slideStyle.stepsInactive
                    }
                  ></p>
                  <p
                    className={
                      step5 ? slideStyle.stepsActive : slideStyle.stepsInactive
                    }
                  ></p>
                </>
              )}
              {totalSteps === 6 && (
                <>
                  <p className={step1 ? slideStyle.stepsActive : ''}></p>
                  <p className={step2 ? slideStyle.stepsActive : ''}></p>
                  <p className={step3 ? slideStyle.stepsActive : ''}></p>
                  <p className={step4 ? slideStyle.stepsActive : ''}></p>
                  <p className={step4 ? slideStyle.stepsActive : ''}></p>
                  <p className={step4 ? slideStyle.stepsActive : ''}></p>
                </>
              )}
            </div>
          )}
          <div className={slideStyle.children}>{props.children}</div>
        </div>
      </div>
    </div>
  )
}

export default SlideIn
