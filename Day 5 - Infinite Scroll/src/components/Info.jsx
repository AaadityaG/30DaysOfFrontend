import React from 'react'
import Card from './Card'

const Info = ({cardInfo}) => {
  return (
    cardInfo.map((crr, ind) => {
        return <Card key={ind} myData={crr}/>
    })
  )
}

export default Info
