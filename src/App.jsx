import React from 'react'
import Main from './components/main/MainComponent'
import { BrowserRouter } from 'react-router-dom'

export default function App() {
  return (
    <BrowserRouter>
      <div className='app'>
        <Main/>
      </div>
    </BrowserRouter>
  )
}
