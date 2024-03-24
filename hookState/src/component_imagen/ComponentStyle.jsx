import React, { useState } from 'react'
import NewButton from './NewButton'

function ComponentStyle({}) {

    const [style,setStylos]=useState(0)

    const ChangeStyle=()=>{
        setStylos(className)
    }
  return (
    <div>
      <NewButton onClick={ChangeStyle} > modificar </NewButton>
      <NewButton  > hey </NewButton>
    </div>
  )
}

export default ComponentStyle
