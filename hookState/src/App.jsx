import { useState } from 'react'
import './App.css'
import Child from './component_imagen/Child'
import Parent from './component_imagen/Parent'
import MyComponetTool from './componentes/MyComponetTool'
import ComponetParent from './componentes/componetparent/ComponetParent'
import ComponentChild from './componentes/secont_componet/ComponentChild'
import Contador from './component_imagen/Contador'
import ComponentReset from './component_imagen/ComponentReset'


function App() {
  const [count,setCount]=useState(0);
  const [indexColor, setIndexColor] = useState(0);

  const colors =['cyan','blue','red','orange','pink','yellow','white'];

  return (
    <>
        <span className='underline text-2xl text-[#488ae0]  hover:bg-black'>   Accediendo a evento con react     </span>

      <div className='flex'>

        <MyComponetTool message="playing">
          Leer mensaje     
        </MyComponetTool>

        <MyComponetTool message="uploading">
          uploading Imagen 
        </MyComponetTool>

        <MyComponetTool message="Tercer mensaje">
          uploading Imagen 
        </MyComponetTool>
   
      </div>

      <div>
        <ComponetParent name="cargando.. my favorite  movie"/>           
        <ComponentChild />
        
      </div>

      <div className='flex gap-6'>

        <Parent setCount={setCount} printColor={colors} index={indexColor} setIndex={setIndexColor} />
        <Contador count={count} arrayColor={'RecentlyColor'} />
        <Child  setCount={setCount}/>
        <ComponentReset  setCount={setCount} />

      </div>
    
    </>
  )
}

export default App
