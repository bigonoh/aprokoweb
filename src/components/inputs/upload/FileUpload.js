/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useState } from 'react'
import CancelRound from '../../../assets/cancel-round'
import ChevronRight from '../../../assets/chevron-right'
import FileIcon from '../../../assets/file-icon'
import stile from './fileUpload.module.css'

export default function FileUpload(props) {
  const [value, setValue] = useState()
  const [path, setPath] = useState()
  const [preview, setPreview] = useState()

  // handle drag n drop file upload

  function dropHandler(ev) {
    // console.log("File(s) dropped");

    // Prevent default behavior (Prevent file from being opened)
    ev.preventDefault()

    if (ev.dataTransfer.items) {
      // Use DataTransferItemList interface to access the file(s)
      ;[...ev.dataTransfer.items].forEach((item, i) => {
        // If dropped items aren't files, reject them
        if (item.kind === 'file') {
          const file = item.getAsFile()
          setPath(file), setValue(file.name)

          console.log(`… file[${i}].name = ${file.name}`)
        }
      })
    } else {
      // Use DataTransfer interface to access the file(s)
      ;[...ev.dataTransfer.files].forEach((file, i) => {
        console.log(`… file[${i}].name = ${file.name}`)
      })
    }
  }

  function dragOverHandler(ev) {
    console.log('File(s) in drop zone')

    // Prevent default behavior (Prevent file from being opened)
    ev.preventDefault()
  }

  const fileIcon = (
    <svg
      width="55"
      height="42"
      viewBox="0 0 55 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.1"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.02856 0C2.6494 0 0.720703 1.92869 0.720703 4.30786V10.9653V37.0082V37.0084C0.720703 39.3876 2.64939 41.3163 5.02856 41.3163H9.33642C9.35009 41.3163 9.36375 41.3162 9.37739 41.3161H43.016C45.3952 41.3161 47.3239 39.3874 47.3239 37.0082V10.9653C47.3239 8.5861 45.3952 6.65741 43.016 6.65741H13.6443V4.30786C13.6443 1.92869 11.7156 0 9.33642 0H5.02856Z"
        fill="#333333"
      />
      <path
        d="M6.33777 15.9101C6.77402 13.9369 8.52322 12.5322 10.5441 12.5322H49.0424C51.8478 12.5322 53.9047 15.171 53.22 17.8916L48.1435 38.0602C47.6617 39.9746 45.9401 41.3166 43.966 41.3166H6.08501C3.33098 41.3166 1.2842 38.7678 1.87872 36.0787L6.33777 15.9101Z"
        fill="#333333"
      />
    </svg>
  )

  // convert file size to readable format
  const fileSize = (size) => {
    var i = size == 0 ? 0 : Math.floor(Math.log(size) / Math.log(1024))
    return (
      (size / Math.pow(1024, i)).toFixed(2) * 1 +
      ' ' +
      ['B', 'kB', 'MB', 'GB', 'TB'][i]
    )
  }

  useEffect(() => {
    // create the preview
    if (path) {
      const objectUrl = URL.createObjectURL(path)
      setPreview(objectUrl)
      return () => URL.revokeObjectURL(objectUrl)
    }
    // free memory when ever this component is unmounted
  }, [path])

  props.value(value)
  props.preview(preview)

  let width = props.width
  let label = props.label
  let dragdrop = props.dragdrop
  return (
    <>
      {!dragdrop && (
        <div
          style={{ width: width ? width : '755px' }}
          className={stile.upload}
        >
          <div className={stile.uploadBtn}>
            <label htmlFor="docs">
              <div htmlFor="docs" className={stile.title}>
                {label}
              </div>
            </label>
            <label htmlFor="docs">
              Select file to upload <ChevronRight />
            </label>
            <input
              onChange={(e) => {
                setPath(e.target.files[0]), setValue(e.target.files)
              }}
              type="file"
              name="docs"
              id="docs"
              hidden
            />
          </div>

          {value &&
            Array.from(value).map(function (item, i) {
              return (
                <div key={i} className={stile.fileUpload}>
                  <div className={stile.fileOutput}>
                    <div>
                      <FileIcon />
                    </div>
                    {item.name}
                  </div>
                  <div
                    onClick={() => {
                      setPreview()
                      setValue()
                    }}
                  >
                    <CancelRound />
                  </div>
                </div>
              )
            })}
        </div>
      )}
      {dragdrop && (
        <>
          <div
            id={stile.drop_zone}
            onDrop={(e) => dropHandler(e)}
            onDragOver={(event) => dragOverHandler(event)}
            style={{ width: width ? width : '755px' }}
            className={stile.upload}
          >
            <div id={stile.uploadBtn}>
              <label htmlFor="docs">
                <div>{fileIcon}</div>
              </label>
              <label htmlFor="docs">
                Supported file: JPG, PNG, PDF,MPEG Max 1Gb
              </label>
              <input
                onChange={(e) => {
                  setPath(e.target.files[0]), setValue(e.target.files)
                }}
                type="file"
                name="docs"
                id="docs"
                hidden
              />
            </div>
          </div>
          {value &&
            Array.from(value).map(function (item, i) {
              return (
                <div key={i} id={stile.filePreview}>
                  <div id={stile.fileOutput}>
                    <div id={stile.previewImage}>
                      <img src={preview} alt="" />
                    </div>
                    <p>
                      {item.name}
                      <small>{fileSize(path.size)}</small>
                    </p>
                  </div>
                  <div
                    id={stile.deleteBtn}
                    onClick={() => {
                      setPreview()
                      setValue()
                    }}
                  >
                    <span>Delete</span>
                  </div>
                </div>
              )
            })}
        </>
      )}
    </>
  )
}
