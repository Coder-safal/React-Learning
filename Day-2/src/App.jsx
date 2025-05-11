import React, { useState } from 'react'
import Button from './Test/Button'


// props
function App() {

  //Arrow function

  const [like, setLike] = useState(0);
  const [share, setShare] = useState(0);

  let name = 'suva'
  const handleLike = () => {

    // alert("Handle is click");
    setLike(prev => prev + 1);
  }
  const handleShare = () => {

    // alert("Handle is click");
    setShare(prev => prev + 1);
  }

  return (
    <>
      <h1>HamroLearn</h1>
      <div className='flex gap-8'>
        <Button like={like} className='bg-red-300' onClick={handleLike} >Like</Button >
        <Button like={share} className='bg-slate-400 w-[400px] text-white' onClick={handleShare}>Share</Button >
        <Button like={like} className='bg-orange-400 w-[400px] text-white' onClick={handleLike}>Like</Button >

      </div>
    </>
  )
}

export default App