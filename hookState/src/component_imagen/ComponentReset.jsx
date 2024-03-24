import React from 'react'
import NewButton from './NewButton'

function ComponentReset({setCount}) {
        const Reset=()=>{
            setCount(0)
        }

  return (

    <div>
      <NewButton onClick={Reset}>
        Reset
      </NewButton>
    </div>
  )
}

export default ComponentReset
