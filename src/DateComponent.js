 import React, { useState, useEffect } from 'react'
 
 export default function DateComponent() {

    const today = new Date().toDateString();
    const [ timer, setTimer ] = useState(new Date().toLocaleTimeString());
    // console.info(timer);
    
    useEffect(() => {
        const changeTime = setInterval(() => {
                setTimer(new Date().toLocaleTimeString());
            }, 1000);

        return () =>  clearInterval(changeTime);
    }, []);

     return (
         <div>
             {today}<br /><br />
             {timer}
         </div>
     )
 }
 