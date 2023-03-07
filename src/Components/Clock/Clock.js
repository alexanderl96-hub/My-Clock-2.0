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
  
   
    const options = {timeZone: `${timeZone}`, dateStyle: 'short',  timeStyle: 'full', hourCycle: 'h24', }
    const [edit, setEdit] = useState('false')
    const [morePlaces, setMorePlaces] = useState('false')

    const [count, setCount] = useState(0)

function handelContries(e){
     let store = []
    let day = ''
    let value = e.target.id
    let different = ''
    setGetHoursDiferent(value)
    // if(offset5up.includes(gethoursDiferent)){
    //     setOfft('+0')
    // }
    console.log(now.toLocaleString('en-US', options))
    console.log( value.split(' ').length === 2 ? value.split(' ')[0].concat(`_${value.split(' ')[1].toLowerCase()}`) : value , 'check value')
    if(America.includes(value)){
        setTimeZone(`America/${value}`)
        setMorePlaces('false')

             
        if(now.getDate() <  now.toLocaleString('en-US', options)[2]){
            day = 'Tomorrow'
        }else if(now.getDate() ===  now.toLocaleString('en-US', options)[2]){
        day = 'Yesterday'
        }else{
        day = 'Today'
        }

        let newPlaceHour = now.toLocaleString('en-US', options).split(',')[1].slice(1,3)
        let newPlaceMin = now.toLocaleString('en-US', options).split(',')[1].slice(4,6)
        if(Number(newPlaceHour) === now.getHours() ){
            setGetHoursDiferent('0')
        }

        console.log(newPlaceHour, 'check hour place')
        newPlaceMin =  newPlaceHour > 12 &&  newPlaceHour !== 0 ? ':'+newPlaceMin+'pm' : ':'+newPlaceMin+'am'
        if(Number(newPlaceHour) === 24){
            newPlaceHour = Number(newPlaceHour) - 24
        }else if(Number(newPlaceHour) > 12 && Number(newPlaceHour) < 24){
            newPlaceHour = Number(newPlaceHour) - 12
        }
        

         newPlaceHour = Number(newPlaceHour) < 10 ? '0'.concat(Number(newPlaceHour)) : Number(newPlaceHour)

         if(now.getHours() < newPlaceHour){
            different =  newPlaceHour - now.getHours()  
         }else{
            different = now.getHours() - newPlaceHour
         }

        store.push(day, value, newPlaceHour, newPlaceMin, different)


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
       

        let newPlaceHour = now.toLocaleString('en-US', options).split(',')[1].slice(1,3)
        let newPlaceMin = now.toLocaleString('en-US', options).split(',')[1].slice(4,6)
        console.log(newPlaceHour)

        if(now.getHours() <= (Number(newPlaceHour)-1) &&  day === 'Today'){
            different = `+${ (Number(newPlaceHour)-1) - now.getHours() }`  
         }else if(now.getHours() >= Number(newPlaceHour) &&  day === 'Tomorrow'){
            different = `+${Number(newPlaceHour) + 12}`
         }else if(now.getHours() <= Number(newPlaceHour) &&  day === 'Tomorrow'){
            different  =  `+${(12 - now.getHours()) + (12 - Number(newPlaceHour))}`
         }
         else {
            different = `-${now.getHours() -  (Number(newPlaceHour)-1)}`
         }

        newPlaceMin = Number(newPlaceHour)  > 12 ? ':'+newPlaceMin+'pm' : ':'+newPlaceMin+'am'

        if( Number(newPlaceHour)  >= 12 ){
            newPlaceHour = Number(newPlaceHour) - 12
        }else if( Number(newPlaceHour)  < 12){
            newPlaceHour = Number(newPlaceHour)
        }

         newPlaceHour = Number(newPlaceHour) < 10 ? '0'.concat(Number(newPlaceHour)) : Number(newPlaceHour)

        store.push(day, value, newPlaceHour, newPlaceMin, different)

    }else if(Africa.includes(value)){
        setTimeZone(`Africa/${value}`)
        setMorePlaces('false')

        if(now.getDate() <  now.toLocaleString('en-US', options)[2]){
            day = 'Tomorrow'
        }else if(now.getDate() ===  now.toLocaleString('en-US', options)[2]){
        day = 'Yesterday'
        }else{
        day = 'Today'
        }

        let newPlaceHour = now.toLocaleString('en-US', options).split(',')[1].slice(1,3)
        let newPlaceMin = now.toLocaleString('en-US', options).split(',')[1].slice(4,6)
        if(Number(newPlaceHour) === now.getHours() ){
            setGetHoursDiferent('0')
        }
        
        if(Number(newPlaceHour) === 24){
            newPlaceHour = Number(newPlaceHour) - 24
        }else if(Number(newPlaceHour) > 12 && Number(newPlaceHour) < 24){
            newPlaceHour = Number(newPlaceHour) - 12
        }
         newPlaceMin =  newPlaceHour > 12 ? ':'+newPlaceMin+'pm' : ':'+newPlaceMin+'am'

         newPlaceHour = Number(newPlaceHour) < 10 ? '0'.concat(Number(newPlaceHour)) : Number(newPlaceHour)

         if(now.getHours() < newPlaceHour){
            different =  newPlaceHour - now.getHours()  
         }else{
            different = now.getHours() - newPlaceHour
         }

        store.push(day, value, newPlaceHour, newPlaceMin, different)
    }else if(Australia.includes(value)){
        setTimeZone(`Australia/${value}`)
        setMorePlaces('false')
        if(now.getDate() <  now.toLocaleString('en-US', options)[2]){
            day = 'Tomorrow'
        }else if(now.getDate() ===  now.toLocaleString('en-US', options)[2]){
        day = 'Yesterday'
        }else{
        day = 'Today'
        }

        let newPlaceHour = now.toLocaleString('en-US', options).split(',')[1].slice(1,3)
        let newPlaceMin = now.toLocaleString('en-US', options).split(',')[1].slice(4,6)
        if(Number(newPlaceHour) === now.getHours() ){
            setGetHoursDiferent('0')
        }
        
        if(Number(newPlaceHour) === 24){
            newPlaceHour = Number(newPlaceHour) - 24
        }else if(Number(newPlaceHour) > 12 && Number(newPlaceHour) < 24){
            newPlaceHour = Number(newPlaceHour) - 12
        }
         newPlaceMin =  newPlaceHour > 12 ? ':'+newPlaceMin+'pm' : ':'+newPlaceMin+'am'

         newPlaceHour = Number(newPlaceHour) < 10 ? '0'.concat(Number(newPlaceHour)) : Number(newPlaceHour)

         if(now.getHours() < newPlaceHour){
            different =  newPlaceHour - now.getHours()  
         }else{
            different = now.getHours() - newPlaceHour
         }

        store.push(day, value, newPlaceHour, newPlaceMin, different)
    }else if(Europe.includes(value)){
        setTimeZone(`Europe/${value}`)
        setMorePlaces('false')
        if(now.getDate() <  now.toLocaleString('en-US', options)[2]){
            day = 'Tomorrow'
        }else if(now.getDate() ===  now.toLocaleString('en-US', options)[2]){
        day = 'Yesterday'
        }else{
        day = 'Today'
        }

        let newPlaceHour = now.toLocaleString('en-US', options).split(',')[1].slice(1,3)
        let newPlaceMin = now.toLocaleString('en-US', options).split(',')[1].slice(4,6)
        if(Number(newPlaceHour) === now.getHours() ){
            setGetHoursDiferent('0')
        }
        console.log(newPlaceHour, 'check hour place')
        newPlaceMin =  newPlaceHour > 12 && newPlaceHour < 24 ? ':'+newPlaceMin+'pm' : ':'+newPlaceMin+'am'

        if(Number(newPlaceHour) === 24){
            newPlaceHour = Number(newPlaceHour) - 24
        }else if(Number(newPlaceHour) > 12 && Number(newPlaceHour) < 24){
            newPlaceHour = Number(newPlaceHour) - 12
        }
        

         newPlaceHour = Number(newPlaceHour) < 10 ? '0'.concat(Number(newPlaceHour)) : Number(newPlaceHour)

         if(now.getHours() < newPlaceHour){
            different =  newPlaceHour - now.getHours()  
         }else{
            different = now.getHours() - newPlaceHour
         }

        store.push(day, value, newPlaceHour, newPlaceMin, different)
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


  return (
    <div className="clock-container">
        <div className="clock-container-nav">
            <div className="clock-container-nav-edit">
              {edit === 'false' && <div onClick={()=> setEdit('true')}>Edit</div>}
              {edit === 'true' && <div onClick={()=> setEdit('false')}>Delete</div>}
            </div>
            <FaPlus className="clock-container-nav-edit" onClick={()=> setMorePlaces('true')} />
        </div>
        <div className="contries-Container-parent">
        {morePlaces === 'true' && <div className='contries-Container'>
            {places.map((a, index)=>{
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
                                     <div className="clock-container-card-first-Day">{a[0]}, {a[4]}HRS </div>
                                     <div className="clock-container-card-first-Place">{a[1]}</div>
                                </div>

                                <div className="clock-container-card-second" >  
                                        <div className="clock-container-card-second-Time">{a[2]}</div>
                                        <div className="clock-container-card-second-Time2">{a[3].slice(0,-2)}</div> 
                                     {a[3].slice(-2) === 'pm'  &&  <div className="clock-container-card-second-Format">PM</div>}
                                     {a[3].slice(-2) === 'am' &&  <div className="clock-container-card-second-Format">AM</div>}
                                </div> 
                            </div>
                         
                        )
                    })}
             </div>
           </div>
          
            </div>
        </div>
    </div>
  )
}

export default Clock