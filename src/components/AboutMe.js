import React from 'react'
import { Typography } from 'antd'
import './about-me.css'
import Qualities from './Qualities'
import { Image } from 'antd'
import photo from '../images/Photo.png'

const { Title, Text } = Typography

function AboutMe () {
  return (
    <>
      <div style={{ paddingRight: '700px', paddingTop: '60px' }}>
        <h4 style={{ color: '#1167b1' }}>
          FULL-STACK DEVELOPER ​| GRADUATE STUDENT{' '}
        </h4>
      </div>
      <div
        style={{
          paddingLeft: '180px',
          paddingRight: '60px',
          paddingTop: '20px'
        }}
      >
        <div className='left-position '>
          <Text className='text-style'>
            Knowledge of undertaking the responsibility in developing the
            quality application by understanding the requirements. Proficient in
            web application development. 2+ years Experience in IT industry in
            application design and development. Experience in different phases
            of software development life cycle(SDLC) including design. Led a
            team with freshers for completion of complex project.
          </Text>
          <div style={{ paddingTop: '30px' }}>
            <Qualities />
          </div>
        </div>
        <div className='right-position'>
          <Image width={300} src={photo} />
        </div>
        {/* <div>
          This div element has position: absolute and is placed 150 pixels to
          the right of the LEFT edge of the containing positioned element.
        </div> */}
      </div>
    </>
  )
}

export default AboutMe
