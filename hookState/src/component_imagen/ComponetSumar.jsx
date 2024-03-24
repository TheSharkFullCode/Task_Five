import React, { useState } from 'react'

function ComponetSumar() {
    const [numero1,setNumero1]=useState(null);
    const [numero2,setNumero2]=useState(null);
    const [resultado,setResultado]=useState(null);

    const Sumar=()=>{
        setResultado(Number(numero1)+ Number(numero2))
    }

//     const modificar=(e)=>{
//         setNumero1( e.target.value)
//     }
//    const modificar2=(e)=>{
//     setNumero2(e.target.value)
//    }

const Restablecer=()=>{
    setResultado("")
    setNumero1("")
    setNumero2("")
}

  return (
    <div>
      
      <input type="number" className='border-[1px] border-[black] rounded'  value={numero1} onChange={(e)=>setNumero1(e.target.value)} />+
      <input type="number" className='border-[1px] border-[black] rounded'  value={numero2}  onChange={(e)=>setNumero2(e.target.value)}/>=
      <input type="number" className='border-[1px] border-[black] rounded' value={resultado} />
      <button className='border-[1px] border-[black] rounded' onClick={Sumar} >Sumar</button>
      <button className='border-[1px] border-[black] rounded' onClick={Restablecer} > Restablecer </button>
    </div>
  )
}

export default ComponetSumar
