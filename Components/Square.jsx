import React from 'react'

const Square = ({value, onClick}) => {
  
    const style= value ? `squaretile ${value}` : 'squaretile';

    return (
    <button className={style} onClick={onClick}>
    {value}
    </button>    
  )
}

export default Square