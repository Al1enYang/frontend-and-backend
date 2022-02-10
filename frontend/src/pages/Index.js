import React, { useState } from 'react'
import instance from '../utils/axios'


import './css/Index.css'
const Index = () =>{
    const [num1,setnum1]=useState(0)
    const [num2,setnum2]=useState(0)
    const [num3,setnum3]=useState(0)
    const [sum,setsum]=useState(0)
    const handleButtonOnClick = () => {
        instance.get('/add', {
            params: {
                num1: num1,
                num2: num2,
                num3: num3,
            }
        })
        .then(res=>{
            setsum(res.data)
        })
        .catch(function (error) {
            console.log(error);
        })
    }
    return(
        <div className={'Index-container'}>
            <div className={'Index-title'}>加法</div>
            <div className={'Index-outbox'}>
                <div className={'Index-inbox'}>
                    <input type='text' className={'Index-input'} 
                        value={num1} onChange={e=>setnum1(e.target.value)}
                    ></input>
                </div>
                +
                <div className={'Index-inbox'}>
                    <input type='text' className={'Index-input'}
                        value={num2} onChange={e=>setnum2(e.target.value)}
                    ></input>
                </div>
                +
                <div className={'Index-inbox'}>
                    <input type='text' className={'Index-input'}
                        value={num3} onChange={e=>setnum3(e.target.value)}
                    ></input>
                </div>
                <button onClick={()=>handleButtonOnClick()}>=</button>
                
                <div className={'Index-inbox'}>{sum}</div>
            </div>
        </div>
    )
}
export default Index