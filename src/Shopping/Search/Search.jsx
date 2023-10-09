import React, { useState } from 'react'
const Search = () => {
  const [val, setValue] = useState(false);
  const value = (event) => {
    event.preventDefault();
    setValue(!val)
   
  }
  const value1 = (e) => {
    e.preventDefault();
  setValue(val)
    
  }
  return (
    <>
    <main style={{ width: "400px", height: "200px", background: "red" }} onPointerEnter={value} onPointerLeave={value1}>
      {val ?
        <div>
          <h1>rahul kr </h1>
          <p >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam, molestias!</p>
          <button >show</button>
        </div> :
        <p> hey there i'm mishti shrms</p>

      }
    </main>
    </>

  )
}

export default Search
