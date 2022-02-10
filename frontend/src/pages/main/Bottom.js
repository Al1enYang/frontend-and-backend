import React,{useState} from "react"
import './Bottom.css'

import BottomList from "./BottomList.js"

const Bottom = () =>{

    let TitleTextList=[
        'Body Wash',
        'Nightdress',
        'Watch',
        'Sweater',
        'Charge Pal',
        'Necklace',
        'Shoes',
        'Jacket',
        'Socks',
    ]

    let array = [
        {
            name:'Super light double silicone tent',
            price:'419.00',
            buyer:28,
        },
        {
            name:'Camping tent with two bedrooms',
            price:'1299.00',
            buyer:44,
        },
        {
            name:'Outdoor canopy is retractable',
            price:'698.00',
            buyer:15,
        },
        {
            name:'NH Outdoor single tent',
            price:'389.00',
            buyer:26,
        },
        {
            name:'Single and double camping automatic',
            price:'48.00',
            buyer:207,
        },
    ]

    return(
        <div className={'Bottom-container'}>
            <div className={'Bottom-title'}>
                <div className={'Bottom-title-text'}>{'Hot Zone'}</div>
                {TitleTextList.map((title,index)=>(
                    <ButtonSwitch name={title}/>
                ))}
            </div>
            
            <div className={'Bottom-list'}>
                {
                    array.map((item,index)=>(
                        <BottomList content={item} />
                    ))
                }
            </div>
        </div>
    )
}

export default Bottom

const ButtonSwitch = ({name})=>{
    const [textSwitch,setTextSwitch] = useState(false)

    return(
        <div className={textSwitch?'Bottom-title-text':'Bottom-title-text2'}
            onMouseMove={()=>setTextSwitch(true)}
            onMouseLeave={()=>setTextSwitch(false)} 
        >{name}</div>
    )
}