import React from 'react'
import api from '../../util/api'
import './botao.css'

export default () => {

    const click = async () =>{
        const {data} = await api.get('/api')
        // alert(data)
    }

    return(
        <div className='container text-center'>
            <button className='btn btn-danger' onClick={() => click()}>led</button>
        </div>
    )
}