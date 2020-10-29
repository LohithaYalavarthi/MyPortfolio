import React from 'react'
import { Layout, Menu, Breadcrumb, Typography, PageHeader } from 'antd'

const { Text, Title } = Typography

function HeaderTitle ({ name, subname }) {
  return (
    <div style={{ backgroundColor: '#A7A493', padding: '100px' }}>
      <Title
        style={{ color: '#1167b1	', fontFamily: 'sans-serif', fontSize: '36px' }}
      >
        {name}
      </Title>
      {subname && (
        <Title level={3} style={{ fontFamily: 'serif' }}>
          {subname}
        </Title>
      )}
    </div>
  )
}

export default HeaderTitle
