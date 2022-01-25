import React from 'react'
import { useGetMailsQuery } from './api'
import { useSelector } from 'react-redux'
import Card from './Card'
import Body from './Body'
import './App.css'
const App = () => {
  const { data } = useGetMailsQuery()
  const mail = useSelector((state) => state.mail)

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        background: '#f4f5f9',
      }}
    >
      <div style={mail.mailBody ? { width: '30%' } : { width: '100%' }}>
        {data &&
          data.list &&
          data.list.map((item, idx) => <Card key={idx} props={item} />)}
      </div>
      {mail.mailBody !== null && <Body body={mail} width={'75%'} />}
    </div>
  )
}

export default App
