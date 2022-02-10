import React,{useState} from "react"
import './Menu.css'
import { GiftOutlined } from '@ant-design/icons'
import { HistoryOutlined } from '@ant-design/icons'
import { ToolOutlined } from '@ant-design/icons'
import { SyncOutlined } from '@ant-design/icons'

const Menu = () =>{
    return(
        <div className={'Menu-container'}>
            <button className={'Menu-icon'}><GiftOutlined /></button>
            <button className={'Menu-icon'}><HistoryOutlined /></button>
            <button className={'Menu-icon'}><ToolOutlined /></button>
            <button className={'Menu-icon'}><SyncOutlined /></button>
        </div>
    )
}

export default Menu