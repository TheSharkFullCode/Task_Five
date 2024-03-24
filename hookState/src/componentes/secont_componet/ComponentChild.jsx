import React from 'react'
import ButtonChild from './ButtonChild'

function ComponentChild() {
  return (
    <div>
        <ButtonChild onClick={()=>alert('uploading...')} className="bg-[green]">
         uploading Imagen
        </ButtonChild>
    </div>
  )
}

export default ComponentChild
