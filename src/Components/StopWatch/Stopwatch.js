import React from 'react'
import './Stopwatch.css'

const Stopwatch = () => {
  return (
    <div className='stopwatch-container'>
        <div className='stopwatch-container-MainWacher'>
            <div className='stopwatch-container-watcher'>
               <div>00:</div>
               <div>02.</div>
               <div>000</div>
            </div>
           <div  className='stopwatch-container-second'>
             <div className='stopwatch-container-second-first'>Reset</div>
             <div className='stopwatch-container-second-second'></div>
             <div className='stopwatch-container-second-third'>Start</div>
           </div>
        </div>
        <div className='stopwatch-container-lap'>
            <div className='stopwatch-container-lap-first'>
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
            </div>
        </div>
        <div></div>
    </div>
  )
}

export default Stopwatch