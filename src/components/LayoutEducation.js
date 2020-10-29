import React, { Children } from 'react'
import { Typography, Image } from 'antd'
import amrita from '../images/amrita.jpg'

const { Title } = Typography

function LayoutEducation ({
  universityname,
  coursedetails,
  imagedetails,
  children
}) {
  return (
    <div style={{ paddingTop: '30px' }} className='layout-css'>
      <Image width={80} src={imagedetails} style={{ paddingBottom: '10px' }} />
      <Title level={2}>{universityname}</Title>
      <Title level={4}>{coursedetails}</Title>
      {children}
    </div>
  )
}

export default LayoutEducation
