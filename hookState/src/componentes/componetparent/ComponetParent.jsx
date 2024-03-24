import React from 'react'
import ButtonChild from '../secont_componet/ButtonChild'

function ComponetParent({name}) {

    const handleClikme=()=>{
        alert(name)
    }

  return (

    <div>
            <ButtonChild onClick={handleClikme}>
                Clikme!....
            </ButtonChild>
    </div>
  )
}

export default ComponetParent