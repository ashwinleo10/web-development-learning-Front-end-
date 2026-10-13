import React from 'react'
import { useSelector } from 'react-redux'

export default function UserInfo() {
    const data = useSelector((state) => state.user)
  return (
    <div>
        <h1>Username: {data.username} , Balance: {data.balance}</h1>
    </div>
  )
}
