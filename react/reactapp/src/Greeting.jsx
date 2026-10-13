import React from 'react'

export default function Greeting(props) {
  return (
    <div>
      <h2>Hello, I am {props.name}!</h2>
      <p>I am {props.age} years old.</p>
      <p>My favorite color is {props.favcolor}.</p>
    </div>
  )
}
