
import  Counter from './counter' ;
import Batsman from './batman';
import './App.css'

function App() {

  function handleClick(){
    alert('I am clicked')
  }

  const handleClick2 = ()=>{
    alert('clicked two')
  }

  // with parameter ;
  const handleAdd5 = (num)=>{
    const newNum = num +5 ;
    alert(newNum)
  }

  return (
    <>
    <h3>Vite + react</h3>

    <Counter></Counter>
    <Batsman></Batsman>

    <button onClick={handleClick}>Click Me</button>
    <button onClick={handleClick2}>Click Me</button>
    <button onClick={()=>handleAdd5(10)}>Click 5</button>
    </>
  )
}

export default App
