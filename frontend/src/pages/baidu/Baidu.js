import React,{useState, useRef} from "react"
import '../baidu/Baidu.css'
import Button from '@mui/material/Button';
import { Input, Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import { SyncOutlined } from '@ant-design/icons';
import { CameraOutlined } from '@ant-design/icons';

import myimg from '../../assert/img/baidu.jpg'
import myicon from '../../assert/img/baidu.jpg'


const Baidu = () =>{
    let TitleList=[
        'New',
        'hao123',
        'Map',
        'Live',
        'Video',
        'Abroad',
        'Academic',
    ]
    const ref = useRef(null);
    
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
    const getColour = (newColour)=>{
        if(underInput != true){
            setinput(newColour);
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
                        <TextSwitch name={'More'} />
                    </div>

                    <div className={morebutton?'more-display-container':'more-nondisplay-container'}
                        onMouseLeave={()=>setmorebutton(false)}
                    >
                        <div className={morebutton?'more-display':'more-nondisplay'}>
                            <div className={'function'}>
                                <div className={'Baidu-topsearch-icon'}>
                                    <img className={'Baidu-icon'} src={myicon}></img>
                                    <div className={'function-name'}><TextSwitch name={'Disk'} /></div>
                                    <img className={'Baidu-icon'} src={myicon}></img>
                                    <div className={'function-name'}><TextSwitch name={'Promo'} /></div>
                                </div>
                                <div className={'Baidu-topsearch-icon'}>
                                    <img className={'Baidu-icon'} src={myicon}></img>
                                    <div className={'function-name'}><TextSwitch name={'Know'} /></div>
                                    <img className={'Baidu-icon'} src={myicon}></img>
                                    <div className={'function-name'}><TextSwitch name={'Library'} /></div>
                                </div>
                                <div className={'Baidu-topsearch-icon'}>
                                    <img className={'Baidu-icon'} src={myicon}></img>
                                    <div className={'function-name'}><TextSwitch name={'Wiki'} /></div>
                                    <img className={'Baidu-icon'} src={myicon}></img>
                                    <div className={'function-name'}><TextSwitch name={'Exp'} /></div>
                                </div>
                                <div className={'Baidu-topsearch-icon'}>
                                    <img className={'Baidu-icon'} src={myicon}></img>
                                    <div className={'function-name'}><TextSwitch name={'Piture'} /></div>
                                    <img className={'Baidu-icon'} src={myicon}></img>
                                    <div className={'function-name'}><TextSwitch name={'Music'} /></div>
                                </div>
                                
                            </div>
                        </div>
                    </div>

                    

                </div>
                <div className={'Baidu-hearder-right'} >
                    <div 
                        onMouseMove={()=>setsetting(true)}
                    >
                        <TextSwitch name={'Setting'} />
                    </div>

                    <div className={setting?'set-display-container':'set-nondisplay-container'}
                        onMouseLeave={()=>setsetting(false)}
                    >
                        <div className={setting?'set-display':'set-nondisplay'}>
                        <TextSwitch name={'Search Settings'} />
                        <TextSwitch name={'Advanced Search'} />
                        <TextSwitch name={'Prediction Off'} />
                        <TextSwitch name={'Privacy Settings'} />
                        <TextSwitch name={'Hot Search Off'} />
                        </div>
                    </div>
                    
                    <div className={'Baidu-hearder-right-button'}>
                        <Button variant="contained">{'Login'}</Button>
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
                    <button className={'Baidu-searchbutton'}>Search</button>
                </div>
            </div>

            <div className={'Baidu-topsearch'}>
                <div className={'Baidu-topsearch-fristline'}>
                    <div className={'Baidu-topsearch-title'}><TextSwitch name={'Baidu Hot Search >'} /></div>
                    <div className={'Baidu-topsearch-text'}>
                        <div className={'Baidu-topsearch-icon'}><SyncOutlined /></div>
                        <TextSwitch name={'Change'} />
                    </div>
                </div>

                <div className={'Baidu-topsearch-news'}>

                    <div className={'Baidu-topsearch-layer'}>
                        <div className={'Baidu-topsearch-number1'}>{'1'}</div>
                        <div className={'Baidu-topsearch-newleft'}><TextSwitch name={'New DV offence set to become law in QLD'} /></div>
                        <div className={'Baidu-topsearch-number456'}>{'4'}</div>
                        <div className={'Baidu-topsearch-newright'}><TextSwitch name={'The $35 hardware in your home that could cost you $14,000'} /></div>
                    </div>

                    <div className={'Baidu-topsearch-layer'}>
                        <div className={'Baidu-topsearch-number1'}>{'2'}</div>
                        <div className={'Baidu-topsearch-newleft'}><TextSwitch name={'The coronavirus news from across Australia'} /></div>
                        <div className={'Baidu-topsearch-number456'}>{'5'}</div>
                        <div className={'Baidu-topsearch-newright'}><TextSwitch name={'Barefoot Ballerinas learning more than just dance moves'} /></div>
                    </div>

                    <div className={'Baidu-topsearch-layer'}>
                        <div className={'Baidu-topsearch-number1'}>{'3'}</div>
                        <div className={'Baidu-topsearch-newleft'}><TextSwitch name={'Sdyney child infected with Omicron'} /></div>
                        <div className={'Baidu-topsearch-number456'}>{'6'}</div>
                        <div className={'Baidu-topsearch-newright'}><TextSwitch name={'South Australia changes border rules for NSW arrivals'} /></div>
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