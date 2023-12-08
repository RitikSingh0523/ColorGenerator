import React from 'react'
import { toast } from 'react-toastify';

const SingleColor = ({color,index}) => {
    const{hex,weight}=color;
    const copyToClipBoard=async()=>{
       if(navigator.clipboard){
        try {
            await navigator.clipboard.writeText(`#${hex}`);
            toast.success('Color is copied to clipboard')
        } catch (error) {
            toast.error('Failed to Copy')
        }

       }else{
        toast.error("Clipboard Not Avail")
       }
    };
  return (
    <article 
        className={index>10 ? 'color color-light' : 'color'} 
        style={{background: `#${hex}`}}
        onClick={copyToClipBoard}
    >
        <p className='percent-value'>{weight}%</p>
        <p className='hex-value'>#{hex}</p>

    </article>
  )
}

export default SingleColor