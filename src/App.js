import React, { useEffect } from 'react'
import { useGetMailsQuery } from './api'
import { useSelector } from 'react-redux'
import Card from './Card'
import Body from './Body'
import './App.css'
const App = () => {
  const { data } = useGetMailsQuery()
  const mail = useSelector((state) => state.mail)
  const [filter, setFilter] = React.useState('')

  const buttonStyle = {
    background: '#e56065',
    padding: '10px 15px',
    display: 'flex',
    alignItems: 'center',
    borderRadius: '5px',
    margin: '10px',
    cursor: 'pointer',
    color: '#fff',
    border: 'none',
    outline: 'none',
  }
  let cardData = false
  if (data)
    switch (filter) {
      case 'favorites':
        const favorite = JSON.parse(localStorage.getItem('favorites'))
        cardData = data.list.map((item) => {
          if (favorite[item.id]) {
            return <Card key={item.id} props={item} />
          }
        })
        break
      case 'read':
        const read = JSON.parse(localStorage.getItem('read'))
        cardData = data.list.map((item) => {
          if (read[item.id]) {
            return <Card key={item.id} props={item} />
          }
        })
        console.log(cardData)

        break
      default:
        cardData = data.list.map((item) => {
          return <Card key={item.id} props={item} />
        })
        break
    }

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'row-reverse' }}>
        <button
          style={buttonStyle}
          onClick={() =>
            setFilter((prev) => (prev === 'favorites' ? '' : 'favorites'))
          }
        >
          Favorite
        </button>
        <button
          style={buttonStyle}
          onClick={() => setFilter((prev) => (prev === 'read' ? '' : 'read'))}
        >
          Read
        </button>
      </div>
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          background: '#f4f5f9',
        }}
      >
        <div style={mail.mailBody ? { width: '30%' } : { width: '100%' }}>
          {cardData}
        </div>
        {mail.mailBody !== null && <Body body={mail} width={'75%'} />}
      </div>
    </>
  )
}

export default App
