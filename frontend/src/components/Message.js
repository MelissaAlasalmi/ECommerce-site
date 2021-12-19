import React from 'react'

export const Message = (props) => {
  return (
    <div className={`alert alert-${props.variant || 'info'}`}>
      {props.children}
    </div>
  )
}

