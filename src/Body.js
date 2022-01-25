import React from 'react'
import { useSelector } from 'react-redux'

const Body = ({ body, width }) => {
  const render = body?.mailBody?.body
  const data = useSelector((state) => state.mail)
  return (
    <div
      style={{
        width: width,
        background: '#fff',
        padding: '20px 100px',
        color: '#636363',
        margin: '10px auto',
        border: '1px solid #cfd2dc',
        borderRadius: '10px',
      }}
    >
      <div style={{ display: 'flex' }}>
        <span
          style={{
            margin: 'auto',
            background: '#e54065',
            color: '#fff',
            padding: '15px 20px',
            borderRadius: '100%',
          }}
        >
          {data.mail.from.name.charAt(0)}
        </span>

        <h1 style={{ margin: '10px auto' }}>{data.mail.short_description}</h1>
      </div>
      <div className='email-body' dangerouslySetInnerHTML={{ __html: render }} />
    </div>
  )
}

export default Body
