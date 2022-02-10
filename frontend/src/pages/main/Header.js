import { element } from "prop-types"
import React,{useState} from "react"
import myimg from '../../assert/img/taobao.png'
import './Header.css'
import { Select } from 'antd'
import 'antd/dist/antd.css'
import instance from '../../utils/axios'


const Header = () =>{
    const [name,setname]=useState(0)
    // const add = () =>{
    //     instance.post('/search/add', {
    //         name:name,
    //     }).then((res)=>{
    //         if(res.status=='200'){
    //             alert(res.data)
    //         }else{
    //             alert('add failed')
    //         }
    //     }).catch(e=>alert(e))
    // }

    const { Option } = Select;

    // backend
    const [searchname, setsearchname]=useState(0)
    const header = () =>{
        instance.post('/search/header', {
            searchname:searchname,
        }).then((res)=>{
            if(res.status=='200'){
                alert(res.data)
            }else{
                alert('search failed')
            }
        }).catch(e=>alert(e))
    }

    function handleChange(value) {
        console.log(`selected ${value}`);
    }

    return(
        <div className={'Header-container'}>
            <div className={'Header-line1'}>
                <div>
                    <img className={'Header-image'} src={myimg}></img>
                </div>
                <div className={'Header-select'}>
                    <Select defaultValue="Product" style={{ width: 80 }} onChange={handleChange}>
                        <Option value="Store">Store</Option>
                        <Option value="Product">Product</Option>
                    </Select>

                </div>
                <div>
                    {/* <input type='text' className={'Header-input'} placeholder={'Tent/tent accessories'} 
                        value={name} onChange={e=>setname(e.target.value)}
                    ></input>
                    <button className={'Header-button'} onClick={()=>add()}>Add</button> */}
                    
                    <input type='text' className={'Header-input'} placeholder={'Search for products'}
                        value={searchname} onChange={e=>setsearchname(e.target.value)}
                    ></input>
                    <button className={'Header-button'} onClick={()=>header()}>Search</button>

                </div>
            </div>
            <div className={'Header-line2'}></div>
        </div>
    )
}

export default Header