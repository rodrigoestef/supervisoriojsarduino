import React from 'react'
import { BrowserRouter,Switch,Route, Redirect } from 'react-router-dom'
import Botao from './components/Botao'
import 'bootstrap/dist/css/bootstrap.min.css'


export default ()=> {
  document.head.title = 'supervisorio'
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path='/' render={()=><Botao/>}/>
        <Route path='/' render={()=><Redirect to='/'/>}/>
      </Switch>
    </BrowserRouter>
  )
}