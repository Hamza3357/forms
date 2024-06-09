import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import Forms from './assets/Forms';

const App = () => {

  let { userId } = useParams();
  console.log(userId)




  return (
    <>
      <div className='flex flex-col'>
        <Forms />
     
        {/**/}
      </div>
  
    </>
  )
}

export default App