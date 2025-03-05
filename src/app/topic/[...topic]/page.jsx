import React from 'react'

const Topic = ({params}) => {
  console.log(params)
  const {topic} =  params
  console.log(topic[0])

  return (
    <div>{`Topic ${topic[0]}`}</div>
  )
}

export default Topic