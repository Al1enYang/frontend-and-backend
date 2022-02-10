import React,{useState} from "react"
import Item from "./Item"

import './css/Frame.css'

const Frame = () =>{
    let array = [
        {
            name:'天幕杆固定器',
            price:'24.50',
            buyer:73,
        },
        {
            name:'户外野营挂钩',
            price:'18.00',
            buyer:17,
        },
    ]

    const [expand,setExpand] = useState(false)

    return(
        <div className={'Frame-container'}>
            <div onClick={()=>alert('点击了')}
                onMouseMove={()=>setExpand(true)}
                onMouseLeave={()=>setExpand(false)}
            >expend</div>
            {   expand &&
                array.map((item,index)=>(
                    <Item content={item} />
                ))
            }
        </div>
    )
}

export default Frame