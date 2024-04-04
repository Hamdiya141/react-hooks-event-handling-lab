import React from 'react'

function Keypad() {

    function handlechange() {
        console.log("Entering password...") 
    }

  return (
    <input 
        type="password" 
        onChange={handlechange}
    />
  )
}

export default Keypad

    