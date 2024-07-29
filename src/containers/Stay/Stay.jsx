import React from 'react'
import "./Stay.scss"

const Stay = () => {
  return (
    <div id='stay' className='app__container-bg'>
        <div className="app__stay">
            <h1>Where to Stay</h1>
            <div className='app__stay-info'>
                <p><span>Hotels :</span> Hotels are readily available at Katra within 5 Kms.</p>
                <p>Tariffs start at Rs.1000 onwards.</p>
                <p><span>Dharmshala / Dormitary :</span> Rooms and dormitories are available at locations such as Jammu, Katra, Bhawan, Sanjhichatt, and Ardhkuwari.</p>
                <p>Dormitory accommodation starts from Rs. 150, while 2-bed AC rooms start from Rs. 2000.</p>
                <p>It is advisable to make bookings as early as possible as rooms and dormitories fill up quickly.</p>
                <p>Deposits will also be collected at the time of check-in.</p>
            </div>
        </div>
    </div>
  )
}

export default Stay