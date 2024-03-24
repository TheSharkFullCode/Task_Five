import React from 'react'

function Contador({count}) {
    
  return (
    <div className='flex'>
       <h1 className='text-3xl border-[2px]  px-3 rounded border-[black]'>     {count}      </h1>
    </div>
  )
}

export default Contador
