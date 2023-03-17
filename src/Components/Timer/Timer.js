import React, {useState, useEffect} from 'react'
import './Timer.css'
import {  FaStopwatch20 } from 'react-icons/fa';
const hours = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,]
const min = [ 0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59]
const sec = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59]


const Timer = () => {
 

  const [activeStart, setActiveStart] = useState('false')
  const [activeResume, setActiveResume] = useState('false')
  const [activeAlarm, setActiveAlarm] = useState('false')
  const [progressBar, setProgressBar] = useState(100)
  const [progressTime, setProgressTime] = useState(0)
  const [value, setValue] = useState('')
  const [timeHour, setTimeHour] = useState(0)
  const [timeMin, setTimeMin] = useState(0)
  const [timeSec, setTimeSec] = useState(0)
  const [milisec, setMiliSec] = useState(100)
  const [minimun, setMinumun] = useState(0)
  
 
  function handelValue(e){
    setTimeHour(   Number(e.target.value ))
    setMinumun(minimun + (Number(e.target.value) > 0 ? Number(e.target.value ) * (864000) : 0))
  }
    function handelMinute(e){
     setTimeMin( Number(e.target.value ) )
     setMinumun(minimun +(Number(e.target.value ) > 0 ? Number(e.target.value ) * (3600+2330) : 0))

  }
    function handelSecond(e){
     setTimeSec( Number(e.target.value ))
      setMinumun( minimun + (Number(e.target.value ) > 0 ? Number(e.target.value ) * (100) : 0))
  }
 console.log(minimun, 100/minimun, 'rest')
 const restingProgressBar = Math.abs(100 / minimun)


 useEffect(()=>{
   
   const interval = setInterval(()=> {
      if(progressBar > progressTime && activeStart === 'true' && activeResume  === 'false'){
         setProgressBar(progressBar - restingProgressBar) 
         handelMillisecond()
      }else if(progressBar <= progressTime && timeHour === 0 && timeMin === 0 && timeSec <= 0){
           setActiveStart('false')
             setActiveResume('false')
             setActiveAlarm('true')
             setProgressBar(100)
             setProgressTime(0)
            setTimeHour(0)
            setTimeMin(0)
            setTimeSec(0)
            setMinumun(0)
            
      }else{
         // setActivePause('true')
         clearInterval(interval); 
      }
     ;}, 1);
     return ()=> clearInterval(interval);
    
      
 },[progressBar, progressTime, activeStart, activeResume, restingProgressBar, timeHour, timeMin, timeSec ])

  function handelReset () {
    setActiveResume('false')
    setActiveStart('false')
    setProgressBar(100)
    setProgressTime(0)
    setTimeHour(0)
    setTimeMin(0)
    setTimeSec(0)
    setMinumun(0)
  }

  function handelPause (){
   // setActivePause('true')
   setActiveResume('true')
   setActiveStart('true')
  }


  function handelMillisecond (){
   if(activeStart === 'true'){
      if(milisec === 0){
         setMiliSec(100)
         setTimeSec(timeSec -1)
      }else if( timeSec  === 0 &&  timeMin > 0){
         setTimeSec(60-1)
         setTimeMin(timeMin - 1)
       }else if(timeMin === 0 && timeHour > 0){
         setTimeHour(timeHour - 1)
         setTimeMin(60-1) 
       }else{
         setMiliSec(milisec - 1)
       }

   }
  }
  console.log(Math.ceil(progressBar), 'htfjhfgkjgkg')

  return (
    <div className='timer-container'>
       {activeAlarm === 'true' && <div style={{backgroundColor: '#757474', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                      padding: '7px', borderRadius: '30px', position: 'absolute', top: '8.7%', float: 'left', zIndex: 100, width: '375px'}} onClick={()=> setActiveAlarm('false')}>
            <div style={{display: 'flex',  marginLeft: '8px'}}>
               <div><FaStopwatch20 style={{fontSize: '33px'}}/></div>
               <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center',
               width: '50px', fontSize: '13px', color: '#1b1a1ad0', flexWrap: 'wrap'}}><div style={{fontWeight: 400, color: 'black'}}>Clock </div> <div>Timer</div></div>
            </div>
            <div style={{fontSize: '10px', marginTop: '-20px', color: '#1b1a1ad0', marginRight: '8px'}}>now</div>
          </div>}
       <div className='Timer-container-Main'>
          {activeStart === 'true' && <div  className='Timer-container-watcher'>
             <div className='Timer-container-CircleOutsite' 
             style={{background : `conic-gradient(#b26903 ${ progressBar * 3.5 }deg, #434342 ${ progressBar * 3.5}deg)`,
              }}>
                <div className='Timer-container-CircleInside'>
                  <div className='Timer-container-CircleInside-time'>
                        {timeMin === 60 && <div style={{display: 'flex', justifyContent: 'flex-end', width: '40px'}}>{timeHour + 1}</div>}
                        {timeMin === 60 &&  <div style={{marginTop: '-7px', width: '12px'}}>:</div>}
                        {timeMin < 60 && timeHour !== 0 && <div style={{display: 'flex', justifyContent: 'flex-end', width: '40px'}}>{timeHour === 0 ? null : `${timeHour}`}</div>}
                        {timeHour > 0 &&  <div style={{marginTop: '-7px', width: '12px'}}>:</div>}
                      {timeMin === 60 &&  <div>{'00'}</div>}
                      {timeMin < 60 &&   <div>{timeMin < 10 ? '0'.concat(timeMin): timeMin}</div>}
                        <div style={{marginTop: '-7px', width: '12px'}}>:</div>
                        <div>{ timeSec ?  `${timeSec < 10 ? '0'.concat(timeSec): timeSec}`: '00'}</div>
                     </div>
                  {/* <div className='Timer-container-CircleInside-alarm'>🔔 2:18 AM</div> */}
                </div>
             </div>
          </div>}
           {activeStart === 'false' &&
          <div className='Timer-container-watcher-Input'>
              <div className='Timer-container-watcher-Input-in'>
                  <div className='Timer-container-watcher-Input-divHolder'>
                     <select className='timer-map-hours' onChange={handelValue} >{hours.map((a)=>{
                        return(
                           <>
                           {/* // < div style={{margin: '8px'}} onMouseOver={handelValue}> */}
                           {/* { a > 23 &&  <option value={a}  onClick={handelValue}  style={{fontSize: '25px',color: 'transparent'}}>{a}</option>   } */}
                           <option value={a} >{a}</option>
                           {/* // </div> */}
                           </>
                        )
                     })}</select>
                  </div> <div style={{fontSize: '23px', marginLeft: '-18px'}}>hours</div>
                  <div className='Timer-container-watcher-Input-divHolder'>
                     <select  className='timer-map-hours' onChange={handelMinute} >{min.map((a)=>{
                           return(
                              <>
                              {/* // <div style={{margin: '8px'}} onMouseOver={handelMinute}> */}
                              {/* { a > 60 &&  <option value={a}  onChange={handelMinute} style={{fontSize: '25px',color: 'transparent'}}>{a}</option>   } */}
                              <option value={a}  >{ a}</option>
                              {/* // </div> */}
                              </>
                           )
                        })}</select >
                  </div><div style={{fontSize: '23px', marginLeft: '-18px'}}>min</div>
                  <div className='Timer-container-watcher-Input-divHolder'>
                  <select  className='timer-map-hours'  onChange={handelSecond} >{sec.map((a)=>{
                           return(
                              <>
                              {/* <div style={{margin: '8px'}} onMouseOver={handelSecond}> */}
                              {/* { a > 60 &&  <option value={a}   onChange={handelSecond}  style={{fontSize: '25px',color: 'transparent'}}>{a}</option>   } */}
                              <option value={a}  >{ a}</option>
                              {/* </div> */}
                               </>
                           )
                        })}</select >
                  </div><div style={{fontSize: '23px', marginLeft: '-18px'}}>sec</div>
            </div>
          </div>}

          <div  className='Timer-container-Buttons'>
              {/* <div 
                 className='Timer-container-Button-Cancel'>Cancel</div> */}
              <div 
                  onClick={handelReset}
                   className='Timer-container-Button-Cancel2'>Cancel</div>

             {activeStart === 'false' && timeHour === 0 && timeMin === 0 && timeSec === 0 &&  <div className='Timer-container-Button-Start'>Start</div>}
            {activeStart === 'false' && (timeHour > 0 || timeMin > 0 || timeSec > 0) && <div onClick={(()=> setActiveStart('true'))}
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