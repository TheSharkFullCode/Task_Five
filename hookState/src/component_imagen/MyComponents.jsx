import React from 'react'
import MyButtonImagen from './MyButtonImagen'
import Rey_incognito from '../assets/reyes/rey_incognito.png'
import leogivildo from '../assets/reyes/rey_leogivildo.png'

const MyComponents = ({setChangeImg,changeImg}) => {

    const CambiarImagen=()=>{
        setChangeImg(changeImg === Rey_incognito ? leogivildo : Rey_incognito)
    }

  return (
    <div>
        
      <MyButtonImagen onClick={CambiarImagen}/>

    </div>
  )
}

export default MyComponents
