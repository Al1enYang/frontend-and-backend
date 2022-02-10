import React,{useState,useRef,useEffect} from "react"
import './Baidu.css'
import Button from '@mui/material/Button';
import { Input, Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import { SyncOutlined } from '@ant-design/icons';
import { CameraOutlined } from '@ant-design/icons';

import myimg from './img/baidu.jpg'
import myicon from './img/taobao.png'


const Baidu = () =>{
    let TitleList=[
        '新闻',
        'hao123',
        '地图',
        '直播',
        '视频',
        '贴吧',
        '学术',
    ]
    const ref = useRef(null);

    useEffect(() => {
        
    }, [])
    
    const { Search } = Input;

    const suffix = (
        <AudioOutlined
        style={{ fontSize: 16, color: '#1890ff',}}
        />
    );
    const [morebutton,setmorebutton] = useState(false)
    const [setting,setsetting] = useState(false)
    const [input,setinput] = useState('grey')

    const [underInput,setUnderInput] = useState(false)
    const getColour = (newColor) =>{
        if(underInput!=true){
            setinput(newColor)
        }
    }

    return(
        <div className={'Baidu-container'}>
            <div className={'Baidu-header'}>
                <div className={'Baidu-hearder-left'}>
                    {TitleList.map((title,index)=>(
                        <TextSwitch name={title} />
                    ))}

                    {/* <div className={'more'} onClick={()=>setmorebutton(!morebutton)}><TextSwitch name={'更多'} /></div> */}
                    <div 
                        onMouseMove={()=>setmorebutton(true)}
                    >
                        <TextSwitch name={'更多'} />
                    </div>

                    <div className={morebutton?'more-display-container':'more-nondisplay-container'}
                        onMouseLeave={()=>setmorebutton(false)}
                    >
                        <div className={morebutton?'more-display':'more-nondisplay'}>
                            <div className={'function'}>
                                <div className={'Baidu-topsearch-icon'}>
                                    <img className={'Baidu-icon'} src={myicon}></img>
                                    <div className={'function-name'}><TextSwitch name={'网盘'} /></div>
                                    <img className={'Baidu-icon'} src={myicon}></img>
                                    <div className={'function-name'}><TextSwitch name={'推广'} /></div>
                                </div>
                                <div className={'Baidu-topsearch-icon'}>
                                    <img className={'Baidu-icon'} src={myicon}></img>
                                    <div className={'function-name'}><TextSwitch name={'知道'} /></div>
                                    <img className={'Baidu-icon'} src={myicon}></img>
                                    <div className={'function-name'}><TextSwitch name={'文库'} /></div>
                                </div>
                                <div className={'Baidu-topsearch-icon'}>
                                    <img className={'Baidu-icon'} src={myicon}></img>
                                    <div className={'function-name'}><TextSwitch name={'百科'} /></div>
                                    <img className={'Baidu-icon'} src={myicon}></img>
                                    <div className={'function-name'}><TextSwitch name={'经验'} /></div>
                                </div>
                                <div className={'Baidu-topsearch-icon'}>
                                    <img className={'Baidu-icon'} src={myicon}></img>
                                    <div className={'function-name'}><TextSwitch name={'图片'} /></div>
                                    <img className={'Baidu-icon'} src={myicon}></img>
                                    <div className={'function-name'}><TextSwitch name={'音乐'} /></div>
                                </div>
                                
                            </div>
                        </div>
                    </div>

                    

                </div>
                <div className={'Baidu-hearder-right'} >
                    <div 
                        onMouseMove={()=>setsetting(true)}
                    >
                        <TextSwitch name={'设置'} />
                    </div>

                    <div className={setting?'set-display-container':'set-nondisplay-container'}
                        onMouseLeave={()=>setsetting(false)}
                    >
                        <div className={setting?'set-display':'set-nondisplay'}>
                        <TextSwitch name={'搜索设置'} />
                        <TextSwitch name={'高级搜索'} />
                        <TextSwitch name={'关闭预测'} />
                        <TextSwitch name={'隐私设置'} />
                        <TextSwitch name={'关闭热搜'} />
                        </div>
                    </div>
                    
                    <div className={'Baidu-hearder-right-button'}>
                        <Button variant="contained">登录</Button>
                    </div>
                </div>
            </div>
                    
            <div className={'Baidu-image-container'}>
                <img className={'Baidu-image'} src={myimg}></img>
            </div>

            {/* <div className={'Baidu-input'}>
                <Search
                    enterButton="百度一下"
                    suffix={suffix}
                    // onMouseMove={()=>alert('onMouseMove')}
                    // onMouseLeave={()=>alert('onMouseLeave')}
                />
            </div> */}
            {/* 
                outside grey
                inside black
                blur blue
                blur blue
            */}
            <div
                onMouseMove={()=>getColour('grey')}
                onMouseLeave={()=>getColour('black')}
            >
                <div
                    className={
                        {
                            'grey':'Baidu-input-dark',
                            'black':'Baidu-input-container',
                            'blue':'Baidu-input-bule',
                        }[input]
                    }
                    onClick={()=>{
                        setUnderInput(true)
                        setinput('blue')
                    }}
                >
                    <input type='text' className={'Baidu-input'} onBlur={()=>{
                        setUnderInput(false)
                        setinput('grey')
                    }}></input>
                    <input type='file' className={'Baidu-file'} ref={ref}></input>
                    <button className={'Baidu-upload'} onClick={()=>ref.current.click()}><CameraOutlined /></button>
                    <button className={'Baidu-searchbutton'}>百度一下</button>
                </div>
            </div>

            <div className={'Baidu-topsearch'}>
                <div className={'Baidu-topsearch-fristline'}>
                    <div className={'Baidu-topsearch-title'}><TextSwitch name={'百度热搜 >'} /></div>
                    <div className={'Baidu-topsearch-text'}>
                        <div className={'Baidu-topsearch-icon'}><SyncOutlined /></div>
                        <TextSwitch name={'换一换'} />
                    </div>
                </div>

                <div className={'Baidu-topsearch-news'}>

                    <div className={'Baidu-topsearch-layer'}>
                        <div className={'Baidu-topsearch-number1'}>{'1'}</div>
                        <div className={'Baidu-topsearch-newleft'}><TextSwitch name={'中石油111人与吉林病例共同参会'} /></div>
                        <div className={'Baidu-topsearch-number456'}>{'4'}</div>
                        <div className={'Baidu-topsearch-newright'}><TextSwitch name={'149人新当选为两院院士 最小45岁'} /></div>
                    </div>

                    <div className={'Baidu-topsearch-layer'}>
                        <div className={'Baidu-topsearch-number1'}>{'2'}</div>
                        <div className={'Baidu-topsearch-newleft'}><TextSwitch name={'十九届六中全会有多重要'} /></div>
                        <div className={'Baidu-topsearch-number456'}>{'5'}</div>
                        <div className={'Baidu-topsearch-newright'}><TextSwitch name={'国美称将对通报违规外泄予以追责'} /></div>
                    </div>

                    <div className={'Baidu-topsearch-layer'}>
                        <div className={'Baidu-topsearch-number1'}>{'3'}</div>
                        <div className={'Baidu-topsearch-newleft'}><TextSwitch name={'重磅历史决议的几个细节'} /></div>
                        <div className={'Baidu-topsearch-number456'}>{'6'}</div>
                        <div className={'Baidu-topsearch-newright'}><TextSwitch name={'31省份新增本土确诊6例 在辽宁云南'} /></div>
                    </div>

                    <div className={'Baidu-topsearch-right'}></div>
                </div>
            </div>

        </div>
    )
}

export default Baidu

const TextSwitch=({name})=>{
    const [colourSwith, setColourSwith]=useState(false)

    return(
        <div className={colourSwith?'Baidu-title1':'Baidu-title2'}
            onMouseMove={()=>setColourSwith(true)}
            onMouseLeave={()=>setColourSwith(false)} 
        >{name}</div>
    )
}

// const MoreArea=({name})=>{
//     const [morebutton,setmorebutton] = useState(false)

//     return(
//         <div className={'more-container'}>
//             123
//         </div>
//     )
// }