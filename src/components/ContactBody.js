import React from 'react'
import { Typography, Divider } from 'antd'
const { Text, Title } = Typography

function ContactBody ({ title, contactdetail, mailId }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center'
      }}
    >
      <Text
        level={4}
        style={{
          fontSize: '20px',
          fontFamily: 'serif',
          color: '#CE8B54',
          fontWeight: '10px !important'
        }}
      >
        {title}
        <span style={{ padding: '9px 9px', color: '#CE8B54' }}>/ </span>
      </Text>
      <Text style={{ fontSize: '20px', fontFamily: 'serif' }}>
        {mailId ? (
          <a target='_blank' href='mailto:kurapatianurag1@gmail.com'>
            {contactdetail}
          </a>
        ) : (
          contactdetail
        )}
      </Text>
    </div>
  )
}

export default ContactBody
