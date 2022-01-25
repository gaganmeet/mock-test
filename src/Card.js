import React from 'react'
import { useLazyGetBodyQuery } from './api'
import { useDispatch } from 'react-redux'
import { setMailBody, setMail } from './mail'

const Card = ({ props }) => {
  const [getBody, { data }] = useLazyGetBodyQuery()
  const [read, setRead] = React.useState()
  React.useEffect(() => {
    
    const read = JSON.parse(localStorage.getItem('read'))
    read ? setRead(read[props.id]) : setRead(false)
  }, [props.id, localStorage.getItem('read')])
  

  const dispatch = useDispatch()
  React.useEffect(() => {
    if (data) {
      dispatch(setMailBody(data))
    }
  }, [data, dispatch])
  return (
    props && (
      <div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            background: ((read) => (read ? '#e5e5e5' : '#fff'))(read),
            justifyItems: 'center',
            borderRadius: '10px',
            width: '80%',
            margin: '20px auto',
            border: '1px solid #cfd2dc',
            padding: '30px',
            cursor: 'pointer',
          }}
          onClick={() => {
            getBody(props.id)
            dispatch(setMail(props))
            const read = JSON.parse(localStorage.getItem('read'))
            if (!read) {
              localStorage.setItem('read', JSON.stringify({ [props.id]: true }))
            } else {
              localStorage.setItem(
                'read',
                JSON.stringify({ ...read, [props.id]: true })
              )
            }
          }}
        >
          <div style={{ display: 'flex' }}>
            <div>
              <span
                style={{
                  background: '#e56065',
                  padding: '10px 15px',
                  display: 'flex',
                  alignItems: 'center',
                  borderRadius: '50%',
                  marginRight: '20px',
                  color: '#fff',
                }}
              >
                {props.from.name.charAt(0)}
              </span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span>
                From:
                <span style={{ fontWeight: 'bold' }}>
                  {props.from.name}
                  {`<${props.from.email}>`}
                </span>
              </span>
              <span>
                Subject:
                <span style={{ fontWeight: 'bold' }}>{props.subject}</span>
              </span>
              <span>{props.short_description}</span>
            </div>
          </div>
        </div>
      </div>
    )
  )
}

export default React.memo(Card)
