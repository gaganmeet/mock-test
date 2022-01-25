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
            margin: 'auto 30px',
            background: '#e54065',
            color: '#fff',
            padding: '15px 20px',
            borderRadius: '50%',
          }}
        >
          {data.mail.from.name.charAt(0)}
        </span>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <h1 style={{ margin: '10px' }}>{data.mail.short_description}</h1>
          <a
            style={{
              display: 'flex',
              borderRadius: '10px',
              width: '20%',
              justifyContent: 'center',
              alignItems: 'center',
              margin: 'auto',
              background: '#e54065',
              color: '#fff',
              fontSize: '14px',
              height: '40%',
              cursor: 'pointer',
            }}
            href
            onClick={() => {
              // add favorite to local storage
              const favorites = JSON.parse(localStorage.getItem('favorites'))
              if (!favorites) {
                localStorage.setItem(
                  'favorites',
                  JSON.stringify({ [data.mail.id]: true })
                )
              } else {
                localStorage.setItem(
                  'favorites',
                  JSON.stringify({
                    ...favorites,
                    [data.mail.id]: true,
                  })
                )
              }
            }}
          >
            Mark as favorite
          </a>
        </div>
      </div>
      <div
        className="email-body"
        dangerouslySetInnerHTML={{ __html: render }}
      />
    </div>
  )
}

export default Body
