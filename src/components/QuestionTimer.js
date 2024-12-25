import React, { useEffect, useState } from 'react'

export const QuestionTimer = ({timeout, onTimeOut}) => {
    const [remainingTime, setRemainigTime] = useState(timeout)
    useEffect(()=>{
        const timer = setTimeout(onTimeOut, timeout);
        return ()=>{clearTimeout(timer)}
    },[timeout, onTimeOut])
    useEffect(()=>{
        const interval = setInterval(()=>{
            setRemainigTime((prev)=> prev-100)
        }, 100);
        return ()=>{clearTimeout(interval)}
    }, [])
    return (
        <progress id='question-time' max={timeout} value={remainingTime}/>
    )
}
