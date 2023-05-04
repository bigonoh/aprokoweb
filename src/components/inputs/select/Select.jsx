/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useState } from 'react'
import style from './style.module.css'
import ChevronDown from '../../../assets/chevron-down'
import { isMobile } from '../../../utils/DetectMobile'

function Select(props) {
  let placeholder = props.placeholder
  let options = props.options
    ? props.options
    : [
        { value: 'add an option', label: '' },
        // { value: "choose", label: "some text" },
        // { value: "choose", label: "some text" },
      ]

  const [label, setLabel] = useState()
  const [icon, setIcon] = useState('')
  const [show, setShow] = useState()

  useEffect(() => {
    if (props.default) {
      let def = props.default
      setLabel(def?.label)
      setIcon(def?.icon)
    }
  }, [])

  const handleShow = () => {
    setShow(!show)
  }

  const handleSelect = (item) => {
    if (props.value) {
      setLabel(item.label), setIcon(item.icon)
      props.value(item.value)
      setShow(!show)
    } else {
      setLabel(item.label), setIcon(item.icon)
      setShow(!show)
    }
  }

  const mobile = isMobile()

  const { width, gap, height } = props

  return (
    <div
      style={{ width: width ? width : mobile ? '90vw' : '439px' }}
      className={`${style.selectContain} ${props.selectStyle}`}
    >
      <div
        onClick={() => handleShow()}
        style={{
          width: '100%',
          gap: gap ? gap : '',
          height: height ? height : '',
        }}
        className={style.selectInput}
      >
        <div className={style.preview}>
          {!label && placeholder && (
            <span className={style.placeholder}>{placeholder} </span>
          )}

          {label && (
            <div className={style.label}>
              {icon && <>{icon}</>}
              {label}
            </div>
          )}
        </div>
        <div>
          <ChevronDown size="18" />
        </div>
      </div>

      {show && (
        <div
          style={{
            width: props.width ? props.width : mobile ? '90vw' : '439px',
          }}
          className={style.optionsContain}
        >
          {Array.from(options)?.map((item, index) => {
            return (
              <div
                disabled={true}
                onClick={() => {
                  handleSelect(item)
                }}
                key={index}
                value={item}
                className={style.options}
              >
                {item.icon && <div>{item.icon}</div>}
                {item.label}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default Select
