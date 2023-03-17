import React, {useState, useEffect} from 'react'
import './Clock.css'
import { FaPlus } from 'react-icons/fa';
const places = ['Ottawa','Cuba','Toronto', 'Nuuk','Mexico', 'Washington', 'New York', 'The Valley', 'Saint John`s', 'Oranjestad', 'Nassau',
'Bridgetown', 'Hamilton', 'Road Town', 'George Town', 'Havana', 'Willemstad', 'Roseau', 'Santo Domingo', 'Moscu', 'Yerevan', 'Baku', 'Jerusalem', 'Damascus', 'Abu Dhabi', 'Kabul', 'Hong Kong', 'Beijing', 'Tokyo', 'Seoul',
'Singapore', 'Bangkok', 'Kaula Lumpur', 'Vientiane', 'Colombo', 'Taipei', 'Pyongyang', 'Copenhagen', 'Helsinki', 'Dublin (City)', 'Oslo', 'Stockholm', 'London', 'Birmingham', 'Manchester', 'Vienna', 
'Brussels', 'Paris', 'Berlin', 'Luxembourg', 'Amsterdam', 'The Hague', 'Minsk', 'Prague', 'Bucharest', 'Athenas', 'Rome', 'Milan', 
'Monaco', 'Madrid', 'Algiers', 'Cairo', 'Tripoli', 'Rabat', 'Khartoum', 'Tunis', 'Porto-Novo', 'Cotonou', 'Ouagadougou', 'Praia',
'Yamoussoukro', 'Abidjan', 'Banjul', 'Accra', 'Conakry', 'Bissau', 'Monrovia', 'Bamako', 'Nouakchott', 'Niamey', 'Canberra', 'Sydney', 'Wellington', 'Auckland', 'Suva', 'Port Moresby', 'Majuro']
const America = ['Ottawa', 'Toronto', 'Nuuk','Mexico', 'Washington', 'New York', 'The Valley', 'Saint John`s', 'Oranjestad', 'Nassau',
                'Bridgetown', 'Hamilton', 'Road Town', 'George Town', 'Havana', 'Willemstad', 'Roseau', 'Santo Domingo', 'Cuba' ]
const Asia = ['Moscu', 'Yerevan', 'Baku', 'Jerusalem', 'Damascus', 'Abu Dhabi', 'Kabul', 'Hong Kong', 'Beijing', 'Tokyo', 'Seoul',
             'Singapore', 'Bangkok', 'Kaula Lumpur', 'Vientiane', 'Colombo', 'Taipei', 'Pyongyang']
const Europe = ['Copenhagen', 'Helsinki', 'Dublin (City)', 'Oslo', 'Stockholm', 'London', 'Birmingham', 'Manchester', 'Vienna', 
'Brussels', 'Paris', 'Berlin', 'Luxembourg', 'Amsterdam', 'The Hague', 'Minsk', 'Prague', 'Bucharest', 'Athenas', 'Rome', 'Milan', 
'Monaco', 'Madrid', ]
const Africa = ['Algiers', 'Cairo', 'Tripoli', 'Rabat', 'Khartoum', 'Tunis', 'Porto-Novo', 'Cotonou', 'Ouagadougou', 'Praia',
 'Yamoussoukro', 'Abidjan', 'Banjul', 'Accra', 'Conakry', 'Bissau', 'Monrovia', 'Bamako', 'Nouakchott', 'Niamey']
// const Antarctica = ['New Zealand', 'Chile', 'Argentina', '']
const Australia = [ 'Canberra', 'Sydney', 'Wellington', 'Auckland', 'Suva', 'Port Moresby', 'Majuro']

const myoffset = ['+14', '+13', '+12.45', '+12', '+11', '+10:30', '+10', '+9.30', '+9', '+8.45', '+8', '+7','+6.30', '+6','+5.45','+5.30',
 '+5', '+4.30', '+4', '+3.30', '+3', '+2', '+1','+0', '-1', '-2', '-3', '-3.30','-4', '-5', '-6', '-7', '-8', '-9','-9.3', '-10', 
 '-11', '-12']
 const offset5up = ['Cuba']
 const offset13up = []
 const offset12up = []
 const offset11up = []


const Clock = () => {
    const now = new Date();
    const [timeZone, setTimeZone] = useState('America/New_york')
    const [addPlaces, setAddPlaces] = useState([])
    const [gethoursDiferent, setGetHoursDiferent] = useState('')
    const [offt, setOfft] = useState('')
  
   
    const options = {timeZone: `${timeZone}`, dateStyle: 'short',  timeStyle: 'full', hourCycle: 'h12', }
    const [edit, setEdit] = useState('false')
    const [morePlaces, setMorePlaces] = useState('false')

    const [count, setCount] = useState(0)

function handelContries(e){
     let store = []
     let currentHour = 0
    let day = ''
    let value = e.target.id
    let different = ''
    let hour = 0
    let minute = 0
    let format = ''
    let currentFormat = ''
    setGetHoursDiferent(value)
       

     if(now.getHours()  < 12){
        currentHour =  now.getHours() 
        currentFormat = 'AM'
     }else {
        currentHour = now.getHours() - 12
        currentFormat = 'PM'
     }
 

    if(America.includes(value)){
        setTimeZone(`America/${value}`)
        setMorePlaces('false')
        
             
        if(now.getDate() <  now.toLocaleString('en-US', options)[2]){
            day = 'Tomorrow'
        }else if(now.getDate() >  now.toLocaleString('en-US', options)[2]){
        day = 'Yesterday'
        }else{
        day = 'Today'
        }

        hour = Number(now.toLocaleString('en-US', options).split(',')[1].trim().split(' ')[0].split(':')[0])
        minute = Number( now.toLocaleString('en-US', options).split(',')[1].trim().split(' ')[0].split(':')[1])
        format = now.toLocaleString('en-US', options).split(',')[1].trim().split(' ')[1]
    
        // if( hour === now.getHours() ){
        //     setGetHoursDiferent('0')
        // }


    //   console.log(currentHour, hour)

        //  if(currentHour < hour && day === 'Today' && currentFormat === 'PM'  && format === 'PM' ){
        //     different =  `-${hour - currentHour}`
        //  }else if(currentHour < hour && day === 'Today' && currentFormat === 'AM' && format === 'AM' ){
        //     different =  `-${hour - currentHour}`
        //  } else  if(currentHour < hour && day === 'Today'  && currentFormat === 'PM' && format === 'AM'){
        //     different =  `+${(hour - currentHour) + 12}`
        //  }  else  if(currentHour < hour && day === 'Today' && currentFormat === 'AM' && format === 'PM' ){
        //     different =  `-${(hour - currentHour) + 12}`
        //  }

         
        //  else  if(currentHour < hour && day === 'Yesterday'  && currentFormat === 'AM' && format === 'PM'){
        //     different =  `-${(hour - currentHour) + 12}`
        //  }
         

        //  else  if(currentHour < hour && day === 'Tomorrow' && format === 'PM' && currentFormat === 'PM'){
        //     different =  `+${ 24 - (hour - currentHour) }`
        //  }else  if(currentHour < hour && day === 'Tomorrow' && format === 'AM' && currentFormat === 'AM'){
        //     different =  `+${ 24 -(hour - currentHour) }`
        //  }else  if(currentHour < hour && day === 'Tomorrow' && format === 'AM' && currentFormat === 'PM'){
        //     different =  `+${12 - (hour - currentHour)}`
        //  }
         
         
        //  if(currentHour > hour && day === 'Today'  && currentFormat === 'PM' && format === 'PM'){
        //     different =  `+ ${ currentHour - hour}`
        //  }else if(currentHour > hour && day === 'Today' && currentFormat === 'AM' && format === 'AM'){
        //     different =  `+ ${currentHour - hour}`
        //  } else  if(currentHour > hour && day === 'Today' && currentFormat === 'PM' && format === 'AM'){
        //     different =  `-${12 - (currentHour - hour)}`
        //  }  else  if(currentHour > hour && day === 'Today' && currentFormat === 'AM' && format === 'PM'){
        //     different =  `+${(currentHour - hour) + 12}`
        //  }

   
        //  else  if(currentHour > hour && day === 'Yesterday'  && currentFormat === 'AM' && format === 'PM'){
        //     different =  `-${(currentHour - hour) + 12}`
        //  }  else  if(currentHour > hour && day === 'Yesterday'  && currentFormat === 'AM' && format === 'PM'){
        //     different =  `-${24 - (currentHour - hour)}`
        //  }  else  if(currentHour > hour && day === 'Yesterday'  && currentFormat === 'AM' && format === 'PM'){
        //     different =  `-${24 - (currentHour - hour)}`
        //  }
         
        //  else  if(currentHour > hour && day === 'Tomorrow' && currentFormat === 'PM' && format === 'AM'){
        //     different =  `+${(currentHour - hour) + 12}`
        //  }


        //  else if(currentHour === hour && day === 'Today' && currentFormat === 'AM'  && format === 'AM' ){
        //     different =  `+${0}`
        //  }else if(currentHour === hour && day === 'Today' && currentFormat === 'AM'  && format === 'AM' ){
        //     different =  `+${0}`
        //  }else if(currentHour === hour && day === 'Today' && currentFormat === 'PM'  && format === 'AM' ){
        //     different =  `-${12}`
        //  }else if(currentHour === hour && day === 'Today' && currentFormat === 'AM'  && format === 'PM' ){
        //     different =  `+${12}`
        //  }

        //  else if(currentHour === hour && day === 'Yesterday' && currentFormat === 'AM'  && format === 'PM' ){
        //     different =  `-${12}`
        //  } else if(currentHour === hour && day === 'Yesterday' && currentFormat === 'PM'  && format === 'AM' ){
        //     different =  `-${12}`
        //  } else if(currentHour === hour && day === 'Yesterday' && currentFormat === 'AM'  && format === 'AM' ){
        //     different =  `-${24}`
        //  } else if(currentHour === hour && day === 'Yesterday' && currentFormat === 'PM'  && format === 'PM' ){
        //     different =  `-${24}`
        //  } 

        //  else  if(currentHour === hour && day === 'Tomorrow' && currentFormat === 'AM' && format === 'AM'){
        //     different =  `+${24}`
        //  } else  if(currentHour === hour && day === 'Tomorrow' && currentFormat === 'PM' && format === 'AM'){
        //     different =  `+${12}`
        //  } else  if(currentHour === hour && day === 'Tomorrow' && currentFormat === 'AM' && format === 'AM'){
        //     different =  `+${24}`
        //  } else  if(currentHour === hour && day === 'Tomorrow' && currentFormat === 'PM' && format === 'PM'){
        //     different =  `+${24}`
        //  }

        //  console.log(different)
        store.push(day, value, hour , minute, format, )


    }else if(Asia.includes(value)){
        setTimeZone(`Asia/${value}`)
        setMorePlaces('false')
     
        if(now.getDate() <  now.toLocaleString('en-US', options)[2]){
            day = 'Tomorrow'
        }else if(now.getDate() >  now.toLocaleString('en-US', options)[2]){
        day = 'Yesterday'
        }else{
        day = 'Today'
        }

        hour = Number(now.toLocaleString('en-US', options).split(',')[1].trim().split(' ')[0].split(':')[0])
        minute = Number( now.toLocaleString('en-US', options).split(',')[1].trim().split(' ')[0].split(':')[1])
        format = now.toLocaleString('en-US', options).split(',')[1].trim().split(' ')[1]

        store.push(day, value, hour , minute, format, )

    }else if(Africa.includes(value)){
        setTimeZone(`Africa/${value}`)
        setMorePlaces('false')

        if(now.getDate() <  now.toLocaleString('en-US', options)[2]){
            day = 'Tomorrow'
        }else if(now.getDate() >  now.toLocaleString('en-US', options)[2]){
        day = 'Yesterday'
        }else{
        day = 'Today'
        }

        hour = Number(now.toLocaleString('en-US', options).split(',')[1].trim().split(' ')[0].split(':')[0])
        minute = Number( now.toLocaleString('en-US', options).split(',')[1].trim().split(' ')[0].split(':')[1])
        format = now.toLocaleString('en-US', options).split(',')[1].trim().split(' ')[1]

        store.push(day, value, hour , minute, format, )

    }else if(Australia.includes(value)){
        setTimeZone(`Australia/${value}`)
        setMorePlaces('false')
        if(now.getDate() <  now.toLocaleString('en-US', options)[2]){
            day = 'Tomorrow'
        }else if(now.getDate() >  now.toLocaleString('en-US', options)[2]){
        day = 'Yesterday'
        }else{
        day = 'Today'
        }

        hour = Number(now.toLocaleString('en-US', options).split(',')[1].trim().split(' ')[0].split(':')[0])
        minute = Number( now.toLocaleString('en-US', options).split(',')[1].trim().split(' ')[0].split(':')[1])
        format = now.toLocaleString('en-US', options).split(',')[1].trim().split(' ')[1]

        store.push(day, value, hour , minute, format, )

    }else if(Europe.includes(value)){
        setTimeZone(`Europe/${value}`)
        setMorePlaces('false')
        if(now.getDate() <  now.toLocaleString('en-US', options)[2]){
            day = 'Tomorrow'
        }else if(now.getDate() >  now.toLocaleString('en-US', options)[2]){
        day = 'Yesterday'
        }else{
        day = 'Today'
        }

        hour = Number(now.toLocaleString('en-US', options).split(',')[1].trim().split(' ')[0].split(':')[0])
        minute = Number( now.toLocaleString('en-US', options).split(',')[1].trim().split(' ')[0].split(':')[1])
        format = now.toLocaleString('en-US', options).split(',')[1].trim().split(' ')[1]

        store.push(day, value, hour , minute, format, )
    }

    addPlaces.push(store)
    setAddPlaces(addPlaces)
  
} 



    useEffect(()=>{
        const interval = setInterval(()=> {
            setCount(count + 1)
           ;}, 100);
            return ()=> clearInterval(interval);
    },[count])
 console.log(addPlaces)

  return (
    <div className="clock-container">
        <div className="clock-container-nav">
            <div className="clock-container-nav-edit">
              {edit === 'false'   && addPlaces.length > 0 && <div onClick={()=> setEdit('true')}>Edit</div>}
              {edit === 'true' && addPlaces.length > 0 && <div onClick={()=> setEdit('false')}>Delete</div>}
            </div>
            <FaPlus className="clock-container-nav-edit" onClick={()=> setMorePlaces('true')} onMouseLeave={()=> setMorePlaces('false')} />
        </div>
        <div className="contries-Container-parent">
        {morePlaces === 'true' && <div className='contries-Container'>
            {places.sort().map((a, index)=>{
                return(
                         <div id={a} onClick={handelContries} className='contries-Container-contries'>{a}</div>
                )
            })}
         </div>} </div>

        <div className="clock-container-contries">
            <div className="clock-container-worldClock">
                World Clock
            </div>

            <div className="clock-Overflow">
                  <div  >
                
                    <div >
                        {addPlaces.map((a,index)=>{
                            return(
                                <div className="clock-container-card" >
                                    <div className="clock-container-card-first">
                                        <div className="clock-container-card-first-Day">{a[5]} - {a[5]}</div>
                                        <div className="clock-container-card-first-Place">{a[1]}</div>
                                    </div>

                                    <div className="clock-container-card-second" >  
                                            <div className="clock-container-card-second-Time">{a[2] < 10 ? '0'.concat(a[2]): a[2]}:{a[3]< 10 ? '0'.concat(a[3]): a[3]}</div>
                                            <div className="clock-container-card-second-Format">{a[4]}</div> 
                                    </div> 
                                </div>
                            
                            )
                        })}
                    </div>
                
                </div>
            
            </div>
           {addPlaces.length === 0 &&  <div className="clock-Overflow-2" > No World Clocks</div>}
        </div>
    </div>
  )
}

export default Clock