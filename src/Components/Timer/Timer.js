import React, {useState, useEffect} from 'react'
import './Timer.css'



const Timer = () => {
  const [activeStart, setActiveStart] = useState('false')
  const [activeResume, setActiveResume] = useState('false')
  const [activePause, setActivePause] = useState('false')
  const [progressBar, setProgressBar] = useState(100)
  const [progressTime, setProgressTime] = useState(0)
 

 useEffect(()=>{
   const interval = setInterval(()=> {
      if(progressBar > progressTime && activeStart === 'true' && activeResume  === 'false'){
         setProgressBar(progressBar-1) 
      }else{
         setActivePause('true')
         clearInterval(interval);
      }
     ;}, 20);
     return ()=> clearInterval(interval);
     
      
 },[progressBar, progressTime, activeStart, activeResume])
  function handelReset () {
    setActiveResume('false')
    setActiveStart('false')
    setProgressBar(100)
    setProgressTime(0)
  }
 
  function handelPause (){
   // setActivePause('true')
   setActiveResume('true')
   setActiveStart('true')
  }

  return (
    <div className='timer-container'>
       <div className='Timer-container-Main'>
          <div  className='Timer-container-watcher'>
             <div className='Timer-container-CircleOutsite' 
             style={{background : `conic-gradient(#b26903 ${progressBar * 3.6}deg, #434342 ${progressBar * 3.6}deg)`,}}>

                   {/* <div className='Timer-container-CircleInside-time'>06:14</div>
                  <div className='Timer-container-CircleInside-alarm'>🔔 2:18 AM</div> */}
                <div className='Timer-container-CircleInside'>
                  <div className='Timer-container-CircleInside-time'>06:14</div>
                  <div className='Timer-container-CircleInside-alarm'>🔔 2:18 AM</div>
                </div>
             </div>

          </div>

          <div  className='Timer-container-Buttons'>
              {/* <div 
                 className='Timer-container-Button-Cancel'>Cancel</div> */}
              <div 
                  onClick={handelReset}
                   className='Timer-container-Button-Cancel2'>Cancel</div>

              {/* <div className='Timer-container-Button-Start'>Start</div> */}
            {activeStart === 'false' && progressBar === 100  && <div onClick={(()=> setActiveStart('true'))}
                   className='Timer-container-Button-Start2' 
                   >Start</div>}

             {activeStart === 'true' && activeResume  === 'false' && <div 
                                               onClick={handelPause}
                                               className='Timer-container-Button-Pause'>Pause</div>}
             {activeResume === 'true' &&  <div 
                                                 onClick={(()=> setActiveResume('false'))}
                                               className='Timer-container-Button-Resume'>Resume</div>}
          </div>
          <div className='Timer-container-alarm'>
             <div className='Timer-container-alarm-first'>When Timer Ends</div>
             <div className='Timer-container-alarm-second'>Radar <p>⌵</p></div>
          </div>

       </div>

    </div>
  )
}

export default Timer