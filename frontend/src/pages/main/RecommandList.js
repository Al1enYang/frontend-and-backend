import React,{useState} from "react"
import './RecommandList.css'
import myimg from '../../assert/img/goodsimg.png'

const RecommandList = ({content}) =>{
    return(
        <div className={'RecommandList-container'}>
            <img className={'RecommandList-image'} src={myimg}></img>
            <div className={'RecommandList-info'}>
                <div className={'RecommandList-price'}>{'¥'+content.price}</div>
                <div className={'RecommandList-buyer'}>{'Sales: '+content.buyer}</div>
            </div>
        </div>
    )
}

export default RecommandList