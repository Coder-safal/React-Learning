import { useState } from 'react'
import LearnUseState from "./components/LearnUseState"
import UseEffectHooks from './components/UseEffectHooks'
import APICall from './components/APICall'



function App() {
  // const [count, setCount] = useState(0)

  // const handleIncrement = () => {

  //   setCount(prev => ++prev);
  // }
  // const decrementCount = () => {

  //   setCount(prev => --prev);
  // }

  return (
    <>
      {/* <div className='h-screen bg-slate-100 flex flex-col items-center justify-center'>
        <div className='h-fit w-fit flex flex-col gap-3 mx-auto'>
          <h1>Increment Handle</h1>
          <button className='bg-indigo-500 hover:bg-indigo-400 text-white px-10 py-2 rounded-lg' onClick={handleIncrement}>{count} Increment</button>
          <h1>Decrement Handle</h1>
          <button className='bg-indigo-500 hover:bg-indigo-400 text-white px-10 py-2 rounded-lg' onClick={decrementCount}> Decrement</button>
        </div>
      </div> */}
      {/* <LearnUseState /> */}


      {/* <UseEffectHooks /> */}
      <APICall />
    </>
  )
}

export default App
