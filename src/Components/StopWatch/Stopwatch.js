import React, {useState, useEffect} from 'react'
import './Stopwatch.css'

const Stopwatch = () => {
    const [count, setCount] = useState(0)
    const [start, setStart] = useState('false')
    const [minutes , setMinutes] = useState(0)
    const [second , setSecond] = useState(0)
    const [milliseconds , setMilliseconds] = useState(0)
    const [storeLap, setStoreLap] = useState([])
 

  
        
    // function countDount (){
    
    // let countDate = new Date('December 31,2023 00:00:00').getTime();
    // let currentTime = new Date().getTime();
    // let time = new Date('March 15,2023 00:00:00:02');
    // setNewVal( currentTime + countDate )
    // let   ms = time.getMilliseconds();


    // const second = 1000;
    // const minute = second * 60
    // const hour = minute * 60
    // const day = hour * 24

    // let textDay = Math.floor(newVal / day)
    // let textHour = Math.floor((newVal % day) / hour)
    // let textMin = Math.floor((newVal % hour) / minute)
    // let textSec = Math.floor((newVal % minute) / second)
    // let textMS = Math.floor((newVal % second) / ms)

    //     if(start === 'true'){
    //         setCountDow([textDay, textHour, textMin, textSec, textMS  ])
    //     }

    //     }

    // function handelMinute (){
    //     if(start === 'true'){
    //         if(minutes === 59){
    //             setMinutes(0 + 1)
    //         }else{
    //             setMinutes(second + 1)
    //         }
    //     }
    // }
    // function handelSecond (){
    //     if(start === 'true'){
    //         if(second === 59){
    //             setSecond(0 + 1)
    //         }else{
    //             setSecond(second + 1)
    //         }
    //     }
    // }
    function handelMillisecond (e){
        if(start === 'true'){
            if(milliseconds === 215 ){
              setMilliseconds(0 + 1)
              setSecond(second + 1)
            }else if(second === 59 ){
                setSecond(0 + 1)
              setMinutes(minutes + 1)
            }else{
              setMilliseconds(milliseconds + 1)
            }

        }
        
    }

     function addingToLap ( ){
        let store = []
      
        if(start === 'true'){
            if(milliseconds === 215 ){
              setMilliseconds(0 + 1)
              setSecond(second + 1)
            }else if(second === 59 ){
                setSecond(0 + 1)
              setMinutes(minutes + 1)
            }else{
              setMilliseconds(milliseconds + 1)
            }

            store.push(minutes, second, milliseconds)
           
        }
        storeLap.unshift(store)
        setStoreLap(storeLap)
     }

    function reset (){
        setMinutes(0)
        setMilliseconds(0)
        setSecond(0)
        setMinutes(0)
        setStoreLap([])
       
    }

    // useEffect((e)=>{
    //   const interval = setInterval(()=> {
    //     handelMinute()
    //     setCount(count + 1);
    //   },10000);

    
    //   return ()=> clearInterval(interval);
       
    // },[count])

    // useEffect((e)=>{
    //     const interval2 = setInterval(()=> {
    //         handelSecond()
    //         setCount(count + 1);
    //       },1000);
    //     return ()=> clearInterval(interval2);
         
    //   },[count])


  function thebestTime (){
    let store = []
    let firstplace = 0
    let secondplace = 0
   

    for( let num in storeLap ){
        console.log(storeLap[num].join(''))
        store.push([Number(storeLap[num].join('')), num])
    }

    store = store.sort((a,b)=> a[0] - b[0])
   
    firstplace = store[0]
    secondplace = store[1]
 

    console.log(firstplace, secondplace )
   
  }

console.log(thebestTime())

    useEffect((e)=>{
        const interval3 = setInterval(()=> {
            handelMillisecond()
            setCount(count + 1);
          },1);
        return ()=> clearInterval(interval3);
         
      },[count])
     

    
    console.log(storeLap )

  return (
    <div className='stopwatch-container'>
        <div className='stopwatch-container-MainWacher'>
            <div className='stopwatch-container-watcher'>
               <div className='stopwatch-container-watcher-value'>{minutes ? (minutes < 10 ? '0'.concat(minutes) : minutes) : '00'}:</div>
               <div>{second ? (second < 10 ? '0'.concat(second) : second) : '00'}.</div>
              {milliseconds < 215 && milliseconds > 10 && <div>{milliseconds ? (milliseconds < 100 ? '0'.concat(milliseconds) : milliseconds ) : '000'}</div>}
              {milliseconds < 10  && <div>{milliseconds ? (milliseconds < 10 ? '00'.concat(milliseconds) : milliseconds ) : '000'}</div>}
            </div>
           <div  className='stopwatch-container-second'>
            {start === 'false' && milliseconds !== 0  && <div 
                     onClick={reset}
                     className='stopwatch-container-second-first' > Reset </div> } 
            {start === 'true'  &&  <div  id='1'
                     onClick={addingToLap}
                     className='stopwatch-container-second-first' >Lap</div> } 
            {start === 'false' && milliseconds === 0  && <div  className='stopwatch-container-second-first2' >Lap</div> } 
             <div className='stopwatch-container-second-second'></div>
             {start === 'false' &&  <div className='stopwatch-container-second-third' 
                  onClick={()=> start === 'false' ? setStart('true') : setStart('false') }>Start</div>}
             {start === 'true'  &&  <div className='stopwatch-container-second-third2' 
                  onClick={()=> start === 'false' ? setStart('true') : setStart('false') }>Stop</div>}
           </div>
        </div>


        <div className='stopwatch-container-lap'>
        {start === 'true'  &&  <div className='stopwatch-container-lap-first'>
                     <div className='stopwatch-container-lap-first-first'>Lap  {(storeLap.length === 0 ? 1 : storeLap.length + 1)}</div>
                     <div className='stopwatch-container-lap-first-second'>
                        <div>{minutes ? (minutes < 10 ? '0'.concat(minutes) : minutes) : '00'}:</div>
                        <div>{second ? (second < 10 ? '0'.concat(second) : second) : '00'}.</div>
                        {milliseconds < 215 && milliseconds > 10 && <div>{milliseconds ? (milliseconds < 100 ? '0'.concat(milliseconds) : milliseconds ) : '000'}</div>}
                        {milliseconds < 10  && <div>{milliseconds ? (milliseconds < 10 ? '00'.concat(milliseconds) : milliseconds ) : '000'}</div>}
                    </div>
                 </div>}
          
             {storeLap.map((a, index)=>{
                return(
                  <div className='stopwatch-container-lap-first'>
                     <div className='stopwatch-container-lap-first-first'>Lap {Number(index) === 0 ?  (storeLap.length - index)  : (storeLap.length - index)}</div>
                     <div className='stopwatch-container-lap-first-second'>
                        <div>{a[0] ? (a[0]  < 10 ? '0'.concat(a[0] ) : a[0] ) : '00'}:</div>
                        <div>{a[1]  ? (a[1] < 10 ? '0'.concat(a[1]) : a[1]) : '00'}.</div>
                        {a[2] < 215 && a[2] > 10 && <div>{a[2] ? (a[2] < 100 ? '0'.concat(a[2]) : a[2] ) : '000'}</div>}
                        {a[2] < 10  && <div>{a[2] ? (a[2] < 10 ? '00'.concat(a[2]) : a[2] ) : '000'}</div>}
                    </div>
                 </div>
                )
            })}
            {/* <div className='stopwatch-container-lap-first'>
                <div className='stopwatch-container-lap-first-first'>Lap 1</div>
                <div className='stopwatch-container-lap-first-second'>
                    <div>00:</div>
                    <div>02.</div>
                    <div>000</div>
                </div>
            </div>
            <div className='stopwatch-container-lap-first'>
                <div className='stopwatch-container-lap-first-first'>Lap 2</div>
                <div className='stopwatch-container-lap-first-second'>
                    <div>00:</div>
                    <div>02.</div>
                    <div>000</div>
                </div>
            </div>
            <div className='stopwatch-container-lap-first'>
                <div className='stopwatch-container-lap-first-first'>Lap 3</div>
                <div className='stopwatch-container-lap-first-second'>
                    <div>00:</div>
                    <div>02.</div>
                    <div>000</div>
                </div>
            </div>
            <div className='stopwatch-container-lap-first'>
                <div className='stopwatch-container-lap-first-first'>Lap 4</div>
                <div className='stopwatch-container-lap-first-second'>
                    <div>00:</div>
                    <div>02.</div>
                    <div>000</div>
                </div>
            </div>
            <div className='stopwatch-container-lap-first'>
                <div className='stopwatch-container-lap-first-first'>Lap 5</div>
                <div className='stopwatch-container-lap-first-second'>
                    <div>00:</div>
                    <div>02.</div>
                    <div>000</div>
                </div>
            </div>
            <div className='stopwatch-container-lap-first'>
                <div className='stopwatch-container-lap-first-first'>Lap 6</div>
                <div className='stopwatch-container-lap-first-second'>
                    <div>00:</div>
                    <div>02.</div>
                    <div>000</div>
                </div>
            </div>
            <div className='stopwatch-container-lap-first'>
                <div className='stopwatch-container-lap-first-first'>Lap 7</div>
                <div className='stopwatch-container-lap-first-second'>
                    <div>00:</div>
                    <div>02.</div>
                    <div>000</div>
                </div>
            </div> */}
        </div>
        <div></div>
    </div>
  )
}

export default Stopwatch