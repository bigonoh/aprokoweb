import React from 'react'
import { ThreeDots } from 'react-loader-spinner'
import { ButtonPrimary } from '../buttons/ButtonReuse'
import './NoContentReuseable.css'

const NoContentReuseable = ({
  img,
  bigText,
  smallText,
  smallTextTwo,
  styleName,
  btnText,
  onClickBtn,
  btnStyle,
  loading,
}) => {
  return (
    <div className={`no-content-reuseable-component ${styleName}`}>
      <div className="wrap">
        {img && (
          <div className="img-wrap">
            <figure className="img-box">
              <img src={img} alt="" className="img" />
            </figure>
          </div>
        )}
        <p className="big-text">{bigText}</p>
        <div className="small-text-box">
          <p className="small-text">{smallText}</p>
          <p className="small-text">{smallTextTwo}</p>
        </div>
        {/* btn start */}
        {btnText && (
          <ButtonPrimary
            // label={btnText}
            action={onClickBtn}
            btnStyle={btnStyle || 'btn-reuse'}
          >
            {loading ? (
              <div style={{ padding: '.1rem' }} className="load-wrap">
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
              <span>{btnText}</span>
            )}
          </ButtonPrimary>
        )}
        {/* btn end */}
      </div>
    </div>
  )
}

export default NoContentReuseable
