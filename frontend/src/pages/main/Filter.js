import React,{useState} from "react"
import './Filter.css'
import { DownOutlined } from '@ant-design/icons'
import { UnorderedListOutlined } from '@ant-design/icons'
import { AppstoreOutlined } from '@ant-design/icons'

const Filter = () =>{
    const handleProductOnClick = () =>{
        alert('show products')
    }
    const [demobutton,setdemobutton] = useState(false)

    let TitleTextList=[
        'Handbag',
        'Male Product',
        'Homewear',
        'Scarf',
        'Furniture',
        'Shoes',
        'Accessories',
        'Cap',
    ]

    let ProductList=[
        'Baby Care',
        'Stationery',
        'Kitchenware',
        'Snacks',
        'Furniture',
        'Toy',
        'Accessories',
        'Fishing Rod',
    ]

    const [orderSwitch,setOrderSwitch] = useState(false)
    let PriceOrder=[
        'Lowest price',
        'Highest price',
        'Ending soonest',
        'Newly listed',
        'Nearest distance',
    ]

    const [citySwitch,setCitySwitch] = useState(false)
    let CityList=[
        'Beijing',
        'Shanghai',
        'Guangzhou',
        'Shenzhen',
        'Hangzhou',
        'Hongkong',
        'Chengdu',
        'Tianjin',
        'Oversea',
    ]
    
    return(
        <div className={'ShopSelect-container'}>
            <div className={'ShopSelect-classification'}>
            <div className={'ShopSelect-text'}>{'All categories>'}</div>
            
                <button className={'ShopSelect-button'} 
                    onClick={()=>setdemobutton(!demobutton)}
                >{'Filter'}<DownOutlined /></button>
            </div>

            <div className="ShopSelect-helper">
                <div className={demobutton?'ShopSelect-display':'ShopSelect-nondisplay'} >
                    {'Relevant Classification:'}
                    {TitleTextList.map((title, index)=>(
                        <ButtonSwitch name={title} />
                    ))}
                </div>
                {/* {demobutton && <div className={'demo-area'} ></div>} */}
                <div className={'ShopSelect-gap'}></div>
                <div className={'ShopSelect-maylike'}>
                        {'Are you looking for：'}
                        {ProductList.map((title,index)=>(
                            <ButtonSwitch name={title} />
                        ))}
                </div>
                <div className={'ShopSelect-gap'}></div>
                <div className={'ShopSelect-order'}>
                    <div className={'ShopSelect-unchange'}>{'Order'}</div>

                    <div><TypeTextSwitch type={'Sales'} /></div>
                    <div><TypeTextSwitch type={'Credit'} /></div>

                    <div className={'ShopSelect-textChange'}>
                        <div className={'ShopSelect-textChange'}
                            onClick={()=>setOrderSwitch(!orderSwitch)}
                        ><TypeTextSwitch type={'Price'} /><DownOutlined /></div> 

                        <div className={orderSwitch?'spread-list':'close-list'}>
                            {PriceOrder.map((title,index)=>(
                                <ButtonSwitch name={title} />
                            ))}
                        </div>
                    </div>

                    <div className="ShopSelect-priceInpt">
                        <div className="from-to">{'from'}</div>
                        <input type='text' className='ShopSelect-price1' placeholder={'￥'}></input>
                        <div className="from-to">{'to'}</div>
                        <input type='text' className='ShopSelect-price2' placeholder={'￥'}></input>
                    </div>
                    <div className={'ShopSelect-location'}>
                        <div className={'ShopSelect-textChange'} 
                            onClick={()=>setCitySwitch(!citySwitch)}
                        >
                            {'Location'}<DownOutlined />
                            {citySwitch && <div className={'city-open'}>
                                {CityList.map((title,index)=>(
                                    <ButtonSwitch name={title} />
                                ))}
                            </div>}
                        </div>
                    </div>
                    <div className='ShopSelect-icon'><UnorderedListOutlined /></div>
                    <div className='ShopSelect-icon'><AppstoreOutlined /></div>
                    <div className='ShopSelect-page'>{'<  1/40  >'}</div>
                </div>
                <div className={'ShopSelect-option'}>
                    <Checkbox option={'Free delivery'} />
                    <Checkbox option={'New'} />
                    <Checkbox option={'Pre-owned'} />
                    <Checkbox option={'Tianmao'} />
                    <Checkbox option={'Returns within 7 days'} />
                    <Checkbox option={'Overseas product'} />
                </div>
            </div>
        </div>
    )
}

export default Filter

const ButtonSwitch=({name})=>{
    const [textSwitch,setTextSwitch]=useState(false)

    return(
        <div className={textSwitch?'Filter-text1':'Filter-text2'}
            onMouseMove={()=>setTextSwitch(true)}
            onMouseLeave={()=>setTextSwitch(false)} 
        >{name}</div>
    )
}

const TypeTextSwitch=({type})=>{
    const [typeSwitch,setTypeSwitch]=useState(false)
    return(
        <div className={typeSwitch?'ShopSelect-unchange':'ShopSelect-textChange'}
            onMouseMove={()=>{setTypeSwitch(true)}}
            onMouseLeave={()=>{setTypeSwitch(false)}}
        >{type}</div>
    )

}

const Checkbox=({option})=>{
    return(
        <div className="ShopSelect-checkbox">
            <input type='checkbox'></input>{option}
        </div>
    )
}