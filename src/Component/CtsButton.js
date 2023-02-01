import React from 'react'
import { Button } from 'reactstrap'
import '../styles/root.css'

const CtsButton = ({text, h}) => {

  return (
    <Button className={`card_button ${h ? 'h-60' : ''}`} style={{height: '100px'}}>{text}</Button>

  )
}

export default CtsButton
