import React from 'react'
import { useLazyGetBodyQuery } from './api'
import { useDispatch } from 'react-redux'
import { setMailBody, setMail } from './mail'

const Card = ({ props }) => {
  const [getBody, { data }] = useLazyGetBodyQuery()

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
            background: '#fff',
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
          }}
        >
          <div style={{ display: 'flex' }}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <span
                style={{
                  background: '#e56065',
                  width: '100%',
                  padding: '10px 20px',
                  display: 'flex',
                  alignItems: 'center',
                  borderRadius: '100%',
                  marginRight: '20px',
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

export default Card
