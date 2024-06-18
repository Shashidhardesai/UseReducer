import React, { useReducer } from 'react'
import './Button.css'

const instate=0;

const reducer=(state,action)=>{

    if(action.typeof==='incre'){
        return state+1;
    }
    if(action.typeof==='decre'){
        return state-1;
    }
    return state;
}

function Button() {

    const[tate,dispatch]=useReducer(reducer,instate);

  return (

   <> 
    <div className='div1'>
       <p className='p'>{tate}</p>
       <button className="but1" onClick={()=>dispatch({typeof:'incre'})}>Increment</button>
       <button className="but1" onClick={()=>dispatch({typeof:'decre'})}>Decrement</button>
    </div>
   </>


  )
}

export default Button