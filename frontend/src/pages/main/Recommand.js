import React,{useState} from "react"
import './Recommand.css'

import RecommandList from "./RecommandList.js"

const Recommand = () =>{
    let array = [
        {
            price:'569.00',
            buyer:47,
        },
        {
            price:'359.00',
            buyer:3888,
        },
    ]

    const [listSwitch,setListSwitch] = useState(false)
    return(
        <div className={'Recommand-container'}>
            <div className={'Recommand-text'}>{'Hot Zone'}</div>
            <div className="Recommand-line"></div>
            <div className={'Recommand-list'}>
                {
                    array.map((item,index)=>(
                        <RecommandList content={item} />
                    ))
                }
            </div>
        </div>
    )
}

export default Recommand