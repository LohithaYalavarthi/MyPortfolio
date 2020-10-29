import React from 'react'
import { Typography, Space } from 'antd'
import './about-me.css'

const { Text, Link, Title } = Typography

function MasterDetails ({ title, description }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
      }}
    >
      <h3 style={{ paddingRight: '10px' }} className='master-title'>
        {title}{' '}
      </h3>
      <Text style={{ fontSize: '18px' }}>{description}</Text>
    </div>
  )
}

export default MasterDetails
