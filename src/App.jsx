import './App.scss'
import React from 'react';
import CanvasComponent from './components/canvas/CanvasComponent'

function App() {
  return (
    <>
       <div className='container'>
            <div className='container-content'>
                <div className='container-content-logo'>
                      <div className='container-content-logo-text'>MIXOLOGY</div>
                </div>
            </div>
            <CanvasComponent />
       </div>
    </>
  )
}

export default App
