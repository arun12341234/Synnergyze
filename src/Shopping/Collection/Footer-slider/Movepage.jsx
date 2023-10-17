import React from 'react'
import './movepage.css'
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
const Movepage = () => {
  return (
    <div className='left-right'>
      <KeyboardDoubleArrowLeftIcon className='letf-icon left-btn'/>
      <div className='three-row'>
        <span>1</span>
        <span>2</span>
        <span>3</span>
      </div>
      <KeyboardDoubleArrowRightIcon className='letf-icon'/>
    </div>
  )
}

export default Movepage
