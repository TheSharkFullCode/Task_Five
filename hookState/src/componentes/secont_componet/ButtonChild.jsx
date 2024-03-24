import React from 'react'

function ButtonChild({onClick,children}) {
  return (
    <div>
      <button onClick={onClick} className='border-[1px] rounded bg-[cyan] border-[black]'>  {children}  </button>
    </div>
  )
}

export default ButtonChild
