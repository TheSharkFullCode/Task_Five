import React from 'react'
import NewButton from './NewButton'

function Child({setCount}) {

    const RestaPar=()=>{

        setCount(prev => prev -=1)
    }

  return (
    <div>
        <NewButton onClick={RestaPar} >
           Restar
        </NewButton>
    </div>
  )
}

export default Child