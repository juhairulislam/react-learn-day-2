import { useState } from 'react'
export default  function Batsman(){
    let [runs, setRuns] = useState(0) ;

    const handleSingle = () =>{
        const updateRuns = runs +1 ;
        setRuns(updateRuns)  ; 
    }
    const handleFour = () =>{
        const updateRuns = runs +4 ;
        setRuns(updateRuns)  ; 
    }
    const handleSix = () =>{
        const updateRuns = runs +6 ;
        setRuns(updateRuns)  ; 
    }
    return (
        <div>
            <h3>Player : Bangla </h3> 
            <h1>Score: {runs} </h1>
            <br />
            <button onClick={handleSingle}>Singles</button>
            <button onClick={handleFour}>Four</button>
            <button onClick={handleSix}>Six</button>

        </div>
    )

}