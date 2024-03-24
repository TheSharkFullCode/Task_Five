import React from 'react'

const MyButtonImagen = ({onClick}) => {
  return (
    <div>
      <button onClick={onClick}  className='border-[1px] border-[black] rounded bg-slate-400' >Cambiar Imagen</button>
    </div>
  )
}

export default MyButtonImagen
