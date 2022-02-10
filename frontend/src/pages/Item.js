import React,{useState} from "react"
import './css/Item.css'

const Item = ({content}) =>{
    const [buyerSelect,setBuyerSelect] = useState(false)
    return(
        <div className={'Item-container'} >
            <div className={'Item-content'} >
                <img className={'Item-image'} src={null} alt={'no pic'}></img>
                <a className={'Item-name'} href={'http://www.google.com'} target={'_target'}>{content.name}</a>
                <div className={'Item-price'}>{'¥'+content.price}</div>
                <div 
                    className={buyerSelect?'Item-buyer-selected':'Item-buyer-unselected'}
                    onMouseMove={()=>setBuyerSelect(true)}
                    onMouseLeave={()=>setBuyerSelect(false)}
                    onClick={()=>alert('点击了')}
                >{content.buyer+'人付款'}</div>
                <input type='checkbox'></input>
            </div>
        </div>
    )
}

export default Item