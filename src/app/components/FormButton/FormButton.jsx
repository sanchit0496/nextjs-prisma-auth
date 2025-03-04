import React from 'react'

const FormButton = ({text, onClick}) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

export default FormButton