import React, { useState } from 'react'

const Timer = () => {
    const [time,setTime] = useState(0)
    const [inputTime,setInputTime] =useState("")

    function handleStart(){
    // console.log(inputTime);
    if(!isNaN(inputTime)) {   
        // check whether input is number
        setTime(inputTime)
        let interval
        interval = setInterval(() => {
        setTime((cur) => {
            if(cur <= 1){
                clearInterval(interval)
            }
            return cur-1
        })
       },1000)
    } else {
        alert("wrong input, only number is accepted")
    }
    }

  return (
    <div className='timer-wrapper'>
      <h2>Countdown Timer</h2>
      <div>{time}</div>
      <div>
        <div><input type="text" 
        value={inputTime}
        onChange={(e) => {
            setInputTime(e.target.value)
        }}
        /></div>
        <button onClick={handleStart}>Start</button>
      </div>
    </div>
  )
}

export default Timer
