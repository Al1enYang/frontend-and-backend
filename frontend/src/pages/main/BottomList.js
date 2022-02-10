import React,{useState} from "react"
import './BottomList.css'
import myimg from '../../assert/img/goodsimg.png'

const BottomList = ({content}) =>{
    const [listSwitch,setListSwitch] = useState(false)

    return(
        <div className={'BottomList-container'}>
            <div className={listSwitch?'BottomList-content2':'BottomList-content1'} 
                onMouseMove={()=>setListSwitch(true)}
                onMouseLeave={()=>setListSwitch(false)} 
            >
            <img className={'BottomList-image'} src={myimg}></img>
            <div className={'BottomList-price'}>{'¥'+content.price}</div>
            <div className={'BottomList-name'}>{content.name}</div>
            <div className={'BottomList-buyer'}>{'Sales: '+content.buyer}</div>
            </div>
        </div>
    )
}


export default BottomList