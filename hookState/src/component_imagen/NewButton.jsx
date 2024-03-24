import React from 'react'

function NewButton({onClick,children,arrayColor}) {
  return (
    <>
    <div className=" ">

      <button onClick={onClick} className='border-[2px] border-[black] p-3 py-2 rounded bg-[#bc46ee]' >   {children}  </button>
     
    </div>
    </>
  )
}

export default NewButton
