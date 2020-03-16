import React, { useState } from 'react'
import './botao.css'
import  iconoff from './lightoff.png'
import  iconon from './light on.png'
import io from 'socket.io-client'

export default () => {

    const [light, setLight] = useState(false)
    const [text, setText] = useState("ligar")
    
    const client = io('/')

    client.on('state',data=>{
      if (data == 1) {
        setLight(true)
        setText('desligar')
      }else{
        setLight(false)
        setText('ligar')
      }
        
    })

    const click = async () =>{
      client.emit('change','change')
    }
    const icon = light ? <img src={iconon}/>:<img src={iconoff}/>
    return(
        <div className='container text-center'>
            <div className='teco'>
                {icon}
                <br/><br/>
                <button className='btn btn-danger' onClick={() => click()}>{text}</button>
            </div>
        </div>
    )
}