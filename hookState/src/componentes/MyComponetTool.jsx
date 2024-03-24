import React from 'react'

function MyComponetTool({message,children}) {
  return (
    <div>
        <button onClick={()=>alert(message)} className='border-[2px] rounded border-[black] hover:bg-zinc-400'> 
            {children}
        </button>
    </div>
  )
}

export default MyComponetTool
