import React from 'react'
import Square from'./Square';

const Board = ({ squares, onClick }) =>{
    return (
 
    <div className="boardgrid">
        {squares.map((square,i) => (
            <Square key={i} value={square} onClick={() => onClick(i)}/>
            
        ))}
    </div>
  
)
}
export default Board

