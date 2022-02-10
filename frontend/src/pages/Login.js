import React, {useState} from 'react'
import instance from '../utils/axios'

import myimage from '../assert/img/user.png'
import myimage1 from '../assert/img/password.png'
import './css/Login.css'

const Login=()=>{
    const [name,setname]=useState(0)
    const [password,setpassword]=useState(0)
    const login = () =>{
        instance.post('/users/login', {
            name:name,
            password:password,
        }).then((res)=>{
            if(res.status=='200'){
                alert(res.data)
            }else{
                alert('login failed')
            }
        }).catch(e=>alert(e))
    }

    const [signupname,setsignupname]=useState(0)
    const [signuppassword,setsignuppassword]=useState(0)
    const signup = ()=>{
        instance.post('/users/signup',{
            name:signupname,
            password:signuppassword,
        }).then((res)=>{
            if(res.status=='200'){
                console.log(res.data)
            }else{
                alert('signip failed')
            }
        }).catch(e=>alert(e))
    }

    const [selectValue1,setselectValue1]=useState(1)
    const [selectValue2,setselectValue2]=useState(1)
    
    const [list1,setlist1]=useState([])
    const day =()=>{
        let newDay = []
        for(let index1 = 1;index1<=31;index1++){
            newDay.push(index1)
        }
        setlist1(newDay)
    }

    const [list2,setlist2]=useState([])
    const month =()=>{
        let newMonth=[]
        for (let index2 = 0; index2 < 13; index2++) {
            newMonth.push(index2);
        }
        setlist2(newMonth)
    }

    return( 
        <div className={'Login-contaniner'}>
            <div className={'Login-title'}>京东</div>
            <div className={'Login-outbox'}>
                <div className={'Login-gap1'}></div>
                <div className={'Login-text'}>短信登录 密码登录</div>

                <div className={'Login-gap2'}></div>

                <div className={'Login-row'}>
                    <div>
                    <img className={'Login-image'} src={myimage}></img>
                    </div>
                    <input type='text' className={'Login-input'} placeholder={'会员名/邮箱/手机号'}
                        value={name} onChange={e=>setname(e.target.value)}
                    ></input>
                </div>

                <div className={'Login-gap3'}></div>

                <div className={'Login-row'}>
                    <div>
                        <img className={'Login-image'} src={myimage1}></img>
                    </div>
                    <input type='password' className={'Login-input'} placeholder={'请输入登录密码'}
                        value={password} onChange={e=>setpassword(e.target.value)}
                    ></input>
                </div>

                <div className={'Login-gap2'}></div>

                <div className={'Login-row'}>
                    <button className={'Login-button'} onClick={()=>login()}>登录</button>
                </div>

                <div className={'Login-gap2'}></div>
                <div>登录日期</div>
                <div className={'Login-gap3'}></div>

                <div className={'Login-row'}>
                    <div>
                        {selectValue1+'日'}
                        <select onChange={e=>setselectValue1(e.target.value)}>
                            {
                                list1.map(
                                    (element,index1)=>(
                                        <option value={element}>{element}</option>
                                    )
                                )
                            }
                        </select>
                    </div>

                    <div>
                        {selectValue2+'月'}
                        <select onChange={e=>setselectValue2(e.target.value)}>
                            {
                                list2.map(
                                    (element,index2)=>(
                                        <option value={element}>{element}</option>
                                    )
                                )
                            }
                        </select>
                    </div>

                </div>
                {/* list */}
                <div><button onClick={()=>day()&month()}>Date</button></div>
                {/* <div>
                    C
                </div> */}
            </div>


            <div className={'Login-outbox'}>

                <div className={'Login-row'}>
                    <div>
                    <img className={'Login-image'} src={myimage}></img>
                    </div>
                    <input type='text' className={'Login-input'} placeholder={'会员名/邮箱/手机号'}
                        value={signupname} onChange={e=>setsignupname(e.target.value)}
                    ></input>
                </div>

                <div className={'Login-gap3'}></div>

                <div className={'Login-row'}>
                    <div>
                        <img className={'Login-image'} src={myimage1}></img>
                    </div>
                    <input type='password' className={'Login-input'} placeholder={'请输入登录密码'}
                        value={signuppassword} onChange={e=>setsignuppassword(e.target.value)}
                    ></input>
                </div>

                <div className={'Login-gap2'}></div>

                <div className={'Login-row'}>
                    <button className={'Login-button'} onClick={()=>signup()}>注册</button>
                </div>
            </div>
        </div>
    )
}

export default Login
