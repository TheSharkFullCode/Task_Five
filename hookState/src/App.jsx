import { useState } from 'react'
import './App.css'
import Child from './component_imagen/Child'
import Parent from './component_imagen/Parent'
import MyComponetTool from './componentes/MyComponetTool'
import ComponetParent from './componentes/componetparent/ComponetParent'
import ComponentChild from './componentes/secont_componet/ComponentChild'
import Contador from './component_imagen/Contador'
import ComponentReset from './component_imagen/ComponentReset'
import MyComponents from './component_imagen/MyComponents'
import ComponentImagen from './component_imagen/ComponentImagen'
import Rey_incognito from "./assets/reyes/rey_incognito.png";
import ComponentStyle from './component_imagen/ComponentStyle'
// import leogivildo from "../assets/reyes/rey_leogivildo.png";



function App() {
  const [count,setCount]=useState(0);
  const [indexColor, setIndexColor] = useState(0);
  const [changeImg,setChangeImg]=useState(Rey_incognito)

  const colors =['cyan','blue','red','orange','pink','yellow','white'];

  return (
    <>

        <span className='underline text-2xl text-[#488ae0]  hover:bg-black'>   Accediendo a evento con react     </span>
        <div className='flex flex-col  gap-6'>

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
              <div className='flex gap-5'>
                <ComponetParent name="cargando.. my favorite  movie"/>           
                <ComponentChild />                
              </div>

      </div>
      <div className='flex flex-col gap-6'>
              <div className='flex gap-6 mt-5'>
                <Parent setCount={setCount} printColor={colors} index={indexColor} setIndex={setIndexColor} />
                <Contador count={count} arrayColor={'RecentlyColor'} />
                <Child  setCount={setCount}/>
                <ComponentReset  setCount={setCount} />
                <MyComponents setChangeImg={setChangeImg} changeImg={changeImg} / >
              </div>
              <div>
                <ComponentImagen  changeImg={changeImg}/>
                {/* <img src={Rey_incognito}/> */}

              </div>
      </div>

      <ComponentStyle >

      </ComponentStyle>
    </>
  )
}

export default App
