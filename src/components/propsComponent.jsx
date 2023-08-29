import React from 'react'

const propsComponent = ({ count, handleIncrement, handleDecrement }) => {
  return (
    <>
        <button className='btn btn-success' onClick={()=>handleIncrement()}>Increment</button>&nbsp;&nbsp;
        <button className='btn btn-danger' onClick={()=>handleDecrement()}>Decrement</button>
        <h3>Count: {count}</h3>
    </>
  )
}

export default propsComponent