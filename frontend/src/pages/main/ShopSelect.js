import React,{useState} from "react"
import './ShopSelect.css'

const ShopSelect = ({content,setContent}) =>{
    const [shopChose1,setShopChose1] = useState(false)
    const [shopChose2,setShopChose2] = useState(false)


    return(
        <div className={'ShopSelect-container'} >
            <div className={'ShopSelect-shop'}>
                <div className={'ShopSelect-defualt'}>{'All product'}</div>
                <div 
                    onMouseMove={()=>{setShopChose1(true)}}
                    onMouseLeave={()=>{setShopChose1(false)}}
                >
                    {shopChose1?
                        <div className={'ShopSelect-chose2'}>{'Tianmao'}</div>
                        :
                        <div className={'ShopSelect-chose1'}>{'Tianmao'}</div>
                    }
                </div>
                <div 
                    onMouseMove={()=>{setShopChose2(true)}}
                    onMouseLeave={()=>{setShopChose2(false)}}
                >
                    {shopChose2?
                        <div className={'ShopSelect-chose2'}>{'Pre-Owned'}</div>
                        :
                        <div className={'ShopSelect-chose1'}>{'Pre-Owned'}</div>
                    }
                </div>
                
            </div>
            <div className={'ShopSelect-line'}></div>
            
        </div>

    )
}

export default ShopSelect