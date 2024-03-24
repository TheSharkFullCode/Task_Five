import NewButton from './NewButton'

function Parent({count,setCount,printColor,index,setIndex}) {



    const SumaPar=()=>{

        setCount(prev => prev +1)
        
        const CurrentColor = Math.floor(Math.random()*printColor.length);

        setIndex(CurrentColor)
    }
    
    // const RecentlyColor  = printColor[index]

  return (

    <div>
        <NewButton onClick={SumaPar} count={count}  >
                Sumar
        </NewButton>

    </div>
  )
}

export default Parent
Parent