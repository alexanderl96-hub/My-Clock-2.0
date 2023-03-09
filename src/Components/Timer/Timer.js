import React, {useState, useEffect} from 'react'
import './Timer.css'
const hours = [68,68,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,68, 68]
const min = [ 68,68,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59, 68,68,]
const sec = [68,68,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59, 68,68,]


const Timer = () => {
  const [activeStart, setActiveStart] = useState('false')
  const [activeResume, setActiveResume] = useState('false')
  const [activePause, setActivePause] = useState('false')
  const [progressBar, setProgressBar] = useState(100)
  const [progressTime, setProgressTime] = useState(0)
  const [value, setValue] = useState('')
 

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

  function handelValue(e){
   setValue(e.target.id )

  }
console.log(value)
  return (
    <div className='timer-container'>
       <div className='Timer-container-Main'>
          {/* <div  className='Timer-container-watcher'>
             <div className='Timer-container-CircleOutsite' 
             style={{background : `conic-gradient(#b26903 ${progressBar * 3.6}deg, #434342 ${progressBar * 3.6}deg)`,}}>
                <div className='Timer-container-CircleInside'>
                  <div className='Timer-container-CircleInside-time'>06:14</div>
                  <div className='Timer-container-CircleInside-alarm'>🔔 2:18 AM</div>
                </div>
             </div>
          </div> */}
          <div className='Timer-container-watcher-Input'>
              <div className='Timer-container-watcher-Input-in'>
                  <div className='Timer-container-watcher-Input-divHolder'>
                     <div className='timer-map-hours' >{hours.map((a)=>{
                        return(
                           <div style={{margin: '8px'}} onMouseOver={handelValue}>
                           { a > 23 &&  <div id={a}  style={{fontSize: '25px',color: 'transparent'}}>{a}</div>   }
                           <div id={a} style={{fontSize: '25px',}}>{a > 23 ? null : a}</div>
                           </div>
                        )
                     })}</div>
                  </div> <div style={{fontSize: '25px', marginLeft: '-25px'}}>hours</div>
                  <div className='Timer-container-watcher-Input-divHolder'>
                     <div className='timer-map-hours' >{min.map((a)=>{
                           return(
                              <div style={{margin: '8px'}} onMouseOver={handelValue}>
                              { a > 60 &&  <div id={a}  style={{fontSize: '25px',color: 'transparent'}}>{a}</div>   }
                              <div id={a} style={{fontSize: '25px',}}>{a > 60 ? null : a}</div>
                              </div>
                           )
                        })}</div>
                  </div><div style={{fontSize: '25px', marginLeft: '-25px'}}>min</div>
                  <div className='Timer-container-watcher-Input-divHolder'>
                  <div className='timer-map-hours' >{sec.map((a)=>{
                           return(
                              <div style={{margin: '8px'}} onMouseOver={handelValue}>
                              { a > 60 &&  <div id={a}  style={{fontSize: '25px',color: 'transparent'}}>{a}</div>   }
                              <div id={a} style={{fontSize: '25px',}}>{a > 60 ? null : a}</div>
                              </div>
                           )
                        })}</div>
                  </div><div style={{fontSize: '25px', marginLeft: '-25px'}}>sec</div>
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