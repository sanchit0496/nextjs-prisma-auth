import React from 'react'

const FormButton = ({text, onClick, type}) => {
  return (
    <button onClick={onClick} type={type}>{text}</button>
  )
}

export default FormButton