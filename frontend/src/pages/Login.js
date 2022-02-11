import React, {useState} from 'react'
import instance from '../utils/axios'

import './css/Login.css'

const Login=()=>{
    const [name,setname]=useState(0)
    const [password,setpassword]=useState(0)
    const handleButtonOnClick = () => {
        instance.get('/users', {
            params: {
                name: name,
                password: password,
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
        <div className={'Login-contaniner'}>
            <div className={'Login-title'}>Taobao</div>
            <div className={'Login-outbox'}>
                {'Username'}
                <div className={'Login-inbox'}>
                    <input type={'text'} className={'Login-input'} 
                        value={'name'} onChange={e=>setnum1(e.target.value)}
                    ></input>
                </div>
                {'Password'}
                <div className={'Login-inbox'}>
                    <input type={'password'} className={'Login-input'} 
                        value={'password'} onChange={e=>setnum1(e.target.value)}
                    ></input>
                <button onClick={()=>handleButtonOnClick()}>{'Login'}</button>
                </div>
            </div>
        </div>
    )
}
