import React from 'react'
import SvgContent from '../../components/SvgContent/SvgContent'
import "./HowToReach.scss";
import svgInfo from './index'

const HowToReact = () => {
  return (
    <div id='howToReach' className='app__container'>
        <div className="app__howToReach-head">
        <h1>How to Reach</h1>
      </div>
      <div className="app__howToReach-info">
        {svgInfo.map((item) => (
          <div key={item.title}>
            <SvgContent
              title={item.title}
              info={item.info}
              image={item.image}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default HowToReact