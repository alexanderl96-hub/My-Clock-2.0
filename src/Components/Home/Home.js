import React, {useState, useEffect} from 'react'
import Stopwatch from '../StopWatch/Stopwatch'
import Timer from '../Timer/Timer'
import Clock from '../Clock/Clock'
import './Home.css'
import { FaStopwatch, FaGlobe, FaWifi, FaBatteryFull, FaStopwatch20 } from 'react-icons/fa';

const Home = () => {
    const now = new Date();
    const [clockComponent , setClockComponent] = useState('true')
    const [stopwatchComponent , setStopwatchComponent] = useState('false')
    const [timerComponent , setTimerComponent] = useState('false')


    const [currentTime, setCurrentTime] = useState(0)
    const [currentMin, setCurrentMin] = useState(0)
    const [count, setCount] = useState(0)
    

  function handelPages (e){
    console.log(e.target.id)
    console.log(e.target.value)
    console.log(e.target.attr)
       if( e.target.id === 'clockComponent' ) {
         setClockComponent('true')
         setStopwatchComponent('false')
         setTimerComponent('false')
       }else if(e.target.id === 'stopwatchComponent') {
        setStopwatchComponent('true')
        setClockComponent('false')
        setTimerComponent('false')
       }else if(e.target.id === 'timerComponent' ){
        setTimerComponent('true')
        setClockComponent('false')
        setStopwatchComponent('false')
       }
  }



    useEffect(()=>{
        const interval = setInterval(()=> {
            setCurrentTime(now.getHours() > 12 ? now.getHours() - 12 : now.getHours())
            setCurrentMin(now.getHours() > 12 ? `${now.getMinutes() < 10 ? '0'.concat(now.getMinutes() ) : now.getMinutes()  }pm ` :
             `${now.getMinutes() < 10 ? '0'.concat(now.getMinutes() ) : now.getMinutes()  }am ` )
            setCount(count + 1);}, 100000000);
            return ()=> clearInterval(interval);
    },[count])



  return (
    <div className="container" >
     <div className='container-time'>
        <div className='container-time-current'>{currentTime < 10 ? '0'.concat(currentTime): currentTime}:
        {currentMin}</div>
        <div className='container-time-inside'>
            <div> <FaWifi /></div>
            <div><FaBatteryFull /></div>
        </div>
     </div> 

     <div className="container-page">
            {clockComponent === 'true' &&   <Clock />}
            {timerComponent === 'true' &&  <Timer />}
            {stopwatchComponent === 'true' &&   <Stopwatch />}
     </div>

     <div className='container-footer'>
    <div id='clockComponent'  className={ clockComponent === 'true' ? 'colorPalette':  'colorPalette2'} onClick={handelPages}>
            <div id='clockComponent' ><FaGlobe /></div>
            <div id='clockComponent'>Clock</div>
        </div>
        <div id='stopwatchComponent' className={ stopwatchComponent === 'true' ? 'colorPalette':  'colorPalette2'} onClick={handelPages}>
            <div id='stopwatchComponent'><FaStopwatch /></div>
            <div id='stopwatchComponent'>StopWatch</div>
        </div>
        <div id='timerComponent' className={ timerComponent === 'true' ? 'colorPalette':  'colorPalette2'} onClick={handelPages} >
            <div id='timerComponent'><FaStopwatch20 /></div>
            <div id='timerComponent'>Timer</div>
        </div>
     </div>
    </div>
  )
}

export default Home