import React,{useState} from "react"
import Itemcontent from "./Itemcontent.js"

import './ItemList.css'

const ItemList = () =>{
    let array = [
        {
            name:'Ceiling holder',
            price:'24.50',
            buyer:62,
            comment:50,
        },
        {
            name:'Outdoor hammer',
            price:'19.90',
            buyer:48,
            comment:244,
        },
        {
            name:'Tent pole',
            price:'119.00',
            buyer:1,
            comment:10,
        },
        {
            name:'Outdoor camping hammer',
            price:'24.00',
            buyer:27,
            comment:22,
        },
        {
            name:'Wood wind rope',
            price:'12.80',
            buyer:37,
            comment:38,
        },
        {
            name:'Multi-purpose travel tool',
            price:'23.10',
            buyer:6,
            comment:5,
        },
        {
            name:'Travel cooking utensils',
            price:'40.00',
            buyer:6,
            comment:0,
        },
        {
            name:'Steel Folding Dining Table',
            price:'290.00',
            buyer:31,
            comment:28,
        },
        {
            name:'Travelling medical kit',
            price:'20.00',
            buyer:14,
            comment:10,
        },
    ]

    return(
        <div className={'ItemList-container'}>
            {
                array.map((item,index)=>(
                    <Itemcontent content={item} />
                ))
            }
            <div className="button-container">
                <button className={'ItemList-button'}>{'<last'}</button>
                <button className={'ItemList-switch'}>{'1'}</button>

                <ButtonSwitch button={'2'} />
                <ButtonSwitch button={'3'} />
                <ButtonSwitch button={'4'} />
                <ButtonSwitch button={'5'} />
                <button className={'ItemList-button'}>{'next>'}</button>
            </div>
        </div>
    )
}

export default ItemList

const ButtonSwitch = ({button}) =>{
    const [buttonSwitch,setButtonSwitch] = useState(false)

    return(
        <button className={buttonSwitch?'ItemList-switch':'ItemList-unswitch'}
                    onMouseMove={()=>setButtonSwitch(true)}
                    onMouseLeave={()=>setButtonSwitch(false)}  
            >{button}</button>
    )
}