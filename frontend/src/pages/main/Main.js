import React,{useState} from "react"
import './Main.css'

import Header from './Header'
import ItemList from './ItemList'
import ShopSelect from './ShopSelect'
import Filter from './Filter'
import Bottom from './Bottom'
import Recommand from './Recommand'
import Menu from './Menu'

const Main = () =>{
    const [shop,setShop] = useState('All prodcu，Tianmao，Pre-Owned')
    return(
        <div className={'Main-container'}>
            <div className={'Main-header'}><Header /></div>
            <div className={'Main-body'}>
                <div className={'Main-body-left'}>
                    <div className={'Main-shopSelect'}>
                        <ShopSelect content={shop} setContent={setShop}/>
                    </div>
                    <div className={'Main-filter'}><Filter /></div>
                    <ItemList />
                    <div className={'Main-page'}></div>
                </div>
                <div className={'Main-body-right'}>
                    <div className={'Main-hotsale'}><Recommand /></div>  
                    <div className={'Main-menu'}><Menu /></div>
                </div>
            </div>
            <div className={'Main-footer'}>
                <div className={'Main-recommand'}><Bottom /></div>
            </div>
        </div>
    )
}

export default Main