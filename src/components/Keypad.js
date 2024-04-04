import React from 'react'

function Keypad() {
    function handlechange(event) {
        console.log(event.target.value) 
    }
      

  return (
    <div>
        <input 
        type="password" 
        onChange={handlechange}
        placeholder='Entering password'

        />
    </div>
  )
}

export default Keypad

    