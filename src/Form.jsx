import React, { useState } from 'react'

const Form = ({addcolor}) => {
  const[color,setColor]=useState('');
  const handleSubmit=(e)=>{
    e.preventDefault();
    addcolor(color);
  };
  return (
    <section className='container'>
      <h2>Color Generator</h2>
      <form className='color-form' onSubmit={handleSubmit}>
        <input type='color' className='hexInput' value={color} onChange={(e)=>setColor(e.target.value)}/>
        <input 
          className='color-text'
          type='text' 
          value={color} 
          onChange={(e)=>setColor(e.target.value)}
          placeholder='#f15025'
        />
        <button type='submit' className='btn' style={{background:color}}>Submit</button>
      </form>
    </section>
  )
}

export default Form