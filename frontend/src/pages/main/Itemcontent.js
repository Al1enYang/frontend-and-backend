import React,{useState} from "react"
import './Itemcontent.css'
import myimg from '../../assert/img/goodsimg.png'

const Itemcontent=({content})=>{
    const [select,setSelect] = useState(false)

    const handleCommentOnClick = () =>{
        alert('show comments')
    }

    return(
        <div className={'Itemcontent-container'} >
             <div className={'Itemcontent-content'} >
                <img className={'Itemcontent-image'} src={myimg}></img>
                <div className={'Itemcontent-name'}>{content.name}</div>
                <div className={'Itemcontent-price'}>{'¥'+content.price}</div>
                <div className="Item-buyer">{content.buyer+'people paid'}</div>

                <div 
                    className={'Itemcontent-comment'}
                    onMouseMove={()=>{setSelect(true)}}
                    onMouseLeave={()=>{setSelect(false)}}
                >
                {select?
                        <a href={'#'}>{content.comment+'comments'}</a>
                    :
                        <div>{content.comment+'comments'}</div>
                }
        </div>
                    
            </div>
        </div>
    )
}

export default Itemcontent